import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppInputDropDown from '../../../components/molecules/app-input-drop-down/AppInputDropDown';
import AppInput from '../../../components/molecules/app-input/AppInput';
import AppUploadDoc from '../../../components/molecules/app-input/AppUploadDoc';
import {Icons} from '../../../utils/helper/svg';
import {IdentityArray} from '../../../utils/mocks/AllMockArray';
import ImagePicker from 'react-native-image-crop-picker';
import AppButton from '../../../components/molecules/app-button/AppButton';
import {useDispatch, useSelector} from 'react-redux';
import {
  actionUserIdentityCreate,
  actionUserIdentityDelete,
  actionUserIdentityUpdate,
  actionUserLoginsCredentialsUpdate,
} from '../../../redux/setting/action';
import {State} from '../../../types/types';
import {useNavigation} from '@react-navigation/native';
import DeleteModal from '../../../components/organisums/delete-modal/DeleteModal';

const VaultIdentitiesCreateUpdate = ({route}) => {
  const oldId = route?.params?.id;
  console.log(oldId, 'This is old id');
  const allReduxData = useSelector(
    (state: State) => state?.settingReducer?.identities,
  );

  const singleObject = allReduxData.filter(item => item?.id === oldId);
  console.log(singleObject, 'this is filter d');

  const initialState = {
    type: '',
    name: '',
    number: '',
    photo: '',
    photoName: '',
  };
  let finalState = oldId === undefined ? initialState : singleObject[0];
  const [identityData, setIdentityData] = useState(finalState);
  const [isVisible, setIsVisible] = useState(false);

  const isEmpty = Object.values(identityData).some(itm => itm == '');
  console.log(isEmpty, 'check is isEmpty');

  const dispatch = useDispatch();
  const navigation = useNavigation();
  // all actions
  const handleOnChange = (key: string, txt: string) => {
    setIdentityData(preVal => ({...preVal, [key]: txt}));
  };
  const handleGetImage = async () => {
    try {
      const image = await ImagePicker.openPicker({
        mediaType: 'photo',
        cropping: true,
        multiple: false,
        compressImageQuality: 0.7,
      });
      console.log(image);

      setIdentityData(preVal => ({
        ...preVal,
        photo: image?.path,
        photoName: Platform.OS === 'android' ? image?.mime : image?.filename,
      }));
    } catch (error) {
      console.log(error, 'while picking image');
    }
  };
  // modal btns
  const handleCancel = () => {
    setIdentityData(finalState);
    setIsVisible(false);
  };
  const handleDelete = () => {
    dispatch(actionUserIdentityDelete(oldId));
    setIsVisible(false);
    navigation.goBack();
  };

  console.log(identityData);
  const onPressCancel = () => {
    if (oldId == undefined) {
      setIdentityData(finalState);
    } else {
      if (!isChanges) {
        setIsVisible(true);
      } else {
        setIdentityData(finalState);
      }
    }
  };
  const onPressSave = () => {
    if (oldId !== undefined && isChanges) {
      if (isEmpty) {
        Alert.alert('Alert', 'All the fields is required');
      } else {
        dispatch(actionUserIdentityUpdate(identityData));
        Alert.alert('Alert', 'Card updated sucessfully');
      }
    }
    if (oldId == undefined) {
      if (isEmpty) {
        Alert.alert('Alert', 'All the fields is required');
      } else {
        dispatch(actionUserIdentityCreate(identityData));
        Alert.alert('Alert', 'Card add sucessfully');
      }
    }
  };
  // check any changes

  const changes = (obj1: any, obj2 = {}) => {
    const keys1 = Object?.keys(obj1);
    const keys2 = Object?.keys(obj2);
    if (keys1?.length !== keys2?.length) {
      return true;
    }
    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return true;
      }
    }
    return false;
  };

  let isChanges =
    oldId == undefined ? true : changes(identityData, singleObject[0]);
  console.log(isChanges, 'check changes');
  console.log(identityData, 'use state data');

  return (
    <AppContainer>
      <ScreenHeader headerText="Add new identity" extraStyle={styles.header} />
      <ScrollView style={styles.container}>
        <View style={styles.input}>
          <AppInputDropDown
            arrayData={IdentityArray}
            inputLabel="Identity type"
            placeholderText={
              identityData?.type ? identityData?.type : 'Choose identiy type'
            }
            handleSelectValue={txt => handleOnChange('type', txt)}
          />
        </View>
        <View style={styles.input}>
          <AppInput
            inputLabel="Name on identity"
            placeholder="Enter the full name identity"
            inputValue={identityData.name}
            handleInputChange={txt => handleOnChange('name', txt)}
          />
        </View>
        <View style={styles.input}>
          <AppInput
            inputLabel="Identity number"
            placeholder="XXXXXXXXXXXXXXX"
            inputValue={identityData.number}
            handleInputChange={txt => handleOnChange('number', txt)}
          />
        </View>
        <View style={styles.input}>
          <AppUploadDoc
            inputLabel="Identity photo"
            placeholder={
              identityData.photoName !== ''
                ? identityData.photoName
                : 'Upload an image of your identity'
            }
            icon={Icons.Camera}
            didPress={handleGetImage}
          />
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <AppButton
              fill={false}
              buttonText={isChanges ? 'Cancel' : 'Delete'}
              onPress={onPressCancel}
            />
          </View>
          <View style={styles.btn}>
            <AppButton
              buttonText={
                !isChanges ? 'Save' : oldId == undefined ? 'save' : 'update'
              }
              onPress={onPressSave}
              isEnable={!isChanges}
            />
          </View>
        </View>
        <View>
          <DeleteModal
            CrossBtnPress={handleCancel}
            leftBtnText="Cancel"
            leftOnPress={handleCancel}
            rightBtnText="Delete"
            rightOnPress={handleDelete}
            isVisible={isVisible}
            modalText="Are you sure you want to delete this identity"
          />
        </View>
        <View style={styles.imgContainer}>
          <Image
            source={{uri: identityData.photo}}
            style={{
              width: '100%',
              height: 200,
              resizeMode: 'cover',
              borderRadius: 20,
            }}
          />
        </View>
      </ScrollView>
    </AppContainer>
  );
};

export default VaultIdentitiesCreateUpdate;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 51,
  },
  input: {
    marginTop: 16,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  btn: {
    width: '45%',
  },
  imgContainer: {
    width: '100%',
    height: 100,
    marginTop: 5,
  },
});
