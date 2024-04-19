import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../components/molecules/app-header/ScreenHeader';
import UserProgressCard from './UserProgressCard';
import TodoTask from './TodoTask';
import PrayerProgress from './PrayerProgress';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteSunnahPrayer,
  updateSunnahPrayer,
} from '../../redux/prayer/action';
import BottomSheetOverlapView from '../../components/molecules/bottom-sheet-overlap/BottomSheetOverlapView';
import TodoTaskForm from './TodoTaskForm';
import SunnahPrayer from './SunnahPrayer';
import {State} from '../../types/types';

const AddTodoScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
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
  const dispatch = useDispatch();
  const snapPoint = useMemo(() => ['90%', '91%', '92%'], []);

  const handleCheckBox = (index: number) => {
    setPrayerData(prevState => {
      const updatedPrayerData = {...prevState};
      updatedPrayerData[Object.keys(updatedPrayerData)[index]] =
        !prevState[Object.keys(updatedPrayerData)[index]];
      return updatedPrayerData;
    });
    console.log(index);
  };
  const onPressAddTodo = () => {
    setIsVisible(true);
  };
  const sunnahData = useSelector(
    (state: State) => state?.prayerReducer?.sunnahPrayer,
  );
  console.log(sunnahData, 'iss all sun h');
  const onCheckSunnah = (id: number) => {
    console.log(id);
    dispatch(updateSunnahPrayer(id));
  };
  const onPressDelete = (id: number) => {
    console.log(id);
    dispatch(deleteSunnahPrayer(id));
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
            <TodoTask handleAddTodo={onPressAddTodo} />
          </View>
          <BottomSheetOverlapView
            showBottomSheet={isVisible}
            enableHeaderLine
            setShowBottomSheet={() => setIsVisible(false)}
            snapPoints={snapPoint}
            children={<TodoTaskForm />}
          />
          <View>
            <SunnahPrayer
              sunnahData={sunnahData}
              onToggleSunnah={id => onCheckSunnah(id)}
              onPressDelete={id => onPressDelete(id)}
            />
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
