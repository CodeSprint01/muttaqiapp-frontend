import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {screens} from '../../types/types';
import InheritanceCalculationSetting from '../../screens/setting/inheritance-calculation-setting/InheritanceCalculationSetting';

const InheritanceCalculationStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={screens.INHERITANCE_CALCULATION_SETTING}
        component={InheritanceCalculationSetting}
      />
    </Stack.Navigator>
  );
};

export default InheritanceCalculationStack;
