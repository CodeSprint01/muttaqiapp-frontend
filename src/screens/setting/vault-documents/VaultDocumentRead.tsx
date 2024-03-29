import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Pdf from 'react-native-pdf';
import {useSelector} from 'react-redux';
import {State} from '../../../types/types';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppText from '../../../components/atoms/app-text/AppText';
import {COLORS} from '../../../styles/color';

const VaultDocumentRead = ({route}) => {
  const docId = route.params.id;
  const [documentInfo, setDocumentInfo] = useState({
    totalPage: 0,
    currentPage: 0,
  });
  const AllreduxData = useSelector(
    (state: State) => state?.settingReducer?.documents,
  );
  const document = AllreduxData?.filter(itm => itm?.id === docId);
  console.log(document, 'this is doc open');

  return (
    <AppContainer>
      <ScreenHeader
        headerText={document[0]?.docName}
        extraStyle={styles.header}
      />
      <AppText
        text={`Total Page: ${documentInfo?.totalPage} - Current Page: ${documentInfo?.currentPage}`}
        style={styles.txt}
      />
      <View style={styles.container}>
        <Pdf
          source={{
            uri: document[0]?.docUri,
          }}
          onLoadComplete={numberOfPages =>
            setDocumentInfo(preVal => ({...preVal, totalPage: numberOfPages}))
          }
          onPageChanged={page =>
            setDocumentInfo(preVal => ({...preVal, currentPage: page}))
          }
          onError={error => {
            console.log(error);
          }}
          style={styles.pdf}
        />
      </View>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  txt: {
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 5,
    color: COLORS.green,
  },
  pdf: {
    flex: 1,
    width: '100%',
  },
});

export default VaultDocumentRead;
