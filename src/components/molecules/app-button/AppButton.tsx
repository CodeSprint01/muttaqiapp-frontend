import React, {FC} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import AppText from '../../atoms/app-text/AppText';
import {COLORS} from '../../../styles/color';
import {AppIconSvg} from '../../atoms/app-icon-svg';

interface ButtonProps {
  buttonText: string;
  textStyle?: StyleProp<TextStyle>;
  withOpacity?: number;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  ImageName?: string;
  imageWidth?: number;
  imageHeight?: number;
}
type PropsWithImage = ButtonProps &
  (ButtonProps['ImageName'] extends ImageSourcePropType
    ? {
        imageWidth: number;
        imageHeight: number;
      }
    : {});

const AppButton: FC<PropsWithImage> = ({
  withOpacity = 0.5,
  onPress,
  buttonText,
  textStyle,
  buttonStyle,
  ImageName,
  imageWidth = 24,
  imageHeight = 24,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={withOpacity}
      style={[styles.button, buttonStyle]}>
      <AppText text={buttonText} style={[styles.txt, textStyle]} />
      {ImageName && (
        <View style={styles.iconContainer}>
          <AppIconSvg
            icon={ImageName}
            width={imageWidth}
            height={imageHeight}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    marginTop: 20,
    height: 55,
  },
  txt: {
    color: COLORS.lightBlack,
  },
  iconContainer: {
    position: 'absolute',
    right: 44,
    top: 21,
  },
});
