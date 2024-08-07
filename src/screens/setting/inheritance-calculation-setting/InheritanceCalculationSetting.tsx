import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';

const InheritanceCalculationSetting = () => {
  return (
    <AppContainer style={styles.container}>
      <ScreenHeader
        headerText="Inheritance calculation"
        extraStyle={styles.header}
      />
    </AppContainer>
  );
};

export default InheritanceCalculationSetting;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
  },
  container: {
    flex: 1,
  },
});
