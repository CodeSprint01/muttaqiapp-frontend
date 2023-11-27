import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppText from '../../atoms/app-text/AppText';
import {COLORS} from '../../../styles/color';
import AppInput from '../../molecules/app-input/AppInput';
import {DropDownImage} from '../../../../assets/images';
import SelectPhoneNumber from '../../atoms/phone-number-modal/SelectPhoneNumber';

const userGeneralInfomation = () => {
  return (
    <View style={styles.container}>
      <AppText text={'General Information'} style={styles.gernalTxt} />
      <View style={styles.inputField}>
        <AppInput inputLabel="Full Name" />
      </View>
      <View style={styles.inputField}>
        <AppInput inputLabel="Education" />
      </View>
      <View style={styles.inputField}>
        <AppInput inputLabel="CNIC. NO" />
      </View>
      {/* <View
        style={[
          styles.inputField,
          {flexDirection: 'row', justifyContent: 'space-between'},
        ]}>
        <View style={{width: '41%'}}>
          <AppInput inputLabel="CNIC. NO" />
        </View>
        <View style={styles.phoneNumberInputField}>
          <AppInput inputLabel="Phone Number" />
        </View>
      </View> */}
      <View style={styles.inputField}>
        <SelectPhoneNumber />
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
});
