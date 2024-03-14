import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainSetting from '../screens/setting/main-setting/MainSetting';

const SettingStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainSetting" component={MainSetting} />
    </Stack.Navigator>
  );
};

export default SettingStack;
