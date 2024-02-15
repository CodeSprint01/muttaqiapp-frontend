import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import BookmarkList from '../../../components/molecules/bookmarks/BookmarkList';
import {FavouriteData} from '../../../types/types';
import {COLORS} from '../../../styles/color';
import {AllFavouriteArray} from '../../../utils/mocks/bookmarks-and-favourite/AllFavourite';

const AzkarFavourite = () => {
  const renderItem = ({item, index}: {item: FavouriteData; index: number}) => {
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
        data={AllFavouriteArray[0]?.favouriteData}
        renderItem={renderItem}
      />
    </View>
  );
};

export default AzkarFavourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pale_mint,
  },
});
