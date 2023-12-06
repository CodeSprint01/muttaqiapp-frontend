import React from 'react';
import TabNavigator from './TabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import UserProfile from '../screens/user-profile/UserProfile';
import {screen} from '../types/keyVlaue';
import ChangePassword from '../screens/user-profile/ChangePassword';

const MainStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName={screen.TAB_NAVIGATOR}>
      <Stack.Screen
        name={screen.TAB_NAVIGATOR}
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screen.USER_PROFILE}
        component={UserProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screen.CHANGE_PASSWORD}
        component={ChangePassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
