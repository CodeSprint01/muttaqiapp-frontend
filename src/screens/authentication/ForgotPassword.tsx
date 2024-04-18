import {
  StyleSheet,
  View,
  Platform,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import {COLORS, fonts} from '../../styles/color';
import AppText from '../../components/atoms/app-text/AppText';
import AppButton from '../../components/molecules/app-button/AppButton';
import {useNavigation} from '@react-navigation/native';
import AppInput from '../../components/molecules/app-input/AppInput';
import {screens} from '../../types/types';
import {handleSendOtpEmail, schemaMutation} from '../../services/api';
import {SEND_EMAIL_OTP} from '../../services/graphQL';
import AppLoader from '../../components/atoms/loader/AppLoader';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [forgotPasswordMutation] = schemaMutation(SEND_EMAIL_OTP);

  const navigation = useNavigation();
  const handleInputChange = (val: string) => {
    setEmail(val);
  };
  const didLoginPress = async () => {
    try {
      setLoading(true);
      const data = await handleSendOtpEmail(forgotPasswordMutation, email);
      if (data?.forgotPassword) {
        navigation.navigate(screens.OTP_SCREEN, {email: email});
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
            <AppText text={'Forgot Password'} style={styles.signupTxt} />
            <View style={styles.inputEmail}>
              <AppInput
                inputLabel={'Email'}
                placeholder={'Enter email Address'}
                handleInputChange={val => handleInputChange(val)}
                inputValue={email}
              />
            </View>
          </View>
          <AppLoader isVisible={loading} />
        </View>
        <View style={styles.bottomBtns}>
          <AppButton buttonText="Send OTP" onPress={didLoginPress} />
        </View>
      </KeyboardAvoidingView>
    </AppContainer>
  );
};

export default ForgotPassword;

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
  },
  inputEmail: {
    marginTop: 30,
  },
  modalSty: {
    paddingVertical: 100,
  },
  bottomBtns: {
    flex: 1,
    marginHorizontal: 20,
  },
  forTxt: {
    fontSize: 10,
    color: COLORS.dark_gray,
    fontFamily: fonts.dmSans[400],
  },
});
