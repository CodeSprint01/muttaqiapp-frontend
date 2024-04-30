import {StyleSheet, View, Platform, BackHandler} from 'react-native';
import React, {useEffect} from 'react';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import {COLORS, fonts} from '../../styles/color';
import AppText from '../../components/atoms/app-text/AppText';
import {screens} from '../../types/types';
import AppButton from '../../components/molecules/app-button/AppButton';
import {useNavigation} from '@react-navigation/native';
import {AppIconSvg, Icons} from '../../components/atoms/app-icon-svg';
import {CommonActions} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {actionUserLogedIn} from '../../redux/user/action';

const WelcomeUser = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const gotoHome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: screens.APP_STACK}],
      }),
    );
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      gotoHome,
    );
    return () => {
      backHandler.remove();
    };
  }, []);
  const handleHome = () => {
    dispatch(actionUserLogedIn(true));
  };

  return (
    <AppContainer style={styles.container}>
      <View style={styles.iconContainer}>
        <AppText text={'Welcome Usman!'} style={styles.logoTxt} />
      </View>
      <View style={styles.textInputContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.financeImg}>
            <AppIconSvg
              width={157}
              height={157}
              icon={Icons.Finance}
              color="black"
            />
          </View>
          <View style={styles.finance}>
            <AppText
              text={
                'Register your financial information now and get you Islamic finances calculated forever'
              }
              style={styles.financetxt}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomBtns}>
        <View>
          <AppButton
            buttonText="Start"
            onPress={() => navigation.navigate(screens.USER_INFO_STACK)}
          />
        </View>
        <View>
          <AppButton buttonText="Skip" fill={false} onPress={handleHome} />
        </View>
      </View>
    </AppContainer>
  );
};

export default WelcomeUser;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.pale_mint,
  },
  iconContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  logoTxt: {
    fontSize: 26,
    color: COLORS.green,
    fontFamily: fonts.dmSans[700],
    paddingLeft: '5%',
  },
  textInputContainer: {
    flex: 5,
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
  finance: {
    flex: 1,
  },
  financeImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.medium_gray,
  },
  financetxt: {
    fontSize: 24,
    fontFamily: fonts.dmSans[500],
    textAlign: 'center',
  },
  bottomBtns: {
    flex: 1.5,
    marginHorizontal: 20,
    justifyContent: 'space-evenly',
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
