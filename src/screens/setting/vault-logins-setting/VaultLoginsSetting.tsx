import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import PlusIconWithText from '../../../components/molecules/app-button/PlusIconWithText';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppText from '../../../components/atoms/app-text/AppText';
import AppModal from '../../../components/atoms/app-modal/AppModal';
import AppInput from '../../../components/molecules/app-input/AppInput';
import {COLORS, fonts} from '../../../styles/color';
import AppButton from '../../../components/molecules/app-button/AppButton';
import {useDispatch, useSelector} from 'react-redux';
import {LoginsInfo, State, screens} from '../../../types/types';
import {actionUserLoginsCredentialsCreate} from '../../../redux/user/action';
import SettingAndNumber from '../../../components/molecules/setting/SettingAndNumber';
import {useNavigation} from '@react-navigation/native';

const VaultLoginsSetting = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [userData, setUserData] = useState({
    title: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const didAddPress = () => {
    setIsVisible(!isVisible);
  };
  // add details
  const onChangeText = (number: number, txt: string) => {
    console.log(number, txt);
    if (number === 0) {
      setUserData(preVal => ({...preVal, title: txt}));
    } else if (number === 1) {
      setUserData(preVal => ({...preVal, email: txt}));
    } else {
      setUserData(preVal => ({...preVal, password: txt}));
    }
  };
  // cancel and save buttons
  const didCancel = () => {
    setUserData({
      title: '',
      email: '',
      password: '',
    });
    setIsVisible(false);
  };
  const createCredentail = () => {
    dispatch(actionUserLoginsCredentialsCreate(userData));
    setIsVisible(false);
  };
  const Logindata = useSelector(
    (state: State) => state?.userReducer?.loginsData,
  );
  // display user credentail list
  const renderItem = ({item, index}: {item: LoginsInfo; index: number}) => {
    return (
      <SettingAndNumber
        number={index + 1}
        title={item?.title}
        didSettingPress={() =>
          navigation.navigate(screens.LOGINS_CREDENTIALS, {data: item})
        }
      />
    );
  };

  return (
    <AppContainer>
      <ScreenHeader headerText="Logins" extraStyle={styles.header} />
      <View style={styles.container}>
        <PlusIconWithText text="Add new" onPress={didAddPress} />
      </View>
      <AppModal
        isVisible={isVisible}
        toggleModal={didAddPress}
        extraViewStyle={{paddingHorizontal: 20}}
        children={
          <View style={{backgroundColor: 'white'}}>
            <AppText text={'Enter Title'} style={styles.title} />
            <View>
              <AppInput
                placeholder="Enter Title"
                inputLabel="Title"
                handleInputChange={(txt: string) => onChangeText(0, txt)}
                inputValue={userData?.title}
              />
            </View>
            <View style={styles.inputContainer}>
              <AppInput
                placeholder="Enter Username/email"
                inputLabel="username/email"
                handleInputChange={(txt: string) => onChangeText(1, txt)}
                inputValue={userData?.email}
              />
            </View>
            <View style={styles.passwordInput}>
              <AppInput
                placeholder="Enter Password"
                inputLabel="Password"
                handleInputChange={(txt: string) => onChangeText(2, txt)}
                inputValue={userData?.password}
              />
            </View>
            <View style={styles.buttons}>
              <View style={styles.btn}>
                <AppButton
                  fill={false}
                  buttonText="Cancel"
                  onPress={didCancel}
                />
              </View>
              <View style={styles.btn}>
                <AppButton buttonText="Save" onPress={createCredentail} />
              </View>
            </View>
          </View>
        }
      />
      <View style={styles.setting}>
        <FlatList
          data={Logindata}
          renderItem={renderItem}
          keyExtractor={(_item, index) => index.toString()}
        />
      </View>
    </AppContainer>
  );
};

export default VaultLoginsSetting;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 29,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.dmSans[700],
    color: COLORS.green,
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: 50,
  },

  passwordInput: {
    marginTop: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  btn: {
    width: '45%',
  },
  setting: {
    paddingHorizontal: 20,
  },
});
