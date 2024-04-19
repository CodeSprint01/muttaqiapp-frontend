import React from 'react';
import {StyleSheet, LogBox} from 'react-native';
import './src/components/atoms/error/LogBox';
import MainStack from './src/navigation/MainStack';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import configureStore from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Config from 'react-native-config';

const App = () => {
  console.log(Config.LOCAL_URL, 'hhjhggj');

  LogBox.ignoreAllLogs();
  const {store, persistor} = configureStore();
  // Initialize Apollo Client
  const client = new ApolloClient({
    uri: 'http://192.168.1.108:3000/graphql',
    // uri: Config.LOCAL_URL,
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GestureHandlerRootView style={styles.container}>
            <BottomSheetModalProvider>
              <MainStack />
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
