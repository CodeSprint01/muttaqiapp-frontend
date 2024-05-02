import {Alert} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SEND_EMAIL_OTP} from '../../../services/graphQL';
import {handleSendOtpEmail, schemaMutation} from '../../../services/api';
import {screens} from '../../../types/types';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import SendEmailOtp from '../../../components/organisums/authentication/SendEmailOtp';

const ForgotVaultPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  console.log(email);
  const navigation = useNavigation();
  const [forgotPasswordMutation] = schemaMutation(SEND_EMAIL_OTP);

  const onPressSendOtp = async () => {
    navigation.navigate(screens.VAULT_OTP_VERIFY);
    // try {
    //   setLoading(true);
    //   const data = await handleSendOtpEmail(forgotPasswordMutation, email);
    //   if (data?.forgotPassword) {
    //     navigation.navigate(screens.OTP_SCREEN, {email: email});
    //   } else {
    //     Alert.alert('Alert', 'User not exist,please check your email address');
    //   }
    //   setLoading(false);
    // } catch (error: any) {
    //   if (error) setLoading(false);
    //   return Alert.alert('Alert', error);
    // }
  };

  return (
    <AppContainer>
      <SendEmailOtp
        label="Forgot vault password"
        buttonText="Send OTP"
        handleInputChange={val => setEmail(val)}
        inputValue={email}
        loading={loading}
        onPressEmailButton={onPressSendOtp}
      />
    </AppContainer>
  );
};

export default ForgotVaultPassword;
