import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {screens} from '../../types/types';
import ZakatCalculationSetting from '../../screens/setting/zakat-calculation-setting/ZakatCalculationSetting';

const ZakatCalculationStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={screens.ZAKAT_CALCULATION_SETTING}
        component={ZakatCalculationSetting}
      />
    </Stack.Navigator>
  );
};

export default ZakatCalculationStack;
