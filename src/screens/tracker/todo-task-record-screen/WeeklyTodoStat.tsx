import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import TrackerTodoTask from './TrackerTodoTask';
import {FastingArray} from '../../../utils/mocks/tracker/FastingArray';
import {COLORS} from '../../../styles/color';

const WeeklyTodoStat = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TrackerTodoTask todoArray={FastingArray} todoName="14-20 Jan,2020" />
      <TrackerTodoTask todoArray={FastingArray} todoName="14-20 Jan,2020" />
      <TrackerTodoTask todoArray={FastingArray} todoName="14-20 Jan,2020" />
      <TrackerTodoTask todoArray={FastingArray} todoName="14-20 Jan,2020" />
      <TrackerTodoTask todoArray={FastingArray} todoName="14-20 Jan,2020" />
      <TrackerTodoTask todoArray={FastingArray} todoName="14-20 Jan,2020" />
      <View style={styles.botttomView} />
    </ScrollView>
  );
};

export default WeeklyTodoStat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pale_mint,
  },
  botttomView: {
    paddingBottom: 120,
  },
});
