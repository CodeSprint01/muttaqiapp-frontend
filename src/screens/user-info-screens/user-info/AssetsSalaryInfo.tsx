import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppText from '../../../components/atoms/app-text/AppText';
import AppInputDropDown from '../../../components/molecules/app-input-drop-down/AppInputDropDown';
import {IncomeType} from '../../../utils/mocks/AllMockArray';
import AppInput from '../../../components/molecules/app-input/AppInput';
import {COLORS, fonts} from '../../../styles/color';

const AssetsSalaryInfo = () => {
  const [userData, setUserData] = useState({
    incomeType: null,
    salaryAmount: '',
    organization: '',
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
      <AppText text={'Assets information'} style={styles.formTitle} />
      <View style={styles.input}>
        <AppInputDropDown
          placeholderText="Choose your income type"
          arrayData={IncomeType}
          inputLabel="Income type"
          isRequired={true}
          handleSelectValue={val => handleInputValue(val, 'incomeType')}
        />
      </View>
      <View style={styles.input}>
        <AppInput
          inputLabel="Salary amount"
          isRequired={true}
          placeholder="Type your salary amount"
          handleInputChange={val => handleInputValue(val, 'salaryAmount')}
          inputValue={userData.salaryAmount.toString()}
          keyboardType={'number-pad'}
        />
      </View>
      <View style={styles.input}>
        <AppInput
          inputLabel="Organization"
          isRequired={true}
          placeholder="Type the name of your organization"
          handleInputChange={val => handleInputValue(val, 'organization')}
          inputValue={userData.organization}
        />
      </View>
    </View>
  );
};

export default AssetsSalaryInfo;

const styles = StyleSheet.create({
  formTitle: {
    color: COLORS.green,
    fontSize: 24,
    fontFamily: fonts.dmSans[700],
    paddingTop: 4,
  },
  input: {
    marginTop: 24,
  },
});
