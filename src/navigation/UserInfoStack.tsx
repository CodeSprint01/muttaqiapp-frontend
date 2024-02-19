import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '../types/types';
import GeneralInformation from '../screens/user-info-screens/general-information/GeneralInformation';
import FamilyInformationFirstFrom from '../screens/user-info-screens/family-information/FamilyInformationFirstFrom';
import AppStack from './AppStack';
const UserInfoStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.GENERAL_INFORMATION}
        component={GeneralInformation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.FAMILY_INFORMATION_FIRST_FORM}
        component={FamilyInformationFirstFrom}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={screens.APP_STACK}
        component={AppStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default UserInfoStack;
