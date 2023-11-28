import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Dashboard from '../screens/Dashboard/Dashboard';

const HomeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default HomeStack;
