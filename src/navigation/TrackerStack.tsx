import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import TrackerScreen from '../screens/tracker/TrackerScreen';
import AllDetailsStats from '../screens/tracker/AllDetailsStats';
import {screens} from '../types/types';

const TrackerStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screens.TRACKER_SCREEN} component={TrackerScreen} />
      <Stack.Screen
        name={screens.ALL_DETAILS_STATS}
        component={AllDetailsStats}
      />
    </Stack.Navigator>
  );
};

export default TrackerStack;
