import {Alert, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppInput from '../../../components/molecules/app-input/AppInput';
import AppButton from '../../../components/molecules/app-button/AppButton';
import {useDispatch, useSelector} from 'react-redux';
import {
  actionUserCreditCardCreate,
  actionUserCreditCardUpdate,
} from '../../../redux/setting/action';
import AppInputDropDown from '../../../components/molecules/app-input-drop-down/AppInputDropDown';
import {CardArray} from '../../../utils/mocks/AllMockArray';
import {State} from '../../../types/types';
import Toast from 'react-native-toast-message';

const VaultCreditCardCreateUpdate = ({route}) => {
  const cardId = route?.params?.id;
  const initialState = {
    number: '',
    name: '',
    expiry: '',
    cvv: '',
    type: '',
  };
  const reduxData = useSelector(
    (state: State) => state?.settingReducer?.creditCard,
  );

  const updatingObject =
    reduxData == undefined ? [] : reduxData.filter(item => item?.id == cardId);
  const filterForUpdate = updatingObject[0];
  const [cardData, setCardData] = useState(
    cardId === undefined ? initialState : filterForUpdate,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    checkChanges();
  }, [cardData]);

  const isValidate = Object.values(cardData).some(itm => itm == '');
  const checkChanges = () => {
    if (!filterForUpdate) {
      return false;
    }
    const keys = Object.keys(cardData);
    for (let key of keys) {
      if (cardData[key] !== filterForUpdate[key]) {
        return true;
      }
    }
    return false;
  };

  // input data
  const handleOnChnage = (key: string, txt: string) => {
    setCardData(preVal => ({...preVal, [key]: txt}));
  };

  // bottom buttton
  const handleCancelPress = () => {
    if (cardId) {
      setCardData(filterForUpdate);
    } else {
      setCardData(initialState);
    }
  };

  const handleSavePress = () => {
    if (!isValidate) {
      if (checkChanges()) {
        dispatch(actionUserCreditCardUpdate(cardData));
        Alert.alert('Alert', 'Credit card data updated sucessfully');
      } else {
        dispatch(actionUserCreditCardCreate(cardData));
        Alert.alert('Alert', 'Credit card data saved sucessfully');
      }
    } else {
      Alert.alert('Alert', 'Please fill all fields');
    }
  };

  return (
    <AppContainer>
      <ScreenHeader headerText="Add new card" extraStyle={styles.header} />
      <View style={styles.container}>
        <AppInput
          inputLabel="Crad number"
          placeholder="1234-5678-9012-3456"
          inputValue={cardData?.number}
          isRequired
          maxLength={16}
          keyboardType="numeric"
          handleInputChange={txt => handleOnChnage('number', txt)}
        />
        <View style={styles.cardName}>
          <AppInput
            inputLabel="Name of Card"
            placeholder="Enter the full name on your card"
            inputValue={cardData.name}
            isRequired
            handleInputChange={txt => handleOnChnage('name', txt)}
          />
        </View>
        <View style={styles.bottomInputs}>
          <View style={styles.halfwidth}>
            <AppInput
              inputLabel="Expire date"
              placeholder="MM/YY"
              isRequired
              inputValue={cardData.expiry}
              handleInputChange={txt => handleOnChnage('expiry', txt)}
            />
          </View>
          <View style={styles.halfwidth}>
            <AppInput
              inputLabel="CVV"
              placeholder="123"
              isRequired
              inputValue={cardData.cvv}
              keyboardType="numeric"
              handleInputChange={txt => handleOnChnage('cvv', txt)}
            />
          </View>
        </View>
        <View>
          <View style={styles.cardType}>
            <AppInputDropDown
              arrayData={CardArray}
              inputLabel="Crad Type"
              isRequired
              handleSelectValue={txt => handleOnChnage('type', txt)}
              placeholderText={
                cardData?.type == '' ? 'Select card type' : cardData?.type
              }
            />
          </View>
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

export default VaultCreditCardCreateUpdate;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  cardName: {
    marginTop: 16,
  },
  bottomInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  halfwidth: {
    width: '48%',
  },
  cardType: {
    marginTop: 16,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 46,
  },
});
