import {
  FlatList,
  StyleSheet,
  View,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import {COLORS, fonts} from '../../styles/color';
import AppText from '../../components/atoms/app-text/AppText';
import {SignUpArray} from '../../utils/mocks/textInputs/TextInputs';
import {InputSignUp, screens} from '../../types/types';
import AppInput from '../../components/molecules/app-input/AppInput';
import AppButton from '../../components/molecules/app-button/AppButton';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const [userData, setUserData] = useState<{[key: string]: string}>({
    name: '',
    email: '',
    password: '',
    confPassowrd: '',
  });
  const navigation = useNavigation();

  const handleInputChange = (val: string, key: string) => {
    setUserData(prev => ({...prev, [key]: val}));
  };

  const renderItem = ({item, index}: {item: InputSignUp; index: any}) => {
    return (
      <View style={styles.inputTextSty}>
        <AppInput
          inputLabel={item.inputLabel}
          placeholder={item.placeholder}
          isRequired={item.isRequired}
          secureTextEntry={index === 2 || index == 3 ? true : false}
          handleInputChange={val => handleInputChange(val, item.key)}
          inputValue={userData[item.key]}
        />
      </View>
    );
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
            <AppText text={'Sign up'} style={styles.signupTxt} />
            <FlatList
              showsVerticalScrollIndicator={false}
              data={SignUpArray}
              renderItem={renderItem}
              keyExtractor={item => item.inputLabel}
            />
          </View>
        </View>
        <View style={styles.bottomBtns}>
          <AppButton buttonText="Create account" />
          <View style={styles.bottomtxt}>
            <AppText
              text={'Already have an account? '}
              style={styles.alreadyTxt}
            />
            <AppText
              onPress={() => navigation.navigate(screens.SIGN_IN)}
              text={' Log in'}
              style={styles.login}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </AppContainer>
  );
};

export default SignUp;

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
  inputTextSty: {
    marginTop: 20,
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
  bottomtxt: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingTop: 5,
  },
  alreadyTxt: {
    fontSize: 14,
    fontFamily: fonts.dmSans[400],
    color: COLORS.medium_gray,
  },
  login: {
    fontSize: 14,
    fontFamily: fonts.dmSans[500],
    color: COLORS.green,
    textDecorationLine: 'underline',
  },
});