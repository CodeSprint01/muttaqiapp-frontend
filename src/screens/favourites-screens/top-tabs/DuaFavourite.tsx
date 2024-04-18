import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BookmarkList from '../../../components/molecules/bookmarks/BookmarkList';
import {FavouriteData} from '../../../types/types';
import {COLORS, fonts} from '../../../styles/color';
import {AllFavouriteArray} from '../../../utils/mocks/bookmarks-and-favourite/AllFavourite';
import {AppIconSvg, Icons} from '../../../components/atoms/app-icon-svg';
import AppText from '../../../components/atoms/app-text/AppText';

const DuaFavourite = () => {
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
      {AllFavouriteArray?.length > 0 ? (
        <FlatList
          data={AllFavouriteArray[0]?.favouriteData}
          renderItem={renderItem}
        />
      ) : (
        <View style={styles.emptyArray}>
          <AppIconSvg
            icon={Icons.WateringPlants}
            width={200}
            height={200}
            color="green"
          />
          <AppText text={'No Favorites yet'} style={styles.emptyLabel} />
          <AppText
            style={styles.emptyDescription}
            text={
              'You haven’t added any favorites. Explore our homepage and start your adding some.'
            }
          />
        </View>
      )}
    </View>
  );
};

export default DuaFavourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pale_mint,
  },
  emptyArray: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  emptyLabel: {
    fontSize: 24,
    fontFamily: fonts.dmSans[700],
    color: COLORS.green,
    marginTop: 42,
  },
  emptyDescription: {
    fontSize: 16,
    fontFamily: fonts.dmSans[400],
    color: COLORS.dark_gray,
    marginTop: 16,
  },
});
