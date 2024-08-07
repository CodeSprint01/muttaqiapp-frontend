import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppText from '../../../components/atoms/app-text/AppText';
import AppInputDropDown from '../../../components/molecules/app-input-drop-down/AppInputDropDown';
import {aliveStatus} from '../../../utils/mocks/AllMockArray';
import AppInput from '../../../components/molecules/app-input/AppInput';
import {COLORS, fonts} from '../../../styles/color';

const NumberOfSiblings = () => {
  const [userData, setUserData] = useState({
    fatherStatus: null,
    motherStatus: null,
    numberOfBrothers: '',
    numberOfsSisters: '',
  });
  // all data store in userdata state and only phone store in formattedValue
  const handleInputValue = (val: any, inputName: string) => {
    const stringValue = typeof val === 'number' ? String(val) : val;
    setUserData(prevState => ({
      ...prevState,
      [inputName]: stringValue,
    }));
  };

  return (
    <View>
      <AppText text={'Family information'} style={styles.formTitle} />
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
          inputValue={userData.numberOfBrothers.toString()}
          keyboardType={'number-pad'}
        />
      </View>
      <View style={styles.inputs}>
        <AppInput
          inputLabel="Number of sisters"
          placeholder="Enter the number of your sisters"
          isRequired={true}
          handleInputChange={val => handleInputValue(val, 'userCountry')}
          inputValue={userData.numberOfsSisters.toString()}
          keyboardType={'number-pad'}
        />
      </View>
    </View>
  );
};

export default NumberOfSiblings;

const styles = StyleSheet.create({
  formTitle: {
    color: COLORS.green,
    fontSize: 24,
    fontFamily: fonts.dmSans[700],
    paddingTop: 4,
  },
  inputs: {
    marginTop: 24,
  },
});
