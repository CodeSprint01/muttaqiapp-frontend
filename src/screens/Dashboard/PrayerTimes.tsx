import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PrayerAlarmCard from '../../components/molecules/prayer-list/PrayerAlarmCard';

const PrayerTimes = () => {
  return (
    <View style={styles.container}>
      <PrayerAlarmCard />
      <PrayerAlarmCard />
      <PrayerAlarmCard />
      <PrayerAlarmCard />
      <PrayerAlarmCard />
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
