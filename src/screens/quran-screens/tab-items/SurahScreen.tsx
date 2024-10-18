import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import {Surah, screens} from '../../../types/types';
import React, {useState} from 'react';
import {COLORS} from '../../../styles/color';
import SurahListCard from './SurahListCard';
import {useNavigation} from '@react-navigation/native';
import {QuranAllSurahs} from '../../../utils/mocks/quran-json-data/surahArray';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import {Icons} from '../../../utils/helper/svg';

const SurahScreen = () => {
  const navigation = useNavigation();
  let data = QuranAllSurahs;
  const [filterName, setFilterName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  function handleChange(query: string) {
    setSearchQuery(query);
    const filtered = data.filter(QuranAllSurahs =>
      QuranAllSurahs.enName.toLowerCase().includes(query.toLowerCase()),
    );
    setFilterName(filtered);
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TextInput
          placeholder="Search"
          clearButtonMode="always"
          value={searchQuery}
          onChangeText={handleChange}
          style={styles.searchInput}></TextInput>

        <FlatList
          data={searchQuery.length > 0 ? filterName : data}
          renderItem={({item, index}: {item: Surah; index: number}) => (
            <>
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
  searchInput: {
    margin: 10,
    fontSize: 20,
    height: 45,
    paddingLeft: 50,
    borderWidth: 1,
    borderColor: COLORS.green,
    borderRadius: 20,
  },
});
