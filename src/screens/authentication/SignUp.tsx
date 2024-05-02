import {
  FlatList,
  StyleSheet,
  View,
  Platform,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import {COLORS, fonts} from '../../styles/color';
import AppText from '../../components/atoms/app-text/AppText';
import {SignUpArray} from '../../utils/mocks/textInputs/TextInputs';
import {InputSignUp, State, screens} from '../../types/types';
import AppInput from '../../components/molecules/app-input/AppInput';
import AppButton from '../../components/molecules/app-button/AppButton';
import {useNavigation} from '@react-navigation/native';
import AppModal from '../../components/atoms/app-modal/AppModal';
import {handleSignUp, schemaMutation} from '../../services/api';
import {useDispatch, useSelector} from 'react-redux';
import {actionGetUserInfoSucess} from '../../redux/user/action';
import {SIGN_UP} from '../../services/graphQL';

const SignUp = () => {
  const [userData, setUserData] = useState<{[key: string]: string}>({
    name: '',
    email: '',
    password: 'Test@123',
    confPassowrd: 'Test@123',
  });
  const [loading, setLoading] = useState(false);
  const [signUpMutation] = schemaMutation(SIGN_UP);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleInputChange = (val: string, key: string) => {
    setUserData(prev => ({...prev, [key]: val}));
  };

  const didPressCreateAccount = async () => {
    const isMatched = userData?.password == userData?.confPassowrd;
    if (!isMatched) {
      Alert.alert('Password', 'Password and Re-enter Password not matched');
      return;
    }
    let isEmpty = Object.values(userData).some(val => val === '');
    if (isEmpty) {
      Alert.alert('Validation failed', 'Please fill all the fields');
      return;
    }
    try {
      setLoading(true);
      const data = await handleSignUp(signUpMutation, userData);

      let response = {
        userID: data?.createUser?.user?.id,
        token: data?.createUser?.token,
        name: data?.createUser?.user?.username,
        email: data?.createUser?.user?.email,
        isLogin: false,
      };
      setLoading(false);
      dispatch(actionGetUserInfoSucess(response));
      navigation.navigate(screens.WELCOME_USER);
    } catch (error: any) {
      if (error) setLoading(false);
      return Alert.alert(error?.message);
    }
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
          <AppButton
            onPress={didPressCreateAccount}
            buttonText="Create account"
          />
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
      <AppModal
        isVisible={loading}
        children={<ActivityIndicator size={'large'} color={COLORS.green} />}
        extraViewStyle={styles.modalSty}
      />
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
  modalSty: {
    paddingVertical: 70,
  },
  errorTxt: {
    color: 'red',
    paddingTop: 4,
  },
});
