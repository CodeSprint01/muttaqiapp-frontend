import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../../styles/color';
import AppText from '../../atoms/app-text/AppText';
import {AppIconSvg} from '../../atoms/app-icon-svg';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface listProps {
  onPress: () => void;
  PrayerName: string;
  prayerTime: string;
  notificationIcon: string;
}

const PrayerListItem: FC<listProps> = ({
  onPress,
  PrayerName,
  prayerTime,
  notificationIcon,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={onPress}>
      <View style={styles.prayerName}>
        <AppText text={PrayerName} style={styles.PyayerTxt} />
      </View>
      <View style={styles.timeAndIcon}>
        <AppText text={prayerTime} />
        <AppIconSvg
          icon={notificationIcon}
          width={16}
          height={18}
          color={COLORS.black}
        />
      </View>
    </TouchableOpacity>
  );
};

export default PrayerListItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    flexDirection: 'row',
  },
  prayerName: {
    flex: 7,
    justifyContent: 'center',
    fontWeight: '400',
  },
  PyayerTxt: {
    fontSize: 16,
    color: COLORS.lightBlack,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  timeAndIcon: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
