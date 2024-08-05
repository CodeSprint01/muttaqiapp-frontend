import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, fonts} from '../../../styles/color';
import AppText from '../../../components/atoms/app-text/AppText';
import {AppIconSvg, Icons} from '../../../components/atoms/app-icon-svg';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../../types/types';
import GeneralInfo from '../user-info/GeneralInfo';
import AssetsSalaryInfo from '../user-info/AssetsSalaryInfo';
import AppButton from '../../../components/molecules/app-button/AppButton';
import AssetsBusinessInfo from '../user-info/AssetsBusinessInfo';
import NomineeInfo from '../user-info/NomineeInfo';
import FamilyInfo from '../user-info/FamilyInfo';
import ChildrenInfo from '../user-info/ChildrenInfo';
import SiblingsInfo from '../user-info/SiblingsInfo';

const GeneralInformation = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState({
    userName: '',
    userGender: null,
    userAge: 0,
    userEducation: '',
    userAddress: '',
    userCountry: '',
    userCNIC: 0,
    userSect: '',
    userFirqa: '',
  });

  return (
    <AppContainer>
      <LinearGradient
        colors={['#1290A1', 'rgba(29, 162, 143, 0.97)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0.0837, 0.9295]}
        style={styles.container}>
        <View style={styles.progress}>
          <AppIconSvg
            icon={Icons.FirstStep}
            width={'100%'}
            height={50}
            color="black"
          />
        </View>
        <View style={styles.formContainer}>
          <View style={{paddingHorizontal: 20}}>
            <AppText text={'1/6'} style={styles.formNumberTxt} />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scroll}>
            <View style={{paddingHorizontal: 20}}>
              <GeneralInfo />
              {/* <AssetsSalaryInfo /> */}
              {/* <AssetsBusinessInfo /> */}
              {/* <NomineeInfo /> */}
              {/* <FamilyInfo /> */}
              {/* <ChildrenInfo /> */}
              {/* <SiblingsInfo /> */}
            </View>
          </ScrollView>
          <View style={styles.bottomBtns}>
            <AppButton
              buttonText="Next"
              onPress={() =>
                navigation.navigate(screens.FAMILY_INFORMATION_FIRST_FORM)
              }
            />
            <View style={styles.skipBtn}>
              <AppButton
                buttonText="Skip"
                fill={false}
                onPress={() => navigation.navigate(screens.APP_STACK)}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </AppContainer>
  );
};

export default GeneralInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  progress: {
    marginVertical: 10,
    paddingHorizontal: 40,
  },
  formContainer: {
    flex: 1,
    backgroundColor: COLORS.pale_mint,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
  },
  formNumberTxt: {
    color: COLORS.light_gray,
    fontSize: 14,
    fontFamily: fonts.dmSans[500],
    paddingTop: 40,
  },
  bottomBtns: {
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: COLORS.pale_mint,
  },
  skipBtn: {
    marginTop: 20,
    marginBottom: 40,
  },
});
