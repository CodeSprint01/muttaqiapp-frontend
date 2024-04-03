import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import AppText from '../../atoms/app-text/AppText';
import {COLORS, fonts} from '../../../styles/color';

interface CustomCheckboxStyle {
  textContent?: StyleProp<TextStyle>;
}

interface Props {
  label?: string;
  isChecked: boolean;
  onToggle: () => void;
  style?: CustomCheckboxStyle;
  containerStyle?: StyleProp<ViewStyle>;
  checkBoxStyle?: StyleProp<ViewStyle>;
  disable?: boolean;
}

const AppCheckBoxFill = ({
  label,
  isChecked,
  onToggle,
  style,
  containerStyle,
  checkBoxStyle,
  disable,
}: Props) => {
  return (
    <View style={[styles.checkboxContainer, containerStyle]}>
      <TouchableOpacity
        onPress={onToggle}
        disabled={disable}
        activeOpacity={disable ? 9 : 0.7}
        style={[
          styles.checkboxUnchecked,
          checkBoxStyle,
          disable && styles.checkboxUncheckedDisable,
        ]}>
        {isChecked && (
          <View style={[styles.fillBox, disable && styles.fillBoxDisable]} />
        )}
      </TouchableOpacity>
      <AppText
        style={[
          styles.textContent,
          style?.textContent,
          disable && styles.textContentDisable,
        ]}
        text={label}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxUnchecked: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: COLORS.green,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxUncheckedDisable: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: '#B4E3DD',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContent: {
    flex: 1,
    fontStyle: 'normal',
    fontFamily: fonts.dmSans[400],
    fontSize: 18,
    color: COLORS.medium_gray,
    paddingLeft: 20,
  },
  textContentDisable: {
    flex: 1,
    fontStyle: 'normal',
    fontFamily: fonts.dmSans[400],
    fontSize: 18,
    color: '#CCD3D2',
    paddingLeft: 20,
  },
  fillBox: {
    backgroundColor: COLORS.green,
    width: 15,
    height: 15,
    borderRadius: 10,
  },
  fillBoxDisable: {
    backgroundColor: '#BDE3DD',
    width: 15,
    height: 15,
    borderRadius: 10,
  },
});

export default AppCheckBoxFill;
