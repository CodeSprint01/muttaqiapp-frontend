import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../../styles/color';
import AppText from '../app-text/AppText';

interface stepProps {
  stepValue: UserInfoSteps;
}

export enum UserInfoSteps {
  generalInfo,
  familyInfo,
  assest,
  Nominee,
}

const UserInfoHeader: FC<stepProps> = ({stepValue}) => {
  const stepArray = [0, 1, 2, 3];
  return (
    <View style={styles.container}>
      <View style={styles.linesView}>
        {stepArray.map(item => (
          <View
            key={item}
            style={[
              styles.step,
              item <= stepValue
                ? {backgroundColor: COLORS.primary}
                : {backgroundColor: COLORS.tertiary},
              item !== 3 && styles.otherSteps,
              item === 0 && styles.stepFirstSty,
              item === 3 && styles.lastStepSty,
            ]}
          />
        ))}
      </View>
      <View style={styles.stepContainer}>
        <AppText text={stepValue + 1} style={styles.textValue} />
        <AppText text=" of 4" style={styles.textValue} />
      </View>
    </View>
  );
};

export default UserInfoHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
  },
  linesView: {
    backgroundColor: 'white',
    width: '100%',
    height: 10,
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  step: {
    flex: 1,
    height: 10,
    backgroundColor: 'red',
  },
  otherSteps: {
    marginRight: 3,
  },
  stepFirstSty: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  lastStepSty: {
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  stepContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textValue: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19.36,
  },
});
