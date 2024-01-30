import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AddTodo from '../screens/add-todo-screen/AddTodoScreen';

const AddTodoStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AddTodo" component={AddTodo} />
    </Stack.Navigator>
  );
};

export default AddTodoStack;
