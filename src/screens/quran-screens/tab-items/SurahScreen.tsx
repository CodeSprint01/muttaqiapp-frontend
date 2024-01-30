import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Surah, screens} from '../../../types/types';
import React from 'react';
import {COLORS} from '../../../styles/color';
import SurahListCard from './SurahListCard';
import {AllSurah} from '../../../utils/mocks/SurahMock';
import {useNavigation} from '@react-navigation/native';

const SurahScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={AllSurah}
          renderItem={({item, index}: {item: Surah; index: number}) => (
            <>
              <SurahListCard
                surahName={item?.name}
                surahType={item?.type}
                indx={item?.number}
                length={item?.numberOfAyahs}
                onPress={() =>
                  navigation.navigate('HomeStack', {
                    screen: screens.SURAH_DETAILS_SCREEN,
                    params: {data: item},
                  })
                }
              />
            </>
          )}
          keyExtractor={item => item?.name?.toString()}
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
