import React, {FC} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
  View,
} from 'react-native';
import AppText from '../../atoms/app-text/AppText';
import {COLORS} from '../../../styles/color';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonProps {
  buttonText: string;
  onPress: () => void;
  ImageName?: ImageSourcePropType;
  imageWidth?: number;
  imageHeight?: number;
  fill?: boolean;
  isEnable?: boolean;
}
type PropsWithImage = ButtonProps &
  (ButtonProps['ImageName'] extends ImageSourcePropType
    ? {
        imageWidth: number;
        imageHeight: number;
      }
    : {});

const AppButton: FC<PropsWithImage> = ({
  onPress,
  buttonText,
  ImageName,
  imageWidth = 24,
  imageHeight = 24,
  fill = true,
  isEnable = false,
}) => {
  return fill ? (
    isEnable ? (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.5}
        disabled={isEnable}>
        {/* <LinearGradient
          colors={[
            '#1290A1',
            'rgba(24, 154, 151, 0.86)',
            'rgba(29, 162, 143, 0.73)',
          ]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.button}> */}
        <View style={styles.fillButtonBlur}>
          <AppText text={buttonText} style={styles.txt} />
          {ImageName && (
            <View style={styles.iconContainer}>
              <ImageName width={imageWidth} height={imageHeight} />
            </View>
          )}
        </View>
        {/* </LinearGradient> */}
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.5}
        disabled={isEnable}>
        <LinearGradient
          colors={[
            '#1290A1',
            'rgba(24, 154, 151, 0.86)',
            'rgba(29, 162, 143, 0.73)',
          ]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.button}>
          <View>
            <AppText text={buttonText} style={styles.txt} />
            {ImageName && (
              <View style={styles.iconContainer}>
                <ImageName width={imageWidth} height={imageHeight} />
              </View>
            )}
          </View>
        </LinearGradient>
      </TouchableOpacity>
    )
  ) : (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={styles.fillButton}>
      <AppText text={buttonText} style={styles.fillTxt} />
      {ImageName && (
        <View style={styles.fillIconContainer}>
          <ImageName width={imageWidth} height={imageHeight} />
        </View>
      )}
    </TouchableOpacity>
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
  fillButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: COLORS.green,
    borderRadius: 13,
  },
  fillButtonBlur: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 13,
    backgroundColor: COLORS.light_gray,
  },
  fillTxt: {
    color: COLORS.green,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  fillIconContainer: {
    position: 'absolute',
    right: 44,
    top: 21,
  },
});
