import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import axios from 'axios';
const AddTodo = () => {
  useEffect(() => {
    // fetch('https://api.alquran.cloud/v1/surah/1').then(res => {
    //   console.log(res);
    // });
    // axios.get('https://api.alquran.cloud/v1/surah/1').then(res => {
    //   console.log(res);
    axios({
      method: 'GET',
      url: 'https://api.alquran.cloud/v1/surah/1',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(res => {
      console.log(res);
    });
  }, []);
  return (
    <AppContainer style={{backgroundColor: 'red', flex: 1}}>
      <Text>AddTodo</Text>
    </AppContainer>
  );
};

export default AddTodo;

const styles = StyleSheet.create({});
