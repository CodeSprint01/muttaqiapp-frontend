import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '../../types/types';
import VaultSetting from '../../screens/setting/vault-setting/VaultSetting';
import VaultLoginsSetting from '../../screens/setting/vault-logins-setting/VaultLoginsSetting';
const VaultStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.VAULT_SETTING}
        component={VaultSetting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.VAULT_LOGINS_SETTING}
        component={VaultLoginsSetting}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default VaultStack;
