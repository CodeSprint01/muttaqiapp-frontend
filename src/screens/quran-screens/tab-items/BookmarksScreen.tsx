import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BookmarkListCard from './BookmarkListCard';
import {Icons} from '../../../utils/helper/svg';

const BookmarksScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <BookmarkListCard
          icon={Icons.EmptyBookmark}
          surahName="بسم الله الرحمن الرحيم الحمد لله رب العالمين"
          surahType="Al-Fatiha"
          length={1}
        />
      </View>
    </View>
  );
};

export default BookmarksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
});
