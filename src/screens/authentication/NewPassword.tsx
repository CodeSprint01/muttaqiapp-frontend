import {StyleSheet, View, Platform, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import {COLORS, fonts} from '../../styles/color';
import AppText from '../../components/atoms/app-text/AppText';
import AppButton from '../../components/molecules/app-button/AppButton';
import AppInput from '../../components/molecules/app-input/AppInput';

const NewPassword = () => {
  const [userData, setUserData] = useState({
    password: '',
    conPassword: '',
  });

  const handleInputChange = (key: string, val: string) => {
    setUserData(preVal => ({...preVal, [key]: val}));
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
            <AppText text={'Set New Password'} style={styles.signupTxt} />
            <View style={styles.inputs}>
              <AppInput
                inputLabel={'New Password'}
                placeholder={'Enter new Password'}
                handleInputChange={val => handleInputChange('password', val)}
                inputValue={userData.password}
              />
            </View>
            <View style={styles.inputs}>
              <AppInput
                inputLabel={'Confirm Password'}
                placeholder={'Enter confirm Password'}
                handleInputChange={val => handleInputChange('conPassword', val)}
                inputValue={userData.conPassword}
              />
            </View>
          </View>
        </View>
        <View style={styles.bottomBtns}>
          <AppButton
            buttonText="Submit"
            //   onPress={didLoginPress}
          />
        </View>
      </KeyboardAvoidingView>
    </AppContainer>
  );
};

export default NewPassword;

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

  inputs: {
    marginTop: 10,
  },
  signupTxt: {
    color: COLORS.green,
    fontSize: 24,
    fontFamily: fonts.dmSans[500],
    paddingTop: 15,
  },
  bottomBtns: {
    flex: 1,
    marginHorizontal: 20,
  },
});
