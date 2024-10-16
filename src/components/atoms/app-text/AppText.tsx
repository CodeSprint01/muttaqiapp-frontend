import {
  StyleSheet,
  Text,
  View,
  StyleProp,
  TextStyle,
  TextProps,
} from 'react-native';
import React, {FC} from 'react';
import {COLORS, fonts} from '../../../styles/color';

interface myProps extends TextProps {
  text: any;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
  props?: TextProps;
}

const AppText: FC<myProps> = ({text, style, onPress, ...props}) => {
  return (
    <View>
      <Text {...props} onPress={onPress} style={[styles.txt, style]}>
        {text}
      </Text>
    </View>
  );
};

export default AppText;

const styles = StyleSheet.create({
  txt: {
    color: COLORS.lightBlack,
  },
});
