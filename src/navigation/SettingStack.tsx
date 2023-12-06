import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SettingUserScreen from '../screens/setting/SettingUserScreen';

const SettingStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SettingUserScreen" component={SettingUserScreen} />
    </Stack.Navigator>
  );
};

export default SettingStack;
