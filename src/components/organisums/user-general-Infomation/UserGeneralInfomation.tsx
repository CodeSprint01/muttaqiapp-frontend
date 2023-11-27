import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppText from '../../atoms/app-text/AppText';
import {COLORS} from '../../../styles/color';
import AppInput from '../../molecules/app-input/AppInput';
import {DropDownImage} from '../../../../assets/images';
import SelectPhoneNumber from '../../atoms/phone-number-modal/SelectPhoneNumber';
import AppInputDropDown from '../../molecules/app-input-drop-down/AppInputDropDown';

const userGeneralInfomation = () => {
  const items = [
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
    
  ];

  return (
    <View style={styles.container}>
      <AppText text={'General Information'} style={styles.gernalTxt} />
      {/* <View style={styles.inputField}>
        <AppInput inputLabel="Full Name" />
      </View>
      <View style={styles.inputField}>
        <AppInput inputLabel="Education" />
      </View>
      <View style={styles.inputField}>
        <AppInput inputLabel="CNIC. NO" />
      </View>

      <View style={styles.inputField}>
        <SelectPhoneNumber />
      </View>
      <View style={styles.inputField}>
        <AppInput inputLabel="Address" />
      </View> */}
       <View style={styles.inputField}>
        <SelectPhoneNumber />
      </View>
      <View style={styles.sectAndAge}>
        <View style={styles.sect}>
          <AppInputDropDown
            placeholderText="Sect"
            ImageName={DropDownImage}
            imageWidth={24}
            imageHeight={24}
            arrayData={items}
          />
        </View>
        <View style={styles.age}>
          <AppInput inputLabel="Age" />
        </View>
      </View>
      <View style={styles.inputField}>
      <AppInputDropDown
            placeholderText="Country of Stay"
            ImageName={DropDownImage}
            imageWidth={24}
            imageHeight={24}
            arrayData={items}
          />
      </View>
      <View style={styles.inputField}>
        <AppInput inputLabel="CNIC. NO" />
      </View>
    </View>
  );
};

export default userGeneralInfomation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    // backgroundColor: 'pink',
  },
  gernalTxt: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 26.04,
    color: COLORS.black,
    paddingTop: 23,
  },
  inputField: {
    marginTop: 42,
  },
  phoneNumberInputField: {
    width: '57%',
  },
  sectAndAge: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sect: {
    marginTop: 42,
    width: '49%',
  },
  age: {
    marginTop: 42,
    width: '49%',
  },
});
