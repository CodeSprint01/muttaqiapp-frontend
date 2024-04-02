import {StyleSheet, Switch, View} from 'react-native';
import React, {FC} from 'react';
import AppText from '../../atoms/app-text/AppText';
import {COLORS, fonts} from '../../../styles/color';

interface SwitchProps {
  label: string;
  title: string;
  toggleSwitch: () => void;
  bottomText: string;
  isEnabled: boolean;
}

const AppSwitch: FC<SwitchProps> = ({
  label,
  title,
  toggleSwitch,
  bottomText,
  isEnabled,
}) => {
  return (
    <View>
      <AppText text={label} style={styles.labelTxt} />
      <View style={styles.switchConatiner}>
        <View style={styles.switchLabel}>
          <AppText text={title} style={styles.switchTxt} />
        </View>
        <View style={styles.switch}>
          <Switch
            trackColor={{false: COLORS.pale_gray, true: COLORS.green}}
            thumbColor={isEnabled ? COLORS.white : COLORS.off_white}
            ios_backgroundColor={COLORS.pale_gray}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <AppText text={bottomText} style={styles.toggleTxt} />
      <View style={styles.verticalLine} />
    </View>
  );
};

export default AppSwitch;

const styles = StyleSheet.create({
  switchConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  labelTxt: {
    fontSize: 18,
    fontFamily: fonts.dmSans[500],
    color: COLORS.green,
  },
  switchTxt: {
    fontSize: 18,
    fontFamily: fonts.dmSans[400],
    color: COLORS.very_dark_gray,
  },
  toggleTxt: {
    fontSize: 12,
    fontFamily: fonts.dmSans[400],
    color: COLORS.dark_gray,
  },
  switchLabel: {
    width: '80%',
  },
  switch: {
    width: '20%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  verticalLine: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.pale_aqua,
    marginTop: 14,
  },
});
