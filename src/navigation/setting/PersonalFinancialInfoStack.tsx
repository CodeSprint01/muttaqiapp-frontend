import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {screens} from '../../types/types';
import PersonalFinancialInfoSetting from '../../screens/setting/personal-financial-info-setting/PersonalFinancialInfoSetting';

const PersonalFinancialInfoStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={screens.PERSONAL_FINANCIAL_INFO_SETTING}
        component={PersonalFinancialInfoSetting}
      />
    </Stack.Navigator>
  );
};

export default PersonalFinancialInfoStack;
