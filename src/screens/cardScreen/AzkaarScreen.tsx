import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import AzkaarCard from '../../components/molecules/azkaarCard/azkaarCard';

const AzkaarScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <AzkaarCard />
        <AzkaarCard />
        <AzkaarCard />
        <AzkaarCard />
      </View>
    </SafeAreaView>
  );
};

export default AzkaarScreen;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'green',
    margin: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'center',
  },
  screen: {
    // backgroundColor: 'green',
    flex: 1,
  },
  loading: {},
});
