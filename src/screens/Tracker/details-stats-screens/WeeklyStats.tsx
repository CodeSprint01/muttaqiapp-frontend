import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import PrayerBarChart from '../prayer-namaz/PrayerBarChart';
import {AllPrayersArray} from '../../../utils/mocks/tracker/prayer-arrays/AllPrayersArray';
import {COLORS} from '../../../styles/color';

const WeeklyStats = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <PrayerBarChart
        ArrayName={AllPrayersArray}
        weeklyAveg={54}
        fallAveg={46}
        title="14-20 Jan,2023"
      />
      <PrayerBarChart
        ArrayName={AllPrayersArray}
        weeklyAveg={54}
        fallAveg={46}
        title="07-13 Jan,2023"
      />
      <PrayerBarChart
        ArrayName={AllPrayersArray}
        weeklyAveg={54}
        fallAveg={46}
        title="01-06 Jan,2023"
      />
      <View style={styles.bottomView} />
    </ScrollView>
  );
};

export default WeeklyStats;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.pale_mint,
    flex: 1,
  },
  bottomView: {
    paddingBottom: 120,
  },
});
