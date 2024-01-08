import {StyleSheet} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SurahScreen from './SurahScreen';
import JuzScreen from './JuzScreen';
import BookmarksScreen from './BookmarksScreen';
import {COLORS} from '../../../styles/color';
import {Text} from 'react-native-svg';

const TopTabs = () => {
  const Tab = createMaterialTopTabNavigator();
  const design = () => ({
    tabBarActiveTintColor: COLORS.green,
    tabBarInactiveTintColor: COLORS.lightGray,
    tabBarPressOpacity: 0.1,
    tabBarIndicatorStyle: {
      backgroundColor: COLORS.green,
      height: 3,
      borderRadius: 14,
    },
    tabBarLabelStyle: {
      textTransform: 'capitalize',
      fontSize: 17,
      fontWeight: '700',
    },
    tabBarStyle: {backgroundColor: COLORS.pale_mint},
  });

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="SurahScreen"
        component={SurahScreen}
        options={{...design(), title: 'Surah'}}
      />
      <Tab.Screen
        name="JuzScreen"
        component={JuzScreen}
        options={{...design(), title: 'Juz'}}
      />
      <Tab.Screen
        name="BookmarksScreen"
        component={BookmarksScreen}
        options={{...design(), title: 'Bookmarks'}}
      />
    </Tab.Navigator>
  );
};

export default TopTabs;

const styles = StyleSheet.create({
  tabStyle: {},
});
