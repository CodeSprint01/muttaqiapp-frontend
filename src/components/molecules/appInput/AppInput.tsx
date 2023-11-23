import {
  StyleSheet,
  TextInput,
  View,
  TextStyle,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../../styles/color';
import AppText from '../../atoms/appText/AppText';

interface myProps {
  inputLabel: string;
  textStyle?: TextStyle;
  placeholder: string;
  inputStyle?: ViewStyle;
  ImageName?: ImageSourcePropType;
  imageWidth?: number;
  imageHeight?: number;
}
type PropsWithImage = myProps &
  (myProps['ImageName'] extends ImageSourcePropType
    ? {
        imageWidth: number;
        imageHeight: number;
      }
    : {});

const AppInput: FC<PropsWithImage> = ({
  inputLabel,
  textStyle,
  placeholder,
  inputStyle,
  ImageName,
  imageWidth = 24,
  imageHeight = 24,
}) => {
  return (
    <>
      <AppText text={inputLabel} style={[styles.txtSty, textStyle]} />
      <View>
        <TextInput
          placeholder={placeholder}
          style={[styles.inputSty, inputStyle]}
          placeholderTextColor={COLORS.quaternary}
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
    marginHorizontal: 30,
    borderRadius: 10,
    paddingLeft: 14,
    paddingRight: 40,
    fontSize: 16,
    fontFamily: 'DMSans-Italic-VariableFont_opsz,wght',
  },
  txtSty: {
    paddingLeft: 30,
    fontSize: 12,
    lineHeight: 12.64,
    fontWeight: '400',
    color: COLORS.black,
    marginBottom: 8,
  },
  iconContainer: {
    position: 'absolute',
    right: 44,
    top: 15,
  },
});
