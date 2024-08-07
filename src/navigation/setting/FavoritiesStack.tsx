import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {screens} from '../../types/types';
import FavoritesSetting from '../../screens/setting/favorities-setting/FavoritesSetting';

const FavoritiesStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={screens.FAVORITIES_SETTING}
        component={FavoritesSetting}
      />
    </Stack.Navigator>
  );
};

export default FavoritiesStack;
