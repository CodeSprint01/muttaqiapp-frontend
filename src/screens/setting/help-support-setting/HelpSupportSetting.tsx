import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppInput from '../../../components/molecules/app-input/AppInput';
import AppButton from '../../../components/molecules/app-button/AppButton';
import AppText from '../../../components/atoms/app-text/AppText';
import {COLORS, fonts} from '../../../styles/color';
import AppUploadDoc from '../../../components/molecules/app-input/AppUploadDoc';
import DocumentPicker from 'react-native-document-picker';

const HelpSupportSetting = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [textLength, setTextLength] = useState(1000);

  const handleOnChnage = (key: number, txt: string) => {
    if (key == 1) {
      setUserData(preVal => ({...preVal, name: txt}));
    } else if (key == 2) {
      setUserData(preVal => ({...preVal, email: txt}));
    } else {
      let textLeng = txt.length;
      let total = 1000;
      let res = total - textLeng;
      setTextLength(res);
      setUserData(preVal => ({...preVal, message: txt}));
    }
  };
  const handleUploadDoc = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      console.log('URI:', res.uri);
      console.log('Type:', res.type);
      console.log('Name:', res.name);
      console.log('Size:', res.size);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
        console.log('Picker was cancelled');
      } else {
        // Error occurred while picking the document
        console.error('Error picking document:', err);
      }
    }
  };

  return (
    <AppContainer>
      <ScreenHeader
        headerText="Help & support"
        extraStyle={{paddingHorizontal: 10}}
      />
      <View style={styles.inputContainer}>
        <AppInput
          placeholder="Enter name"
          isRequired
          inputLabel="Name"
          handleInputChange={(txt: string) => handleOnChnage(1, txt)}
          inputValue={userData.name}
        />
        <AppInput
          placeholder="Enter emial"
          isRequired
          inputLabel="E-mail"
          handleInputChange={(txt: string) => handleOnChnage(2, txt)}
          inputValue={userData.email}
        />
        <View>
          <AppInput
            placeholder="Enter name"
            isRequired
            inputLabel="Message"
            maxLength={1000}
            handleInputChange={(txt: string) => handleOnChnage(3, txt)}
            inputValue={userData.message}
          />
          <AppText
            text={`${textLength} characters`}
            style={styles.charaterTxt}
          />
        </View>
        <AppUploadDoc
          inputLabel="Attachmentts"
          isRequired
          didPress={handleUploadDoc}
        />
      </View>
      <View></View>
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <AppButton
            buttonText="Submit"
            onPress={() => console.log('submit')}
          />
        </View>
      </View>
    </AppContainer>
  );
};

export default HelpSupportSetting;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 5,
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
  },
  btnContainer: {
    flex: 4,
  },
  charaterTxt: {
    color: COLORS.dark_gray,
    fontSize: 10,
    fontFamily: fonts.dmSans[400],
    textAlign: 'right',
    paddingTop: 2,
  },
  btn: {
    position: 'absolute',
    width: '94%',
    alignSelf: 'center',
    bottom: 40,
  },
});
