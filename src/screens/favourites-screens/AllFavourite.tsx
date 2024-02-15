import {StyleSheet, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../components/molecules/app-header/ScreenHeader';
import {Icons} from '../../utils/helper/svg';
import {screens} from '../../types/types';
import {COLORS, fonts} from '../../styles/color';
import AllFavourite from './top-tabs/AllFavourite';
import QuranFavourite from './top-tabs/QuranFavourite';
import AzkarFavourite from './top-tabs/AzkarFavourite';
import DuaFavourite from './top-tabs/DuaFavourite';
import HadithFavourite from './top-tabs/HadithFavourite';

const AllFavourites = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <AppContainer>
      <View style={styles.container}>
        <ScreenHeader headerText="Favourites" rightIcon={Icons.Search} />
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
              name={screens.ALL_FAVOURITE}
              component={AllFavourite}
              options={{tabBarLabel: 'All'}}
            />
            <Tab.Screen
              name={screens.QURAN_FAVOURITE}
              component={QuranFavourite}
              options={{tabBarLabel: 'Quran'}}
            />
            <Tab.Screen
              name={screens.AZKAR_FAVOURITE}
              component={AzkarFavourite}
              options={{tabBarLabel: 'Azkar'}}
            />
            <Tab.Screen
              name={screens.DUA_FAVOURITE}
              component={DuaFavourite}
              options={{tabBarLabel: 'Dua'}}
            />
            <Tab.Screen
              name={screens.HADITH_FAVOURITE}
              component={HadithFavourite}
              options={{tabBarLabel: 'Hadith'}}
            />
          </Tab.Navigator>
        </View>
      </View>
    </AppContainer>
  );
};

export default AllFavourites;

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
