import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import HomeStack from './HomeStack';
import QiblaStack from './QiblaStack';
import TrackerStack from './TrackerStack';
import SettingStack from './SettingStack';
import {COLORS} from '../styles/color';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabbarTabs from '../components/atoms/bottomTabBar-tabs/BottomTabbarTabs';
import AddTodo from '../screens/add-todo-screen/AddTodo';
import {AppIconSvg, Icons} from '../components/atoms/app-icon-svg';
import LinearGradient from 'react-native-linear-gradient';
import HomeScreen from '../screens/home-screen/HomeScreen';
import {screens} from '../types/types';
import AppContainer from '../components/atoms/app-container/AppContainer';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const CustomTabBarIcon = ({onPress, children}) => (
    <TouchableOpacity
      activeOpacity={8}
      onPress={onPress}
      style={{top: -36, justifyContent: 'center', alignItems: 'center'}}>
      <LinearGradient
        colors={['#1290A1', '#1DA28F']}
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          paddingTop: 14,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <AppContainer style={styles.container}>
      {/* <View style={{styles.}}> */}
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
            backgroundColor: COLORS.white,
            width: '92%',
            alignSelf: 'center',
            position: 'absolute',
            borderRadius: 25,
            borderWidth: 1,
            borderColor: COLORS.white,
            marginBottom: 2,
            marginTop: 5,
            marginLeft: '4%',
            paddingTop: 16,
            paddingBottom: 16,
            height: 80,
            elevation: 2,
          },
          headerShown: false,
        })}>
        <Tab.Screen
          name={screens.TAB_HOME}
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Tab.Screen
          name={screens.TAB_QIBLA}
          component={QiblaStack}
          options={{title: 'Qibla'}}
        />
        <Tab.Screen
          name={screens.TAB_TO_DO}
          component={AddTodo}
          options={{
            tabBarIcon: ({focused}) => (
              <AppIconSvg
                icon={Icons.PlusIcon}
                width={36}
                height={36}
                color={COLORS.white}
              />
            ),
            tabBarButton: (props: any) => <CustomTabBarIcon {...props} />,
            tabBarLabel: '',
          }}
        />
        <Tab.Screen
          name={screens.TAB_TRACKER}
          component={TrackerStack}
          options={{title: 'Tracker'}}
        />
        <Tab.Screen
          name={screens.TAB_SETTING}
          component={SettingStack}
          options={{title: 'Setting'}}
        />
      </Tab.Navigator>
    </AppContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pale_mint,
  },
  customTabButton: {
    backgroundColor: COLORS.green,
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -46,
  },
});

export default TabNavigator;
