import React from 'react';
import TabNavigator from './TabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';
import {screens} from '../types/types';
import AppStack from './AppStack';
const MainStack = () => {
  const Stack = createStackNavigator();
  console.log('here is console o ');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={screens.AUTH_STACK}
          component={AuthStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screens.APP_STACK}
          component={AppStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
