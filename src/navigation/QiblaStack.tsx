import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Qibla from '../screens/Qibla/Qibla';

const QiblaStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Qibla" component={Qibla} />
    </Stack.Navigator>
  );
};

export default QiblaStack;
