import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SettingScreen from '../screens/setting/SettingScreen';

const SettingStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default SettingStack;
