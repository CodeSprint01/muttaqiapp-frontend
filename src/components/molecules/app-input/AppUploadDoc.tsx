import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {COLORS, fonts} from '../../../styles/color';
import AppText from '../../atoms/app-text/AppText';
import {AppIconSvg, Icons} from '../../atoms/app-icon-svg';

interface InputProps {
  inputLabel: string;
  isRequired?: boolean;
  didPress: () => void;
  placeholder: string | null;
  icon: any;
}

const AppUploadDoc: FC<InputProps> = ({
  inputLabel,
  isRequired = false,
  didPress,
  placeholder,
  icon,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={didPress}>
      <View style={styles.headerTxt}>
        <AppText text={inputLabel} style={styles.inputTxt} />
        {isRequired && (
          <AppText text={' (optional)'} style={styles.requireDot} />
        )}
      </View>
      <View style={styles.txtLogo}>
        <AppText text={placeholder} style={styles.placeholderTxt} />
        <AppIconSvg
          icon={icon}
          width={24}
          height={24}
          color={COLORS.dark_gray}
        />
      </View>
      <View style={styles.verticalLine} />
    </TouchableOpacity>
  );
};

export default AppUploadDoc;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: COLORS.light_black_gray,
  },

  headerTxt: {
    flexDirection: 'row',
  },
  inputTxt: {
    fontSize: 14,
    fontFamily: fonts.dmSans[500],
    color: COLORS.green,
    fontStyle: 'normal',
  },
  requireDot: {
    fontSize: 14,
    fontFamily: fonts.dmSans[500],
    color: COLORS.light_black_gray,
    fontStyle: 'normal',
  },
  verticalLine: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.pale_aqua,
    marginTop: 9,
  },
  txtLogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 6,
  },
  placeholderTxt: {
    fontSize: 16,
    fontFamily: fonts.dmSans[500],
    color: COLORS.light_gray,
  },
});
