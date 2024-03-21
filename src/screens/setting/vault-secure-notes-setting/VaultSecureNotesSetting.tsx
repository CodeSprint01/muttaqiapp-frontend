import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppText from '../../../components/atoms/app-text/AppText';
import PlusIconWithText from '../../../components/molecules/app-button/PlusIconWithText';
import AppModal from '../../../components/atoms/app-modal/AppModal';
import {COLORS} from '../../../styles/color';
import AppInput from '../../../components/molecules/app-input/AppInput';
import AppButton from '../../../components/molecules/app-button/AppButton';
import {
  actionUserSecureNotesCreate,
  actionUserSecureNotesDelete,
} from '../../../redux/setting/action';
import {useDispatch, useSelector} from 'react-redux';
import {NotesInfo, State, screens} from '../../../types/types';
import SecureNote from './SecureNote';
import {useNavigation} from '@react-navigation/native';

const VaultSecureNotesSetting = () => {
  let dataInitialState = {
    title: '',
    details: '',
  };
  const [userData, setUserData] = useState(dataInitialState);
  const [isVisible, setIsVisible] = useState(false);
  const [validationError, setValidationError] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const notesData = useSelector(
    (state: State) => state?.settingReducer?.secureNotes,
  );
  console.log(notesData, 'notes new h');

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
      setUserData(preVal => ({...preVal, details: txt}));
    }
  };
  const handleDeleteNote = (id: number) => {
    Alert.alert('Alert', 'Are you sure you want to delete this note', [
      {
        text: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => dispatch(actionUserSecureNotesDelete(id)),
      },
    ]);
  };
  const handleNoteOpen = (item: NotesInfo) => {
    navigation.navigate(screens.VAULT_SECURE_NOTES_READ, {data: item});
  };

  const createCredentail = () => {
    const isValidate = Object.values(userData).some(val => val === '');
    if (!isValidate) {
      dispatch(actionUserSecureNotesCreate(userData));
      setUserData(dataInitialState);
      setIsVisible(false);
      setValidationError(false);
    } else {
      setValidationError(true);
    }
  };
  // notes map
  const renderItem = ({item, index}: {item: NotesInfo; index: number}) => {
    return (
      <>
        <SecureNote
          title={item?.title}
          details={item?.details}
          didDeleteNote={() => handleDeleteNote(item?.id)}
          didNotesPress={() => handleNoteOpen(item)}
        />
        <View
          style={{marginBottom: notesData.length - 1 === index ? 200 : 0}}
        />
      </>
    );
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
                  inputValue={userData?.details}
                  maxLength={8000}
                  multiline
                  style={{height: 200, backgroundColor: 'pink'}}
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
      <View style={styles.notesContainer}>
        <FlatList
          data={notesData}
          renderItem={renderItem}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_item, index) => index.toString()}
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
  notesContainer: {
    flex: 1,
  },
});
