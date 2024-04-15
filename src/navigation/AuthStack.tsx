import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '../types/types';
import SignUp from '../screens/authentication/SignUp';
import SignIn from '../screens/authentication/SignIn';
import WelcomeUser from '../screens/authentication/WelcomeUser';
import UserInfoStack from './UserInfoStack';
import ForgotPassword from '../screens/authentication/ForgotPassword';
import OTPScreen from '../screens/authentication/OTPScreen';
import NewPassword from '../screens/authentication/NewPassword';
const AuthStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName={screens.SIGN_UP}>
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
        name={screens.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.OTP_SCREEN}
        component={OTPScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.NEW_PASSWORD}
        component={NewPassword}
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
