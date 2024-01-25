import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../components/molecules/app-header/ScreenHeader';
import UserProgressCard from './UserProgressCard';
import TodoTask from './TodoTask';

const AddTodoScreen = () => {
  return (
    <AppContainer>
      <ScrollView>
        <View style={{paddingHorizontal: 20}}>
          <ScreenHeader headerText="Planner" />
        </View>
        <View style={styles.container}>
          <UserProgressCard totalTask={8} completeTask={6} circleValue={60} />
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
});
