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
      <View style={styles.timeAndIcon}>
        <AppIconSvg
          icon={notificationIcon}
          width={30}
          height={30}
          color={COLORS.black}
        />
        <AppText text={PrayerName} style={styles.PyayerTxt} />
      </View>

      <View style={styles.prayerName}>
        <AppText text={prayerTime} />
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
    flexDirection: 'row',
  },
  prayerName: {
    flex: 1,
    justifyContent: 'center',
    fontWeight: '400',
  },
  PyayerTxt: {
    fontSize: 20,
    color: COLORS.lightBlack,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  timeAndIcon: {
    flex: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
