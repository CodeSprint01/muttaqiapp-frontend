import {StyleSheet, ViewStyle, ViewProps} from 'react-native';
import React, {FC, ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface GradientProps extends ViewProps {
  style?: ViewStyle;
  children: ReactNode;
}
const GradientCircle: FC<GradientProps> = ({style, children, ...props}) => {
  return (
    <LinearGradient
      colors={['#1290A1', '#1DA28F']}
      style={[styles.gradient, style]}
      {...props}>
      {children}
    </LinearGradient>
  );
};

export default GradientCircle;

const styles = StyleSheet.create({
  gradient: {
    width: 24,
    height: 24,
  },
});
