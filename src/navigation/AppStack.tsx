import React from 'react';
import TabNavigator from './TabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import HomeStack from './HomeStack';
import {screens} from '../types/types';
const AppStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName={screens.TAB_NAVIGATOR}>
      <Stack.Screen
        name={screens.TAB_NAVIGATOR}
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeStack"
        component={HomeStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
