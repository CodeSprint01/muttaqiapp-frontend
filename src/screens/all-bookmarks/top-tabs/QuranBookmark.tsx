import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AllBookmarksArray} from '../../../utils/mocks/all-bookmarks/AllBookmarks';
import BookmarkList from '../../../components/molecules/bookmarks/BookmarkList';
import {bookmarkData} from '../../../types/types';
import {COLORS} from '../../../styles/color';

const QuranBookmark = () => {
  const renderItem = ({item, index}: {item: bookmarkData; index: number}) => {
    return (
      <BookmarkList
        icon={item?.icon}
        details={item?.detailText}
        name={item?.name}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={AllBookmarksArray[0]?.bookmarkData}
        renderItem={renderItem}
      />
    </View>
  );
};

export default QuranBookmark;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pale_mint,
  },
});
