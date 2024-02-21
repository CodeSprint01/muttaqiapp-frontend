import {Dimensions, Platform, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, fonts} from '../../../styles/color';
import {LineChart} from 'react-native-gifted-charts';
import AppText from '../../../components/atoms/app-text/AppText';
import {xAxisYearly} from '../../../utils/mocks/tracker/StatsGraphArray';

interface ChartProps {
  completeDate: string;
  barChartArray: any;
}

const YearlyTodoBarChart: FC<ChartProps> = ({completeDate, barChartArray}) => {
  const screenWidth = Dimensions.get('window').width;
  console.log(screenWidth);
  const monthlyBarGraph1 = [
    {value: 1},
    {value: 23},
    {value: 10},
    {value: 20},
    {value: 30},
    {value: 10},
    {value: 14},
    {value: 22},
    {value: 14},
    {value: 17},
    {value: 5},
    {value: 25},
  ];

  const xAxisMonthly = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.leftSide}>
            <AppText text={completeDate} style={styles.dateText} />
          </View>
          <View style={styles.rightSide}>
            <AppText text={'average'} style={styles.average} />
            <AppText text={'50 days'} style={styles.daysTxt} />
          </View>
        </View>
        <View style={styles.barChart}>
          <LineChart
            // curved
            data={monthlyBarGraph1}
            maxValue={31}
            color={COLORS.pale_gold}
            dataPointsColor={COLORS.pale_gold}
            height={300}
            stepValue={1}
            backgroundColor={COLORS.pale_mint}
            yAxisColor={COLORS.light_Powder_Blue}
            verticalLinesColor={'red'}
            xAxisIndicesHeight={2}
            xAxisIndicesWidth={1}
            xAxisIndicesColor={'red'}
            xAxisLabelTexts={xAxisYearly}
            dashWidth={0}
            yAxisTextStyle={styles.yAxis}
            xAxisLabelTextStyle={{fontSize: 8}}
            width={screenWidth - 75}
            xAxisLength={screenWidth - 95}
            thickness={1}
            spacing={Platform.OS === 'android' ? 23 : 28}
            xAxisColor={COLORS.green}
            xAxisThickness={1}
            yAxisLabelTexts={xAxisMonthly}
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
    </View>
  );
};

export default YearlyTodoBarChart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.pale_mint,
    // flex: 1,
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
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  average: {
    color: COLORS.dark_gray,
    fontSize: 10,
    fontFamily: fonts.dmSans[500],
    paddingRight: 3,
  },
  daysTxt: {
    fontSize: 18,
    fontFamily: fonts.dmSans[500],
    color: COLORS.green,
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
    fontSize: 8,
  },
});
