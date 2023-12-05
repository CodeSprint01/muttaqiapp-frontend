import {View, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../styles/color';
import AppText from '../../components/atoms/app-text/AppText';
import {AppIconSvg, Icons} from '../../components/atoms/app-icon-svg';
import SettingLists from '../../components/molecules/setting-lists/SettingLists';
import {screen, settingEnum} from '../../types/keyVlaue';
import {useNavigation} from '@react-navigation/native';

const SettingScreen = () => {
  const navigation = useNavigation();
  const handleListClick = (type: settingEnum) => {
    switch (type) {
      case settingEnum.PROFILE:
        navigation.navigate(screen.USER_PROFILE);
        break;
      case settingEnum.VAULT:
        console.log('switch 1');
        break;
      case settingEnum.NOTIFICATIONS:
        console.log('switch 2');
        break;
      case settingEnum.LANGUAGES:
        console.log('switch 3');
        break;
      case settingEnum.FAQ:
        console.log('switch 4');
        break;
      case settingEnum.FEEDBACK:
        console.log('switch 5');
        break;
      case settingEnum.SUPPORT:
        console.log('switch 6');
        break;
      case settingEnum.TERMS_CONDITION:
        console.log('switch 7');
        break;
      case settingEnum.PRIVACY:
        console.log('switch 8');
        break;
      case settingEnum.ABOUT:
        console.log('switch 9');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.settingContainer}>
        <View style={styles.iconSetting}>
          <AppIconSvg
            icon={Icons.Setting}
            width={30}
            height={30}
            color={COLORS.light_gray}
          />
          <AppText text={'Settings'} style={styles.settingTxt} />
        </View>
      </View>
      <View style={styles.settingDataContainer}>
        <SettingLists handleListItem={handleListClick} />
      </View>
      <View style={styles.restContainer} />
    </View>
  );
};

export default SettingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingContainer: {
    flex: 2,
    backgroundColor: COLORS.primary,
    borderBottomEndRadius: 11,
    borderBottomStartRadius: 11,
  },
  settingTxt: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.white,
    paddingLeft: 8,
  },
  iconSetting: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 28,
    marginTop: 40,
  },
  settingDataContainer: {
    backgroundColor: COLORS.white,
    position: 'absolute',
    width: '94%',
    height: '96%',
    alignSelf: 'center',
    marginTop: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  restContainer: {
    flex: 3,
  },
});
