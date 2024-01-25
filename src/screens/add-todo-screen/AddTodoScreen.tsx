import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppContainer from '../../components/atoms/app-container/AppContainer';

const AddTodoScreen = () => {
  return (
    <AppContainer style={{backgroundColor: 'red', flex: 1}}>
      <Text>AddTodoScreen</Text>
    </AppContainer>
  );
};

export default AddTodoScreen;

const styles = StyleSheet.create({});
