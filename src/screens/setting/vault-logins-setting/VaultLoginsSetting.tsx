import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';

const VaultLoginsSetting = ({route}) => {
  let data = route?.params?.data;
  // console.log(data);

  return (
    <AppContainer>
      <Text>VaultLoginsSetting</Text>
    </AppContainer>
  );
};

export default VaultLoginsSetting;

const styles = StyleSheet.create({});
