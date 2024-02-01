import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppText from '../../../components/atoms/app-text/AppText';
import {AppIconSvg, Icons} from '../../../components/atoms/app-icon-svg';
import {COLORS, fonts} from '../../../styles/color';

const WeeklyTodoTask = () => {
  const array = [
    {
      dayName: 'Sun',
      isDo: false,
    },

    {
      dayName: 'Mon',
      isDo: true,
    },

    {
      dayName: 'Tue',
      isDo: false,
    },

    {
      dayName: 'Wed',
      isDo: true,
    },

    {
      dayName: 'Thu',
      isDo: true,
    },

    {
      dayName: 'Fri',
      isDo: true,
    },
    {
      dayName: 'Sat',
      isDo: false,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText text={'Fasting'} style={styles.leftTxt} />
        <View style={styles.showIcon}>
          <AppText text={'Show more'} style={styles.showmore} />
          <AppIconSvg
            icon={Icons.ArrowRight}
            width={22}
            height={22}
            color="black"
          />
        </View>
      </View>
      {/* <View style={styles.todoContainer}>
        <View style={styles.verticalLine} />
        <FlatList
          data={array}
          horizontal
          renderItem={({item, index}) => (
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                // backgroundColor: 'red',
                // marginLeft: 20,
                // alignSelf: 'center',
                // alignContent: 'space-between',
                // marginHorizontal: 12,
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <View style={item.isDo ? styles.circleGreen : styles.circleWhite}>
                <Text
                  style={{
                    marginTop: 30,
                    position: 'absolute',
                    fontSize: 10,
                    textAlign: 'center',
                  }}>
                  {item.dayName}
                </Text>
              </View>
            </View>
          )}
        />
      </View> */}
    </View>
  );
};

export default WeeklyTodoTask;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  showIcon: {
    flexDirection: 'row',
  },
  leftTxt: {
    fontSize: 20,
    fontFamily: fonts.dmSans[500],
    color: COLORS.dark_gray,
  },
  showmore: {
    fontSize: 16,
    fontFamily: fonts.dmSans[500],
    color: COLORS.green,
  },
  recordContainer: {
    // backgroundColor: COLORS.light_Powder_Blue,
    backgroundColor: COLORS.black,
    borderRadius: 12,
    paddingVertical: 26,
  },
  verticalLine: {
    width: '90%',
    height: 2,
    backgroundColor: 'red',
    position: 'absolute',
    marginTop: 38,
    marginLeft: '2.5%',
  },
  circleGreen: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'green',
  },
  circleWhite: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    marginTop: -30,
  },
  dayName: {
    fontSize: 15,
    color: 'white',
    backgroundColor: 'red',
  },
  todoContainer: {
    width: '100%',
    height: 100,
    backgroundColor: 'orange',
  },
});
