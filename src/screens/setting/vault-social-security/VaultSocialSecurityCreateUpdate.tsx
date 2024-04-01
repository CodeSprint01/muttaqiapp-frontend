import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppInput from '../../../components/molecules/app-input/AppInput';
import AppButton from '../../../components/molecules/app-button/AppButton';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../../types/types';
import {
  actionUserBankAccountAdd,
  actionUserBankAccountUpdate,
  actionUserSocialSecurityNumberAdd,
  actionUserSocialSecurityNumberUpdate,
} from '../../../redux/setting/action';

const VaultSocialSecurityCreateUpdate = ({route}) => {
  const cardId = route?.params?.id;

  const initialState = {
    name: '',
    number: '',
  };
  const reduxData = useSelector(
    (state: State) => state?.settingReducer?.socialNumbers,
  );
  const updatingObject =
    reduxData == undefined ? [] : reduxData.filter(item => item?.id == cardId);
  const filterForUpdate = updatingObject[0];
  const [socialData, setSocialData] = useState(
    cardId === undefined ? initialState : filterForUpdate,
  );
  const dispatch = useDispatch();

  // validation
  const isValidate = Object.values(socialData)?.some(itm => itm == '');
  // handel inputs values
  function onChangeText(key: string, txt: string): void {
    setSocialData(preVal => ({...preVal, [key]: txt}));
  }
  const checkChanges = () => {
    // return true;
    if (!filterForUpdate) {
      return false;
    }
    const keys = Object.keys(socialData);
    for (let key of keys) {
      if (socialData[key] !== filterForUpdate[key]) {
        return true;
      }
    }
    return false;
  };
  // bottom buttton
  const handleCancelPress = () => {
    if (cardId) {
      setSocialData(filterForUpdate);
    } else {
      setSocialData(initialState);
    }
  };

  const handleSavePress = () => {
    if (!isValidate) {
      if (checkChanges()) {
        dispatch(actionUserSocialSecurityNumberUpdate(socialData));
        Alert.alert('Alert', 'Social security data updated sucessfully');
      } else {
        dispatch(actionUserSocialSecurityNumberAdd(socialData));
        Alert.alert('Alert', 'Social security added sucessfully');
      }
    } else {
      Alert.alert('Alert', 'Please fill all fields');
    }
  };

  console.log(socialData);

  return (
    <AppContainer>
      <ScreenHeader headerText="Security number" extraStyle={styles.header} />
      <View style={styles.container}>
        <View style={styles.input}>
          <AppInput
            inputLabel="Enter Name"
            placeholder={'Please enter your name'}
            inputValue={socialData.name}
            handleInputChange={txt => onChangeText('name', txt)}
          />
        </View>
        <View style={styles.numberInput}>
          <AppInput
            inputLabel="Social security number"
            placeholder="please enter Social security number"
            inputValue={socialData.number}
            handleInputChange={txt => onChangeText('number', txt)}
          />
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.halfwidth}>
            <AppButton
              buttonText="Cancel"
              fill={false}
              onPress={handleCancelPress}
            />
          </View>
          <View style={styles.halfwidth}>
            <AppButton
              buttonText={checkChanges() ? 'Update' : 'Save'}
              onPress={handleSavePress}
            />
          </View>
        </View>
      </View>
    </AppContainer>
  );
};

export default VaultSocialSecurityCreateUpdate;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  input: {
    marginTop: 50,
  },
  numberInput: {
    marginTop: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 46,
  },
  halfwidth: {
    width: '48%',
  },
});
