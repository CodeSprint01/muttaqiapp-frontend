/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  TextInput,
  View,
  TextStyle,
  ViewStyle,
  ImageSourcePropType,
  Animated,
  Easing,
  TextInputProps,
} from 'react-native';
import React, {FC, useState, useRef} from 'react';
import {COLORS} from '../../../styles/color';
import AppText from '../../atoms/app-text/AppText';

interface MyProps {
  inputLabel: string;
  textStyle?: TextStyle;
  inputStyle?: ViewStyle;
  ImageName?: ImageSourcePropType;
  imageWidth?: number;
  imageHeight?: number;
}

type PropsWithImage = MyProps &
  (MyProps['ImageName'] extends ImageSourcePropType
    ? {
        imageWidth: number;
        imageHeight: number;
      }
    : {});
const AppInput: FC<PropsWithImage & TextInputProps> = ({
  inputLabel,
  textStyle,
  inputStyle,
  ImageName,
  imageWidth = 24,
  imageHeight = 24,
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
                  color: isFocused ? COLORS.black : COLORS.quaternary,
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
          <View style={styles.iconContainer}>
            <ImageName width={imageWidth} height={imageHeight} />
          </View>
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
    fontFamily: 'DMSans-Italic-VariableFont_opsz,wght',
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
    color: COLORS.black,
    marginHorizontal: 5,
    // backgroundColor:"red",
    paddingTop: 2,
  },
  animatedLabel: {
    position: 'absolute',
    backgroundColor: 'white',
  },
  iconContainer: {
    position: 'absolute',
    right: 44,
    top: 15,
  },
});
