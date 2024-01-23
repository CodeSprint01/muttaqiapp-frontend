import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import QiblaScreen from '../screens/Qibla/QiblaScreen';

const QiblaStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="QiblaScreen" component={QiblaScreen} />
    </Stack.Navigator>
  );
};

export default QiblaStack;
