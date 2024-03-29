import React from 'react';
import {StyleSheet, LogBox} from 'react-native';
import './src/components/atoms/error/LogBox';
import MainStack from './src/navigation/MainStack';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import store from './src/redux/store';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.container}>
        <BottomSheetModalProvider>
          <MainStack />
        </BottomSheetModalProvider>
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
