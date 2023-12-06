import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {getSvgIcon, Icons} from '../../../utils/helper/svg';

interface AppIconSvgProps {
  icon: any;
  width?: number;
  height?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const AppIconSvg = ({
  icon,
  width = 20,
  height = 20,
  color,
  style,
}: AppIconSvgProps) => (
  <View style={style}>
    {color ? (
      <SvgXml xml={getSvgIcon(icon, color)} width={width} height={height} />
    ) : (
      <SvgXml
        xml={getSvgIcon(icon)}
        width={width}
        height={height}
        color={color}
      />
    )}
  </View>
);
export {Icons, AppIconSvg as default};
