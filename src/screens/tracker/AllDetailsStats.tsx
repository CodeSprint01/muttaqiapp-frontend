import {StyleSheet, View, Dimensions} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../components/molecules/app-header/ScreenHeader';
import {Icons} from '../../utils/helper/svg';
import {screens} from '../../types/types';
import {COLORS, fonts} from '../../styles/color';
import WeeklyStats from './details-stats-screens/WeeklyStats';
import MonthlyStats from './details-stats-screens/MonthlyStats';
import YearlyStats from './details-stats-screens/YearlyStats';

const AllDetailsStats = () => {
  const Tab = createMaterialTopTabNavigator();
  const screenWidth = Dimensions.get('window').width;
  console.log(screenWidth);

  return (
    <AppContainer>
      <View style={styles.container}>
        <ScreenHeader headerText="Bookmarks" rightIcon={Icons.Search} />
        <View style={styles.tabContainer}>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: {
                fontSize: 16,
                textTransform: 'none',
                fontFamily: fonts.dmSans[700],
              },
              tabBarIndicatorStyle: {
                backgroundColor: COLORS.green,
                height: 3,
                borderRadius: 14,
              },
              tabBarItemStyle: {width: screenWidth / 3.34},
              tabBarStyle: {backgroundColor: COLORS.pale_mint},
              tabBarScrollEnabled: true,
              tabBarActiveTintColor: COLORS.green,
              tabBarInactiveTintColor: COLORS.light_gray,
              tabBarPressOpacity: 0.3,
            }}>
            <Tab.Screen
              name={screens.WEEKLY_STATS}
              component={WeeklyStats}
              options={{tabBarLabel: 'Weekly'}}
            />
            <Tab.Screen
              name={screens.MONTHLY_STATS}
              component={MonthlyStats}
              options={{tabBarLabel: 'Monthly'}}
            />
            <Tab.Screen
              name={screens.YEARLY_STATS}
              component={YearlyStats}
              options={{tabBarLabel: 'Yearly'}}
            />
          </Tab.Navigator>
        </View>
      </View>
    </AppContainer>
  );
};

export default AllDetailsStats;

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
