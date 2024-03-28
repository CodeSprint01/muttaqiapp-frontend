import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '../../types/types';
import VaultSetting from '../../screens/setting/vault-setting/VaultSetting';
import VaultLoginsSetting from '../../screens/setting/vault-logins-setting/VaultLoginsSetting';
import LoginCredentials from '../../screens/setting/logins-credential/LoginCredentials';
import VaultSecureNotesSetting from '../../screens/setting/vault-secure-notes-setting/VaultSecureNotesSetting';
import ReadSecureNotes from '../../screens/setting/vault-secure-notes-setting/ReadSecureNotes';
import VaultCreditCardAdd from '../../screens/setting/vault-credit-cards/VaultCreditCardAdd';
import VaultCreditCardCreateUpdate from '../../screens/setting/vault-credit-cards/VaultCreditCardCreateUpdate';
import VaultIdentities from '../../screens/setting/vault-indentities/VaultIdentities';
import VaultIdentitiesCreateUpdate from '../../screens/setting/vault-indentities/VaultIdentitiesCreateUpdate';
import VaultPasswordAdd from '../../screens/setting/vault-password/VaultPasswordAdd';
import VaultPasswordCreateUpdate from '../../screens/setting/vault-password/VaultPasswordCreateUpdate';
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
      <Stack.Screen
        name={screens.LOGINS_CREDENTIALS}
        component={LoginCredentials}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.VAULT_SECURE_NOTES_SETTING}
        component={VaultSecureNotesSetting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.VAULT_SECURE_NOTES_READ}
        component={ReadSecureNotes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.VAULT_SECURE_NOTES_UPDATE}
        component={VaultSecureNotesSetting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.VAULT_CREDIT_CARD_ADD}
        component={VaultCreditCardAdd}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.VAULT_CREDIT_CARD_CREATE_UPDATE}
        component={VaultCreditCardCreateUpdate}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.VAULT_IDENTITIES_SETTING}
        component={VaultIdentities}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.VAULT_IDENTITIES_CREATE_UPDATE}
        component={VaultIdentitiesCreateUpdate}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.VAULT_PASSWORD_ADD}
        component={VaultPasswordAdd}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.VAULT_PASSWORD_CREATE_UPDATE}
        component={VaultPasswordCreateUpdate}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default VaultStack;
