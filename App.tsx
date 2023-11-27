import {View, StyleSheet} from 'react-native';
import React from 'react';
import SplashScreen from './src/screens/splashScreen/SplashScreen';
import AppInput from './src/components/molecules/app-input/AppInput';
import SignUp from './src/screens/signUp/SignUp';
import SignIn from './src/screens/signIn/SignIn';
import UserInfoFlow from './src/screens/userInfoFlow/UserInfoFlow';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <SplashScreen /> */}
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      <UserInfoFlow />
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
