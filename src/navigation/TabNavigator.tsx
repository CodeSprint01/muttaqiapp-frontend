import {StyleSheet, View} from 'react-native';
import React from 'react';
import HomeStack from './HomeStack';
import QiblaStack from './QiblaStack';
import TrackerStack from './TrackerStack';
import SettingStack from './SettingStack';
import {COLORS} from '../styles/color';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabbarTabs from '../components/atoms/bottomTabBar-tabs/BottomTabbarTabs';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <BottomTabbarTabs name={route.name} focused={focused} />
          ),
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.light_gray,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '400',
          },
          tabBarStyle: {
            backgroundColor: COLORS.light_blue,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 25,
            marginBottom: 20,
            paddingTop: 16,
            paddingBottom: 16,
            height: 80,
            elevation: 0,
          },
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Qibla" component={QiblaStack} />
        <Tab.Screen name="Tracker" component={TrackerStack} />
        <Tab.Screen name="Setting" component={SettingStack} />
      </Tab.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default TabNavigator;