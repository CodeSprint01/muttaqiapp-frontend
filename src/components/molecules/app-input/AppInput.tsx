/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  TextInput,
  View,
  TextStyle,
  ViewStyle,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
import React, {FC, useState, useRef} from 'react';
import {COLORS} from '../../../styles/color';
import AppText from '../../atoms/app-text/AppText';
import {AppIconSvg} from '../../atoms/app-icon-svg';

interface MyProps {
  inputLabel: string;
  textStyle?: TextStyle;
  inputStyle?: ViewStyle;
  ImageName?: string;
  imageWidth?: number;
  imageHeight?: number;
  iconStyle?: ViewStyle;
  onPress?: () => void;
}

const AppInput: FC<MyProps> = ({
  inputLabel,
  textStyle,
  inputStyle,
  ImageName,
  imageWidth = 24,
  imageHeight = 24,
  iconStyle,
  onPress,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(rest.value || ''); // Use state to track input value
  const animatedValue = useRef(new Animated.Value(inputValue ? 1 : 0)).current;

  const handleFocus = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!inputValue) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 200,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
      setIsFocused(false);
    }
  };
  const handleInputChange = (text: string) => {
    setInputValue(text);
  };
  const labelStyle = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [25, 0],
        }),
      },
    ],
  };
  return (
    <>
      <View>
        <View style={styles.textView}>
          <Animated.View style={[styles.animatedLabel, labelStyle]}>
            <AppText
              text={inputLabel}
              onPress={handleFocus}
              style={[
                styles.txtSty,
                textStyle,
                {
                  color: isFocused ? COLORS.lightBlack : COLORS.quaternary,
                  fontSize: isFocused ? 12 : 14,
                },
              ]}
            />
          </Animated.View>
        </View>
        <TextInput
          style={[styles.inputSty, inputStyle, {zIndex: isFocused ? 1 : 3}]}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleInputChange}
          value={inputValue}
          {...rest}
        />
        {ImageName && (
          <TouchableOpacity
            onPress={onPress}
            style={[styles.iconContainer, iconStyle]}>
            <AppIconSvg
              icon={ImageName}
              width={imageWidth}
              height={imageHeight}
              color={COLORS.black}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  inputSty: {
    height: 47,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    borderRadius: 10,
    paddingLeft: 14,
    paddingRight: 40,
    fontSize: 16,
  },
  textView: {
    position: 'absolute',
    zIndex: 2,
    marginLeft: 9,
    left: 3,
    backgroundColor: 'white',
    top: -6,
    marginBottom: 8,
  },
  txtSty: {
    fontSize: 14,
    lineHeight: 12.64,
    fontWeight: '400',
    color: COLORS.lightBlack,
    marginHorizontal: 5,
    paddingTop: 2,
  },
  animatedLabel: {
    position: 'absolute',
    backgroundColor: 'white',
  },
  iconContainer: {
    position: 'absolute',
    right: 13,
    top: 8,
    zIndex: 2,
    padding: 4,
  },
});
