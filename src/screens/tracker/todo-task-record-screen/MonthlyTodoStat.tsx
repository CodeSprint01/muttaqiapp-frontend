import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet, FlatList, Platform} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {COLORS, fonts} from '../../../styles/color';

const MonthlyTodoStat = () => {
  const [months, setMonths] = useState<Date[]>([]);
  const flatListRef = useRef(null);
  const dataSele = {
    selected: true,
    selectedColor: '#F5DC80',
    color: 'black',
    selectedTextColor: 'black',
  };
  const userData = {
    '2024-02-06': dataSele,
    '2024-02-13': dataSele,
    '2024-02-20': dataSele,
    '2024-02-27': dataSele,
    '2024-02-01': dataSele,
    '2024-02-08': dataSele,
    '2024-02-15': dataSele,
    '2024-02-22': dataSele,
    '2024-02-29': dataSele,
  };

  useEffect(() => {
    const initialMonths = [];
    const today = new Date();
    for (let i = 0; i < 2; i++) {
      const month = new Date(today.getFullYear(), today.getMonth() - i, 1);
      initialMonths.push(month);
    }
    setMonths(initialMonths);
  }, []);

  const renderMonthItem = ({item}) => {
    const monthName = item.toLocaleDateString('en-US', {month: 'long'});
    console.log(monthName);
    return (
      <View style={styles.calenderContainer}>
        <Calendar
          key={item.getTime()}
          style={styles.monthContainer}
          current={item}
          minDate={item}
          maxDate={item}
          hideArrows={true}
          disableAllTouchEventsForInactiveDays={true}
          theme={styles.themeSty}
          markedDates={userData}
        />
      </View>
    );
  };

  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <FlatList
          ref={flatListRef}
          data={months}
          renderItem={renderMonthItem}
          showsVerticalScrollIndicator={false}
          style={{
            width: '100%',
          }}
        />
      </View>
      <View style={styles.bottomVew} />
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
  },
  calenderContainer: {
    borderRadius: 24,
    paddingBottom: 20,
    backgroundColor: COLORS.pale_mint,
    elevation: 10,
    marginVertical: 30,
    alignSelf: 'center',
    width: '90%',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 5,
          height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 13,
      },
    }),
  },
  monthContainer: {
    width: '100%',
    backgroundColor: COLORS.pale_mint,
    borderRadius: 24,
  },
  themeSty: {
    calendarBackground: COLORS.pale_mint,
    textSectionTitleColor: COLORS.green,
    selectedDayBackgroundColor: 'blue',
    selectedDayTextColor: 'pink',
    textDayFontSize: 12,
    textDayFontFamily: fonts.dmSans[400],
    dayTextColor: COLORS.dark_gray,
    backgroundColor: 'green',
    monthTextColor: COLORS.very_dark_gray,
    todayTextColor: COLORS.dark_gray,
    textDisabledColor: COLORS.dark_gray,
    textDayHeaderFontFamily: fonts.dmSans[500],
    textMonthFontSize: 20,
    textDayHeaderFontSize: 10,
    textMonthFontFamily: fonts.dmSans[500],
  },
  bottomVew: {
    paddingBottom: 82,
    backgroundColor: COLORS.pale_mint,
  },
});

export default MonthlyTodoStat;
