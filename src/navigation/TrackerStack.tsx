import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import TrackerScreen from '../screens/tracker/TrackerScreen';

const TrackerStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TrackerScreen" component={TrackerScreen} />
    </Stack.Navigator>
  );
};

export default TrackerStack;
