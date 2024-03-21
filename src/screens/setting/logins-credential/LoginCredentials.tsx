import {Alert, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppInput from '../../../components/molecules/app-input/AppInput';
import AppButton from '../../../components/molecules/app-button/AppButton';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  actionUserLoginsCredentialsDelete,
  actionUserLoginsCredentialsUpdate,
} from '../../../redux/setting/action';

const LoginCredentials = ({route}) => {
  const credentail = route?.params?.data;
  const dataInitialState = {
    id: credentail?.id,
    email: credentail?.email,
    password: credentail?.password,
  };
  const [userData, setuserData] = useState(dataInitialState);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const emailChanged = userData.email !== credentail?.email;
  const passwordChanged = userData.password !== credentail?.password;
  const isChanged = emailChanged || passwordChanged;
  const isValidate = Object.values(userData).some(val => val === '');

  // change credential
  const onChangeText = (key: number, txt: string) => {
    if (key === 1) {
      setuserData(preVal => ({...preVal, email: txt}));
    } else {
      setuserData(preVal => ({...preVal, password: txt}));
    }
  };

  // button aactions
  const updateCredentail = () => {
    if (!isValidate) {
      dispatch(actionUserLoginsCredentialsUpdate(userData));
      Alert.alert('Updated sucessfully');
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

  return (
    <AppContainer>
      <ScreenHeader headerText={credentail?.title} extraStyle={styles.header} />
      <View style={styles.container}>
        <AppInput
          placeholder="Enter Username/email"
          inputLabel="username/email"
          handleInputChange={(txt: string) => onChangeText(1, txt)}
          inputValue={userData?.email}
        />
        <View style={styles.inputPass}>
          <AppInput
            placeholder="Enter password"
            inputLabel="Password"
            handleInputChange={(txt: string) => onChangeText(2, txt)}
            inputValue={userData?.password}
          />
        </View>
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
});
