import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import SplashScreen from './src/screens/splashScreen/SplashScreen';
import AppInput from './src/components/molecules/app-input/AppInput';
import SignUp from './src/screens/signUp/SignUp';
import SignIn from './src/screens/signIn/SignIn';
import UserInfoFlow from './src/screens/userInfoFlow/UserInfoFlow';
import {COLORS} from './src/styles/color';
import TabNavigator from './src/navigation/TabNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
    // <Text>hhh</Text>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
// <View style={styles.container}>
{
  /* <SplashScreen /> */
}
{
  /* <SignUp /> */
}
{
  /* <SignIn /> */
}
{
  /* <UserInfoFlow /> */
}

// </View>
