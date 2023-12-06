import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainStack from './src/navigation/MainStack';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
