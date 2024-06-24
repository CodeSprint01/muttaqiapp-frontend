import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {screens} from '../types/types';
import TrackerScreen from '../screens/Tracker/TrackerScreen';
import AllDetailsStats from '../screens/Tracker/AllDetailsStats';
import AllTodoStatsScreens from '../screens/Tracker/AllTodoStatsScreens';

const TrackerStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screens.TRACKER_SCREEN} component={TrackerScreen} />
      <Stack.Screen
        name={screens.ALL_DETAILS_STATS}
        component={AllDetailsStats}
      />
      <Stack.Screen
        name={screens.ALL_TODO_STATS_SCREENS}
        component={AllTodoStatsScreens}
      />
    </Stack.Navigator>
  );
};

export default TrackerStack;
