import {SafeAreaView, StyleSheet, ViewProps, ViewStyle} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {COLORS} from '../../../styles/color';

interface AppContainerProps extends ViewProps {
  children: ReactNode;
  style?: ViewStyle;
}

const AppContainer: FC<AppContainerProps> = ({children, style, ...props}) => {
  return (
    <SafeAreaView style={[styles.container, style]} {...props}>
      {children}
    </SafeAreaView>
  );
};

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pale_mint,
    // padding: 40,
  },
});
