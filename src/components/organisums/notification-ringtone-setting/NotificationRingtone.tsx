import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import AppText from '../../atoms/app-text/AppText';
import AppCheckBoxFill from '../../molecules/app-checkbox/AppCheckBoxFill';
import {COLORS, fonts} from '../../../styles/color';

interface NotifiProps {
  isChecked: number;
  disable?: boolean;
  onToggle: (num: number) => void;
}

const NotificationRingtone: FC<NotifiProps> = ({
  isChecked,
  disable,
  onToggle,
}) => {
  return (
    <View style={styles.checkBoxContainer}>
      <AppText
        text={'Ringtone'}
        style={[styles.ringTxt, disable && styles.ringTxtDisable]}
      />
      <View style={styles.checkBoxes}>
        <AppCheckBoxFill
          isChecked={isChecked === 0}
          label="default"
          disable={disable}
          onToggle={() => onToggle(0)}
        />
        <AppCheckBoxFill
          isChecked={isChecked === 1}
          label="Slient"
          disable={disable}
          onToggle={() => onToggle(1)}
        />
        <AppCheckBoxFill
          isChecked={isChecked === 2}
          label="Vibration"
          disable={disable}
          onToggle={() => onToggle(2)}
        />
      </View>
    </View>
  );
};

export default NotificationRingtone;

const styles = StyleSheet.create({
  checkBoxContainer: {
    flex: 1,
  },
  ringTxt: {
    fontSize: 18,
    fontFamily: fonts.dmSans[400],
    color: COLORS.very_dark_gray,
    marginTop: 20,
  },
  ringTxtDisable: {
    fontSize: 18,
    fontFamily: fonts.dmSans[400],
    color: '#B8C0C0',
    marginTop: 20,
  },
  checkBoxes: {
    justifyContent: 'space-evenly',
    flex: 1,
    marginLeft: 12,
  },
});
