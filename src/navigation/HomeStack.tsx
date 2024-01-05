import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Knowledge from '../screens/explore-screen/Knowledge';
import {screens} from '../types/types';
import AllahNames from '../screens/explore-screen/allah-names/AllahNames';
import AllahNamesDescription from '../screens/explore-screen/allah-names/AllahNamesDescription';
import CardScreen from '../screens/cardScreen/CardScreen';
import DetailScreen from '../screens/detail-screen/DetailScreen';

const HomeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.KNOWLEDGE}
        component={Knowledge}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.ALLAH_NAMES}
        component={AllahNames}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.ALLAH_NAMES_DESCRIPTION}
        component={AllahNamesDescription}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.CARD_SCREEN}
        component={CardScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.DETAIL_SCREENN}
        component={DetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
