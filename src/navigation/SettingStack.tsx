import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import setting from '../screens/setting/Setting';

const SettingScreen = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="setting" component={setting} />
    </Stack.Navigator>
  );
};

export default SettingScreen;
