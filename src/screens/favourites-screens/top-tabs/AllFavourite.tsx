import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, fonts} from '../../../styles/color';
import AppText from '../../../components/atoms/app-text/AppText';
import BookmarkList from '../../../components/molecules/bookmarks/BookmarkList';
import {AppIconSvg, Icons} from '../../../components/atoms/app-icon-svg';
import {AllFavouritesInter, bookmarkData} from '../../../types/types';
import {AllFavouriteArray} from '../../../utils/mocks/bookmarks-and-favourite/AllFavourite';

const AllFavourite = () => {
  const [isOpen, setIsOpen] = useState<number | null>(0);

  const handleCloseItem = (index: number) => {
    setIsOpen(prevIndex => (prevIndex === index ? null : index));
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: AllFavouritesInter;
    index: number;
  }) => {
    return (
      <View>
        <View style={styles.listHeader}>
          <AppText text={item?.name} style={styles.headerText} />
          <TouchableOpacity
            activeOpacity={0.4}
            style={styles.dropdown}
            onPress={() => handleCloseItem(index)}>
            <AppIconSvg
              icon={isOpen === index ? Icons.ArrowUp : Icons.ArrowDown}
              width={25}
              height={25}
              color="black"
            />
          </TouchableOpacity>
        </View>
        {isOpen === index &&
          item?.favouriteData?.map((item: bookmarkData) => (
            <BookmarkList
              key={index}
              icon={item?.icon}
              name={item?.name}
              verse={item?.verse}
              details={item.detailText}
            />
          ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={AllFavouriteArray}
        renderItem={renderItem}
        keyExtractor={itm => itm.name}
      />
    </View>
  );
};

export default AllFavourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pale_mint,
  },
  listHeader: {
    width: '100%',
    backgroundColor: COLORS.light_Powder_Blue,
    borderRadius: 12,
    flexDirection: 'row',
    marginTop: 7,
  },
  headerText: {
    fontSize: 18,
    fontFamily: fonts.dmSans[500],
    color: COLORS.green,
    paddingTop: 13,
    paddingBottom: 16,
    paddingLeft: 20,
  },
  dropdown: {
    paddingTop: 13,
    position: 'absolute',
    right: 10,
  },
});
