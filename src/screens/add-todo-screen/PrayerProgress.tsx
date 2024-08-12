import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';
import AppText from '../../components/atoms/app-text/AppText';
import {COLORS, fonts} from '../../styles/color';
import LinearGradient from 'react-native-linear-gradient';
import AppCheckBoxTick from '../../components/molecules/app-checkbox/AppCheckBoxTick';
import {AppIconSvg, Icons} from '../../components/atoms/app-icon-svg';

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
  const totalSteps = 5;
  const screenWidth = Dimensions.get('window').width;
  const lineWidth = screenWidth / totalSteps - 32.5;

  return (
    <View style={styles.container}>
      <AppText text={'Prayer progress'} style={styles.prayerProg} />
      <AppText text={'Obligatory'} style={styles.obligatory} />
      <View style={styles.prayerContainer}>
        {Object.entries(prayerTime).map(([prayerKey, prayerValue], index) => (
          <View key={index} style={styles.notPrayerBox}>
            {prayerValue ? (
              <LinearGradient
                colors={['#1290A1', 'rgba(29, 162, 143, 0.73)']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.selectPrayerBox}>
                <TouchableOpacity
                  style={styles.boxCircle}
                  onPress={() => handleCheckBox(index)}>
                  {prayerData[prayerKey] && (
                    <AppIconSvg
                      icon={Icons.CheckBoxTickIcon}
                      width={12}
                      height={12}
                      color={COLORS.white}
                    />
                  )}
                </TouchableOpacity>
              </LinearGradient>
            ) : (
              <View style={styles.unSelectPrayerBox}>
                <TouchableOpacity
                  disabled
                  style={styles.boxCircle}
                  onPress={() => handleCheckBox(index)}>
                  {prayerData[prayerKey] && (
                    <AppIconSvg
                      icon={Icons.CheckBoxTickIcon}
                      width={12}
                      height={12}
                      color={COLORS.white}
                    />
                  )}
                </TouchableOpacity>
              </View>
            )}

            {index < totalSteps - 1 && (
              <View
                style={[
                  styles.line,
                  {
                    backgroundColor: COLORS.green,
                    width: lineWidth,
                  },
                ]}
              />
            )}
          </View>
        ))}
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
  prayerContainer: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectPrayerBox: {
    width: 36,
    height: 36,
    backgroundColor: '#CCFFCC',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unSelectPrayerBox: {
    width: 36,
    height: 36,
    backgroundColor: COLORS.light_gray,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notPrayerBox: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  boxCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    height: 1,
  },
});
