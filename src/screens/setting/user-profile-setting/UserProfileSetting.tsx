import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import AppText from '../../../components/atoms/app-text/AppText';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import {COLORS, fonts} from '../../../styles/color';
import {AppIconSvg, Icons} from '../../../components/atoms/app-icon-svg';
import AppInput from '../../../components/molecules/app-input/AppInput';
import AppButton from '../../../components/molecules/app-button/AppButton';
import ImagePicker from 'react-native-image-crop-picker';

const UserProfileSetting = () => {
  const [imageUri, setImageUri] = useState('');

  const selectImage = async () => {
    try {
      const image = await ImagePicker.openPicker({
        mediaType: 'photo',
        cropping: true,
        compressImageQuality: 0.7,
      });
      setImageUri(image.path);
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  return (
    <AppContainer style={styles.container}>
      <ScreenHeader headerText="Profile" extraStyle={{paddingHorizontal: 10}} />
      <View style={styles.userProfile}>
        <View style={styles.userContainer}>
          <View>
            {imageUri ? (
              <Image source={{uri: imageUri}} style={styles.userImg} />
            ) : (
              <Image
                source={require('../../../../assets/images/Profilepic.png')}
                style={styles.userImg}
              />
            )}
            <TouchableOpacity
              onPress={selectImage}
              activeOpacity={0.5}
              style={styles.updatePicContainer}>
              <AppIconSvg
                icon={Icons.Update}
                width={12}
                height={12}
                color={COLORS.green}
              />
            </TouchableOpacity>
          </View>
          <AppText text={'Code Sprint'} style={styles.ProfileName} />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <AppInput inputLabel="User name" placeholder="Enter username" />
        <View style={styles.input}>
          <AppInput inputLabel="Email" placeholder="Enter email address" />
        </View>
      </View>
      <View style={styles.saveBtn}>
        <View style={styles.btn}>
          <AppButton
            buttonText="Save"
            onPress={() => console.log('user save')}
          />
        </View>
      </View>
    </AppContainer>
  );
};

export default UserProfileSetting;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.pale_mint,
    flex: 1,
  },
  userProfile: {
    alignItems: 'center',
    marginTop: 22,
  },
  userContainer: {
    paddingVertical: 22,
    paddingHorizontal: 22,
    backgroundColor: COLORS.light_Powder_Blue,
    borderRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 1,
      },
    }),
  },

  userImg: {
    width: 57,
    height: 57,
    borderRadius: 27,
  },
  ProfileName: {
    fontSize: 18,
    fontFamily: fonts.dmSans[500],
    color: COLORS.dark_gray,
    paddingTop: 12,
  },
  updatePicContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.pale_mint,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -6.5,
    right: -6.5,
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginTop: 33,
  },
  input: {
    marginTop: 24,
  },
  saveBtn: {
    flex: 1,
    bottom: 0,
  },
  btn: {
    position: 'absolute',
    width: '94%',
    marginLeft: '3%',
    bottom: 50,
  },
});
