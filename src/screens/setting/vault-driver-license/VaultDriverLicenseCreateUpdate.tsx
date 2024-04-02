import {Alert, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import AppInput from '../../../components/molecules/app-input/AppInput';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppButton from '../../../components/molecules/app-button/AppButton';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../../types/types';
import {useNavigation} from '@react-navigation/native';
import DeleteModal from '../../../components/organisums/delete-modal/DeleteModal';
import {
  actionUserDriverLicenseDelete,
  actionUsergDriverLicenseAdd,
  actionUsergDriverLicenseUpdate,
} from '../../../redux/setting/action';

const VaultDriverLicenseCreateUpdate = ({route}) => {
  const itemID = route?.params?.data;
  console.log(itemID, 'idddddd');
  const initialState = {
    name: '',
    number: '',
  };
  const AllreduxData = useSelector(
    (state: State) => state?.settingReducer?.licenses,
  );
  const filteredData =
    AllreduxData?.length > 0
      ? AllreduxData?.filter(itm => itm?.id == itemID)
      : [];
  const finalState = itemID == undefined ? initialState : filteredData[0];

  const [license, SetLicense] = useState(finalState);
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  // all buttons action
  const onChangeText = (key: string, txt: string) => {
    SetLicense(prevState => ({...prevState, [key]: txt}));
  };
  const isEmpty = Object?.values(license)?.some(itm => itm == '');
  // checck chnages
  const changes = (obj1: any, obj2 = {}) => {
    const keys1 = Object?.keys(obj1);
    const keys2 = Object?.keys(obj2);
    if (keys1?.length !== keys2?.length) {
      return true;
    }
    for (let key of keys1) {
      //  for of give obj value for in give obj keys
      if (obj1[key] !== obj2[key]) {
        return true;
      }
    }
    return false;
  };

  console.log(changes(license, filteredData[0]), 'this is in fun');

  let isChanges =
    itemID == undefined ? true : changes(license, filteredData[0]);
  console.log(isChanges, 'this is changes finl');
  const onPressCancel = () => {
    if (itemID == undefined) {
      SetLicense(finalState);
    } else {
      if (!isChanges) {
        setIsVisible(true);
      } else {
        SetLicense(finalState);
      }
    }
  };
  const onPressSave = () => {
    if (itemID !== undefined && isChanges) {
      if (isEmpty) {
        Alert.alert('Alert', 'All the fields is required');
      } else {
        dispatch(actionUsergDriverLicenseUpdate(license));
        Alert.alert('Alert', 'Credential updated sucessfully');
      }
    }
    if (itemID == undefined) {
      if (isEmpty) {
        Alert.alert('Alert', 'All the fields is required');
      } else {
        dispatch(actionUsergDriverLicenseAdd(license));
        Alert.alert('Alert', 'Credential add sucessfully');
      }
    }
  }; // modal btns
  const handleCancel = () => {
    SetLicense(finalState);
    setIsVisible(false);
  };
  const handleDelete = () => {
    dispatch(actionUserDriverLicenseDelete(itemID));
    setIsVisible(false);
    navigation.goBack();
  };

  return (
    <AppContainer>
      <ScreenHeader headerText="Password" extraStyle={styles.header} />
      <View style={styles.container}>
        <View style={styles.inputs}>
          <View style={styles.input}>
            <AppInput
              inputLabel="License Name"
              placeholder="Enter license name"
              handleInputChange={txt => onChangeText('name', txt)}
              inputValue={license?.name}
            />
          </View>
          <View style={styles.input}>
            <AppInput
              inputLabel="License number"
              placeholder="Enter license number"
              handleInputChange={txt => onChangeText('number', txt)}
              inputValue={license?.number}
            />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <AppButton
              buttonText={isChanges ? 'Cancel' : 'Delete'}
              fill={false}
              onPress={onPressCancel}
            />
          </View>
          <View style={styles.btn}>
            <AppButton
              buttonText={
                !isChanges ? 'Save' : itemID == undefined ? 'save' : 'update'
              }
              isEnable={!isChanges}
              onPress={onPressSave}
            />
          </View>
        </View>
        <DeleteModal
          CrossBtnPress={handleCancel}
          leftBtnText="Cancel"
          leftOnPress={handleCancel}
          rightBtnText="Delete"
          rightOnPress={handleDelete}
          isVisible={isVisible}
          modalText="Are you sure you want to delete this license"
        />
      </View>
    </AppContainer>
  );
};
export default VaultDriverLicenseCreateUpdate;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    marginTop: 10,
  },
  container: {
    paddingHorizontal: 20,
  },
  inputs: {
    marginTop: 20,
  },
  input: {
    marginTop: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  btn: {
    width: '45%',
  },
});
