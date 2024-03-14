import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Surah, screens} from '../../../types/types';
import React from 'react';
import {COLORS} from '../../../styles/color';
import SurahListCard from './SurahListCard';
import {useNavigation} from '@react-navigation/native';
import {QuranAllSurahs} from '../../../utils/mocks/quran-json-data/surahArray';

const SurahScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={QuranAllSurahs}
          renderItem={({item, index}: {item: Surah; index: number}) => (
            <>
              {/* {console.log(item, 'this is name')}
              {console.log(index, 'this is name')} */}
              <SurahListCard
                surahName={item?.enName}
                surahType={item?.type}
                indx={item?.number}
                length={item?.numberOfAyahs}
                onPress={() =>
                  navigation.navigate(screens.HOME_STACK, {
                    screen: screens.SURAH_DETAILS_SCREEN,
                    params: {data: item},
                  })
                }
              />
            </>
          )}
          keyExtractor={item => item?.enName?.toString()}
        />
      </View>
    </View>
  );
};

export default SurahScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pale_mint,
    paddingTop: 10,
  },
});
