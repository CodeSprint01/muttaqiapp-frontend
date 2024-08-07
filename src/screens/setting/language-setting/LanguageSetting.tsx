import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppInputDropDown from '../../../components/molecules/app-input-drop-down/AppInputDropDown';
import {COLORS} from '../../../styles/color';

const LanguageSetting = () => {
  const language = [
    {
      id: 1,
      label: 'English',
      value: 'English',
    },
    {
      id: 1,
      label: 'Urdu',
      value: 'Urdu',
    },
  ];
  return (
    <AppContainer style={styles.container}>
      <ScreenHeader headerText="Languages" extraStyle={styles.header} />
      <View style={styles.dropDown}>
        <AppInputDropDown
          arrayData={language}
          keyValue="English"
          value="English"
          inputLabel="Default language"
          handleSelectValue={val => console.log(val)}
        />
      </View>
      <View style={styles.dropDown}>
        <AppInputDropDown
          keyValue="Urdu"
          value="Urdu"
          arrayData={language}
          inputLabel="Translate language"
          handleSelectValue={val => console.log(val)}
        />
      </View>
    </AppContainer>
  );
};

export default LanguageSetting;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.pale_mint,
  },
  header: {
    paddingHorizontal: 10,
  },
  dropDown: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
