import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, fonts} from '../../../styles/color';
import {LineChart} from 'react-native-gifted-charts';
import AppText from '../../../components/atoms/app-text/AppText';
import {xAxisMonthly} from '../../../utils/mocks/tracker/StatsGraphArray';

interface ChartProps {
  completeDate: string;
  average: number;
  fallOfAvg: number;
  barChartArray: any;
}

const MonthlyBarChart: FC<ChartProps> = ({
  completeDate,
  average,
  fallOfAvg,
  barChartArray,
}) => {
  const screenWidth = Dimensions.get('window').height;
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.chartContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.leftSide}>
            <AppText text={completeDate} style={styles.dateText} />
          </View>
          <View style={styles.rightSide}>
            <View style={styles.leftTitle}>
              <AppText text={'average'} style={styles.average} />
              <AppText text={`${average}%`} style={styles.avgVal} />
            </View>
            <View style={styles.rightTitle}>
              <AppText text={'Fall off'} style={styles.average} />
              <AppText
                text={`${fallOfAvg}%`}
                style={[styles.avgVal, {color: COLORS.crimson}]}
              />
            </View>
          </View>
        </View>
        <View style={styles.barChart}>
          <LineChart
            curved
            data={barChartArray}
            maxValue={100}
            height={118}
            stepValue={20}
            backgroundColor={COLORS.pale_mint}
            yAxisColor={COLORS.light_Powder_Blue}
            verticalLinesColor={'red'}
            xAxisIndicesHeight={2}
            xAxisIndicesWidth={1}
            xAxisIndicesColor={'red'}
            xAxisLabelTexts={xAxisMonthly}
            dashWidth={0}
            yAxisTextStyle={styles.yAxis}
            xAxisLabelTextStyle={{fontSize: 8}}
            width={screenWidth - 40}
            xAxisLength={screenWidth}
            thickness={1}
            spacing={10}
            xAxisColor={COLORS.green}
            xAxisThickness={1}
            yAxisLabelTexts={['0', '20%', '40%', '60%', '80%', '100%']}
          />
        </View>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.smallBox} />
        <AppText text={'Obligatory prayers'} style={styles.bottomtxt} />
        <View
          style={[
            styles.smallBox,
            {backgroundColor: COLORS.royal_blue, marginLeft: 10},
          ]}
        />
        <AppText text={'Voluntary prayers'} style={styles.bottomtxt} />
      </View>
    </ScrollView>
  );
};

export default MonthlyBarChart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.pale_mint,
    flex: 1,
  },
  chartContainer: {
    // marginTop: 20,
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
  yAxis: {
    color: COLORS.dark_gray,
    fontFamily: fonts.dmSans[400],
  },
});
