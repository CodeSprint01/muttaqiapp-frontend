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
  const isDisabled = item?.isOfferedTimePassed ? false : true;

  return (
    <View style={styles.container}>
      <View style={styles.iconText}>
        <TouchableOpacity
          onPress={() => onPress(item)}
          disabled={isDisabled}
          style={[styles.button, isDisabled && styles.disabledButton]}>
          <LinearGradient
            colors={[
              '#1290A1',
              'rgba(24, 154, 151, 0.86)',
              'rgba(29, 162, 143, 0.73)',
            ]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.linearCircleView}>
            <View style={styles.circleView}>
              {prayerIcon && (
                <AppIconSvg
                  icon={prayerIcon}
                  width={10}
                  height={8}
                  color={COLORS.white}
                />
              )}
            </View>
          </LinearGradient>
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
  linearCircleView: {
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
  circleView: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
  },
  disabledButton: {
    opacity: 0.5,
  },
});
