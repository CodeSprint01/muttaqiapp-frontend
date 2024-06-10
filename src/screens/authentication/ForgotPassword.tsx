import {Alert} from 'react-native';
import React, {FC, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {handleSendOtpEmail, schemaMutation} from '../../services/api';
import {SEND_EMAIL_OTP} from '../../services/graphQL';
import {RootStackParamList, screens} from '../../types/types';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import SendEmailOtp from '../../components/organisums/authentication/SendEmailOtp';
import {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamList, screens.FORGOT_PASSWORD>;

const ForgotPassword: FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  console.log(email);
  const [forgotPasswordMutation] = schemaMutation(SEND_EMAIL_OTP);

  const handlePressSendOTP = async () => {
    try {
      setLoading(true);
      const response = await handleSendOtpEmail(forgotPasswordMutation, email);
      const {message, statusCode, success} = response.forgotPassword;
      if (success) {
        Alert.alert('Success', message);
        navigation.navigate(screens.OTP_SCREEN, {email: email});
      } else {
        Alert.alert('Alert', message);
      }
      setLoading(false);
    } catch (error: any) {
      if (error) setLoading(false);
      return Alert.alert('Alert', 'error while sending otp');
    }
  };

  return (
    <AppContainer>
      <SendEmailOtp
        loading={loading}
        inputValue={email}
        buttonText="Send OTP"
        label="Forgot password"
        onPressEmailButton={handlePressSendOTP}
        handleInputChange={val => setEmail(val)}
      />
    </AppContainer>
  );
};

export default ForgotPassword;
