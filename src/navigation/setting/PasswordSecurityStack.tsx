import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {screens} from '../../types/types';
import AllPasswords from '../../screens/setting/password-security/AllPasswords';
import ChangePassword from '../../screens/setting/password-security/ChangePassword';

const PasswordSecurityStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.ALL_PASSWORDS_SETTING}
        component={AllPasswords}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.CHANGE_PASSWORD}
        component={ChangePassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PasswordSecurityStack;
