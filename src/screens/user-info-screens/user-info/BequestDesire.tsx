import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppText from '../../../components/atoms/app-text/AppText';
import {COLORS, fonts} from '../../../styles/color';

const BequestDesire = () => {
  return (
    <View>
      <AppText text={'Bequest desire'} style={styles.formTitle} />
      <AppText
        text={
          'Would you like to leave a bequest for someone who is not eligible for inheritance?'
        }
        style={styles.infoText}
      />
    </View>
  );
};

export default BequestDesire;

const styles = StyleSheet.create({
  formTitle: {
    color: COLORS.green,
    fontSize: 24,
    fontFamily: fonts.dmSans[700],
    paddingTop: 4,
  },
  infoText: {
    textAlign: 'center',
    color: COLORS.medium_gray,
    fontSize: 26,
    fontFamily: fonts.dmSans[500],
    marginTop: '22%',
    padding: 40,
  },
});
