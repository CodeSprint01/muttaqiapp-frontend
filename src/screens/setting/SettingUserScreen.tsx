import {View, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../styles/color';
import AppText from '../../components/atoms/app-text/AppText';
import {AppIconSvg, Icons} from '../../components/atoms/app-icon-svg';
import SettingLists from '../../components/molecules/setting-lists/SettingLists';

const SettingUserScreen = () => {
  const handleListClick = (type: number) => {
    console.log(type);
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

export default SettingUserScreen;
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
