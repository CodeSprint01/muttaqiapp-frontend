import {Alert, FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import PlusIconWithText from '../../../components/molecules/app-button/PlusIconWithText';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import {useDispatch, useSelector} from 'react-redux';
import {
  actionUserDocumentAdd,
  actionUserDocumentDelete,
} from '../../../redux/setting/action';
import {DocumentInfo, State, screens} from '../../../types/types';
import DocumentCard from './DocumentCard';
import DeleteModal from '../../../components/organisums/delete-modal/DeleteModal';
import AppText from '../../../components/atoms/app-text/AppText';
import {COLORS, fonts} from '../../../styles/color';
import {useNavigation} from '@react-navigation/native';

const VaultDocumentAddDelete = () => {
  const initialState = {
    docName: '',
    docUri: '',
  };
  const [document, setDocument] =
    useState<DocumentPickerResponse>(initialState);
  const [isVisible, setIsVisible] = useState(false);
  const [docId, setDocId] = useState(0);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const reduxData = useSelector(
    (state: State) => state?.settingReducer?.documents,
  );
  console.log(reduxData, 'thius is redux doc');

  // all buttons action
  const onPressAddDoc = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setDocument(preVal => ({
        ...preVal,
        docName: res[0]?.name,
        docUri: res[0].uri,
      }));
      dispatch(actionUserDocumentAdd(res[0]));
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Picker was cancelled');
      } else {
        console.error('Error picking document:', err);
      }
    }
  };
  const onPressDocument = (id: number) => {
    navigation.navigate(screens.VAULT_DOCUMENT_READ, {id: id});
  };
  const onPressDelete = (id: number) => {
    setIsVisible(true);
    setDocId(id);
  };
  const handleDelete = () => {
    dispatch(actionUserDocumentDelete(docId));
    setIsVisible(false);
  };
  const onPressCancel = () => {
    setIsVisible(false);
  };
  const renderItem = ({item, index}: {item: DocumentInfo; index: number}) => {
    return (
      <DocumentCard
        docText={item?.docName}
        onPressDelete={() => onPressDelete(item?.id)}
        onPressDoc={() => onPressDocument(item?.id)}
      />
    );
  };
  console.log(document);

  return (
    <AppContainer>
      <ScreenHeader headerText="Documents" extraStyle={styles.header} />
      <View style={styles.container}>
        <View style={styles.plusBtn}>
          <PlusIconWithText text="Add document" onPress={onPressAddDoc} />
        </View>
        <View style={styles.flatlist}>
          {reduxData?.length > 0 ? null : (
            <AppText
              text={'No document please upload document'}
              style={styles.noDocTxt}
            />
          )}
          <FlatList
            data={reduxData}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={(_item, index) => index.toString()}
          />
        </View>
        <DeleteModal
          CrossBtnPress={onPressCancel}
          isVisible={isVisible}
          leftBtnText="Cancel"
          leftOnPress={onPressCancel}
          rightBtnText="Delete"
          rightOnPress={handleDelete}
          modalText="Are you sure you want to  delete this file."
        />
      </View>
    </AppContainer>
  );
};

export default VaultDocumentAddDelete;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
  },
  container: {
    flex: 1,
    paddingTop: 15,
  },
  documents: {
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  plusBtn: {
    paddingHorizontal: 20,
  },
  flatlist: {
    flex: 1,
  },
  noDocTxt: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 60,
    fontFamily: fonts.dmSans[700],
    color: COLORS.dark_gray,
  },
});
