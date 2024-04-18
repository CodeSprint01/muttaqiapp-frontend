import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Knowledge from '../screens/knowledge-screen/Knowledge';
import {screens} from '../types/types';
import AllahNames from '../screens/allah-names/AllahNames';
import AllahNamesDescription from '../screens/allah-names/AllahNamesDescription';
import CardScreen from '../screens/religious-content-home/ReligiousContentHome';
import DetailScreen from '../screens/religious-content-detail/ReligiousContentDetail';
import QuranScreen from '../screens/quran-screens/QuranScreen';
import SurahDetailsScreen from '../screens/quran-screens/tab-items/SurahDetailsScreen';
import TasbihCounter from '../screens/tasbih-screen/TasbihCounter';
import AllBookmarks from '../screens/all-bookmarks/AllBookmarks';
import AllFavourites from '../screens/favourites-screens/AllFavourite';

const HomeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name={screens.ALL_BOOKMARKS}
        component={AllBookmarks}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.ALL_FAVOURITES}
        component={AllFavourites}
        options={{headerShown: false}}
      /> */}
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
      <Stack.Screen
        name={screens.QURAN_SCREEN}
        component={QuranScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.TASBIH_COUNTER}
        component={TasbihCounter}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.SURAH_DETAILS_SCREEN}
        component={SurahDetailsScreen}
        options={{headerShown: false}}
      />
      {/* here is our AllBookmarks tab screen */}
      {/* <Stack.Screen
        name={screens.SURAH_DETAILS_SCREEN}
        component={AllBookmark}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.SURAH_DETAILS_SCREEN}
        component={SurahDetailsScreen}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default HomeStack;
