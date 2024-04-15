import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {AppIconSvg, Icons} from '../../atoms/app-icon-svg';
import {COLORS} from '../../../styles/color';
import LinearGradient from 'react-native-linear-gradient';
import AppText from '../../atoms/app-text/AppText';

interface AlarmProps {
  onPress: (item: any) => void;
  onPressAlarm: (item: any) => void;
  name: string;
  time: string;
  prayerIcon: any;
  alarmIcon: any;
  item: any;
}
const PrayerAlarmCard: FC<AlarmProps> = ({
  onPress,
  onPressAlarm,
  name,
  time,
  prayerIcon,
  alarmIcon,
  item,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconText}>
        <TouchableOpacity onPress={() => onPress(item)}>
          <View style={styles.circleView}>
            <AppIconSvg
              icon={prayerIcon}
              width={24}
              height={24}
              color={COLORS.green}
            />
          </View>
        </TouchableOpacity>
        <AppText text={name} style={styles.prayerText} />
      </View>
      <View style={styles.prayerTime}>
        <AppText text={time} style={styles.prayerTimeTxt} />
      </View>
      <TouchableOpacity
        onPress={() => onPressAlarm(item)}
        style={styles.alarmContainer}>
        <LinearGradient
          colors={['#1290A1', '#1DA28F']}
          style={styles.iconContaiuner}>
          <AppIconSvg
            icon={alarmIcon}
            width={24}
            height={24}
            color={COLORS.white}
          />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default PrayerAlarmCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 3,
    marginVertical: 5,
    // backgroundColor: 'pink',
  },
  circleView: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContaiuner: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  prayerText: {
    paddingLeft: 5,
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.dark_gray,
  },
  prayerTime: {
    flex: 1,
    justifyContent: 'center',
  },
  prayerTimeTxt: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.dark_gray,
    textAlign: 'right',
    marginRight: 20,
  },
  alarmContainer: {
    // backgroundColor: 'green',
    // width: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    paddingHorizontal: 3,
  },
});
