import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import PlusIconWithText from '../../../components/molecules/app-button/PlusIconWithText';
import {actionUserSecureNotesDelete} from '../../../redux/setting/action';
import {useDispatch, useSelector} from 'react-redux';
import {NotesInfo, State, screens} from '../../../types/types';
import SecureNote from './SecureNote';
import {useNavigation} from '@react-navigation/native';
import DeleteModal from '../../../components/organisums/delete-modal/DeleteModal';

const VaultSecureNotesSetting = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [deleteModal, setDeleteModal] = useState(false);

  const notesData = useSelector(
    (state: State) => state?.settingReducer?.secureNotes,
  );

  const didCreateNotes = () => {
    navigation.navigate(screens.VAULT_SECURE_NOTES_READ, {isCreated: true});
  };

  const handleDeleteNote = (id: number) => {
    dispatch(actionUserSecureNotesDelete(id));
    setDeleteModal(false);
  };
  const handleNoteOpen = (item: NotesInfo) => {
    navigation.navigate(screens.VAULT_SECURE_NOTES_READ, {data: item});
  };

  // notes map
  const renderItem = ({item, index}: {item: NotesInfo; index: number}) => {
    return (
      <>
        <SecureNote
          title={item?.title}
          details={item?.details}
          didDeleteNote={() => setDeleteModal(true)}
          didNotesPress={() => handleNoteOpen(item)}
        />
        <View
          style={{marginBottom: notesData.length - 1 === index ? 200 : 0}}
        />
        <DeleteModal
          isVisible={deleteModal}
          CrossBtnPress={() => setDeleteModal(false)}
          modalText={'Are you sure you want to delete this note ?'}
          leftBtnText={'Delete'}
          rightBtnText={'Cancel'}
          leftOnPress={() => handleDeleteNote(item.id)}
          rightOnPress={() => setDeleteModal(false)}
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
  notesContainer: {
    flex: 1,
  },
});
