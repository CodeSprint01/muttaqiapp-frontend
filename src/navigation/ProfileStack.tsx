import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import UserProfile from '../screens/user-profile/UserProfile';

const ProfileStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="UserProfile" component={UserProfile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
