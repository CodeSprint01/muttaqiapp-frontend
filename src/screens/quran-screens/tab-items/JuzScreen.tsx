import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import JuzListCard from './JuzListCard';
import {JuzArray} from '../../../utils/mocks/JuzArray';
import {Juz} from '../../../types/types';
import {COLORS} from '../../../styles/color';

const JuzScreen = () => {
  return (
    <View style={{backgroundColor: COLORS.pale_mint}}>
      <FlatList
        data={JuzArray}
        renderItem={({item}: {item: Juz}) => (
          <JuzListCard
            juz={item.juz}
            data={item.juzData}
            onPress={() => console.log('click')}
          />
        )}
      />
    </View>
  );
};

export default JuzScreen;

const styles = StyleSheet.create({});
