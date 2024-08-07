import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, fonts} from '../../../styles/color';

interface HeaderButtonsProps {
  handlePress: (val: string) => void;
  selectedButton: string;
}

const HeaderButtons = ({handlePress, selectedButton}: HeaderButtonsProps) => {
  const buttons = ['All', 'Quran', 'Azkar', 'Dua'];

  return (
    <View style={styles.buttonContainer}>
      {buttons.map(button => (
        <TouchableOpacity
          key={button}
          onPress={() => handlePress(button)}
          style={[styles.button]}>
          <Text
            style={[
              styles.buttonText,
              selectedButton === button
                ? styles.selectedText
                : styles.defaultText,
            ]}>
            {button}
          </Text>
          <View
            style={[
              styles.underline,
              selectedButton === button
                ? styles.selectedUnderline
                : styles.defaultUnderline,
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default HeaderButtons;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: '25%',
    marginVertical: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: COLORS.green,
    fontFamily: fonts.dmSans[700],
    marginBottom: 12,
  },
  selectedText: {
    color: COLORS.green,
  },
  defaultText: {
    color: COLORS.light_black_gray,
  },
  underline: {
    height: 3,
    width: '100%',
  },
  selectedUnderline: {
    backgroundColor: COLORS.green,
  },
  defaultUnderline: {
    backgroundColor: COLORS.light_black_gray,
  },
});
