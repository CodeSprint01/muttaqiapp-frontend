import {Alert, FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import VaultList from '../../../components/molecules/setting/VaultList';
import {Icons} from '../../../utils/helper/svg';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import PlusIconWithText from '../../../components/molecules/app-button/PlusIconWithText';
import {useNavigation} from '@react-navigation/native';
import {BankAccount, State, screens} from '../../../types/types';
import {useDispatch, useSelector} from 'react-redux';
import {actionUserBankAccountDelete} from '../../../redux/setting/action';
import DeleteModal from '../../../components/organisums/delete-modal/DeleteModal';
import {useQuery} from '@apollo/client';
import {
  DELETE_BANK_ACCOUNT,
  FIND_BANK_ACCOUNT,
  GET_BANK_ACCOUNTS_DETAILS,
} from '../../../services/graphQL';
import AppLoader from '../../../components/atoms/loader/AppLoader';
import {handleDeleteBankAccount, schemaMutation} from '../../../services/api';

const VaultBankAccountAdd = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [accountID, setaccountID] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // add bank nnumber button

  const onPressAdd = async () => {
    navigation.navigate(screens.VAULT_BANK_ACCOUNT_CREATE_UPDATE);
  };
  const {data, error, loading} = useQuery(GET_BANK_ACCOUNTS_DETAILS);
  const [deleteBank] = schemaMutation(DELETE_BANK_ACCOUNT);
  console.log(data, error, 'applo query datas');

  const onPressRemove = (id: number) => {
    console.log(id);
    setaccountID(id);
    setIsVisible(true);
  };
  const onPressCancel = () => {
    setIsVisible(false);
  };
  const onPressDelete = async () => {
    // dispatch(actionUserBankAccountDelete(accountID));
    try {
      const data = await handleDeleteBankAccount(deleteBank, accountID);
      console.log(data, 'after delete account');
    } catch (error) {
      console.log(error, 'after detele bank error');
    }
    setIsVisible(false);
  };
  const onPressOpenDetail = (id: string) => {
    navigation.navigate(screens.VAULT_BANK_ACCOUNT_CREATE_UPDATE, {id: id});
  };

  const renderItem = ({item, index}: {item: BankAccount; index: number}) => {
    return (
      <View style={{flex: 1}}>
        <VaultList
          cardName={item?.bankName}
          iconName={Icons.Bank}
          bankNumber={item?.accountNumber}
          didOpenDetails={() => onPressOpenDetail(item?.id)}
          didRemovePress={() => onPressRemove(item?.id)}
        />
      </View>
    );
  };

  return (
    <AppContainer>
      <ScreenHeader headerText="Bank accounts" extraStyle={styles.header} />
      <View style={styles.container}>
        <View style={styles.addBtn}>
          <PlusIconWithText text="Add another account" onPress={onPressAdd} />
        </View>
        <FlatList
          data={data?.findAllBankAccount}
          renderItem={renderItem}
          keyExtractor={(_item, index) => index.toString()}
        />
        <AppLoader isVisible={loading} />
        <DeleteModal
          isVisible={isVisible}
          leftBtnText="Cancel"
          leftOnPress={onPressCancel}
          rightOnPress={onPressDelete}
          rightBtnText="Delete"
          CrossBtnPress={onPressCancel}
          modalText="Are you sure you want to delete this account"
        />
      </View>
    </AppContainer>
  );
};

export default VaultBankAccountAdd;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  addBtn: {
    marginTop: 20,
  },
});
