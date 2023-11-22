import {View, StyleSheet} from 'react-native';
import React from 'react';
import SplashScreen from './src/screens/splashScreen/SplashScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <SplashScreen />
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
