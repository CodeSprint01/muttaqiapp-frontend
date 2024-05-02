import React from 'react';
import TabNavigator from './TabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import HomeStack from './HomeStack';
import {screens} from '../types/types';
import ProfileStack from './setting/ProfileStack';
import HelpSupportSetting from '../screens/setting/help-support-setting/HelpSupportSetting';
import FAQSetting from '../screens/setting/FAQ-setting/FAQSetting';
import AboutMuttaqiSetting from '../screens/setting/about-muttaqi-setting/AboutMuttaqiSetting';
import PrivacyPolicySetting from '../screens/setting/privacy-policy-setting/PrivacyPolicySetting';
import LanguageSetting from '../screens/setting/language-setting/LanguageSetting';
import VaultSetting from '../screens/setting/vault-setting/VaultSetting';
import VaultStack from './setting/VaultStack';
import NotificationSetting from '../screens/setting/notification-settting/NotificationSetting';
import PasswordSecurityStack from './setting/PasswordSecurityStack';
import VaultCreateDetails from '../screens/setting/create-vault/VaultCreateDetails';
import CreateNewVault from '../screens/setting/create-vault/CreateNewVault';
import ForgotVaultPassword from '../screens/setting/create-vault/ForgotVaultPassword';
import VaultOtpVerify from '../screens/setting/create-vault/VaultOtpVerify';
const AppStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName={screens.TAB_NAVIGATOR}>
      <Stack.Screen
        name={screens.TAB_NAVIGATOR}
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.HOME_STACK}
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.PROFILE_STACK}
        component={ProfileStack}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={screens.HELP_SUPPORT_SETTING}
        component={HelpSupportSetting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.FREQUENTLY_ASKED_QUESTION_SETTING}
        component={FAQSetting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.ABOUT_MUTTAQI_SETTING}
        component={AboutMuttaqiSetting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.PRIVACY_POLICY_SETTING}
        component={PrivacyPolicySetting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.LANGUAGE_SETTING}
        component={LanguageSetting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.VAULT_STACK}
        component={VaultStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.NOTIFICATION_SETTINGS}
        component={NotificationSetting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.PASSWORD_SECURITY_STACK}
        component={PasswordSecurityStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.VAULT_CREATE_DETAILS}
        component={VaultCreateDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.CREATE_NEW_VAULT}
        component={CreateNewVault}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.FORGOT_VAULT_PASSWORD}
        component={ForgotVaultPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.VAULT_OTP_VERIFY}
        component={VaultOtpVerify}
        options={{headerShown: false}}
      />
      {/*
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default AppStack;
