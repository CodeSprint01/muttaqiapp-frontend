import {StyleSheet, View, Dimensions} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../components/molecules/app-header/ScreenHeader';
import {Icons} from '../../utils/helper/svg';
import {screens} from '../../types/types';
import {COLORS, fonts} from '../../styles/color';
import WeeklyTodoStat from './todo-task-record-screen/WeeklyTodoStat';
import MonthlyTodoStat from './todo-task-record-screen/MonthlyTodoStat';
import YearlyTodoStat from './todo-task-record-screen/YearlyTodoStat';

const AllTodoStatsScreens = () => {
  const Tab = createMaterialTopTabNavigator();
  const screenWidth = Dimensions.get('window').width;
  console.log(screenWidth);

  return (
    <AppContainer>
      <View style={styles.container}>
        <View style={{paddingHorizontal: 20}}>
          <ScreenHeader headerText="Fasting stats" rightIcon={Icons.Search} />
        </View>
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
                marginHorizontal: 20,
              },
              tabBarItemStyle: {width: screenWidth / 3.34},
              tabBarStyle: {backgroundColor: COLORS.pale_mint},
              tabBarScrollEnabled: true,
              tabBarActiveTintColor: COLORS.green,
              tabBarInactiveTintColor: COLORS.light_gray,
              tabBarPressOpacity: 0.3,
              tabBarContentContainerStyle: {
                marginHorizontal: 20,
              },
            }}>
            <Tab.Screen
              name={screens.WEEKLY_TODO_STAT}
              component={WeeklyTodoStat}
              options={{tabBarLabel: 'Weekly'}}
            />
            <Tab.Screen
              name={screens.MONTHLY_TODO_STAT}
              component={MonthlyTodoStat}
              options={{tabBarLabel: 'Monthly'}}
            />
            <Tab.Screen
              name={screens.YEARLY_TODO_STAT}
              component={YearlyTodoStat}
              options={{tabBarLabel: 'Yearly'}}
            />
          </Tab.Navigator>
        </View>
      </View>
    </AppContainer>
  );
};

export default AllTodoStatsScreens;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
    backgroundColor: COLORS.pale_mint,
    flex: 1,
  },
  tabContainer: {
    marginTop: 3,
    flex: 1,
    // paddingHorizontal: 20,
  },
});
