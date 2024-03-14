import React from 'react';
import TabNavigator from './TabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import HomeStack from './HomeStack';
import {screens} from '../types/types';
import ProfileStack from './setting/ProfileStack';
import UserProfileSetting from '../screens/setting/user-profile-setting/UserProfileSetting';
import HelpSupportSetting from '../screens/setting/help-support-setting/HelpSupportSetting';
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
        name={screens.HOME_STACK}
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.PROFILE_STACK}
        component={ProfileStack}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={screens.HELP_SUPPORT_SETTING}
        component={HelpSupportSetting}
        options={{headerShown: false}}
      />
      {/*
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default AppStack;
