import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppText from '../../../components/atoms/app-text/AppText';
import PlusIconWithText from '../../../components/molecules/app-button/PlusIconWithText';
import AppModal from '../../../components/atoms/app-modal/AppModal';
import {COLORS, fonts} from '../../../styles/color';
import AppInput from '../../../components/molecules/app-input/AppInput';
import AppButton from '../../../components/molecules/app-button/AppButton';

const VaultSecureNotesSetting = () => {
  let dataInitialState = {
    title: '',
    description: '',
  };
  const [userData, setUserData] = useState(dataInitialState);
  const [isVisible, setIsVisible] = useState(false);
  const [validationError, setValidationError] = useState(false);

  const didCreateNotes = () => {
    setIsVisible(true);
  };
  const didCancel = () => {
    setUserData(dataInitialState);
    setIsVisible(false);
  };
  // add details
  const onChangeText = (number: number, txt: string) => {
    if (number === 0) {
      setUserData(preVal => ({...preVal, title: txt}));
    } else if (number === 1) {
      setUserData(preVal => ({...preVal, description: txt}));
    }
  };
  console.log(userData, 'u data');

  const createCredentail = () => {
    const isValidate = Object.values(userData).some(val => val === '');
    if (!isValidate) {
      // dispatch(actionUserLoginsCredentialsCreate(userData));
      setUserData(dataInitialState);
      setIsVisible(false);
      setValidationError(false);
    } else {
      setValidationError(true);
    }
  };
  return (
    <AppContainer>
      <ScreenHeader headerText="Secure notes" extraStyle={styles.header} />
      <View style={styles.container}>
        <PlusIconWithText text="Create new notes" onPress={didCreateNotes} />
      </View>
      <View>
        <AppModal
          isVisible={isVisible}
          toggleModal={didCancel}
          extraViewStyle={{paddingHorizontal: 20}}
          children={
            <View>
              <View style={styles.inputContainer}>
                <AppInput
                  inputLabel="Enter Title"
                  placeholder="Enter notes title"
                  handleInputChange={(txt: string) => onChangeText(0, txt)}
                  inputValue={userData?.title}
                />
              </View>
              <View style={styles.passwordInput}>
                <AppInput
                  inputLabel="Details"
                  placeholder="Enter notes details"
                  handleInputChange={(txt: string) => onChangeText(1, txt)}
                  inputValue={userData?.description}
                  maxLength={3000}
                />
              </View>
              {validationError && (
                <AppText
                  text={'Please fill all the fields'}
                  style={styles.errorTxt}
                />
              )}
              <View style={styles.buttons}>
                <View style={styles.btn}>
                  <AppButton
                    fill={false}
                    buttonText="Cancel"
                    onPress={didCancel}
                  />
                </View>
                <View style={styles.btn}>
                  <AppButton buttonText="Save" onPress={createCredentail} />
                </View>
              </View>
            </View>
          }
        />
      </View>
    </AppContainer>
  );
};

export default VaultSecureNotesSetting;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    paddingTop: 5,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 29,
  },

  inputContainer: {
    marginTop: 30,
  },
  passwordInput: {
    marginTop: 10,
  },
  errorTxt: {
    color: COLORS.crimson,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  btn: {
    width: '45%',
  },
});
