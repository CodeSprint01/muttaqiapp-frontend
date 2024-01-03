import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenHeader from '../../components/molecules/app-header/ScreenHeader';
import QuranHeaderCard from './QuranHeaderCard';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import {COLORS} from '../../styles/color';

const QuranScreen = () => {
  return (
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
      <View style={styles.quranContainer}></View>
    </AppContainer>
  );
};

export default QuranScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.pale_mint,
  },
  header: {
    marginTop: 15,
    paddingHorizontal: 20,
    marginBottom: 19,
  },
  quranHeader: {
    backgroundColor: 'pink',
    flex: 1,
  },
  quranContainer: {
    // backgroundColor: 'red',
    flex: 3,
  },
});
