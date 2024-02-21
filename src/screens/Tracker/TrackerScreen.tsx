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
import {FastingArray} from '../../utils/mocks/tracker/FastingArray';
import {QiyamArray} from '../../utils/mocks/tracker/QiyamPrayerArray';
import {SurahMulkArray} from '../../utils/mocks/tracker/SurahMulk';
import {AllPrayersArray} from '../../utils/mocks/tracker/prayer-arrays/AllPrayersArray';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../types/types';
import TrackerTodoTask from './todo-task-record-screen/TrackerTodoTask';

const TrackerScreen = () => {
  const navigation = useNavigation();
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
        <View style={styles.prayerChart}>
          <PrayerBarChart
            ArrayName={AllPrayersArray}
            weeklyAveg={54}
            fallAveg={46}
            title="Prayer/Namaz"
            isWithDate={false}
            handleShowmore={() =>
              navigation.navigate(screens.ALL_DETAILS_STATS)
            }
          />
        </View>
        <TrackerTodoTask
          isShowmore={true}
          todoName="Fasting"
          todoArray={FastingArray}
          handelShowmore={() =>
            navigation.navigate(screens.ALL_TODO_STATS_SCREENS)
          }
        />
        <TrackerTodoTask
          isShowmore={true}
          todoName="Qiyam prayer"
          todoArray={QiyamArray}
        />
        <TrackerTodoTask
          isShowmore={true}
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
  prayerChart: {
    paddingHorizontal: 20,
  },
  bottomView: {
    paddingBottom: 110,
  },
});
