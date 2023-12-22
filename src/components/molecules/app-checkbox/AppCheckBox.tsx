import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import AppText from '../../atoms/app-text/AppText';
import {COLORS} from '../../../styles/color';
import {AppIconSvg, Icons} from '../../atoms/app-icon-svg';

interface CustomCheckboxStyle {
  textContent?: StyleProp<TextStyle>;
}

interface Props {
  label?: string;
  isChecked: boolean;
  onToggle: () => void;
  style?: CustomCheckboxStyle;
  containerStyle?: StyleProp<ViewStyle>;
}

const AppCheckBox = ({
  label,
  isChecked,
  onToggle,
  style,
  containerStyle,
}: Props) => {
  return (
    <View style={[styles.checkboxContainer, containerStyle]}>
      <TouchableOpacity
        onPress={onToggle}
        activeOpacity={0.7}
        style={styles.checkboxUnchecked}>
        {isChecked && (
          <AppIconSvg
            icon={Icons.CheckBoxTickIcon}
            width={15}
            height={15}
            color={COLORS.green}
          />
        )}
      </TouchableOpacity>
      <AppText style={[styles.textContent, style?.textContent]} text={label} />
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
    marginRight: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    width: 20,
    height: 20,
    backgroundColor: 'blue',
    marginRight: 10,
    borderRadius: 4,
  },
  textContent: {
    flex: 1,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    paddingBottom: 8,
    paddingTop: 3,
  },
});

export default AppCheckBox;
