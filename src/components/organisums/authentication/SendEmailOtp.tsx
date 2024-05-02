import {StyleSheet, View, Platform, KeyboardAvoidingView} from 'react-native';
import React, {FC} from 'react';
import AppContainer from '../../atoms/app-container/AppContainer';
import AppText from '../../atoms/app-text/AppText';
import AppInput from '../../molecules/app-input/AppInput';
import AppLoader from '../../atoms/loader/AppLoader';
import AppButton from '../../molecules/app-button/AppButton';
// import {handleSendOtpEmail, schemaMutation} from '../../../services/api';
// import {SEND_EMAIL_OTP} from '../../../services/graphQL';
// import {useNavigation} from '@react-navigation/native';
// import {screens} from '../../../types/types';
import {COLORS, fonts} from '../../../styles/color';

interface EmailProps {
  buttonText: string;
  onPressEmailButton: () => void;
  handleInputChange: (val: string) => void;
  inputValue: string;
  loading: boolean;
  label: string;
}

const SendEmailOtp: FC<EmailProps> = ({
  label,
  buttonText,
  onPressEmailButton,
  handleInputChange,
  inputValue,
  loading,
}) => {
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
            <AppText text={label} style={styles.signupTxt} />
            <View style={styles.inputEmail}>
              <AppInput
                inputLabel={'Email'}
                placeholder={'Enter email Address'}
                handleInputChange={val => handleInputChange(val)}
                inputValue={inputValue}
              />
            </View>
          </View>
          <AppLoader isVisible={loading} />
        </View>
        <View style={styles.bottomBtns}>
          <AppButton buttonText={buttonText} onPress={onPressEmailButton} />
        </View>
      </KeyboardAvoidingView>
    </AppContainer>
  );
};

export default SendEmailOtp;

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
