import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../components/molecules/app-header/ScreenHeader';
import UserProgressCard from './UserProgressCard';
import TodoTask from './TodoTask';
import PrayerProgress from './PrayerProgress';
import {useDispatch} from 'react-redux';
import {addToDoTask} from '../../redux/prayer/action';
import BottomSheetOverlapView from '../../components/molecules/bottom-sheet-overlap/BottomSheetOverlapView';
import AppText from '../../components/atoms/app-text/AppText';
import TodoTaskForm from './TodoTaskForm';
import SunnahList from './SunnahList';
import SunnahTaskForm from './SunnahTaskForm';
import DeleteModal from '../../components/organisums/delete-modal/DeleteModal';

const AddTodoScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [onToggleCheck, setOnToggleCheck] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [sunnahListVisible, setSunnahListVisible] = useState(false);
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
    // dispatch(addToDoTask())
    setIsVisible(true);
  };
  const onToggleCheckBox = () => {
    setOnToggleCheck(prev => !prev);
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
            <TodoTask
              todoName="Read surat Al-mulk before sleep"
              repeatText="daily"
              handleAddTodo={onPressAddTodo}
              handleUpdateTodo={onPressAddTodo}
              isCheckBox={onToggleCheck}
              handleCheckBox={onToggleCheckBox}
              handleDeleteTodo={() => setDeleteModal(true)}
            />
          </View>
          <View style={styles.todoConntainer}>
            <SunnahList
              handleAddSunnah={() => {
                setSunnahListVisible(true);
              }}
              isCheckBox={onToggleCheck}
              handleCheckBox={onToggleCheckBox}
              SunnahName={'Before Fajr (2)'}
            />
          </View>
        </View>
      </ScrollView>
      <BottomSheetOverlapView
        showBottomSheet={isVisible}
        enableHeaderLine
        setShowBottomSheet={() => setIsVisible(false)}
        snapPoints={snapPoint}
        children={<TodoTaskForm />}
      />
      <BottomSheetOverlapView
        showBottomSheet={sunnahListVisible}
        enableHeaderLine
        setShowBottomSheet={() => setSunnahListVisible(false)}
        snapPoints={snapPoint}
        children={<SunnahTaskForm />}
      />
      <DeleteModal
        isVisible={deleteModal}
        CrossBtnPress={() => setDeleteModal(false)}
        modalText={'Are you sure you want to delete this task ?'}
        leftBtnText={'Delete'}
        rightBtnText={'Cancel'}
        leftOnPress={() => setDeleteModal(false)}
        rightOnPress={() => setDeleteModal(false)}
      />
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
