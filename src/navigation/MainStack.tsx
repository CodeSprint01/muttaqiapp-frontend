import React from 'react';
import TabNavigator from './TabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import UserProfile from '../screens/user-profile/UserProfile';

const MainStack = () => {
  const Stack = createStackNavigator();

  return (
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
    </Stack.Navigator>
  );
};

export default MainStack;
