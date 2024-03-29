import {
  StyleSheet,
  TextInput,
  View,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import {COLORS, fonts} from '../../../styles/color';
import AppText from '../../atoms/app-text/AppText';
import {AppIconSvg, Icons} from '../../atoms/app-icon-svg';

interface InputProps extends TextInputProps {
  inputLabel: string;
  isRequired?: boolean;
  placeholder: string;
  rightIcon?: any;
  rightIconSecond?: any;
  onPressRightIconSecond?: () => void;
  onPressRightIcon?: () => void;
  handleInputChange: (val: string) => void;
  inputValue: string | number;
}

const AppInput: FC<InputProps> = ({
  inputLabel,
  isRequired = false,
  placeholder,
  rightIcon,
  onPressRightIcon,
  rightIconSecond,
  onPressRightIconSecond,
  handleInputChange,
  inputValue,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerTxt}>
        <AppText text={` ${inputLabel}`} style={styles.inputTxt} />
        {isRequired && <AppText text={' *'} style={styles.requireDot} />}
      </View>
      {rightIcon && (
        <TouchableOpacity onPress={onPressRightIcon} style={styles.rightIcon}>
          <AppIconSvg icon={rightIcon} width={25} height={25} color="black" />
        </TouchableOpacity>
      )}
      {rightIconSecond && (
        <TouchableOpacity
          onPress={onPressRightIconSecond}
          style={styles.rightIconSecd}>
          <AppIconSvg
            icon={rightIconSecond}
            width={25}
            height={25}
            color="black"
          />
        </TouchableOpacity>
      )}
      <View
        style={
          rightIcon
            ? styles.firstIcon
            : rightIconSecond
            ? styles.secondIcon
            : styles.noIcon
        }>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={COLORS.light_gray}
          onChangeText={handleInputChange}
          value={inputValue}
          style={styles.inputSty}
          {...props}
        />
      </View>
      <View style={styles.verticalLine} />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: COLORS.light_black_gray,
  },
  inputSty: {
    width: '100%',
    height: 40,
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
  verticalLine: {
    width: '100%',
    backgroundColor: COLORS.pale_aqua,
    height: 1,
  },
  requireDot: {
    fontSize: 14,
    fontFamily: fonts.dmSans[500],
    color: COLORS.crimson,
    fontStyle: 'normal',
  },
  rightIcon: {
    position: 'absolute',
    right: 35,
    bottom: 4,
    padding: 5,
  },
  rightIconSecd: {
    position: 'absolute',
    right: 0,
    bottom: 4,
    padding: 5,
  },
  firstIcon: {
    width: '80%',
  },
  secondIcon: {
    width: '80%',
  },
  noIcon: {
    width: '100%',
  },
});
