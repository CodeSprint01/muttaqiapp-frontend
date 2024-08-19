import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import {Icons} from '../../../utils/helper/svg';
import {COLORS, fonts} from '../../../styles/color';
import HeaderButtons from '../../../components/molecules/app-header-buttons/HeaderButtons';
import {AppIconSvg} from '../../../components/atoms/app-icon-svg';
import AppText from '../../../components/atoms/app-text/AppText';
import AppButton from '../../../components/molecules/app-button/AppButton';

const BookmarkSetting = () => {
  const [selectedButton, setSelectedButton] = useState('All');
  const AllData = [
    {
      name: 'Quran',
      array: [
        {
          namd: 'Al - Baqrah | verse 1 Quran',
          des: 'who believe in the unseen, establish prayer, and donate from what We have provided for them,',
        },
      ],
    },
    {
      name: 'Azkar',
      array: [
        {
          namd: 'Al - Baqrah | verse 2 Azkar',
          des: 'who believe in the unseen, establish prayer, and donate from what We have provided for them,',
        },
      ],
    },
    {
      name: 'Dua',
      array: [
        {
          namd: 'Al - Baqrah | verse 2 Dua',
          des: 'who believe in the unseen, establish prayer, and donate from what We have provided for them,',
        },
      ],
    },
  ];
  const [filteredData, setFilteredData] = useState(AllData);

  const handleFilter = (category: string) => {
    setSelectedButton(category);
    if (category === 'All') {
      setFilteredData(AllData);
    } else {
      const filtered = AllData.forEach(item => {
        if (item.name === category) {
          setFilteredData(item.array);
        }
      });
    }
  };

  const renderItemArray = ({item, index}) => {
    return (
      <View style={styles.itemMainView}>
        <View style={styles.imgView}>
          <AppIconSvg
            icon={Icons.EmptyBookmark}
            height={18}
            width={18}
            color={COLORS.green}
          />
        </View>
        <View style={styles.mainTextView}>
          <AppText text={item.namd} style={styles.nameText} />
          <AppText text={item.des} style={styles.descriptionText} />
        </View>
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <View>
        {selectedButton === 'All' && (
          <View style={styles.mainHeading}>
            <AppText text={item.name} style={styles.mainHeadingText} />
          </View>
        )}
        <View>
          <FlatList
            data={selectedButton === 'All' ? item.array : filteredData}
            renderItem={renderItemArray}
          />
        </View>
      </View>
    );
  };

  return (
    <AppContainer style={styles.container}>
      {false ? (
        <View style={styles.emptyMainContainer}>
          <ScreenHeader rightIcon={Icons.Search} headerText="Bookmarks" />
          <View style={styles.emptyImgView}>
            <AppIconSvg
              height={117}
              width={117}
              icon={Icons.Empty}
              color="red"
            />
            <AppText text={'No bookmarks yet'} style={styles.emptyText} />
            <AppText
              text={
                'You haven’t added any bookmarks. Explore our homepage and start your adding some.'
              }
              style={styles.text}
            />
          </View>
          <View style={styles.emptyBtnView}>
            <AppButton buttonText={'Go to homepage'} onPress={() => {}} />
          </View>
        </View>
      ) : (
        <View>
          <ScreenHeader rightIcon={Icons.Search} headerText="Bookmarks" />
          <HeaderButtons
            selectedButton={selectedButton}
            handlePress={val => {
              handleFilter(val);
            }}
          />
          <FlatList data={filteredData} renderItem={renderItem} />
        </View>
      )}
    </AppContainer>
  );
};

export default BookmarkSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 21,
  },
  emptyMainContainer: {
    flex: 1,
  },
  emptyImgView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: COLORS.green,
    fontSize: 24,
    fontFamily: fonts.dmSans[700],
    marginTop: 42,
  },
  emptyBtnView: {
    marginBottom: '25%',
  },
  text: {
    textAlign: 'center',
    color: COLORS.dark_gray,
    fontSize: 16,
    fontFamily: fonts.dmSans[400],
    marginTop: 16,
  },
  mainHeading: {
    backgroundColor: COLORS.light_Powder_Blue,
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  mainHeadingText: {
    color: COLORS.green,
    fontFamily: fonts.dmSans[500],
    fontSize: 18,
  },
  itemMainView: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  imgView: {
    marginRight: 8,
  },
  mainTextView: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.light_gray,
    paddingBottom: 14,
  },
  nameText: {
    color: COLORS.green,
    fontFamily: fonts.dmSans[400],
    fontSize: 14,
    marginBottom: 8,
  },
  descriptionText: {
    color: COLORS.dark_gray,
    fontFamily: fonts.dmSans[400],
    fontSize: 16,
  },
});
