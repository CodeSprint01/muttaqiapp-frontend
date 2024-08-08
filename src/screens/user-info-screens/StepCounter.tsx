import React from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {Icons} from '../../utils/helper/svg';
import {COLORS} from '../../styles/color';
import {AppIconSvg} from '../../components/atoms/app-icon-svg';

const StepCounter = ({currentStep}) => {
  const totalSteps = 6; // Total number of steps
  const screenWidth = Dimensions.get('window').width;
  const lineWidth = screenWidth / totalSteps - 20; // Width of the line connecting circles

  return (
    <View style={styles.container}>
      {Array.from({length: totalSteps}, (_, index) => (
        <View key={index} style={styles.stepContainer}>
          <View
            style={[
              styles.circle,
              index === currentStep
                ? styles.currentCircleStep
                : index < currentStep
                ? styles.previousStep
                : styles.nextStep,
            ]}>
            {index < currentStep && (
              <View style={styles.tick}>
                <AppIconSvg
                  icon={Icons.CheckBoxTickIcon}
                  width={8}
                  height={8}
                  color={COLORS.green}
                />
              </View>
            )}
          </View>
          {index < totalSteps - 1 && (
            <View
              style={[
                styles.line,
                {
                  backgroundColor:
                    index < currentStep
                      ? COLORS.pale_mint
                      : COLORS.light_black_gray,
                  width: lineWidth,
                },
              ]}
            />
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tick: {
    color: COLORS.pale_mint,
    fontSize: 18,
  },
  line: {
    height: 2,
  },
  currentCircleStep: {
    backgroundColor: COLORS.dark_green,
    borderColor: COLORS.white,
    borderWidth: 3,
  },
  previousStep: {
    backgroundColor: COLORS.pale_mint,
  },
  nextStep: {
    backgroundColor: COLORS.light_black_gray,
  },
});

export default StepCounter;
