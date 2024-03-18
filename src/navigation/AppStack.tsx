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
