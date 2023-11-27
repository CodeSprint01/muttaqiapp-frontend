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

  const handleOnSelectCountry = newCountryCode => {
    setCountryCode(newCountryCode);
  };
  console.log(formattedValue);

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
        textContainerStyle={{
          backgroundColor: 'white',
          borderRadius: 10,
          marginLeft: 10,
          width: '65%',
          marginRight: -14,
          borderWidth: 1,
          borderColor: COLORS.quaternary,
        }}
        flagButtonStyle={styles.flagView}
      />
    </View>
  );
};
export default SelectPhoneNumber;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'blue',
    // borderWidth:2,
    // borderColor:"red",
    width: '100%',
  },
  flagContainer: {
    // borderWidth: 1,
    borderRadius: 10,
    marginRight: 20,
    // backgroundColor:"green"
  },
  flagView: {
    borderWidth: 1,
    borderColor: COLORS.quaternary,
    borderRadius: 10,
    width: '35%',
  },
});
