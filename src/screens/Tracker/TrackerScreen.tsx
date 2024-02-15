import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import WeeklyStateSlider from './weekly-slider/WeeklyStateSlider';
import ScreenHeader from '../../components/molecules/app-header/ScreenHeader';
import {
  StatsList,
  StatsListArray,
} from '../../utils/mocks/tracker/StatsListArray';
import PrayerBarChart from './prayer-namaz/PrayerBarChart';
import WeeklyTodoTask from './todo-task-record/WeeklyTodoTask';
import {FastingArray} from '../../utils/mocks/tracker/FastingArray';
import {QiyamArray} from '../../utils/mocks/tracker/QiyamPrayerArray';
import {SurahMulkArray} from '../../utils/mocks/tracker/SurahMulk';

const TrackerScreen = () => {
  const [isShowGraph, setIsShowGraph] = useState<StatsList[]>(StatsListArray);
  const handleFilterSliderData = (index: number) => {
    console.log(index);
    const graphData = [...isShowGraph];
    graphData[index].isShowEye = !graphData[index]?.isShowEye;
    setIsShowGraph(graphData);
  };

  return (
    <AppContainer>
      <ScreenHeader headerText="Stats" extraStyle={styles.screenHeader} />
      <ScrollView style={styles.scrolView}>
        <WeeklyStateSlider
          graphData={isShowGraph}
          handleEyeClick={index => handleFilterSliderData(index)}
        />
        <PrayerBarChart />
        <WeeklyTodoTask todoName="Fasting" todoArray={FastingArray} />
        <WeeklyTodoTask todoName="Qiyam prayer" todoArray={QiyamArray} />
        <WeeklyTodoTask
          todoName="Read surat Al-mulk before"
          todoArray={SurahMulkArray}
        />
        <View style={styles.bottomView} />
      </ScrollView>
    </AppContainer>
  );
};

export default TrackerScreen;

const styles = StyleSheet.create({
  screenHeader: {
    paddingHorizontal: 16,
  },
  scrolView: {
    flex: 1,
  },
  bottomView: {
    paddingBottom: 110,
  },
});
