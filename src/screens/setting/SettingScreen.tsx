import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, fonts} from '../../styles/color';
import AppText from '../../components/atoms/app-text/AppText';
import {AppIconSvg, Icons} from '../../components/atoms/app-icon-svg';
import SettingLists from '../../components/molecules/setting-lists/SettingLists';
import {settingEnum} from '../../types/keyVlaue';
import {useNavigation} from '@react-navigation/native';

const SettingScreen = () => {
  const navigation = useNavigation();
  // const handleListClick = (type: settingEnum) => {
  //   switch (type) {
  //     case settingEnum.PROFILE:
  //       navigation.navigate('UserProfile');
  //       break;
  //     case settingEnum.VAULT:
  //       console.log('switch 1');
  //       break;
  //     case settingEnum.NOTIFICATIONS:
  //       console.log('switch 2');
  //       break;
  //     case settingEnum.LANGUAGES:
  //       console.log('switch 3');
  //       break;
  //     case settingEnum.FAQ:
  //       console.log('switch 4');
  //       break;
  //     case settingEnum.FEEDBACK:
  //       console.log('switch 5');
  //       break;
  //     case settingEnum.SUPPORT:
  //       console.log('switch 6');
  //       break;
  //     case settingEnum.TERMS_CONDITION:
  //       console.log('switch 7');
  //       break;
  //     case settingEnum.PRIVACY:
  //       console.log('switch 8');
  //       break;
  //     case settingEnum.ABOUT:
  //       console.log('switch 9');
  //       break;
  //     default:
  //       break;
  //   }
  // };
  // <SettingLists handleListItem={handleListClick} />

  return (
    <View style={styles.container}>
      <AppText text={'Account'} style={styles.title} />
      <View style={styles.userContainer}>
        <View style={styles.profile}>
          <Image
            source={require('../../../assets/images/Profilepic.png')}
            style={styles.profileImg}
          />
        </View>
        <View style={styles.userIno}>
          <AppText text={'Code sprints'} style={styles.userName} />
          <AppText text={'codesprints@gmail.com'} style={styles.emailTxt} />
        </View>
        <View style={styles.profileIcon}>
          <TouchableOpacity activeOpacity={0.5} style={styles.circleIcon}>
            <AppIconSvg
              icon={Icons.ArrowRight}
              width={24}
              height={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SettingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.dmSans[700],
    color: COLORS.very_dark_gray,
    paddingLeft: 35,
    paddingTop: 50,
  },
  userContainer: {
    width: '100%',
    paddingVertical: 40,
    backgroundColor: 'white',
    borderRadius: 38,
    marginTop: 18,
    flexDirection: 'row',
  },
  profile: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImg: {
    width: 56,
    height: 56,
  },
  userIno: {
    width: '55%',
    justifyContent: 'center',
  },
  userName: {
    fontFamily: fonts.dmSans[500],
    fontSize: 18,
    color: COLORS.dark_gray,
  },
  emailTxt: {
    fontSize: 14,
    fontFamily: fonts.dmSans[400],
    color: COLORS.medium_gray,
  },
  profileIcon: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.pale_mint,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
