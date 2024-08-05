import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppText from '../../../components/atoms/app-text/AppText';
import AppInputDropDown from '../../../components/molecules/app-input-drop-down/AppInputDropDown';
import {
  Gender,
  relationship,
  SecteList,
} from '../../../utils/mocks/AllMockArray';
import PhoneNumberInput from 'react-native-phone-number-input';
import AppInput from '../../../components/molecules/app-input/AppInput';
import {Icons} from '../../../utils/helper/svg';
import {COLORS, fonts} from '../../../styles/color';

const NomineeInfo = () => {
  const [formattedValue, setFormattedValue] = useState('');
  const [countryCode, setCountryCode] = useState('PK'); // Initial country code
  const [userData, setUserData] = useState({
    nomineeName: '',
    relationship: null,
    nomineeAddress: '',
    emailAddress: '',
    nomineeCNIC: '',
  });
  // all data store in userdata state and only phone store in formattedValue
  const handleInputValue = (val: any, inputName: string) => {
    setUserData(prevState => ({
      ...prevState,
      [inputName]: val,
    }));
  };

  return (
    <View>
      <AppText text={'General information'} style={styles.formTitle} />
      <View style={styles.form}>
        <AppInput
          inputLabel="Nominee name"
          isRequired={true}
          placeholder="Type the full name of your nominee  "
          handleInputChange={val => handleInputValue(val, 'nomineeName')}
          inputValue={userData.nomineeName}
        />
      </View>

      <View style={styles.inputs}>
        <AppInputDropDown
          placeholderText="your relationship to your nominee"
          arrayData={relationship}
          inputLabel="Relationship"
          isRequired={true}
          handleSelectValue={val => handleInputValue(val, 'relationship')}
        />
      </View>
      <View style={styles.inputs}>
        <AppInput
          inputLabel="Address"
          placeholder="Enter the address  of your nominee"
          handleInputChange={val => handleInputValue(val, 'nomineeAddress')}
          inputValue={userData.nomineeAddress}
        />
      </View>
      <View style={styles.inputs}>
        <AppInput
          inputLabel="E-mail address"
          placeholder="Enter the E-mail address  of your nominee"
          handleInputChange={val => handleInputValue(val, 'emailAddress')}
          inputValue={userData.emailAddress}
        />
      </View>
      <View style={styles.inputs}>
        <AppInput
          inputLabel="Nominee CNIC No."
          placeholder="Enter the CNIC No. of your nominee"
          handleInputChange={val => handleInputValue(val, 'nomineeCNIC')}
          inputValue={userData.nomineeCNIC}
          keyboardType={'number-pad'}
        />
      </View>
      <View style={styles.inputs}>
        <AppText text={'Nominee phone number'} style={styles.inputTxt} />
        <PhoneNumberInput
          defaultCode={countryCode}
          // onChangeText={val => handleOnChangeText(val, 'phone')}
          // onSelectCountry={code => handleOnSelectCountry(code)}
          onChangeFormattedText={setFormattedValue}
          textInputStyle={{}}
          containerStyle={styles.flagContainer}
          textContainerStyle={styles.phoneNumberInput}
          flagButtonStyle={styles.flagView}
          placeholder="nominee phone number"
          codeTextStyle={{color: COLORS.medium_gray}}
        />
      </View>
    </View>
  );
};

export default NomineeInfo;

const styles = StyleSheet.create({
  formTitle: {
    color: COLORS.green,
    fontSize: 24,
    fontFamily: fonts.dmSans[700],
    paddingTop: 4,
  },
  form: {
    marginTop: 24,
  },
  genderAge: {
    flexDirection: 'row',
    marginTop: 24,
    justifyContent: 'space-between',
  },
  gender: {
    width: '47%',
  },
  userAge: {
    width: '46%',
    marginTop: 6.5,
  },
  inputs: {
    marginTop: 24,
  },
  flagContainer: {
    marginRight: 20,
    backgroundColor: COLORS.pale_mint,
  },
  flagView: {
    borderRadius: 10,
    width: '30%',
    backgroundColor: COLORS.pale_mint,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.pale_aqua,
  },
  phoneNumberInput: {
    borderRadius: 10,
    marginLeft: 15,
    width: '65%',
    marginRight: -35,
    borderColor: COLORS.pale_aqua,
    borderBottomWidth: 1,
    height: 47,
    paddingTop: -20,
    paddingBottom: -10,
    backgroundColor: COLORS.pale_mint,
  },
  inputTxt: {
    fontSize: 14,
    fontFamily: fonts.dmSans[500],
    color: COLORS.green,
    fontStyle: 'normal',
    paddingLeft: 3,
  },
});
