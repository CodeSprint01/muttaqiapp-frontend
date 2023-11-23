import React, {FC} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
  View,
} from 'react-native';
import AppText from '../../atoms/appText/AppText';
import {COLORS} from '../../../styles/color';

interface ButtonProps {
  buttonText: string;
  textStyle?: StyleProp<TextStyle>;
  withOpacity?: number;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  ImageName?: ImageSourcePropType;
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
          <ImageName width={imageWidth} height={imageHeight} />
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
    marginHorizontal: 30,
    marginTop: 20,
    height: 63,
  },
  txt: {
    color: COLORS.black,
  },
  iconContainer: {
    position: 'absolute',
    right: 44,
    top: 21,
  },
});
