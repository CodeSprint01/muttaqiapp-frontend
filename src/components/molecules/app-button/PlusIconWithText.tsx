import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import GradientCircle from '../../atoms/gradient-circle/GradientCircle';
import {AppIconSvg, Icons} from '../../atoms/app-icon-svg';
import {COLORS, fonts} from '../../../styles/color';
import AppText from '../../atoms/app-text/AppText';

interface BtnProps {
  onPress: () => void;
  text: string;
}
const PlusIconWithText: FC<BtnProps> = ({onPress, text}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={styles.AddBtn}>
      <GradientCircle style={styles.PlusContainer}>
        <AppIconSvg
          icon={Icons.PlusIcon}
          width={24}
          height={24}
          color={COLORS.white}
        />
      </GradientCircle>

      <AppText text={text} style={styles.txt} />
    </TouchableOpacity>
  );
};

export default PlusIconWithText;

const styles = StyleSheet.create({
  AddBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  PlusContainer: {
    width: 24,
    height: 24,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 20,
    color: COLORS.green,
    fontFamily: fonts.dmSans[500],
    paddingLeft: 10,
  },
});
