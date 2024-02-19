import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '../types/types';
import SignUp from '../screens/authentication/SignUp';
import SignIn from '../screens/authentication/SignIn';
import WelcomeUser from '../screens/authentication/WelcomeUser';
import UserInfoStack from './UserInfoStack';
const AuthStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName={screens.USER_INFO_STACK}>
      <Stack.Screen
        name={screens.SIGN_UP}
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.SIGN_IN}
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.WELCOME_USER}
        component={WelcomeUser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.USER_INFO_STACK}
        component={UserInfoStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
