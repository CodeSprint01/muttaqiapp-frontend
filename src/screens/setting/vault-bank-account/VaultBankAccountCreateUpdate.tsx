import {Alert, StyleSheet, View} from 'react-native';
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
} from '../../../redux/setting/action';
import {handleCreateBankAccount, schemaMutation} from '../../../services/api';
import {CREATE_BANK_ACCOUNT} from '../../../services/graphQL';

const VaultBankAccountCreateUpdate = ({route}) => {
  const cardId = route?.params?.id;

  const initialState = {
    name: '',
    number: '',
  };
  const reduxData = useSelector(
    (state: State) => state?.settingReducer?.bankAccount,
  );
  const updatingObject =
    reduxData == undefined ? [] : reduxData.filter(item => item?.id == cardId);
  const filterForUpdate = updatingObject[0];
  const [bankAccount, setBankAccount] = useState(
    cardId === undefined ? initialState : filterForUpdate,
  );
  const [createBankAccount] = schemaMutation(CREATE_BANK_ACCOUNT);
  const dispatch = useDispatch();

  // validation
  const isValidate = Object.values(bankAccount)?.some(itm => itm == '');
  // handel inputs values
  function onChangeText(key: string, txt: string): void {
    setBankAccount(preVal => ({...preVal, [key]: txt}));
  }
  const checkChanges = () => {
    // return true;
    if (!filterForUpdate) {
      return false;
    }
    const keys = Object.keys(bankAccount);
    for (let key of keys) {
      if (bankAccount[key] !== filterForUpdate[key]) {
        return true;
      }
    }
    return false;
  };
  // bottom buttton
  const handleCancelPress = () => {
    if (cardId) {
      setBankAccount(filterForUpdate);
    } else {
      setBankAccount(initialState);
    }
  };

  const handleSavePress = async () => {
    if (!isValidate) {
      if (checkChanges()) {
        dispatch(actionUserBankAccountUpdate(bankAccount));
        Alert.alert('Alert', 'Credit card data updated sucessfully');
      } else {
        // dispatch(actionUserBankAccountAdd(bankAccount));
        try {
          const data = await handleCreateBankAccount(
            createBankAccount,
            bankAccount,
          );
          console.log(data, 'this is datares');
        } catch (error) {
          console.log(error, 'erro from main comp');
        }

        Alert.alert('Alert', 'Credit card data saved sucessfully');
      }
    } else {
      Alert.alert('Alert', 'Please fill all fields');
    }
  };

  console.log(bankAccount);

  return (
    <AppContainer>
      <ScreenHeader headerText="Bank account" extraStyle={styles.header} />
      <View style={styles.container}>
        <View style={styles.input}>
          <AppInput
            inputLabel="Bank Name"
            placeholder={'Please enter bank name'}
            inputValue={bankAccount.name}
            handleInputChange={txt => onChangeText('name', txt)}
          />
        </View>
        <View style={styles.numberInput}>
          <AppInput
            inputLabel="Bank account number"
            placeholder="please enter bank account number"
            inputValue={bankAccount.number}
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

export default VaultBankAccountCreateUpdate;

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
