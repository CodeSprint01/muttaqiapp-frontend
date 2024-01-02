import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Knowledge from '../screens/knowledge-screen/Knowledge';
import {screens} from '../types/types';
import Hadith from '../screens/hadith-screens/Hadith';
import AllahNames from '../screens/allah-names/AllahNames';
import AllahNamesDescription from '../screens/allah-names/AllahNamesDescription';

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
        name={screens.HADITH}
        component={Hadith}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
