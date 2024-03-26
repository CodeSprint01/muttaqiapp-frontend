import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import PlusIconWithText from '../../../components/molecules/app-button/PlusIconWithText';
import {useNavigation} from '@react-navigation/native';
import {CardInfo, State, screens} from '../../../types/types';
import {useDispatch, useSelector} from 'react-redux';
import VaultList from '../../../components/molecules/setting/VaultList';
import {Icons} from '../../../utils/helper/svg';
import {actionUserCreditCardDelete} from '../../../redux/setting/action';
import DeleteModal from '../../../components/organisums/delete-modal/DeleteModal';

const VaultCreditCardAdd = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [deleteID, setDeleteID] = useState<number>(0);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // get credit card
  const cardData = useSelector(
    (state: State) => state?.settingReducer?.creditCard,
  );
  const arrayLength = cardData.length;
  // all buttons action
  const didRemovePress = () => {
    dispatch(actionUserCreditCardDelete(deleteID));
    setIsModalVisible(false);
  };
  const didOpenDetails = (id: number) => {
    navigation.navigate(screens.VAULT_CREDIT_CARD_CREATE_UPDATE, {id: id});
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const didOpenModal = (id: number) => {
    setIsModalVisible(true);
    setDeleteID(id);
  };
  const didAddPress = () => {
    navigation.navigate(screens.VAULT_CREDIT_CARD_CREATE_UPDATE);
  };

  const renderItem = ({item, index}: {item: CardInfo; index: number}) => {
    return (
      <View style={{marginBottom: index + 1 === arrayLength ? 200 : 0}}>
        <VaultList
          didRemovePress={() => didOpenModal(item?.id)}
          didOpenDetails={() => didOpenDetails(item?.id)}
          cardName={item?.name}
          iconName={cardIcon(item?.type)}
        />
      </View>
    );
  };
  function cardIcon(brand: string) {
    if (brand === 'master') {
      return Icons.MasterCard;
    } else if (brand === 'paypak') {
      return Icons.Paypak;
    } else {
      return Icons.VisaCard;
    }
  }

  return (
    <AppContainer>
      <ScreenHeader headerText="Credit cards" extraStyle={styles.header} />
      <View style={styles.container}>
        <View style={styles.addBtn}>
          <PlusIconWithText text="Add another card" onPress={didAddPress} />
        </View>
        <View style={styles.flatlists}>
          <FlatList
            data={cardData}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_item, index) => index.toString()}
          />
        </View>
      </View>
      <DeleteModal
        isVisible={isModalVisible}
        modalText="Are you sure you want to delete this note ?"
        CrossBtnPress={handleCancel}
        leftBtnText="Cancel"
        leftOnPress={handleCancel}
        rightBtnText="Delete"
        rightOnPress={didRemovePress}
      />
    </AppContainer>
  );
};

export default VaultCreditCardAdd;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
  },
  container: {
    paddingHorizontal: 20,
  },
  addBtn: {
    marginTop: 32,
    // flex: 1,
    backgroundColor: 'pink',
  },
  flatlists: {
    marginTop: 30,
  },
});
