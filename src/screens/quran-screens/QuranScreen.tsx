import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {Fragment} from 'react';
import ScreenHeader from '../../components/molecules/app-header/ScreenHeader';
import QuranHeaderCard from './QuranHeaderCard';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import {COLORS} from '../../styles/color';
import TopTabs from './tab-items/TopTabs';
import {Icons} from '../../utils/helper/svg';
import {TextInput} from 'react-native-gesture-handler';

const QuranScreen = () => {
  return (
    <AppContainer style={styles.container}>
      <View style={{paddingHorizontal: 20, margin: 20, flexDirection: 'row'}}>
        <ScreenHeader headerText={'القرآن'} />
      </View>
      <View style={styles.quranHeader}>
        <QuranHeaderCard
          surahName="At-Tuawbah"
          paraNo="P. 209"
          onPress={() => console.log('click')}
        />
      </View>
      <View style={styles.quranContainer}>
        <TopTabs />
      </View>
    </AppContainer>
  );
};
//Search on the basis of surah name

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pale_mint,
  },
  header: {
    marginTop: 15,
    paddingHorizontal: 20,
    marginBottom: 19,
  },
  quranHeader: {
    flex: 1,
  },
  quranContainer: {
    flex: 3,
    paddingHorizontal: 20,
  },
});
export default QuranScreen;
