import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS, fonts} from '../../../styles/color';
import {
  monthlyBarGraph,
  monthlyBarGraph2,
} from '../../../utils/mocks/tracker/StatsGraphArray';
import YearlyBarChart from '../bar-charts/YearlyBarChart';

const YearlyStats = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.chartContainer}>
        <YearlyBarChart
          barChartArray={monthlyBarGraph}
          barChartArray2={monthlyBarGraph2}
          average={76}
          fallOfAvg={24}
          completeDate="2023"
        />
      </View>
      <View style={styles.chartContainer}>
        <YearlyBarChart
          barChartArray={monthlyBarGraph}
          barChartArray2={monthlyBarGraph2}
          average={76}
          fallOfAvg={24}
          completeDate="2022"
        />
      </View>
      <View style={styles.chartContainer}>
        <YearlyBarChart
          barChartArray={monthlyBarGraph}
          barChartArray2={monthlyBarGraph2}
          average={76}
          fallOfAvg={24}
          completeDate="2021"
        />
      </View>
      <View style={styles.chartContainer}>
        <YearlyBarChart
          barChartArray={monthlyBarGraph}
          barChartArray2={monthlyBarGraph2}
          average={76}
          fallOfAvg={24}
          completeDate="2020"
        />
      </View>
      <View style={styles.emptyContainer} />
    </ScrollView>
  );
};

export default YearlyStats;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.pale_mint,
    flex: 1,
  },
  chartContainer: {
    marginTop: 40,
  },
  barChart: {
    marginTop: 16,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  leftSide: {
    flex: 1,
  },
  dateText: {
    color: COLORS.very_dark_gray,
    fontSize: 20,
    fontFamily: fonts.dmSans[500],
  },
  rightSide: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  average: {
    color: COLORS.dark_gray,
    fontSize: 10,
    fontFamily: fonts.dmSans[500],
    paddingRight: 3,
  },
  avgVal: {
    color: COLORS.green,
    fontSize: 18,
    fontFamily: fonts.dmSans[500],
  },
  smallBox: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.turquoise_blue,
    marginRight: 5,
  },
  bottomtxt: {
    fontSize: 10,
    color: COLORS.dark_gray,
    fontFamily: fonts.dmSans[400],
  },
  bottomView: {
    flexDirection: 'row',
    marginTop: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
  },
  emptyContainer: {
    paddingBottom: 120,
  },
  yAxis: {
    color: COLORS.dark_gray,
    fontFamily: fonts.dmSans[400],
  },
});
