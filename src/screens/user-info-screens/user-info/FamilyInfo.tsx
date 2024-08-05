import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppText from '../../../components/atoms/app-text/AppText';
import AppInputDropDown from '../../../components/molecules/app-input-drop-down/AppInputDropDown';
import {
  aliveStatus,
  Gender,
  maritalStatus,
  SecteList,
} from '../../../utils/mocks/AllMockArray';
import PhoneNumberInput from 'react-native-phone-number-input';
import AppButton from '../../../components/molecules/app-button/AppButton';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../../types/types';
import AppInput from '../../../components/molecules/app-input/AppInput';
import {Icons} from '../../../utils/helper/svg';
import {COLORS, fonts} from '../../../styles/color';

const FamilyInfo = () => {
  const navigation = useNavigation();
  const [formattedValue, setFormattedValue] = useState('');
  const [countryCode, setCountryCode] = useState('PK'); // Initial country code
  const [userData, setUserData] = useState({
    maritalStatus: null,
    fatherStatus: null,
    motherStatus: null,
    numberOfBrothers: 0,
    numberOfsSisters: 0,
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
      <AppText text={'Family information'} style={styles.formTitle} />
      <View style={styles.form}>
        <AppInputDropDown
          placeholderText="Select your marital status"
          arrayData={maritalStatus}
          inputLabel="Marital status"
          isRequired={true}
          handleSelectValue={val => handleInputValue(val, 'maritalStatus')}
        />
      </View>
      <View style={styles.inputs}>
        <AppInputDropDown
          placeholderText="Choose parent status"
          arrayData={aliveStatus}
          inputLabel="Is your father alive?"
          isRequired={true}
          handleSelectValue={val => handleInputValue(val, 'fatherStatus')}
        />
      </View>
      <View style={styles.inputs}>
        <AppInputDropDown
          placeholderText="Choose parent status"
          arrayData={aliveStatus}
          inputLabel="Is your mother alive?"
          isRequired={true}
          handleSelectValue={val => handleInputValue(val, 'motherStatus')}
        />
      </View>
      <View style={styles.inputs}>
        <AppInput
          inputLabel="Number of brothers"
          placeholder="Enter the number of your brothers"
          isRequired={true}
          handleInputChange={val => handleInputValue(val, 'userAddress')}
          inputValue={userData.numberOfBrothers}
          keyboardType={'number-pad'}
        />
      </View>
      <View style={styles.inputs}>
        <AppInput
          inputLabel="Number of sisters"
          placeholder="Enter the number of your sisters"
          isRequired={true}
          handleInputChange={val => handleInputValue(val, 'userCountry')}
          inputValue={userData.numberOfsSisters}
          keyboardType={'number-pad'}
        />
      </View>
    </View>
  );
};

export default FamilyInfo;

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
  inputs: {
    marginTop: 24,
  },
});
