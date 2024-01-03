import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppContainer from '../../components/atoms/app-container/AppContainer';

const AddTodo = () => {
  return (
    <AppContainer style={{backgroundColor: 'red', flex: 1}}>
      <Text>AddTodo</Text>
    </AppContainer>
  );
};

export default AddTodo;

const styles = StyleSheet.create({});
