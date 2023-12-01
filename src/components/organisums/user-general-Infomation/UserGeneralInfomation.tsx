import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../styles/color';
import AppInput from '../../molecules/app-input/AppInput';
import {DropDownImage} from '../../../../assets/images';
import SelectPhoneNumber from '../../atoms/phone-number-modal/SelectPhoneNumber';
import AppInputDropDown from '../../molecules/app-input-drop-down/AppInputDropDown';
import SelectLanguageModal from '../../atoms/all-language-modal/SelectLanguageModal';
import {language, SecteList} from '../../../utils/mocks/AllMockArray';

const userGeneralInfomation = () => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      scrollEnabled={true}>
      <View>
        <View style={styles.inputField}>
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
        </View>
        {/* here i am working on drop down list */}
        <View>
          <View style={styles.sectAndAge}>
            <View style={styles.sect}>
              <AppInputDropDown
                placeholderText="Sect"
                ImageName={DropDownImage}
                imageWidth={20}
                imageHeight={20}
                arrayData={SecteList}
              />
            </View>
            <View style={styles.age}>
              <AppInput inputLabel="Age" />
            </View>
          </View>
          <View style={styles.languageModal}>
            <SelectLanguageModal />
          </View>
          <View style={styles.languageList}>
            <AppInputDropDown
              placeholderText="Language"
              ImageName={DropDownImage}
              imageWidth={20}
              imageHeight={20}
              arrayData={language}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default userGeneralInfomation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  inputField: {
    marginTop: 20,
  },
  languageModal: {
    marginTop: 110,
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
    position: 'absolute',
    zIndex: 2,
  },
  age: {
    marginTop: 30,
    width: '49%',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  languageList: {
    marginTop: 15,
    // zIndex: 2,
    // position: 'absolute',
    // width: '100%',
    marginBottom: 95,
  },
});
