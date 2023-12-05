import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SettingScreen from '../screens/setting/SettingScreen';
import {screen} from '../types/keyVlaue';

const SettingStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screen.SETTING_SCREEN} component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default SettingStack;
