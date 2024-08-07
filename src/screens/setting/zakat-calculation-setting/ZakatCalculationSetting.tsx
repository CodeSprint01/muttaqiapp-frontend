import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';

const ZakatCalculationSetting = () => {
  return (
    <AppContainer style={styles.container}>
      <ScreenHeader headerText="Zakat calculation" extraStyle={styles.header} />
    </AppContainer>
  );
};

export default ZakatCalculationSetting;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
  },
  container: {
    flex: 1,
  },
});
