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
      <ScrollView>
        <WeeklyStateSlider
          graphData={isShowGraph}
          handleEyeClick={index => handleFilterSliderData(index)}
        />
        <PrayerBarChart />
      </ScrollView>
    </AppContainer>
  );
};

export default TrackerScreen;

const styles = StyleSheet.create({
  screenHeader: {
    paddingHorizontal: 16,
    // backgroundColor: 'red',
  },
});
