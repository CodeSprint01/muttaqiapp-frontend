import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../../../components/atoms/app-text/AppText';
import {COLORS} from '../../../styles/color';
import SurahListCard from './SurahListCard';

const SurahScreen = () => {
  return (
    <View style={styles.container}>
      <SurahListCard />
      <SurahListCard />
      <SurahListCard />
      <SurahListCard />
      <SurahListCard />
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
