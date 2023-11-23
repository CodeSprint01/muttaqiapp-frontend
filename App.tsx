import {View, StyleSheet} from 'react-native';
import React from 'react';
import SplashScreen from './src/screens/splashScreen/SplashScreen';
import AppInput from './src/components/molecules/appInput/AppInput';
import {PasswordShowEye} from './assets/images/index';
import SignUp from './src/screens/signUp/SignUp';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <SplashScreen /> */}
      <SignUp />
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
