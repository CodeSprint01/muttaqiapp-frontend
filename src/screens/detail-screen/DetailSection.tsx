import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DetailHeader from './DetailHeader';
import AppText from '../../components/atoms/app-text/AppText';

const DetailSection = ({repeat, text}) => {
  return (
    <View>
      <DetailHeader repeat={repeat} />
      <AppText text={text} style={styles.text} />
    </View>
  );
};

export default DetailSection;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 6,
    paddingVertical: 16,
    alignItems: 'center',
    textAlign: 'left',

    // backgroundColor: 'red'
  },
});
