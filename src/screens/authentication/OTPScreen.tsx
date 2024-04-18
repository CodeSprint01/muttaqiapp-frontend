import {
  StyleSheet,
  View,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import {COLORS, fonts} from '../../styles/color';
import AppText from '../../components/atoms/app-text/AppText';
import AppButton from '../../components/molecules/app-button/AppButton';
import {useNavigation} from '@react-navigation/native';
import AppInput from '../../components/molecules/app-input/AppInput';
import {screens} from '../../types/types';
import {
  handleOtpVerify,
  handleSendOtpEmail,
  schemaMutation,
} from '../../services/api';
import {SEND_EMAIL_OTP, VERIFY_OTP} from '../../services/graphQL';
import AppLoader from '../../components/atoms/loader/AppLoader';

const OTPScreen = ({route}) => {
  const userEmail = route.params.email;
  const [OTP, setOTP] = useState('');
  const [timer, setTimer] = useState(30);
  const [isVisible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const handleInputChange = (val: string) => {
    setOTP(val);
  };
  const [otpVerifyMutation] = schemaMutation(VERIFY_OTP);
  const [forgotPasswordMutation] = schemaMutation(SEND_EMAIL_OTP);

  useEffect(() => {
    const timerFun = () => {
      if (timer > 0) {
        setTimer(prevTimer => prevTimer - 1); // Decrement timer by 1 second
      } else {
        setVisible(false);
      }
    };

    const interval = setInterval(timerFun, 1000);
    return () => clearInterval(interval);
  }, [timer]);
  const didSubmitPress = async () => {
    try {
      setLoading(true);
      const data = await handleOtpVerify(otpVerifyMutation, OTP);
      if (data?.data?.verifyOtp) {
        navigation.navigate(screens.NEW_PASSWORD, {otp: OTP});
      } else {
        Alert.alert(
          'Alert',
          'something went wrong please try again in few seconds',
        );
      }
      setLoading(false);
    } catch (error: any) {
      if (error) setLoading(false);
      return Alert.alert('Alert', error?.message);
    }
  };
  const onPressResend = async () => {
    if (timer == 0) {
      setTimer(30);
      setVisible(true);
    }
    try {
      setLoading(true);
      const data = await handleSendOtpEmail(forgotPasswordMutation, userEmail);
      if (data?.forgotPassword) {
        setLoading(false);
        Alert.alert('Sucess', 'Please check you email');
      } else {
        Alert.alert('Alert', 'User not exist,please check your email address');
      }
      setLoading(false);
    } catch (error: any) {
      if (error) setLoading(false);
      return Alert.alert('Alert', error);
    }
  };
  return (
    <AppContainer style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.iconContainer}>
          <View style={styles.logo}>
            <AppText text={'LOGO'} style={styles.logoTxt} />
          </View>
        </View>
        <View style={styles.textInputContainer}>
          <View style={styles.inputContainer}>
            <AppText text={'Verify your e-mail'} style={styles.signupTxt} />
            <AppText
              text={'We have sent you a one time code to your e-mail'}
              style={styles.descriptionTxt}
            />
            <View style={styles.inputEmail}>
              <AppInput
                inputLabel={'Verification Code'}
                placeholder={'Enter code'}
                handleInputChange={val => handleInputChange(val)}
                inputValue={OTP}
              />
            </View>
            <AppLoader isVisible={loading} />
            <TouchableOpacity
              style={styles.bottomtxt}
              disabled={isVisible}
              onPress={onPressResend}>
              <AppText
                text={'Did not received a code? '}
                style={styles.alreadyTxt}
              />
              <AppText text={' Resend'} style={styles.login} />
            </TouchableOpacity>
            <View style={styles.otpTimer}>
              <AppText style={styles.timerRem} text={'Time Remaining:'} />
              <AppText style={styles.timerTxt} text={`   ${timer}s`} />
            </View>
          </View>
        </View>
        <View style={styles.bottomBtns}>
          <AppButton buttonText="Submit" onPress={didSubmitPress} />
        </View>
      </KeyboardAvoidingView>
    </AppContainer>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.pale_mint,
  },
  iconContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 147,
    height: 34,
    backgroundColor: COLORS.tertiary,
    justifyContent: 'center',
  },
  logoTxt: {
    fontSize: 16,
    color: COLORS.black,
    fontFamily: fonts.dmSans[700],
    textAlign: 'center',
    alignSelf: 'center',
  },
  textInputContainer: {
    flex: 6.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '90%',
    backgroundColor: COLORS.light_Powder_Blue,
    height: '90%',
    borderRadius: 38,
    paddingHorizontal: 20,
    elevation: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(111, 140, 176)',
        shadowOffset: {width: 20, height: 20},
        shadowOpacity: 0.2,
        shadowRadius: 40,
      },
    }),
  },
  signupTxt: {
    color: COLORS.green,
    fontSize: 24,
    fontFamily: fonts.dmSans[500],
    paddingTop: 15,
    textAlign: 'center',
  },
  descriptionTxt: {
    fontSize: 16,
    color: COLORS.medium_gray,
    textAlign: 'center',
    fontFamily: fonts.dmSans[400],
    marginTop: 8,
  },
  inputEmail: {
    marginTop: 30,
  },
  bottomtxt: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingTop: 8,
  },
  alreadyTxt: {
    fontSize: 14,
    fontFamily: fonts.dmSans[400],
    color: COLORS.medium_gray,
  },
  bottomBtns: {
    flex: 1,
    marginHorizontal: 20,
  },
  login: {
    fontSize: 14,
    fontFamily: fonts.dmSans[500],
    color: COLORS.green,
    textDecorationLine: 'underline',
  },
  otpTimer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  timerRem: {
    fontFamily: fonts.dmSans[500],
    fontSize: 16,
    color: COLORS.light_gray,
  },
  timerTxt: {
    fontFamily: fonts.dmSans[500],
    fontSize: 16,
    color: COLORS.dark_gray,
  },
  forTxt: {
    fontSize: 10,
    color: COLORS.dark_gray,
    fontFamily: fonts.dmSans[400],
  },
});
