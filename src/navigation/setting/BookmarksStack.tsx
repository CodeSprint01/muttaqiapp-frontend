import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BookmarkSetting from '../../screens/setting/bookmark-setting/BookmarkSetting';
import {screens} from '../../types/types';

const BookmarksStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={screens.BOOKMARKS_SETTING}
        component={BookmarkSetting}
      />
    </Stack.Navigator>
  );
};

export default BookmarksStack;
