import {Alert, StyleSheet, View} from 'react-native';
import React, {FC, useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppText from '../../../components/atoms/app-text/AppText';
import {COLORS, fonts} from '../../../styles/color';
import AppInput from '../../../components/molecules/app-input/AppInput';
import AppButton from '../../../components/molecules/app-button/AppButton';
import {handleCreateVault, schemaMutation} from '../../../services/api';
import {CREATE_VALUT} from '../../../services/graphQL';
import {useSelector} from 'react-redux';
import {
  ErrorMessage,
  RootStackParamList,
  State,
  screens,
} from '../../../types/types';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamList, screens.CREATE_NEW_VAULT>;

const CreateNewVault: FC<Props> = ({navigation}) => {
  const initialState = {
    password: '',
    confPassword: '',
  };
  const [passwords, setPasswords] = useState(initialState);
  const [createUserVault] = schemaMutation(CREATE_VALUT);
  const {userInfo} = useSelector((state: State) => state?.userReducer);
  const validator = passwords.password == '' || passwords?.confPassword == '';
  const isEqual = passwords.password === passwords?.confPassword;

  const onChangeInput = (key: string, val: string) => {
    setPasswords(preVal => ({...preVal, [key]: val}));
  };

  const handlePressCreateVault = async () => {
    if (!validator) {
      if (!isEqual) {
        return Alert.alert(
          'Alert',
          'Password and confirm password not matched',
        );
      }
      try {
        const response = await handleCreateVault(
          createUserVault,
          passwords?.password,
          userInfo?.userID,
        );
        setPasswords(initialState);
        const {message, statusCode, success} = response?.data?.createVault;
        if (statusCode === 200) {
          navigation.goBack();
          // navigation.dispatch(
          //   CommonActions.reset({
          //     index: 1,
          //     routes: [{name: screens.TAB_NAVIGATOR}],
          //   }),
          // );
        } else {
          Alert.alert(message);
        }
      } catch (error) {
        Alert.alert((error as ErrorMessage).message);
        console.log(error, 'erro from creating vault');
      }
    } else {
      Alert.alert('Alert', 'Please fill all the fields');
    }
  };
  const onPressCancel = () => setPasswords(initialState);

  return (
    <AppContainer>
      <ScreenHeader headerText="Create new vault" extraStyle={styles.header} />
      <View style={styles.container}>
        <AppText text={'Set up your vault password'} style={styles.title} />
        <View style={styles.inputs}>
          <AppInput
            inputLabel="Password"
            placeholder="Set your vault pasword"
            inputValue={passwords?.password}
            handleInputChange={val => onChangeInput('password', val)}
          />
          <View style={styles.confPass}>
            <AppInput
              inputLabel="Confirm password"
              placeholder="Set your vault confirm pasword"
              inputValue={passwords?.confPassword}
              handleInputChange={val => onChangeInput('confPassword', val)}
            />
          </View>
        </View>
        <View style={styles.buttons}>
          <View style={styles.btn}>
            <AppButton
              buttonText="Clear"
              fill={false}
              onPress={onPressCancel}
            />
          </View>
          <View style={styles.btn}>
            <AppButton buttonText="Ok" onPress={handlePressCreateVault} />
          </View>
        </View>
      </View>
    </AppContainer>
  );
};

export default CreateNewVault;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  header: {
    paddingHorizontal: 13,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.dmSans[600],
    color: COLORS.green,
    textAlign: 'center',
    marginTop: 10,
  },
  inputs: {
    marginTop: 30,
  },
  confPass: {
    marginTop: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  btn: {
    width: '46%',
  },
});
