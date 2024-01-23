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
import AppText from '../../atoms/app-text/AppText';
import {COLORS} from '../../../styles/color';
import LinearGradient from 'react-native-linear-gradient';

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
    <LinearGradient
      colors={[
        '#1290A1',
        'rgba(24, 154, 151, 0.86)',
        'rgba(29, 162, 143, 0.73)',
      ]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={[styles.button, buttonStyle]}>
      <TouchableOpacity onPress={onPress} activeOpacity={withOpacity}>
        <AppText text={buttonText} style={[styles.txt, textStyle]} />
        {ImageName && (
          <View style={styles.iconContainer}>
            <ImageName width={imageWidth} height={imageHeight} />
          </View>
        )}
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  txt: {
    color: COLORS.white,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  iconContainer: {
    position: 'absolute',
    right: 44,
    top: 21,
  },
});
