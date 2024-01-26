import {Platform, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import AppText from '../../components/atoms/app-text/AppText';
import {CircularProgress} from 'react-native-circular-progress';
import {COLORS, fonts} from '../../styles/color';

interface progressProp {
  totalTask: number;
  completeTask: number;
  circleValue: number;
}

const UserProgressCard: FC<progressProp> = ({
  totalTask,
  completeTask,
  circleValue,
}) => {
  return (
    <View style={styles.progressContainer}>
      <View style={styles.progressLeft}>
        <AppText text={'Today’s progress'} style={styles.progText} />
        <AppText
          text={`(${completeTask}/${totalTask} completed)`}
          style={styles.progValueTxt}
        />
      </View>
      <View style={styles.progressRight}>
        <AppText text={`${circleValue} %`} style={styles.percentVal} />
        <CircularProgress
          size={90}
          width={16}
          fill={circleValue}
          tintColor={COLORS.green}
          backgroundColor={COLORS.light_Steel_Blue}
          rotation={0}
        />
      </View>
    </View>
  );
};

export default UserProgressCard;

const styles = StyleSheet.create({
  progressContainer: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: COLORS.light_Powder_Blue,
    alignSelf: 'center',
    borderRadius: 36,
    elevation: 20,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(111, 140, 176)',
        shadowOffset: {
          width: 20,
          height: 20,
        },
        shadowOpacity: 0.2,
        shadowRadius: 30,
        borderTopColor: 'white',
        borderWidth: 2,
        borderLeftColor: 'white',
        borderBottomColor: COLORS.light_Powder_Blue,
        borderRightColor: COLORS.light_Powder_Blue,
      },
    }),
  },
  progressLeft: {
    width: '60%',
    paddingTop: 27,
    paddingBottom: 47,
    paddingLeft: 28,
  },
  progText: {
    fontSize: 16,
    fontFamily: fonts.dmSans[500],
    color: COLORS.dark_green,
  },
  progValueTxt: {
    fontSize: 12,
    fontStyle: 'normal',
    fontFamily: fonts.dmSans[500],
    color: COLORS.light_black_gray,
    paddingTop: 3,
  },
  percentVal: {
    position: 'absolute',
    top: 37,
    left: -15,
    fontSize: 14,
    fontFamily: fonts.dmSans[500],
    fontStyle: 'normal',
    color: COLORS.dark_gray,
    textAlign: 'center',
  },
  progressRight: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
