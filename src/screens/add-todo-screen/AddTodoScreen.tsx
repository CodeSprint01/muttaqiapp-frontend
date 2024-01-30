import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../components/molecules/app-header/ScreenHeader';
import UserProgressCard from './UserProgressCard';
import TodoTask from './TodoTask';
import PrayerProgress from './PrayerProgress';

const AddTodoScreen = () => {
  const [prayerTime, setprayerTime] = useState({
    fajr: true,
    duhr: true,
    asr: true,
    maghrib: false,
    isha: false,
  });
  const [prayerData, setPrayerData] = useState({
    fajr: false,
    duhr: false,
    asr: false,
    maghrib: false,
    isha: false,
  });

  const handleCheckBox = (index: number) => {
    setPrayerData(prevState => {
      const updatedPrayerData = {...prevState};
      updatedPrayerData[Object.keys(updatedPrayerData)[index]] =
        !prevState[Object.keys(updatedPrayerData)[index]];
      return updatedPrayerData;
    });
    console.log(index);
  };

  return (
    <AppContainer>
      <ScrollView>
        <View style={{paddingHorizontal: 20}}>
          <ScreenHeader headerText="Planner" />
        </View>
        <View style={styles.container}>
          <UserProgressCard totalTask={8} completeTask={6} circleValue={60} />
          <View style={styles.pyayerContainer}>
            <PrayerProgress
              prayerTime={prayerTime}
              prayerData={prayerData}
              handleCheckBox={handleCheckBox}
            />
          </View>
          <View style={styles.todoConntainer}>
            <TodoTask handleAddTodo={() => console.log('add to do')} />
          </View>
        </View>
      </ScrollView>
    </AppContainer>
  );
};

export default AddTodoScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
  todoConntainer: {
    paddingHorizontal: 20,
  },
  pyayerContainer: {
    // backgroundColor: 'pink',
    paddingHorizontal: 20,
    paddingTop: 34,
  },
});
