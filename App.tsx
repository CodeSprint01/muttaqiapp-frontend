import React from 'react';
import {StyleSheet} from 'react-native';
import './src/components/atoms/error/LogBox';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainStack from './src/navigation/MainStack';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
