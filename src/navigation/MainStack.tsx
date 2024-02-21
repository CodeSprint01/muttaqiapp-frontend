import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import {screens} from '../types/types';
import AppStack from './AppStack';
const MainStack = () => {
  const Stack = createStackNavigator();
  const isLogedIn = false;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogedIn ? (
          <Stack.Screen
            name={screens.AUTH_STACK}
            component={AuthStack}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name={screens.APP_STACK}
            component={AppStack}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
