import React from 'react';
import TabNavigator from './TabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import UserProfile from '../screens/user-profile/UserProfile';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './HomeStack';
import {screens} from '../types/types';
import Knowledge from '../screens/knowledge-screen/Knowledge';
const MainStack = () => {
  const Stack = createStackNavigator();
  console.log('here is console o ');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNavigator">
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
