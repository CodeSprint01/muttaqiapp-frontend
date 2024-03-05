import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {CircularProgress} from 'react-native-circular-progress';
import {COLORS, fonts} from '../../styles/color';
import AppText from '../../components/atoms/app-text/AppText';
import {AppIconSvg, Icons} from '../../components/atoms/app-icon-svg';

interface ProgProps {
  taskAvg: number;
}

const TodayProgressSwiper: FC<ProgProps> = ({taskAvg}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <TouchableOpacity style={styles.labelTxt}>
          <AppText text={'Today’s progress'} style={styles.todayTxt} />
          <AppIconSvg
            icon={Icons.ArrowRight}
            width={24}
            height={24}
            color="green"
          />
        </TouchableOpacity>
        <AppText text={'(5/8 completed)'} style={styles.taskTxt} />
      </View>
      <View style={styles.rightSide}>
        <CircularProgress
          size={100}
          width={17}
          fill={taskAvg}
          tintColor={COLORS.green}
          backgroundColor={COLORS.light_Steel_Blue}
          rotation={20}
          style={{borderRadius: 20}}
        />
        <View style={styles.avgCont}>
          <AppText text={`${taskAvg} %`} style={styles.avgText} />
        </View>
      </View>
    </View>
  );
};

export default TodayProgressSwiper;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light_Powder_Blue,
    height: 170,
    borderRadius: 38,
    flexDirection: 'row',
    elevation: 7,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(111, 140, 176)',
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        borderTopColor: 'white',
        borderWidth: 2,
        borderLeftColor: 'white',
        borderBottomColor: COLORS.light_Powder_Blue,
        borderRightColor: COLORS.light_Powder_Blue,
      },
    }),
  },
  leftSide: {
    width: '60%',
    justifyContent: 'center',
    paddingLeft: '7%',
  },
  rightSide: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avgCont: {
    position: 'absolute',
  },
  avgText: {
    fontSize: 14,
    fontFamily: fonts.dmSans[500],
  },
  labelTxt: {
    flexDirection: 'row',
  },
  todayTxt: {
    fontSize: 16,
    color: COLORS.green,
    fontFamily: fonts.dmSans[500],
  },
  taskTxt: {
    fontSize: 12,
    fontFamily: fonts.dmSans[400],
    color: COLORS.light_gray,
    paddingTop: 4.5,
  },
});
