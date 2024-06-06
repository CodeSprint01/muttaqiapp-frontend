import {
  FlatList,
  StyleSheet,
  View,
  Platform,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {FC, useState} from 'react';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import {COLORS, fonts} from '../../styles/color';
import AppText from '../../components/atoms/app-text/AppText';
import {SignInArray} from '../../utils/mocks/textInputs/TextInputs';
import {
  ErrorMessage,
  InputSignIn,
  RootStackParamList,
  State,
  screens,
} from '../../types/types';
import AppInput from '../../components/molecules/app-input/AppInput';
import AppButton from '../../components/molecules/app-button/AppButton';
import {useNavigation} from '@react-navigation/native';
import {handleLogin, schemaMutation} from '../../services/api';
import {useDispatch, useSelector} from 'react-redux';
import {actionLoginUserInfoSucess} from '../../redux/user/action';
import {SIGN_IN} from '../../services/graphQL';
import {StackScreenProps} from '@react-navigation/stack';
import {ActiveClickOpacity} from '../../utils/helper/helpers';

type Props = StackScreenProps<RootStackParamList, screens.SIGN_IN>;

const SignIn: FC<Props> = ({navigation}) => {
  const [userData, setUserData] = useState<{
    userEmail: string;
    userPassword: string;
  }>({
    userEmail: '',
    userPassword: '',
  });
  const [signInMutation] = schemaMutation(SIGN_IN);
  const dispatch = useDispatch();

  const handleInputChange = (val: string, key: string) => {
    setUserData(prev => ({...prev, [key]: val}));
  };

  const onPressForgotPass = () => {
    navigation.navigate(screens.FORGOT_PASSWORD);
  };

  const didLoginPress = async () => {
    const isEmpty = Object.values(userData).some(val => val === '');
    try {
      if (isEmpty) {
        return Alert.alert('Please fill all the fields');
      }
      const response = await handleLogin(signInMutation, userData);
      if (response?.loginUser?.statusCode === 200) {
        const {token, user} = response?.loginUser?.data;
        let data = {
          userID: user?.id,
          token: token,
          name: user?.username,
          email: user?.email,
          isLoged: false,
        };
        console.log(data, 'console of data');
        dispatch(actionLoginUserInfoSucess(data));
        navigation.navigate(screens.WELCOME_USER);
      }
    } catch (error) {
      Alert.alert((error as ErrorMessage)?.message);
    }
  };

  const renderItem = ({item, index}: {item: InputSignIn; index: number}) => {
    return (
      <View key={index} style={styles.inputTextSty}>
        <AppInput
          inputLabel={item.inputLabel}
          placeholder={item.placeholder}
          secureTextEntry={Boolean(index === 1)}
          handleInputChange={val => handleInputChange(val, item.key)}
          inputValue={userData[item.key]}
        />
        {index == 1 && (
          <TouchableOpacity
            onPress={onPressForgotPass}
            style={styles.forgotPass}
            activeOpacity={ActiveClickOpacity}>
            <AppText text={'Forgot password?'} style={styles.forTxt} />
          </TouchableOpacity>
        )}
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
            <AppText text={'Log in'} style={styles.signupTxt} />
            <FlatList
              data={SignInArray ?? []}
              renderItem={renderItem}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>
        </View>
        <View style={styles.bottomBtns}>
          <AppButton buttonText="Login" onPress={didLoginPress} />
          <View style={styles.bottomtxt}>
            <AppText
              text={'Don’t have an account? '}
              style={styles.alreadyTxt}
            />
            <AppText
              onPress={() => navigation.navigate(screens.SIGN_UP)}
              text={' Sign up'}
              style={styles.login}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </AppContainer>
  );
};

export default SignIn;

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
  forgotPass: {
    marginTop: 8,
  },
  forTxt: {
    fontSize: 10,
    color: COLORS.dark_gray,
    fontFamily: fonts.dmSans[400],
  },
});
