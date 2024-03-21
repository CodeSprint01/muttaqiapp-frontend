import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppText from '../../../components/atoms/app-text/AppText';
import {COLORS, fonts} from '../../../styles/color';
import {AppIconSvg, Icons} from '../../../components/atoms/app-icon-svg';
import {useDispatch} from 'react-redux';
import {actionUserSecureNotesUpdate} from '../../../redux/setting/action';

const ReadSecureNotes = ({route}) => {
  const notes = route?.params?.data;
  console.log(notes, 'this is notes');
  const initialState = {
    id: notes?.id,
    title: notes?.title,
    details: notes?.details,
  };
  const [updatedNote, setUpdatedNote] = useState(initialState);
  const [isEdited, setIsEdited] = useState(false);

  const dispatch = useDispatch();

  const onChangeText = (key: number, txt: string) => {
    if ((key = 1)) {
      setUpdatedNote(preVal => ({...preVal, title: txt}));
    } else {
      setUpdatedNote(preVal => ({...preVal, details: txt}));
    }
  };

  const isValidate = Object.values(updatedNote).some(val => val === '');
  const titleChanged = updatedNote?.title !== notes?.title;
  const detailsChanged = updatedNote?.details !== notes?.details;
  const isChanged = titleChanged || detailsChanged;

  const didUpdatePress = () => {
    setIsEdited(!isEdited);
  };

  const didSavePress = () => {
    if (isValidate) {
      Alert.alert('Alert', 'please fill all the fields');
    } else {
      dispatch(actionUserSecureNotesUpdate(updatedNote));
    }
  };
  return isEdited !== true ? (
    <AppContainer>
      <ScreenHeader headerText="Secure notes" extraStyle={styles.header} />
      <ScrollView style={styles.container}>
        <View style={styles.titleIcon}>
          <View style={styles.titleCont}>
            <AppText text={notes?.title} style={styles.title} />
          </View>
          <TouchableOpacity style={styles.icon} onPress={didUpdatePress}>
            <AppIconSvg
              icon={Icons.Update}
              width={25}
              height={25}
              color={COLORS.green}
            />
          </TouchableOpacity>
        </View>
        <AppText text={notes?.details} style={styles.details} />
      </ScrollView>
    </AppContainer>
  ) : (
    <AppContainer>
      <ScreenHeader headerText="Secure note" extraStyle={styles.header} />
      <ScrollView>
        {isChanged && (
          <View style={styles.updatesButton}>
            <AppText
              text={'You have made some changes to your note'}
              style={styles.changesTxt}
            />
            <View style={styles.bothButtons}>
              <TouchableOpacity
                style={[styles.iconTxt, {marginLeft: -10}]}
                onPress={() => setUpdatedNote(initialState)}>
                <AppIconSvg
                  icon={Icons.Cross}
                  width={30}
                  height={30}
                  color={COLORS.crimson}
                />
                <AppText style={styles.discardTxt} text={'Discard'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconTxt} onPress={didSavePress}>
                <AppIconSvg
                  icon={Icons.Tick}
                  width={17}
                  height={17}
                  color={COLORS.green}
                />
                <AppText style={styles.savetxt} text={'save changes'} />
              </TouchableOpacity>
            </View>
          </View>
        )}
        <View style={styles.inputs}>
          <AppText text={'Enter Title'} style={styles.titleTxt} />
          <TextInput
            placeholder="Enter title"
            style={styles.titleInput}
            multiline
            value={updatedNote?.title}
            onChangeText={txt => onChangeText(1, txt)}
          />
          <AppText text={'Enter Details'} style={styles.detailsTxt} />
          <TextInput
            placeholder="Enter Details"
            style={styles.detailsInput}
            multiline
            value={updatedNote?.details}
            onChangeText={txt => onChangeText(2, txt)}
          />
        </View>
      </ScrollView>
    </AppContainer>
  );
};

export default ReadSecureNotes;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
  },
  container: {
    paddingHorizontal: 20,
  },
  titleIcon: {
    flexDirection: 'row',
    paddingTop: 35,
    justifyContent: 'space-between',
  },
  titleCont: {
    width: '85%',
  },
  icon: {
    width: '20%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.dmSans[700],
    color: COLORS.very_dark_gray,
  },
  details: {
    fontSize: 18,
    fontFamily: fonts.dmSans[400],
    color: COLORS.dark_gray,
    paddingTop: 16,
    paddingBottom: 30,
  },
  titleInput: {
    height: 100,
    borderColor: COLORS.green,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  detailsInput: {
    height: 400,
    borderColor: COLORS.green,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  updatesButton: {
    backgroundColor: COLORS.light_Powder_Blue,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 11,
    paddingVertical: 16,
  },
  changesTxt: {
    fontSize: 16,
    fontFamily: fonts.dmSans[400],
    color: COLORS.very_dark_gray,
    textAlign: 'center',
  },
  bothButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 14,
  },
  iconTxt: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discardTxt: {
    fontSize: 18,
    fontFamily: fonts.dmSans[500],
    color: COLORS.crimson,
  },
  savetxt: {
    fontSize: 18,
    fontFamily: fonts.dmSans[500],
    color: COLORS.green,
    paddingLeft: 8,
  },
  titleTxt: {
    paddingBottom: 5,
    fontSize: 18,
    fontFamily: fonts.dmSans[500],
    color: COLORS.green,
  },
  detailsTxt: {
    paddingBottom: 5,
    fontSize: 18,
    fontFamily: fonts.dmSans[500],
    color: COLORS.green,
    marginTop: 10,
  },
  inputs: {
    paddingHorizontal: 20,
    marginTop: 16,
  },
});
