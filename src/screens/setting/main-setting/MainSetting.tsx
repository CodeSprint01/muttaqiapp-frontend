import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Platform,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AppText from '../../../components/atoms/app-text/AppText';
import {COLORS, fonts} from '../../../styles/color';
import UserInfoCard from './UserInfoCard';
import SettingList from '../../../components/molecules/setting/SettingList';
import {settingArray} from '../../../utils/mocks/setting-array/SettingArray';
import {settingEnum, settingScreen} from '../../../types/keyVlaue';
import {State, screens} from '../../../types/types';
import {useDispatch, useSelector} from 'react-redux';
import {
  actionGetUserInfoSucess,
  actionUserLogedIn,
} from '../../../redux/user/action';
import AppModal from '../../../components/atoms/app-modal/AppModal';
import AppInput from '../../../components/molecules/app-input/AppInput';
import AppButton from '../../../components/molecules/app-button/AppButton';
import {handleCreateVault, schemaMutation} from '../../../services/api';
import {CREATE_VALUT, FIND_USER_VAULT} from '../../../services/graphQL';
import {useQuery} from '@apollo/client';

const MainSetting = () => {
  const initialState = {
    password: '',
    confPassword: '',
  };
  const [vaultPassword, setVaultPassword] = useState(initialState);
  const [userPassword, setUserPassword] = useState('');
  const [isVisible, setIsvisible] = useState(false);
  const [isAlreadyAcc, setIsAlreadyAcc] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isValueCreated = false;
  const userdata = useSelector((state: State) => state?.userReducer?.userInfo);
  // console.log(userdata, 'uu d');

  const {data, error, loading} = useQuery(FIND_USER_VAULT, {
    variables: {
      userId: userdata?.userID ?? '7c4d9229-e495-43c5-ab87-d390174628ec',
    },
  });

  console.log(data, error, 'data and error both..');

  const onChnageVault = (key: string, val: string) => {
    setVaultPassword(preVal => ({...preVal, [key]: val}));
  };
  const validator = Object.values(vaultPassword).some(val => val == '');
  const [createUserVault] = schemaMutation(CREATE_VALUT);

  const onPressSave = async () => {
    // setIsvisible(false)

    if (vaultPassword?.password === vaultPassword?.confPassword) {
      if (validator) {
        Alert.alert('Alert', 'Please fill all the fields');
      } else {
        try {
          console.log('call api');
          const data = await handleCreateVault(
            createUserVault,
            vaultPassword?.password,
            userdata?.userID,
          );
          setIsvisible(false);
          Alert.alert('Alert', 'vault created sucessfully');
          navigation.navigate(screens.VAULT_STACK);
        } catch (error) {
          console.log(error);
          setIsvisible(false);
          Alert.alert('Alert', 'Something went wrong please try again');
        }
      }
    } else {
      Alert.alert('Alert', 'Password and confirm password not matched');
    }
  };
  const onPressCancel = () => {
    setVaultPassword(initialState);
    setIsvisible(false);
  };

  function manageVault() {
    // call api to check user exist or not
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
        // navigation.navigate(screens.VAULT_STACK);
        manageVault();
        // if (isValueCreated) {
        //   navigation.navigate(screens.VAULT_STACK);
        // } else {
        //   setIsvisible(true);
        // }
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
    dispatch(actionGetUserInfoSucess(null));
    dispatch(actionUserLogedIn(false));
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
      <View>
        <AppModal
          isVisible={isVisible}
          toggleModal={() => setIsvisible(!isVisible)}
          children={
            <>
              {isAlreadyAcc == true ? (
                <View>
                  <AppText
                    text={'Add vault password'}
                    style={styles.valutTxt}
                  />
                  <View style={styles.modalContainer}>
                    <AppInput
                      placeholder="Enter password"
                      inputLabel="Password"
                      inputValue={vaultPassword?.password}
                      handleInputChange={val => onChnageVault('password', val)}
                    />
                    <AppInput
                      placeholder="Enter confirm password"
                      inputLabel="Confirm password"
                      inputValue={vaultPassword?.confPassword}
                      handleInputChange={val =>
                        onChnageVault('confPassword', val)
                      }
                    />
                    <TouchableOpacity
                      onPress={() => setIsAlreadyAcc(false)}
                      style={styles.alredyAccount}>
                      <AppText
                        text={'Already have an account?'}
                        style={styles.alredytxt}
                      />
                    </TouchableOpacity>
                    <View style={styles.btnContainer}>
                      <View style={styles.button}>
                        <AppButton
                          buttonText="Login in"
                          onPress={onPressSave}
                        />
                      </View>
                      <View style={styles.button}>
                        <AppButton
                          buttonText="Cancel"
                          onPress={onPressCancel}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              ) : (
                <View>
                  <AppText
                    text={'Add vault password'}
                    style={styles.valutTxt}
                  />
                  <View style={styles.modalContainer}>
                    <AppInput
                      placeholder="Enter password"
                      inputLabel="Password"
                      inputValue={userPassword}
                      handleInputChange={val => setUserPassword(val)}
                    />
                    <View style={styles.btnContainer}>
                      <View style={styles.button}>
                        <AppButton
                          buttonText="Login in"
                          onPress={onPressSave}
                        />
                      </View>
                      <View style={styles.button}>
                        <AppButton
                          buttonText="sign up"
                          onPress={() => setIsAlreadyAcc(true)}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              )}
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
    fontSize: 16,
    color: COLORS.dark_gray,
    fontFamily: fonts.dmSans[400],
  },
  button: {
    width: '47%',
    marginTop: 30,
    marginBottom: 10,
  },
});
