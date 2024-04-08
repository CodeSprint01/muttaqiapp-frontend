import {
  StyleSheet,
  View,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import {COLORS, fonts} from '../../styles/color';
import AppText from '../../components/atoms/app-text/AppText';
import AppButton from '../../components/molecules/app-button/AppButton';
import {useNavigation} from '@react-navigation/native';
import AppInput from '../../components/molecules/app-input/AppInput';
import {screens} from '../../types/types';

const OTPScreen = () => {
  const [OTP, setOTP] = useState('');
  const navigation = useNavigation();
  const handleInputChange = (val: string) => {
    setOTP(val);
  };

  const didSubmitPress = () => {
    navigation.navigate(screens.NEW_PASSWORD);
  };
  const onPressResend = () => {
    console.log('resend');
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
            <TouchableOpacity style={styles.bottomtxt} onPress={onPressResend}>
              <AppText
                text={'Did not received a code? '}
                style={styles.alreadyTxt}
              />
              <AppText
                // onPress={() => navigation.navigate(screens.NEW_PASSWORD)}
                text={' Resend'}
                style={styles.login}
              />
            </TouchableOpacity>
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
  forTxt: {
    fontSize: 10,
    color: COLORS.dark_gray,
    fontFamily: fonts.dmSans[400],
  },
});
