import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import PhoneNumberInput from 'react-native-phone-number-input';
import {COLORS} from '../../../styles/color';
const SelectPhoneNumber = () => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [countryCode, setCountryCode] = useState('US'); // Initial country code

  const handleOnChangeText = text => {
    setValue(text);
  };

  const handleOnSelectCountry = (newCountryCode: any) => {
    setCountryCode(newCountryCode);
  };

  return (
    <View style={styles.container}>
      <PhoneNumberInput
        defaultValue={value}
        defaultCode={countryCode}
        onChangeText={handleOnChangeText}
        onChangeFormattedText={setFormattedValue}
        onSelectCountry={handleOnSelectCountry}
        textInputStyle={{}}
        containerStyle={styles.flagContainer}
        textContainerStyle={styles.phoneNumberInput}
        flagButtonStyle={styles.flagView}
      />
    </View>
  );
};
export default SelectPhoneNumber;
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  flagContainer: {
    borderRadius: 10,
    marginRight: 20,
  },
  flagView: {
    borderWidth: 1,
    borderColor: COLORS.quaternary,
    borderRadius: 10,
    width: '30%',
  },
  phoneNumberInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 10,
    width: '65%',
    marginRight: -14,
    borderWidth: 1,
    borderColor: COLORS.quaternary,
    height: 47,
    paddingTop: -20,
    paddingBottom: -10,
  },
});
