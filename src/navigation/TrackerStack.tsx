import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Tracker from '../screens/Tracker/Tracker';

const TrackerStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tracker" component={Tracker} />
    </Stack.Navigator>
  );
};

export default TrackerStack;
