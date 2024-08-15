import {Alert, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppInput from '../../../components/molecules/app-input/AppInput';
import AppButton from '../../../components/molecules/app-button/AppButton';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  actionUserLoginsCredentialsCreate,
  actionUserLoginsCredentialsDelete,
  actionUserLoginsCredentialsUpdate,
} from '../../../redux/setting/action';

const LoginCredentials = ({route}) => {
  const credentail = route?.params?.data;
  const dataInitialState = {
    title: route?.params?.data ? credentail.title : '',
    id: route?.params?.data ? credentail?.id : '',
    email: route?.params?.data ? credentail?.email : '',
    password: route?.params?.data ? credentail?.password : '',
  };
  const [userData, setuserData] = useState(dataInitialState);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const emailChanged = userData.email !== credentail?.email;
  const titleChanged = userData.title !== credentail?.title;
  const passwordChanged = userData.password !== credentail?.password;
  const isChanged = emailChanged || passwordChanged || titleChanged;
  const userDataForValidation = {...userData};
  if (!route?.params?.data) {
    delete userDataForValidation.id;
  }

  const isValidate = Object.values(userDataForValidation).some(
    val => val === '',
  );

  // change credential
  const onChangeText = (txt: string, key: string) => {
    setuserData(prevState => ({
      ...prevState,
      [key]: txt,
    }));
  };

  // button aactions
  const updateCredentail = () => {
    if (!isValidate) {
      dispatch(actionUserLoginsCredentialsUpdate(userData));
      Alert.alert('Success', 'Updated successfully', [
        {
          text: 'ok',
          onPress: () => {
            navigation.goBack();
          },
        },
      ]);
    } else {
      Alert.alert('Form Error', 'Please fill all the fields');
    }
  };
  const didCancelOrDelete = () => {
    if (isChanged) {
      setuserData(dataInitialState);
    } else {
      Alert.alert('Alert', 'Are you sure you want to delete this', [
        {
          text: 'Delete',
          onPress: () => {
            dispatch(actionUserLoginsCredentialsDelete(credentail?.id)),
              navigation.goBack();
          },
        },
        {
          text: 'Cancel',
        },
      ]);
    }
  };

  const createCredentail = () => {
    dispatch(actionUserLoginsCredentialsCreate(userData));
    setuserData(dataInitialState);
    navigation.goBack();
  };

  return (
    <AppContainer>
      <ScreenHeader headerText={credentail?.title} extraStyle={styles.header} />
      <View style={styles.container}>
        <AppInput
          placeholder="Enter title"
          inputLabel="Title"
          handleInputChange={(txt: string) => onChangeText(txt, 'title')}
          inputValue={userData?.title}
        />
        <AppInput
          placeholder="Enter Username/email"
          inputLabel="Username/Email"
          handleInputChange={(txt: string) => onChangeText(txt, 'email')}
          inputValue={userData?.email}
        />
        <View style={styles.inputPass}>
          <AppInput
            placeholder="Enter password"
            inputLabel="Password"
            handleInputChange={(txt: string) => onChangeText(txt, 'password')}
            inputValue={userData?.password}
          />
        </View>
        {route?.params?.data ? (
          <View style={styles.buttons}>
            <View style={styles.btn}>
              <AppButton
                fill={false}
                buttonText={isChanged ? 'Cancel' : 'Delete'}
                onPress={didCancelOrDelete}
              />
            </View>
            <View style={styles.btn}>
              <AppButton
                buttonText={'Update'}
                onPress={updateCredentail}
                isEnable={!isChanged}
              />
            </View>
          </View>
        ) : (
          <View style={styles.saveBtn}>
            <AppButton
              buttonText={'Save'}
              onPress={createCredentail}
              isEnable={isValidate}
            />
          </View>
        )}
      </View>
    </AppContainer>
  );
};

export default LoginCredentials;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 27,
  },
  inputPass: {
    marginTop: 12,
  },
  btnContainer: {
    flexDirection: 'row',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  btn: {
    width: '45%',
  },
  saveBtn: {
    width: '45%',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
});
