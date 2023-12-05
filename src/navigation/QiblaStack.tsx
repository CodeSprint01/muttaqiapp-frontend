import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import QiblaScreen from '../screens/Qibla/QiblaScreen';
import {screen} from '../types/keyVlaue';

const QiblaStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screen.QIBLA_SCREEN} component={QiblaScreen} />
    </Stack.Navigator>
  );
};

export default QiblaStack;
