import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppIconSvg, Icons} from '../../components/atoms/app-icon-svg';
import {COLORS} from '../../styles/color';
import AppText from '../../components/atoms/app-text/AppText';
import AppInput from '../../components/molecules/app-input/AppInput';
import AppInputDropDown from '../../components/molecules/app-input-drop-down/AppInputDropDown';
import {Gender} from '../../utils/mocks/AllMockArray';
import AppButton from '../../components/molecules/app-button/AppButton';
import {useNavigation} from '@react-navigation/native';
import {screen} from '../../types/keyVlaue';

const UserProfile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backArrow}>
          <AppIconSvg
            icon={Icons.ArrowBack}
            width={25}
            height={25}
            color={COLORS.light_gray}
          />
        </View>
        <View style={styles.imageContainer}>
          <AppText text={'AB'} style={styles.userProfileName} />
          <View style={styles.plusBtn}>
            <AppIconSvg
              icon={Icons.ButtonPlus}
              width={27}
              height={27}
              color={COLORS.light_gray}
            />
          </View>
        </View>
      </View>
      <View style={styles.userForm}>
        <AppInput inputLabel="Name" />
        <View style={styles.inputSty}>
          <AppInput inputLabel="About" />
        </View>
        <View style={styles.genderDate}>
          <View style={styles.genderDropDown}>
            <AppInputDropDown
              placeholderText="Gender"
              ImageName={Icons.DropDown}
              imageColor={COLORS.black}
              imageWidth={15}
              imageHeight={15}
              arrayData={Gender}
              iconStyle={styles.dropIcon}
            />
          </View>
          <View style={styles.dateOfBirth}>
            <AppInputDropDown
              placeholderText="Date of Birth"
              ImageName={Icons.DropDown}
              imageColor={COLORS.black}
              imageWidth={15}
              imageHeight={15}
              arrayData={Gender}
              iconStyle={styles.dropIcon}
            />
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate(screen.CHANGE_PASSWORD)}>
          <AppText text={'Change Password'} style={styles.changePass} />
        </TouchableOpacity>
        <AppButton
          buttonText="Logout"
          onPress={() => console.log('logout user')}
          buttonStyle={styles.logout}
          textStyle={styles.logoutSty}
        />
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flex: 1,
  },
  backArrow: {
    position: 'absolute',
    marginLeft: 17,
    marginTop: 36,
  },
  imageContainer: {
    width: 64,
    height: 64,
    backgroundColor: 'pink',
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userProfileName: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  plusBtn: {
    position: 'absolute',
    bottom: -2,
    right: -7,
  },
  userForm: {
    flex: 6,
    paddingHorizontal: 30,
    marginTop: 35,
  },
  inputSty: {
    paddingTop: 28,
  },
  genderDate: {
    marginTop: 28,
    flexDirection: 'row',
    marginLeft: 5,
    justifyContent: 'space-between',
  },
  genderDropDown: {
    width: '48%',
    position: 'absolute',
    zIndex: 2,
  },
  dropIcon: {
    paddingTop: 5,
  },
  dateOfBirth: {
    width: '48%',
    position: 'absolute',
    zIndex: 2,
    right: 0,
  },
  changePass: {
    fontSize: 20,
    fontWeight: '400',
    paddingTop: 70,
    color: COLORS.lightBlack,
  },
  logout: {
    position: 'absolute',
    width: '100%',
    bottom: 34,
    alignSelf: 'center',
  },
  logoutSty: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.white,
  },
});
