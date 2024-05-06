import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import AppText from '../../../components/atoms/app-text/AppText';
import {COLORS, fonts} from '../../../styles/color';
import UserInfoCard from './UserInfoCard';
import SettingList from '../../../components/molecules/setting/SettingList';
import {settingArray} from '../../../utils/mocks/setting-array/SettingArray';
import {settingEnum, settingScreen} from '../../../types/keyVlaue';
import {State, screens} from '../../../types/types';
import {useDispatch, useSelector} from 'react-redux';
import {actionResetStore} from '../../../redux/user/action';
import AppModal from '../../../components/atoms/app-modal/AppModal';
import AppInput from '../../../components/molecules/app-input/AppInput';
import AppButton from '../../../components/molecules/app-button/AppButton';
import {handleLoginVault, schemaMutation} from '../../../services/api';
import {
  CREATE_VALUT,
  FIND_USER_VAULT,
  LOGIN_VAULT,
} from '../../../services/graphQL';
import {useQuery} from '@apollo/client';
import AppLoader from '../../../components/atoms/loader/AppLoader';
import {useNavigation} from '@react-navigation/native';

const MainSetting = () => {
  const initialState = {
    password: '',
    confPassword: '',
  };
  const [userPassword, setUserPassword] = useState('');
  const [isVisible, setIsvisible] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userdata = useSelector((state: State) => state?.userReducer?.userInfo);
  console.log(userdata, 'u d');
  const userId = userdata?.userID;

  const [logVault] = schemaMutation(LOGIN_VAULT);
  const {data, error, loading} = useQuery(FIND_USER_VAULT, {
    variables: {
      userId: userId,
    },
  });

  console.log(data, error, 'data and error both..');
  // console.log(data?.verifyUserVault?.success, 'data g q l');

  const onPressOk = async () => {
    if (userPassword == '') {
      Alert.alert('Alert', 'please enter password');
      return;
    }
    try {
      const data = await handleLoginVault(logVault, userId, userPassword);
      console.log(data, 'from wheer cal');
      if (data?.data?.loginVault?.success) {
        setIsvisible(false);
        setUserPassword('');
        navigation.navigate(screens.VAULT_STACK);
      } else {
        Alert.alert('Alert', data?.data?.loginVault?.message);
      }
    } catch (error) {
      console.log(error, 'from wheer cala');
    }
  };
  const onPressForgot = () => {
    console.log('cli');
    setIsvisible(false);
    navigation.navigate(screens.FORGOT_VAULT_PASSWORD);
  };

  function manageVault() {
    if (!data?.verifyUserVault?.success) {
      console.log('not true');
      navigation.navigate(screens.VAULT_CREATE_DETAILS);
    } else {
      setIsvisible(true);
    }
  }

  const handleListClick = (type: settingEnum) => {
    switch (type) {
      case settingEnum.BOOKMARKS:
        console.log('switch 0');
        break;
      case settingEnum.FAVORITIES:
        console.log('switch 1');
        break;
      case settingEnum.ZAKAT_CALCULATION:
        console.log('switch 2');
        break;
      case settingEnum.INHERITANCE_CALCULATION:
        console.log('switch 3');
        break;
      case settingEnum.PASSWORD_SECURITY:
        navigation.navigate(screens.PASSWORD_SECURITY_STACK);
        break;
      case settingEnum.VAULT:
        manageVault();
        break;
      case settingEnum.PERSONAL_FINANCIAL_INFO:
        console.log('switch 6');
        break;
      case settingEnum.NOTIFICATION_SETTINGS:
        navigation.navigate(screens.NOTIFICATION_SETTINGS);
        break;
      case settingEnum.LANGUAGE:
        navigation.navigate(screens.LANGUAGE_SETTING);
        break;
      case settingEnum.FREQUENTLY_ASKED_QUESTION:
        navigation.navigate(screens.FREQUENTLY_ASKED_QUESTION_SETTING);
        break;
      case settingEnum.HELP_SUPPORT:
        navigation.navigate(screens.HELP_SUPPORT_SETTING);
        break;
      case settingEnum.TERMS_CONDITION:
        console.log('switch 11');
        break;
      case settingEnum.PRIVACY_POLICY:
        navigation.navigate(screens.PRIVACY_POLICY_SETTING);
        break;
      case settingEnum.ABOUT_MUTTAQI:
        navigation.navigate(screens.ABOUT_MUTTAQI_SETTING);
        break;
      case settingEnum.LOG_OUT:
        handleLogout();
        break;
      default:
        break;
    }
  };
  const handleLogout = () => {
    dispatch(actionResetStore());
  };

  const renderItem = ({item, index}: {item: settingScreen; index: number}) => {
    return (
      <SettingList
        iconName={item?.image}
        title={item?.name}
        didSettingPress={() => handleListClick(item?.type)}
      />
    );
  };

  return (
    <ScrollView style={styles.container}>
      <AppText text={'Account'} style={styles.title} />
      <View style={styles.userProfile}>
        <UserInfoCard
          userName="Code sprint"
          email="codesprints@gmail.com"
          userImage={require('../../../../assets/images/Profilepic.png')}
          didOpenProfile={() => navigation.navigate(screens.PROFILE_STACK)}
        />
      </View>
      <View style={styles.setting}>
        <FlatList
          data={settingArray}
          renderItem={renderItem}
          scrollEnabled={false}
          keyExtractor={(_item, index) => index.toString()}
        />
      </View>
      <AppLoader isVisible={loading} />
      <View>
        <AppModal
          isVisible={isVisible}
          toggleModal={() => setIsvisible(!isVisible)}
          children={
            <>
              <View>
                <AppText
                  text={'Enter vault password'}
                  style={styles.valutTxt}
                />
                <View style={styles.modalContainer}>
                  <AppInput
                    placeholder="Enter password"
                    inputLabel="Password"
                    inputValue={userPassword}
                    handleInputChange={val => setUserPassword(val)}
                  />
                  <TouchableOpacity
                    onPress={onPressForgot}
                    style={styles.alredyAccount}>
                    <AppText
                      text={'Forgot password'}
                      style={styles.alredytxt}
                    />
                  </TouchableOpacity>
                  <View style={styles.btnContainer}>
                    <View style={styles.button}>
                      <AppButton
                        buttonText="Cancel"
                        onPress={() => setIsvisible(false)}
                      />
                    </View>
                    <View style={styles.button}>
                      <AppButton buttonText="ok" onPress={onPressOk} />
                    </View>
                  </View>
                </View>
              </View>
            </>
          }
        />
      </View>
    </ScrollView>
  );
};

export default MainSetting;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pale_mint,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.dmSans[700],
    color: COLORS.very_dark_gray,
    paddingLeft: 35,
    paddingTop: 20,
  },
  userProfile: {
    marginTop: 18,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
    }),
  },
  setting: {
    paddingHorizontal: 20,
    marginTop: 10,
    paddingBottom: 120,
  },
  modalContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  valutTxt: {
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 20,
    fontFamily: fonts.dmSans[500],
    color: COLORS.green,
  },
  btnContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  alredyAccount: {
    marginTop: 10,
  },
  alredytxt: {
    fontSize: 14,
    color: COLORS.light_black_gray,
    fontFamily: fonts.dmSans[400],
  },
  button: {
    width: '47%',
    marginTop: 30,
    marginBottom: 10,
  },
});
