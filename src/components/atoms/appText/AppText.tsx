import {StyleSheet, Text, View, StyleProp, TextStyle} from 'react-native';
import React, {FC} from 'react';

interface myProps {
  text: string;
  style?: StyleProp<TextStyle>;
}

const AppText: FC<myProps> = ({text, style}) => {
  return (
    <View>
      <Text style={[styles.txt, style]}>{text}</Text>
    </View>
  );
};

export default AppText;

const styles = StyleSheet.create({
  txt: {
    color: 'red',
    fontFamily: 'DMSans-Italic-VariableFont_opsz,wght',
  },
});
