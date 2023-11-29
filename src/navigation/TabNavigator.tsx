import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeStack from './HomeStack';
import QiblaStack from './QiblaStack';
import TrackerStack from './TrackerStack';
import SettingStack from './SettingStack';
import {AppIconSvg, Icons} from '../components/atoms/app-icon-svg';
import {COLORS} from '../styles/color';
import {View} from 'react-native';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let svgImage;
            if (route.name === 'Home') {
              svgImage = (
                <AppIconSvg
                  icon={Icons.HomeTabIcon}
                  width={24}
                  height={24}
                  color={focused ? COLORS.primary : COLORS.light_gray}
                />
              );
            } else if (route.name === 'Qibla') {
              svgImage = (
                <AppIconSvg
                  icon={Icons.QiblaTabIcon}
                  width={24}
                  height={24}
                  color={focused ? COLORS.primary : COLORS.light_gray}
                />
              );
            } else if (route.name === 'Tracker') {
              svgImage = (
                <AppIconSvg
                  icon={Icons.TrackerTabIcon}
                  width={24}
                  height={24}
                  color={focused ? COLORS.primary : COLORS.light_gray}
                />
              );
            } else if (route.name === 'Setting') {
              svgImage = (
                <AppIconSvg
                  icon={Icons.SettingTabIcon}
                  width={24}
                  height={24}
                  color={focused ? COLORS.primary : COLORS.light_gray}
                />
              );
            }
            return svgImage;
          },
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
            marginBottom: 15,
            paddingTop: 16,
            paddingBottom: 16,
            height: 80,
            elevation: 0,
          },
        })}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Qibla" component={QiblaStack} />
        <Tab.Screen name="Tracker" component={TrackerStack} />
        <Tab.Screen name="Setting" component={SettingStack} />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigator;
