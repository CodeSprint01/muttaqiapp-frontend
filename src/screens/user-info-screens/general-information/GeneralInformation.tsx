import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, fonts} from '../../../styles/color';
import AppText from '../../../components/atoms/app-text/AppText';
import {AppIconSvg, Icons} from '../../../components/atoms/app-icon-svg';
import AppInput from '../../../components/molecules/app-input/AppInput';
import AppInputDropDown from '../../../components/molecules/app-input-drop-down/AppInputDropDown';
import {Gender, SecteList} from '../../../utils/mocks/AllMockArray';
import PhoneNumberInput from 'react-native-phone-number-input';
import AppButton from '../../../components/molecules/app-button/AppButton';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../../types/types';

const GeneralInformation = () => {
  const navigation = useNavigation();
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
    <AppContainer>
      <LinearGradient
        colors={['#1290A1', 'rgba(29, 162, 143, 0.97)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0.0837, 0.9295]}
        style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
          <View style={styles.progress}>
            <AppIconSvg
              icon={Icons.FirstStep}
              width={'100%'}
              height={50}
              color="black"
            />
          </View>
          <View style={styles.formContainer}>
            <AppText text={'1/6'} style={styles.formNumberTxt} />
            <AppText text={'General information'} style={styles.formTitle} />
            <View style={styles.form}>
              <AppInput
                inputLabel="Full Name"
                isRequired={true}
                placeholder="Enter your full legal name"
                onChangeText={val => handleInputValue(val, 'userName')}
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
                  icon={Icons.DropDown}
                />
              </View>
              <View style={styles.userAge}>
                <AppInput
                  inputLabel="Age"
                  isRequired={true}
                  placeholder="Enter your age"
                  onChangeText={val => handleInputValue(val, 'userAge')}
                />
              </View>
            </View>
            <View style={styles.inputs}>
              <AppInput
                inputLabel="Education"
                placeholder="Type your highest degree"
                onChangeText={val => handleInputValue(val, 'userEduction')}
              />
            </View>
            <View style={styles.inputs}>
              <AppInput
                inputLabel="Address"
                placeholder="Enter your address"
                onChangeText={val => handleInputValue(val, 'userAddress')}
              />
            </View>
            <View style={styles.inputs}>
              <AppInput
                inputLabel="Country of stay"
                placeholder="Enter your current country"
                onChangeText={val => handleInputValue(val, 'userCountry')}
              />
            </View>
            <View style={styles.inputs}>
              <AppInput
                inputLabel="CNIC. No"
                isRequired={true}
                placeholder="Enter your CNIC. No"
                onChangeText={val => handleInputValue(val, 'userCNIC')}
              />
            </View>
            <View style={styles.inputs}>
              <PhoneNumberInput
                defaultCode={countryCode}
                // onChangeText={val => handleOnChangeText(val, 'phone')}
                // onSelectCountry={code => handleOnSelectCountry(code)}
                onChangeFormattedText={setFormattedValue}
                textInputStyle={{}}
                containerStyle={styles.flagContainer}
                textContainerStyle={styles.phoneNumberInput}
                flagButtonStyle={styles.flagView}
                placeholder="Entter your phone numer"
              />
            </View>
            <View style={styles.genderAge}>
              <View style={styles.gender}>
                <AppInputDropDown
                  placeholderText="Choose Sect"
                  arrayData={SecteList}
                  inputLabel="Sect"
                  isRequired={true}
                  handleSelectValue={val => handleInputValue(val, 'userSect')}
                  icon={Icons.DropDown}
                />
              </View>
              <View style={[styles.userAge, {marginTop: 0}]}>
                <AppInputDropDown
                  placeholderText="Choose Firqa"
                  arrayData={SecteList}
                  inputLabel="Firqa"
                  isRequired={true}
                  handleSelectValue={val => handleInputValue(val, 'userFirqa')}
                  icon={Icons.DropDown}
                />
              </View>
            </View>
            <View>
              <View style={styles.bottomBtns}>
                <View>
                  <AppButton
                    buttonText="Next"
                    onPress={() =>
                      navigation.navigate(screens.FAMILY_INFORMATION_FIRST_FORM)
                    }
                  />
                </View>
                <View style={styles.skipBtn}>
                  <AppButton
                    buttonText="Skip"
                    fill={false}
                    onPress={() => navigation.navigate(screens.APP_STACK)}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </AppContainer>
  );
};

export default GeneralInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  progress: {
    flex: 1,
    marginVertical: 10,
    paddingHorizontal: 40,
  },
  formContainer: {
    backgroundColor: COLORS.pale_mint,
    flex: 7,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    paddingHorizontal: 20,
  },
  formNumberTxt: {
    color: COLORS.light_gray,
    fontSize: 14,
    fontFamily: fonts.dmSans[500],
    paddingTop: 40,
  },
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
  bottomBtns: {
    marginTop: 30,
    justifyContent: 'space-evenly',
  },
  skipBtn: {
    marginTop: 20,
    marginBottom: 40,
  },
});
