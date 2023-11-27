import {StyleSheet, Text, View, StyleProp, TextStyle} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../../styles/color';

interface myProps {
  text: any;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const AppText: FC<myProps> = ({text, style, onPress}) => {
  return (
    <View>
      <Text onPress={onPress} style={[styles.txt, style]}>
        {text}
      </Text>
    </View>
  );
};

export default AppText;

const styles = StyleSheet.create({
  txt: {
    color: COLORS.black,
    // fontFamily: 'DMSans-Italic-VariableFont_opsz,wght',
  },
});
