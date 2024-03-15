import {View, StyleSheet, ScrollView, FlatList, Platform} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AppText from '../../../components/atoms/app-text/AppText';
import {COLORS, fonts} from '../../../styles/color';
import UserInfoCard from './UserInfoCard';
import SettingList from './SettingList';
import {settingArray} from '../../../utils/mocks/SettingArray';
import {settingEnum, settingScreen} from '../../../types/keyVlaue';
import {screens} from '../../../types/types';

const MainSetting = () => {
  const navigation = useNavigation();
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
        console.log('switch 4');
        break;
      case settingEnum.VAULT:
        console.log('switch 5');
        break;
      case settingEnum.PERSONAL_FINANCIAL_INFO:
        console.log('switch 6');
        break;
      case settingEnum.NOTIFICATION_SETTINGS:
        console.log('switch 7');
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
        console.log('switch 14');
        break;
      default:
        break;
    }
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
});
