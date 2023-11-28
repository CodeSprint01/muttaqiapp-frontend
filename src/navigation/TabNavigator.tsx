import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeStack from './HomeStack';
import Qibla from '../screens/Qibla/Qibla';
import Tracker from '../screens/Tracker/Tracker';
import Setting from '../screens/setting/Setting';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={HomeStack} />
      <Tab.Screen name="Qibla" component={Qibla} />
      <Tab.Screen name="Tracker" component={Tracker} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
