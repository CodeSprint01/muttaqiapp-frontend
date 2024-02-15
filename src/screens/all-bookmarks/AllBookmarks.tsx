import {StyleSheet, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import AllBookmark from './top-tabs/AllBookmark';
import QuranBookmark from './top-tabs/QuranBookmark';
import AzkarBookmark from './top-tabs/AzkarBookmark';
import DuaBookmark from './top-tabs/DuaBookmark';
import HadithBookmark from './top-tabs/HadithBookmark';
import ScreenHeader from '../../components/molecules/app-header/ScreenHeader';
import {Icons} from '../../utils/helper/svg';
import {screens} from '../../types/types';
import {COLORS, fonts} from '../../styles/color';

const AllBookmarks = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <AppContainer>
      <View style={styles.container}>
        <ScreenHeader headerText="Bookmarks" rightIcon={Icons.Search} />
        <View style={styles.tabContainer}>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: {
                fontSize: 20,
                textTransform: 'none',
                fontFamily: fonts.dmSans[700],
              },
              tabBarIndicatorStyle: {
                backgroundColor: COLORS.green,
                height: 3,
                borderRadius: 14,
              },
              tabBarItemStyle: {width: 100},
              tabBarStyle: {backgroundColor: COLORS.pale_mint},
              tabBarScrollEnabled: true,
              tabBarActiveTintColor: COLORS.green,
              tabBarInactiveTintColor: COLORS.light_gray,
              tabBarPressOpacity: 0.3,
            }}>
            <Tab.Screen
              name={screens.ALL_BOOKMARK}
              component={AllBookmark}
              options={{tabBarLabel: 'All'}}
            />
            <Tab.Screen
              name={screens.QURAN_BOOKMARK}
              component={QuranBookmark}
              options={{tabBarLabel: 'Quran'}}
            />
            <Tab.Screen
              name={screens.AZKAR_BOOKMARK}
              component={AzkarBookmark}
              options={{tabBarLabel: 'Azkar'}}
            />
            <Tab.Screen
              name={screens.DUA_BOOKMARK}
              component={DuaBookmark}
              options={{tabBarLabel: 'Dua'}}
            />
            <Tab.Screen
              name={screens.HADITH_BOOKMARK}
              component={HadithBookmark}
              options={{tabBarLabel: 'Hadith'}}
            />
          </Tab.Navigator>
        </View>
      </View>
    </AppContainer>
  );
};

export default AllBookmarks;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: COLORS.pale_mint,
    flex: 1,
  },
  tabContainer: {
    marginTop: 3,
    flex: 1,
  },
});
