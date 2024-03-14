import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import UserProfileSetting from '../screens/setting/user-profile-setting/UserProfileSetting';
import {screens} from '../types/types';

const ProfileStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={screens.USER_PROFILE_SETTING}
        component={UserProfileSetting}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
