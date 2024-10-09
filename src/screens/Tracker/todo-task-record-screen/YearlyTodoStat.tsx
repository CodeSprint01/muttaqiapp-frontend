import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import YearlyTodoBarChart from '../bar-charts/YearlyTodoBarChart';
import {monthlyBarGraph} from '../../../utils/mocks/tracker/StatsGraphArray';
import {COLORS} from '../../../styles/color';

const YearlyTodoStat = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.barchart}>
        <YearlyTodoBarChart
          barChartArray={monthlyBarGraph}
          completeDate="2023"
        />
      </View>
      <View style={styles.barchart}>
        <YearlyTodoBarChart
          barChartArray={monthlyBarGraph}
          completeDate="2023"
        />
      </View>
      <View style={styles.barchart}>
        <YearlyTodoBarChart
          barChartArray={monthlyBarGraph}
          completeDate="2023"
        />
      </View>
      <View style={styles.bottomVew} />
    </ScrollView>
  );
};

export default YearlyTodoStat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pale_mint,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  barchart: {
    marginTop: 30,
  },
  bottomVew: {
    paddingBottom: 130,
  },
});
