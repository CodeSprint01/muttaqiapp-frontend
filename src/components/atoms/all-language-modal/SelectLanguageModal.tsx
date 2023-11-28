import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import {COLORS} from '../../../styles/color';
import {DropDownImage} from '../../../../assets/images';
import AppText from '../app-text/AppText';

const SelectLanguageModal = () => {
  const [countryCode, setCountryCode] = useState('PK');

  const onSelect = country => {
    setCountryCode(country.cca2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countryName}>
        <AppText text={'Country of Stay'} />
      </View>
      <CountryPicker
        onSelect={onSelect}
        countryCode={countryCode}
        withFlag={true}
        withFilter={true}
        withCountryNameButton={true}
      />
      <View style={styles.deopdownIcon}>
        <DropDownImage width={20} height={20} />
      </View>
    </View>
  );
};
export default SelectLanguageModal;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'pink',
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    borderRadius: 10,
    height: 47,
    paddingTop: 10,
    paddingLeft: 13,
  },
  countryName: {
    backgroundColor: 'white',
    position: 'absolute',
    top: -10,
    left: 9,
    paddingHorizontal: 5,
  },
  deopdownIcon: {
    position: 'absolute',
    top: 13,
    right: 12,
  },
});
