import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenHeader from '../../components/molecules/app-header/ScreenHeader';
import QuranHeaderCard from './QuranHeaderCard';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import {COLORS} from '../../styles/color';
import TopTabs from './tab-items/TopTabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SurahScreen from './tab-items/SurahScreen';
import JuzScreen from './tab-items/JuzScreen';
import BookmarksScreen from './tab-items/BookmarksScreen';

const QuranScreen = () => {
  return (
    // <ScrollView style={{flex: 1, backgroundColor: 'pink'}}>
    <AppContainer style={styles.container}>
      <View style={styles.header}>
        <ScreenHeader />
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
    // </ScrollView>
  );
};

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
