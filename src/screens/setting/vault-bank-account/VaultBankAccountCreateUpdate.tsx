import {Alert, StyleSheet, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppInput from '../../../components/molecules/app-input/AppInput';
import AppButton from '../../../components/molecules/app-button/AppButton';
import {
  handleCreateBankAccount,
  handleUpdateBankAccount,
  schemaMutation,
} from '../../../services/api';
import {
  CREATE_BANK_ACCOUNT,
  FIND_BANK_ACCOUNT,
  UPDATE_BANK_ACCOUNT,
} from '../../../services/graphQL';
import {useQuery} from '@apollo/client';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList, screens} from '../../../types/types';

type Props = StackScreenProps<
  RootStackParamList,
  screens.VAULT_BANK_ACCOUNT_CREATE_UPDATE
>;

const VaultBankAccountCreateUpdate: FC<Props> = ({navigation, route}) => {
  const cardId = route?.params?.id;
  const {data, error, loading} = useQuery(FIND_BANK_ACCOUNT, {
    variables: {id: cardId},
  });
  const initialState = {
    name: '',
    number: '',
  };
  const forUpdate = {
    name: data?.findOneBankAccount?.bankName,
    number: data?.findOneBankAccount?.accountNumber,
  };
  const [bankAccount, setBankAccount] = useState(initialState);
  const [createBankAccount] = schemaMutation(CREATE_BANK_ACCOUNT);
  const [updateBankAccount] = schemaMutation(UPDATE_BANK_ACCOUNT);

  console.log(forUpdate, 'data from initial state');

  console.log(data, error, 'apollo query datas');

  const isValidate = Object.values(bankAccount)?.some(itm => itm == '');

  const onChangeText = (key: string, txt: string): void => {
    setBankAccount(preVal => ({...preVal, [key]: txt}));
  };
  useEffect(() => {
    if (cardId !== undefined) {
      setBankAccount(forUpdate);
    }
  }, [data]);

  const checkChanges = () => {
    // return true;
    if (cardId !== undefined) {
      return false;
    }
    const keys = Object.keys(bankAccount);
    for (let key of keys) {
      if (bankAccount[key] !== forUpdate[key]) {
        return true;
      }
    }
    return false;
  };
  console.log(checkChanges(), 'check for updates');

  // bottom buttton
  const handleCancelPress = () => {
    if (cardId) {
      setBankAccount(forUpdate);
    } else {
      setBankAccount(initialState);
    }
  };

  const handleSavePress = async () => {
    if (!isValidate) {
      if (checkChanges()) {
        try {
          await handleCreateBankAccount(createBankAccount, bankAccount);
          Alert.alert('Alert', 'Credit card data saved sucessfully');
          setBankAccount(initialState);
        } catch (error) {
          console.log(error, 'erro from main comp');
        }
      } else {
        try {
          await handleUpdateBankAccount(
            updateBankAccount,
            bankAccount,
            'e5dd217d-9336-4ca6-afb2-4f1eca5cfac3',
            cardId,
          );
          Alert.alert('Alert', 'Credit card data update sucessfully');
          setBankAccount(initialState);
        } catch (error) {
          console.log(error);
          console.log(error, 'erro from main comp');
        }
      }
    } else {
      Alert.alert('Alert', 'Please fill all fields');
    }
  };

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
              buttonText={checkChanges() ? 'Save' : 'Update'}
              onPress={handleSavePress}
            />
          </View>
        </View>
      </View>
    </AppContainer>
  );
};

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

export default VaultBankAccountCreateUpdate;
