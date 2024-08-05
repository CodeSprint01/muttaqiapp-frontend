import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppText from '../../../components/atoms/app-text/AppText';
import AppInputDropDown from '../../../components/molecules/app-input-drop-down/AppInputDropDown';
import {Gender, SecteList} from '../../../utils/mocks/AllMockArray';
import PhoneNumberInput from 'react-native-phone-number-input';
import AppInput from '../../../components/molecules/app-input/AppInput';
import {Icons} from '../../../utils/helper/svg';
import {COLORS, fonts} from '../../../styles/color';

const GeneralInfo = () => {
  const [formattedValue, setFormattedValue] = useState('');
  const [countryCode, setCountryCode] = useState('PK'); // Initial country code
  const [userData, setUserData] = useState({
    userName: '',
    userGender: null,
    userAge: 0,
    userEduction: '',
    userAddress: '',
    userCountry: '',
    userCNIC: 0,
    userSect: '',
    userFirqa: '',
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
          inputLabel="Full Name"
          isRequired={true}
          placeholder="Enter your full legal name"
          handleInputChange={val => handleInputValue(val, 'userName')}
          inputValue={userData.userName}
        />
      </View>
      <View style={styles.genderAge}>
        <View style={styles.gender}>
          <AppInputDropDown
            placeholderText="Choose gender"
            arrayData={Gender}
            inputLabel="Gender"
            isRequired={true}
            handleSelectValue={val => handleInputValue(val, 'userGender')}
          />
        </View>
        <View style={styles.userAge}>
          <AppInput
            inputLabel="Age"
            isRequired={true}
            placeholder="Enter your age"
            handleInputChange={val => handleInputValue(val, 'userAge')}
            inputValue={userData.userAge}
            keyboardType={'number-pad'}
          />
        </View>
      </View>
      <View style={styles.inputs}>
        <AppInput
          inputLabel="Education"
          placeholder="Type your highest degree"
          handleInputChange={val => handleInputValue(val, 'userEduction')}
          inputValue={userData.userEduction}
        />
      </View>
      <View style={styles.inputs}>
        <AppInput
          inputLabel="Address"
          placeholder="Enter your address"
          handleInputChange={val => handleInputValue(val, 'userAddress')}
          inputValue={userData.userAddress}
        />
      </View>
      <View style={styles.inputs}>
        <AppInput
          inputLabel="Country of stay"
          placeholder="Enter your current country"
          handleInputChange={val => handleInputValue(val, 'userCountry')}
          inputValue={userData.userCountry}
        />
      </View>
      <View style={styles.inputs}>
        <AppInput
          inputLabel="CNIC. No"
          isRequired={true}
          placeholder="Enter your CNIC. No"
          handleInputChange={val => handleInputValue(val, 'userCNIC')}
          inputValue={userData.userCNIC}
          keyboardType={'number-pad'}
        />
      </View>
      <View style={styles.inputs}>
        <AppText text={'Phone number'} style={styles.inputTxt} />
        <PhoneNumberInput
          defaultCode={countryCode}
          // onChangeText={val => handleOnChangeText(val, 'phone')}
          // onSelectCountry={code => handleOnSelectCountry(code)}
          onChangeFormattedText={setFormattedValue}
          textInputStyle={{}}
          containerStyle={styles.flagContainer}
          textContainerStyle={styles.phoneNumberInput}
          flagButtonStyle={styles.flagView}
          placeholder="Enter your phone number"
          codeTextStyle={{color: COLORS.medium_gray}}
        />
      </View>
      <View style={[styles.genderAge, {marginBottom: 50}]}>
        <View style={styles.gender}>
          <AppInputDropDown
            placeholderText="Choose Sect"
            arrayData={SecteList}
            inputLabel="Sect"
            isRequired={true}
            handleSelectValue={val => handleInputValue(val, 'userSect')}
          />
        </View>
        <View style={[styles.userAge, {marginTop: 0}]}>
          <AppInputDropDown
            placeholderText="Choose Firqa"
            arrayData={SecteList}
            inputLabel="Firqa"
            isRequired={true}
            handleSelectValue={val => handleInputValue(val, 'userFirqa')}
          />
        </View>
      </View>
    </View>
  );
};

export default GeneralInfo;

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
