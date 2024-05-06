import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import {State, screens} from '../types/types';
import AppStack from './AppStack';
import {useSelector} from 'react-redux';

const MainStack = () => {
  const Stack = createStackNavigator();
  const data = useSelector((state: State) => state?.userReducer?.userInfo);
  const isLogin = data?.isLoged;
  console.log('final user log....', isLogin);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {data?.isLoged ? (
          <Stack.Screen
            name={screens.APP_STACK}
            component={AppStack}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name={screens.AUTH_STACK}
            component={AuthStack}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
