import {StyleSheet, TextInput, View, TextInputProps} from 'react-native';
import React, {FC} from 'react';
import {COLORS, fonts} from '../../../styles/color';
import AppText from '../../atoms/app-text/AppText';

interface InputProps extends TextInputProps {
  inputLabel: string;
  isRequired?: boolean;
  placeholder: string;
  handleInputChange: (val: string) => void;
  inputValue: string | number;
}

const AppInput: FC<InputProps> = ({
  inputLabel,
  isRequired = false,
  placeholder,
  handleInputChange,
  inputValue,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerTxt}>
        <AppText text={inputLabel} style={styles.inputTxt} />
        {isRequired && <AppText text={' *'} style={styles.requireDot} />}
      </View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.light_gray}
        onChangeText={handleInputChange}
        value={inputValue}
        style={styles.inputSty}
        {...props}
      />
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
    borderBottomColor: COLORS.pale_aqua,
    borderBottomWidth: 1,
  },
  headerTxt: {
    flexDirection: 'row',
  },
  inputTxt: {
    fontSize: 14,
    fontFamily: fonts.dmSans[500],
    color: COLORS.green,
    fontStyle: 'normal',
    paddingLeft: 3,
  },
  requireDot: {
    fontSize: 14,
    fontFamily: fonts.dmSans[500],
    color: COLORS.crimson,
    fontStyle: 'normal',
  },
});
