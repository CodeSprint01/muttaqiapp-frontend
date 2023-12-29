import React from 'react';
import {StyleSheet} from 'react-native';
import './src/components/atoms/error/LogBox';
import MainStack from './src/navigation/MainStack';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.container}>
        <MainStack />
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
