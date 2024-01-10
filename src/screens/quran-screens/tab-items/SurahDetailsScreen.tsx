import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Icons} from '../../../components/atoms/app-icon-svg';
import {COLORS} from '../../../styles/color';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import SurahHeader from './SurahHeader';
import AppText from '../../../components/atoms/app-text/AppText';
import {Ayat} from '../../../types/types';
import AppBottomSheet from '../../../components/molecules/app-bottom-sheet/AppBottomSheet';

const SurahDetailsScreen = ({route}) => {
  const surahData = route?.params?.data;
  const [showBottomSheet, setShowBottomSheet] = useState<boolean>(false);
  const [ayatDetails, setAyatDetails] = useState([]);

  const handleShowBottoomsheet = item => {
    setShowBottomSheet(!showBottomSheet);
    setAyatDetails(item);
  };
  // const handleAyatIndex = (item: any) => {
  //   return console.log(item);
  //   setAyatDetails(item);
  // };
  console.log(ayatDetails);

  const renderItem = ({item, index}: {item: Ayat; index: number}) => {
    return (
      <View style={[styles.listView, {marginTop: index === 0 ? 27 : 0}]}>
        <SurahHeader
          ayatNumber={index + 1}
          bookmark={item?.isBookmark ? Icons.Alarm : Icons.EmptyBookmark}
          favourite={item?.isFavourite ? Icons.Adhan : Icons.EmptyHeart}
          playPause={Icons.Play}
          onPressBooksquare={() => handleShowBottoomsheet(item)}
        />
        <AppText text={item?.arabic} style={styles.arabicTxt} />
        <AppText text={item?.translation} style={styles.translation} />
      </View>
    );
  };

  return (
    <AppContainer>
      <View style={{paddingHorizontal: 20}}>
        <ScreenHeader headerText="Al-Baqarah" rightIcon={Icons.Search} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={surahData?.ayats}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
      {showBottomSheet && (
        <AppBottomSheet
          children={
            <View style={styles.bottomContainer}>
              <AppText text={ayatDetails.arabic} style={styles.arabicTxt} />
              <AppText
                text={ayatDetails.details}
                style={[styles.translation, {paddingTop: 36}]}
              />
            </View>
          }
          isVisible={showBottomSheet}
        />
      )}
    </AppContainer>
  );
};

export default SurahDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listView: {
    marginBottom: 16,
  },
  arabicTxt: {
    fontSize: 24,
    fontWeight: '400',
    color: COLORS.dark_gray,
    textAlign: 'right',
    paddingTop: 16,
    fontStyle: 'normal',
    lineHeight: 35,
  },
  translation: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.dark_gray,
    fontStyle: 'normal',
    paddingTop: 5,
  },
  bottomContainer: {
    paddingHorizontal: 23,
  },
});
