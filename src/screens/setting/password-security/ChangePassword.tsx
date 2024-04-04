import {Alert, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppInput from '../../../components/molecules/app-input/AppInput';
import AppButton from '../../../components/molecules/app-button/AppButton';
import {Icons} from '../../../utils/helper/svg';
import {changePassword, schhemaMutation} from '../../../services/api';
import {CHANGE_PASSWORD} from '../../../services/graphQL';
import {useSelector} from 'react-redux';
import {State} from '../../../types/types';

const ChangePassword = () => {
  const initialState = {
    currentPass: '',
    newPass: '',
    retypePass: '',
  };
  const [passwordData, setPasswordData] = useState(initialState);
  const [isShowPass, setIsShowPass] = useState({
    currentPass: false,
    newPass: false,
    retypePass: false,
  });
  const [changePasswordMutation] = schhemaMutation(CHANGE_PASSWORD);

  const userInfo = useSelector((state: State) => state?.userReducer?.userInfo);
  const token = userInfo?.token;
  const onChangeText = (key: string, val: string) => {
    setPasswordData(preState => ({...preState, [key]: val}));
  };
  const onPressShowPass = (key: string) => {
    console.log(key, 'kkkkkkk');
    setIsShowPass(preState => ({...preState, [key]: !preState[key]}));
  };
  const onPressCancel = () => {
    setPasswordData(initialState);
  };
  const onPressConfirm = async () => {
    if (passwordData.newPass !== passwordData.retypePass) {
      Alert.alert('Alert', 'New password and retype password not matched');
      return;
    }
    try {
      const response = await changePassword(
        changePasswordMutation,
        passwordData,
        token,
      );
      if (response) {
        Alert.alert('Success', 'Password changed successfully');
      } else {
        Alert.alert('Error', 'Failed to change password');
      }
    } catch (error) {
      Alert.alert('Error', error.graphQLErrors[0].message);
    }
  };

  return (
    <AppContainer style={styles.container}>
      <ScreenHeader headerText="Change password" extraStyle={styles.header} />
      <View style={styles.container}>
        <View style={styles.inputs}>
          <AppInput
            inputLabel="Current password"
            placeholder="Enter current password"
            handleInputChange={txt => onChangeText('currentPass', txt)}
            inputValue={passwordData.currentPass}
            rightIconSecond={
              isShowPass.currentPass ? Icons.EyeSlash : Icons.Eye
            }
            onPressRightIconSecond={() => onPressShowPass('currentPass')}
            secureTextEntry={isShowPass.currentPass}
          />
          <AppInput
            inputLabel="New password"
            placeholder="Enter new Password"
            handleInputChange={txt => onChangeText('newPass', txt)}
            inputValue={passwordData.newPass}
            rightIconSecond={isShowPass.newPass ? Icons.EyeSlash : Icons.Eye}
            onPressRightIconSecond={() => onPressShowPass('newPass')}
            secureTextEntry={isShowPass.newPass}
          />
          <AppInput
            inputLabel="Retype new password"
            placeholder="Enter Retype new password"
            handleInputChange={txt => onChangeText('retypePass', txt)}
            inputValue={passwordData.retypePass}
            rightIconSecond={isShowPass.retypePass ? Icons.EyeSlash : Icons.Eye}
            onPressRightIconSecond={() => onPressShowPass('retypePass')}
            secureTextEntry={isShowPass.retypePass}
          />
        </View>

        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <AppButton
              fill={false}
              buttonText={'Cancel'}
              onPress={onPressCancel}
            />
          </View>
          <View style={styles.btn}>
            <AppButton buttonText={'Confirm'} onPress={onPressConfirm} />
          </View>
        </View>
      </View>
    </AppContainer>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 10,
    flex: 1,
  },
  inputs: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  btnContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  btn: {
    width: '45%',
  },
});
