import {StyleSheet, TextProps, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import AppText from '../../atoms/app-text/AppText';
import {COLORS} from '../../../styles/color';
import {AppIconSvg, Icons} from '../../atoms/app-icon-svg';

interface DropDownProps {
  placeholder: string;
  placeholderSty?: TextProps;
  label: string;
  onPress: () => void;
}

const DropdownModal: FC<DropDownProps> = ({
  placeholder,
  placeholderSty,
  label,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={styles.dropdown}>
        <AppText
          text={placeholder}
          style={[styles.placholderTxt, placeholderSty]}
        />
        <View style={styles.icon}>
          <AppIconSvg
            icon={Icons.DropDown}
            width={15}
            height={15}
            color={COLORS.black}
          />
        </View>
      </View>
      <AppText text={label} style={styles.label} />
    </TouchableOpacity>
  );
};

export default DropdownModal;

const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    borderRadius: 10,
    height: 47,
    flexDirection: 'row',
    alignItems: 'center',
  },
  placholderTxt: {
    fontSize: 16,
    fontWeight: '400',
    paddingLeft: 13,
    color: COLORS.tertiary,
  },
  icon: {
    position: 'absolute',
    right: 0,
    paddingRight: 13,
  },
  label: {
    position: 'absolute',
    backgroundColor: COLORS.white,
    paddingHorizontal: 5,
    top: -56,
    left: 8,
    color: COLORS.lightBlack,
  },
});
