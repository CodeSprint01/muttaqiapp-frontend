import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {screens} from '../../types/types';
import TermsConditionsSetting from '../../screens/setting/terms-conditions-setting/TermsConditionsSetting';

const TermsConditionsStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={screens.TERMS_CONDITION_SETTING}
        component={TermsConditionsSetting}
      />
    </Stack.Navigator>
  );
};

export default TermsConditionsStack;
