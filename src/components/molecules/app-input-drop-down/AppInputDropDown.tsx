import {
  Animated,
  Easing,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useRef, useState} from 'react';
import {COLORS, fonts} from '../../../styles/color';
import {AppIconSvg, Icons} from '../../atoms/app-icon-svg';
import AppText from '../../atoms/app-text/AppText';

interface MyProps {
  arrayData: Array<{value: string}>;
  placeholderText?: string;
  inputLabel?: string;
  icon?: any;
  isRequired?: boolean;
  handleSelectValue: (val: string) => void;
  defaultvalue?: string;
  handleOpenDropDown?: () => void;
}

const AppInputDropDown: FC<MyProps> = ({
  arrayData,
  placeholderText,
  inputLabel,
  isRequired = false,
  handleSelectValue,
  icon,
  defaultvalue,
  handleOpenDropDown,
  ...props
}) => {
  const [placeholder, setPlaceholder] = useState(
    defaultvalue ? defaultvalue : placeholderText,
  );
  const [openDropDown, setOpenDropDown] = useState(false);
  const [isSelectedText, setIsSelectedText] = useState(false);
  const dropdownAnimation = useRef(new Animated.Value(0)).current;

  const onPressItem = (item: string) => {
    handleSelectValue(item);
    setPlaceholder(item);
    setIsSelectedText(true);
    setOpenDropDown(prev => !prev);
    Animated.timing(dropdownAnimation, {
      toValue: openDropDown ? 0 : 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const toggleDropdown = () => {
    if (handleOpenDropDown) {
      handleOpenDropDown();
    }
    setOpenDropDown(prev => !prev);
    Animated.timing(dropdownAnimation, {
      toValue: openDropDown ? 0 : 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };
  const ITEM_HEIGHT = 30;

  const dropdownHeight = dropdownAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, arrayData.length * ITEM_HEIGHT], // Adjust the height as needed
  });

  return (
    <View>
      <View style={styles.headerTxt}>
        <AppText text={inputLabel} style={styles.inputTxt} />
        {isRequired && <AppText text={' *'} style={styles.requireDot} />}
      </View>
      <View style={styles.inputSty}>
        <AppText
          text={placeholder}
          style={[
            styles.placeholderText,
            {color: isSelectedText ? COLORS.dark_gray : COLORS.light_gray},
          ]}
        />
        <TouchableOpacity onPress={toggleDropdown}>
          {openDropDown ? (
            <AppIconSvg
              icon={Icons.DropUp}
              width={24}
              height={24}
              color="black"
            />
          ) : (
            <AppIconSvg
              icon={Icons.DropDown}
              width={24}
              height={24}
              color="black"
            />
          )}
        </TouchableOpacity>
      </View>
      <Animated.View style={[styles.dropdownsty, {height: dropdownHeight}]}>
        {arrayData.map(item => {
          return (
            <TouchableOpacity onPress={() => onPressItem(item.value)}>
              <AppText text={item.value} style={styles.dropdownTextSty} />
            </TouchableOpacity>
          );
        })}
      </Animated.View>
    </View>
  );
};
export default AppInputDropDown;

const styles = StyleSheet.create({
  dropdownTextSty: {
    color: COLORS.dark_gray,
    fontSize: 16,
    paddingTop: 10,
    paddingLeft: 3,
    fontFamily: fonts.dmSans[400],
  },
  placeholderText: {
    fontSize: 16,
    paddingLeft: 3,
    fontFamily: fonts.dmSans[500],
  },
  inputSty: {
    height: 47,
    paddingLeft: 3,
    backgroundColor: COLORS.pale_mint,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.pale_aqua,
  },
  dropdownsty: {
    marginLeft: 17,
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
