import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import VaultList from '../../../components/molecules/setting/VaultList';
import {Icons} from '../../../utils/helper/svg';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import PlusIconWithText from '../../../components/molecules/app-button/PlusIconWithText';
import {useNavigation} from '@react-navigation/native';
import {BankAccount, SocialNumbers, State, screens} from '../../../types/types';
import {useDispatch, useSelector} from 'react-redux';
import {
  actionUserBankAccountDelete,
  actionUserSocialSecurityNumberDelete,
} from '../../../redux/setting/action';
import DeleteModal from '../../../components/organisums/delete-modal/DeleteModal';

const VaultSocialSecurityNumberAdd = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [accountID, setaccountID] = useState(0);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // add bank nnumber button
  const onPressAdd = () => {
    navigation.navigate(screens.VAULT_SOCIAL_SECURITY_CREATE_UPDATE);
  };
  const onPressRemove = (id: number) => {
    setaccountID(id);
    setIsVisible(true);
  };
  const onPressCancel = () => {
    setIsVisible(false);
  };
  const onPressDelete = () => {
    dispatch(actionUserSocialSecurityNumberDelete(accountID));
    setIsVisible(false);
  };
  const onPressOpenDetail = (id: number) => {
    navigation.navigate(screens.VAULT_SOCIAL_SECURITY_CREATE_UPDATE, {id: id});
  };
  const reduxData = useSelector(
    (state: State) => state?.settingReducer?.socialNumbers,
  );
  console.log(reduxData, 'this is bank account deta');
  const renderItem = ({item, index}: {item: SocialNumbers; index: number}) => {
    console.log(item?.id, 'thsi is render item');
    return (
      <View style={{flex: 1}}>
        <VaultList
          cardName={item?.name}
          iconName={Icons.idCard}
          bankNumber={item?.number}
          didOpenDetails={() => onPressOpenDetail(item?.id)}
          didRemovePress={() => onPressRemove(item?.id)}
        />
      </View>
    );
  };

  return (
    <AppContainer>
      <ScreenHeader
        headerText="Social security numbers"
        extraStyle={styles.header}
      />
      <View style={styles.container}>
        <View style={styles.addBtn}>
          <PlusIconWithText text="Add another number" onPress={onPressAdd} />
        </View>
        <FlatList
          data={reduxData}
          renderItem={renderItem}
          keyExtractor={(_item, index) => index.toString()}
        />
        <DeleteModal
          isVisible={isVisible}
          leftBtnText="Cancel"
          leftOnPress={onPressCancel}
          rightOnPress={onPressDelete}
          rightBtnText="Delete"
          CrossBtnPress={onPressCancel}
          modalText="Are you sure you want to delete this number"
        />
      </View>
    </AppContainer>
  );
};

export default VaultSocialSecurityNumberAdd;

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
