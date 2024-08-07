import {Modal, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppText from '../../../components/atoms/app-text/AppText';
import AppInputDropDown from '../../../components/molecules/app-input-drop-down/AppInputDropDown';
import {
  aliveStatus,
  maritalStatus,
  previouslyMarriedStatus,
} from '../../../utils/mocks/AllMockArray';
import AppInput from '../../../components/molecules/app-input/AppInput';
import {COLORS, fonts} from '../../../styles/color';
import AppModal from '../../../components/atoms/app-modal/AppModal';
import AppButton from '../../../components/molecules/app-button/AppButton';

interface Props {
  onPressConfirm: () => void;
  isVisible: boolean;
}

const FamilyInfo = ({onPressConfirm, isVisible}: Props) => {
  const [userData, setUserData] = useState({
    maritalStatus: null,
    numberOfWives: '',
    previousMarriageStatus: null,
  });

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
          placeholderText="Select your marital status"
          arrayData={maritalStatus}
          inputLabel="Marital status"
          isRequired={true}
          handleSelectValue={val => handleInputValue(val, 'maritalStatus')}
        />
      </View>
      <View style={styles.inputs}>
        <AppInput
          inputLabel="Number of wives"
          placeholder="Enter the number of your wives"
          isRequired={true}
          handleInputChange={val => handleInputValue(val, 'numberOfWives')}
          inputValue={userData.numberOfWives.toString()}
          keyboardType={'number-pad'}
        />
      </View>
      <View style={styles.inputs}>
        <AppInputDropDown
          placeholderText="Choose the case of your previous marriage"
          arrayData={previouslyMarriedStatus}
          inputLabel="Have you been previously married?"
          isRequired={true}
          handleSelectValue={val =>
            handleInputValue(val, 'previousMarriageStatus')
          }
        />
      </View>
      <AppModal
        extraViewStyle={styles.extraModalStyle}
        isVisible={isVisible}
        children={
          <View style={styles.modalView}>
            <AppText text={'Reminder'} style={styles.modalTitle} />
            <AppText
              text={
                'In the next step, you will be asked to register some family information for inheritance calculation. Please do not add any non-muslin family members as they are not Islamic heirs according to sharia.'
              }
              style={styles.modalText}
            />
            <View style={styles.button}>
              <AppButton buttonText={'Confirm'} onPress={onPressConfirm} />
            </View>
          </View>
        }
      />
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
  inputs: {
    marginTop: 24,
  },
  extraModalStyle: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'transparent',
  },
  modalView: {
    height: '42%',
    borderRadius: 38,
    backgroundColor: COLORS.light_Powder_Blue,
  },
  modalTitle: {
    color: COLORS.green,
    fontSize: 24,
    fontFamily: fonts.dmSans[700],
    alignSelf: 'center',
    marginTop: 40,
  },
  modalText: {
    color: COLORS.medium_gray,
    fontSize: 18,
    fontFamily: fonts.dmSans[500],
    marginHorizontal: 15,
    textAlign: 'center',
    marginTop: 32,
  },
  button: {
    marginHorizontal: 42,
    marginVertical: 32,
  },
});
