import {StyleSheet, TouchableOpacity, View} from 'react-native';
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
            backgroundColor: COLORS.pale_mint,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 25,
            marginBottom: 20,
            paddingTop: 16,
            paddingBottom: 16,
            height: 80,
            elevation: 1,
          },
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Qibla" component={QiblaStack} />
        <Tab.Screen
          name="AddTodo"
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
  customTabButton: {
    backgroundColor: COLORS.green, // Set the background color as needed
    borderRadius: 30, // Adjust the border radius to make it fully rounded
    width: 60, // Adjust the width as needed
    height: 60, // Adjust the height as needed
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -46,
  },
});

export default TabNavigator;
