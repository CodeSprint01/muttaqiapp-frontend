import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import AppText from '../../components/atoms/app-text/AppText';
import {COLORS, fonts} from '../../styles/color';
import LinearGradient from 'react-native-linear-gradient';
import AppCheckBoxTick from '../../components/molecules/app-checkbox/AppCheckBoxTick';

interface PrayerProps {
  handleCheckBox: (index: number) => void;
  prayerTime: any;
  prayerData: any;
}

const PrayerProgress: FC<PrayerProps> = ({
  handleCheckBox,
  prayerTime,
  prayerData,
}) => {
  return (
    <View style={styles.container}>
      <AppText text={'Prayer progress'} style={styles.prayerProg} />
      <AppText text={'Obligatory'} style={styles.obligatory} />
      <View style={styles.obligatorySection}>
        <View style={styles.verticalLine} />
        <View style={styles.prayerContainer}>
          {Object.entries(prayerTime).map(([prayerKey, prayerValue], index) => (
            <View key={index} style={styles.notPrayerBox}>
              {prayerValue ? (
                <LinearGradient
                  colors={['#1290A1', 'rgba(29, 162, 143, 0.73)']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={styles.prayerBox}>
                  <AppCheckBoxTick
                    isChecked={prayerData[prayerKey]}
                    checkBoxStyle={styles.boxCircle}
                    onToggle={() => handleCheckBox(index)}
                  />
                </LinearGradient>
              ) : (
                <AppCheckBoxTick
                  isChecked={false}
                  checkBoxStyle={styles.boxCircle}
                />
              )}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default PrayerProgress;

const styles = StyleSheet.create({
  container: {},
  prayerProg: {
    fontSize: 20,
    fontFamily: fonts.dmSans[500],
    color: COLORS.very_dark_gray,
  },
  obligatory: {
    fontSize: 18,
    fontFamily: fonts.dmSans[500],
    paddingTop: 8,
    color: COLORS.medium_gray,
  },
  obligatorySection: {
    marginTop: 12,
  },
  prayerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  verticalLine: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.green,
    position: 'absolute',
    marginTop: 18,
  },
  prayerBox: {
    width: 36,
    height: 36,
    backgroundColor: '#CCFFCC',
    borderRadius: 18,
    justifyContent: 'center',
  },
  notPrayerBox: {
    width: 36,
    height: 36,
    backgroundColor: COLORS.light_gray,
    borderRadius: 18,
    justifyContent: 'center',
    paddingLeft: -6,
  },
  boxCircle: {
    borderColor: COLORS.white,
    marginLeft: 6,
  },
});
