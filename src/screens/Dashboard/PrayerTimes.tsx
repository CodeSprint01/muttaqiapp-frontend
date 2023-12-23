import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import PrayerAlarmCard from '../../components/molecules/prayer-list/PrayerAlarmCard';

interface prayerProps {
  onPress: () => void;
}
const PrayerTimes: FC<prayerProps> = ({onPress}) => {
  return (
    <View style={styles.container}>
      <PrayerAlarmCard onPress={onPress} />
      <PrayerAlarmCard onPress={onPress} />
      <PrayerAlarmCard onPress={onPress} />
      <PrayerAlarmCard onPress={onPress} />
      <PrayerAlarmCard onPress={onPress} />
    </View>
  );
};

export default PrayerTimes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'skyblue',
  },
});
