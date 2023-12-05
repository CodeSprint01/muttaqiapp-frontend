import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import TrackerScreen from '../screens/Tracker/TrackerScreen';
import {screen} from '../types/keyVlaue';

const TrackerStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screen.TRACKER_SCREEN} component={TrackerScreen} />
    </Stack.Navigator>
  );
};

export default TrackerStack;
