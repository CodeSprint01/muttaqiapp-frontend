import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppText from '../../../components/atoms/app-text/AppText';
import {AppIconSvg, Icons} from '../../../components/atoms/app-icon-svg';
import {COLORS, fonts} from '../../../styles/color';
import {BarChart} from 'react-native-gifted-charts';

const PrayerBarChart = () => {
  const barData = [
    {
      value: 40,
      spacing: 0,
      frontColor: COLORS.turquoise_blue,
    },
    {
      value: 20,
      label: 'S',

      frontColor: COLORS.royal_blue,
    },
    {
      value: 50,
      spacing: 0,
      frontColor: COLORS.turquoise_blue,
    },
    {value: 40, label: 'M', frontColor: COLORS.royal_blue},
    {
      value: 70,
      spacing: 0,
      frontColor: COLORS.turquoise_blue,
    },
    {value: 25, label: 'T', frontColor: COLORS.royal_blue},
    {
      value: 30,
      spacing: 0,
      frontColor: COLORS.turquoise_blue,
    },
    {value: 20, label: 'W', frontColor: COLORS.royal_blue},
    {
      value: 60,
      spacing: 0,
      frontColor: COLORS.turquoise_blue,
    },
    {value: 40, label: 'T', frontColor: COLORS.royal_blue},
    {
      value: 65,
      spacing: 0,
      frontColor: COLORS.turquoise_blue,
    },
    {value: 30, label: 'F', frontColor: COLORS.royal_blue},
    {
      value: 50,
      spacing: 0,
      frontColor: COLORS.turquoise_blue,
    },
    {value: 40, label: 'S', frontColor: COLORS.royal_blue},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headerTxt}>
        <AppText text={'Prayer/Namaz'} style={styles.prayerTxt} />
        <TouchableOpacity activeOpacity={0.7} style={styles.textIcon}>
          <AppText text={'Show more'} style={styles.showmoreTxt} />
          <AppIconSvg
            icon={Icons.ArrowRight}
            width={22}
            height={22}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.barChartContainer}>
        <View style={styles.barChart}>
          <BarChart
            data={barData}
            barWidth={4}
            spacing={18}
            stepValue={20}
            hideRules
            xAxisThickness={1}
            xAxisColor={COLORS.powder_blue}
            yAxisThickness={0}
            yAxisTextStyle={styles.yaxis}
            noOfSections={3}
            maxValue={100}
            height={120}
            yAxisLabelTexts={['0', '20%', '40%', '60%', '80%', '100%']}
            // barBorderRadius={}
            xAxisLabelTextStyle={styles.xaxis}
          />
        </View>
        <View style={styles.weeklyAvg}>
          <AppText text={'Weekly average'} style={styles.weeklyAvgTxt} />
          <AppText text={'76%'} style={styles.NumbAvg} />
          <AppText
            text={'Fall of rate'}
            style={[styles.weeklyAvgTxt, {paddingTop: 10}]}
          />
          <AppText
            text={'24%'}
            style={[styles.NumbAvg, {color: COLORS.blush}]}
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

export default PrayerBarChart;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 28,
  },
  headerTxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  prayerTxt: {
    fontSize: 20,
    fontFamily: fonts.dmSans[500],
    color: COLORS.very_dark_gray,
  },
  showmoreTxt: {
    fontSize: 16,
    fontFamily: fonts.dmSans[500],
    color: COLORS.green,
  },
  textIcon: {
    flexDirection: 'row',
  },
  barChartContainer: {
    flexDirection: 'row',
    marginTop: 33,
  },
  barChart: {
    width: '75%',
  },
  barLabel: {
    color: COLORS.dark_gray,
    fontSize: 10,
    paddingRight: 20,
    fontFamily: fonts.dmSans[400],
  },
  weeklyAvg: {
    width: '25%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: 'pink',
    marginBottom: 10,
  },
  weeklyAvgTxt: {
    fontSize: 10,
    fontFamily: fonts.dmSans[500],
    color: COLORS.dark_gray,
  },
  NumbAvg: {
    fontSize: 26,
    color: COLORS.green,
    fontFamily: fonts.dmSans[700],
  },
  smallBox: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.turquoise_blue,
    marginRight: 5,
  },
  bottomView: {
    flexDirection: 'row',
    marginTop: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
  },
  bottomtxt: {
    fontSize: 10,
    color: COLORS.dark_gray,
    fontFamily: fonts.dmSans[400],
  },
  xaxis: {
    marginRight: 5,
    marginTop: -5,
    color: COLORS.dark_gray,
    fontFamily: fonts.dmSans[400],
  },
  yaxis: {
    color: COLORS.dark_gray,
    fontFamily: fonts.dmSans[400],
  },
});
