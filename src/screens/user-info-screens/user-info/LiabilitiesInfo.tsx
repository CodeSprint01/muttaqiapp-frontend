import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AppText from '../../../components/atoms/app-text/AppText';
import AppInput from '../../../components/molecules/app-input/AppInput';
import {Icons} from '../../../utils/helper/svg';
import {COLORS, fonts} from '../../../styles/color';
import LinearGradient from 'react-native-linear-gradient';
import {AppIconSvg} from '../../../components/atoms/app-icon-svg';

const LiabilitiesInfo = () => {
  const [userData, setUserData] = useState({
    liabilityName: '',
    liabilityType: '',
    liabilityValue: '',
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
      <AppText text={'Liabilities information'} style={styles.formTitle} />
      <View style={styles.input}>
        <AppInput
          inputLabel="Liability name"
          isRequired={true}
          placeholder="Type your liability name"
          handleInputChange={val => handleInputValue(val, 'liabilityName')}
          inputValue={userData.liabilityName}
        />
      </View>
      <View style={styles.input}>
        <AppInput
          inputLabel="Liability type"
          isRequired={true}
          placeholder="E.g. mortgage, car, installment, etc"
          handleInputChange={val => handleInputValue(val, 'liabilityType')}
          inputValue={userData.liabilityType}
        />
      </View>
      <View style={styles.input}>
        <AppInput
          inputLabel="Liability value"
          isRequired={true}
          placeholder="Enter the estimated value of your liability"
          handleInputChange={val => handleInputValue(val, 'liabilityValue')}
          inputValue={userData.liabilityValue}
        />
      </View>
      <TouchableOpacity style={{flexDirection: 'row', marginTop: 24}}>
        <LinearGradient
          colors={[
            '#1290A1',
            'rgba(24, 154, 151, 0.86)',
            'rgba(29, 162, 143, 0.73)',
          ]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.addButton}>
          <AppIconSvg
            icon={Icons.PlusIcon}
            width={24}
            height={24}
            color={COLORS.white}
          />
        </LinearGradient>
        <AppText text={'Add another liability'} style={styles.addBusiness} />
      </TouchableOpacity>
    </View>
  );
};

export default LiabilitiesInfo;

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
  addButton: {
    height: 30,
    width: 30,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBusiness: {
    color: COLORS.green,
    fontSize: 20,
    fontFamily: fonts.dmSans[500],
    marginLeft: 10,
  },
});
