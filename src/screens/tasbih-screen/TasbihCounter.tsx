import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenHeader from '../../components/molecules/app-header/ScreenHeader';
import AppContainer from '../../components/atoms/app-container/AppContainer';

const TasbihCounter = () => {
  return (
    <AppContainer>
      <ScreenHeader />
      <Text>TasbihCounter</Text>
    </AppContainer>
  );
};

export default TasbihCounter;

const styles = StyleSheet.create({});
