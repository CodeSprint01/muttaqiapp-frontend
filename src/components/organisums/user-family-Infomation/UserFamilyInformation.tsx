import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import AppText from '../../atoms/app-text/AppText';
import {COLORS} from '../../../styles/color';
import AppInput from '../../molecules/app-input/AppInput';
import {DropDownImage} from '../../../../assets/images';
import AppInputDropDown from '../../molecules/app-input-drop-down/AppInputDropDown';
import {MartialStatus} from '../../../utils/mocks/languageList';

const UserFamilyInformation = () => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      scrollEnabled={true}>
      <View>
        <AppText text={'Family Information'} style={styles.gernalTxt} />
        <View style={styles.inputField}>
          <AppInput inputLabel="Father Name" />
        </View>
        <View style={styles.inputField}>
          <AppInput inputLabel="Mother Name" />
        </View>
        <View style={styles.inputField}>
          <AppInput inputLabel="NO. of Siblings" />
        </View>
        <View style={styles.inputField}>
          <AppInputDropDown
            placeholderText="Martial Status"
            ImageName={DropDownImage}
            imageWidth={20}
            imageHeight={20}
            arrayData={MartialStatus}
          />
        </View>
        <View style={styles.inputField}>
          <AppInput inputLabel="Childern Names" />
        </View>
        <View style={styles.inputField}>
          <AppInput inputLabel="Wife Name" />
        </View>
        <View style={styles.inputField}>
          <AppInput inputLabel="Widow/Widower" />
        </View>
      </View>
    </ScrollView>
  );
};

export default UserFamilyInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  gernalTxt: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 26.04,
    color: COLORS.black,
    paddingTop: 23,
  },
  inputField: {
    marginTop: 20,
  },
  phoneNumberInputField: {
    width: '57%',
  },
  sectAndAge: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sect: {
    marginTop: 30,
    width: '49%',
  },
  age: {
    marginTop: 30,
    width: '49%',
  },
});
