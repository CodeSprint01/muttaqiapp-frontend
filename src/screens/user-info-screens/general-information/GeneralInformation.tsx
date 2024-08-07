import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, fonts} from '../../../styles/color';
import AppText from '../../../components/atoms/app-text/AppText';
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
import ChildrenOtherInfo from '../user-info/ChildrenOtherInfo';
import NumberOfSiblings from '../user-info/NumberOfSiblings';
import StepCounter from '../StepCounter';
import BequestDesire from '../user-info/BequestDesire';
import BequestInfo from '../user-info/BequestInfo';

const GeneralInformation = () => {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(0);
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const [isVisible, setVisible] = useState(false);
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
  const onPressConfirm = () => {
    setVisible(false);
    handleNext();
  };

  const renderUserInfoView = [
    [<GeneralInfo key="GeneralInfo" />],
    [
      <FamilyInfo
        onPressConfirm={onPressConfirm}
        key="FamilyInfo"
        isVisible={isVisible}
      />,
      <ChildrenInfo key="ChildrenInfo" />,
      <ChildrenOtherInfo key={'ChildrenOtherInfo'} />,
      <NumberOfSiblings key={'NumberOfSiblings'} />,
      <SiblingsInfo key="SiblingsInfo" />,
    ],
    [
      <AssetsSalaryInfo key="AssetsSalaryInfo" />,
      <AssetsBusinessInfo key="AssetsBusinessInfo" />,
    ],
    [<NomineeInfo key="NomineeInfo" />],
    [
      <BequestDesire key={'BequestDesire'} />,
      <BequestInfo key={'BequestInfo'} />,
    ],
  ];

  const handleNext = () => {
    const currentStepComponents = renderUserInfoView[currentStep];
    if (currentComponentIndex < currentStepComponents.length - 1) {
      setCurrentComponentIndex(currentComponentIndex + 1);
    } else if (currentStep < renderUserInfoView.length - 1) {
      setCurrentStep(currentStep + 1);
      setCurrentComponentIndex(0);
    } else if (currentStep === 4) {
      navigation.navigate(screens.APP_STACK);
    }
  };

  const handleSkip = () => {
    navigation.navigate(screens.APP_STACK);
  };

  const openModal = () => {
    setVisible(true);
  };

  return (
    <AppContainer>
      <LinearGradient
        colors={['#1290A1', 'rgba(29, 162, 143, 0.97)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0.0837, 0.9295]}
        style={styles.container}>
        <View style={styles.progress}>
          <StepCounter currentStep={currentStep} />
        </View>
        <View style={styles.formContainer}>
          <View style={{paddingHorizontal: 20}}>
            <AppText
              text={`${currentStep + 1}/${renderUserInfoView.length}`}
              style={styles.formNumberTxt}
            />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scroll}>
            <View style={{paddingHorizontal: 20}}>
              {renderUserInfoView[currentStep][currentComponentIndex]}
              {/* <GeneralInfo /> */}
              {/* <AssetsSalaryInfo /> */}
              {/* <AssetsBusinessInfo /> */}
              {/* <NomineeInfo /> */}
              {/* <FamilyInfo /> */}
              {/* <ChildrenInfo /> */}
              {/* <ChildrenOtherInfo /> */}
              {/* <NumberOfSiblings /> */}
              {/* <SiblingsInfo /> */}
              {/* <BequestDesire /> */}
              {/* <BequestInfo /> */}
            </View>
          </ScrollView>
          <View style={styles.bottomBtns}>
            <AppButton
              buttonText={
                currentStep === 4 && currentComponentIndex === 0
                  ? 'Yes'
                  : currentStep === 4 && currentComponentIndex === 1
                  ? 'Calculate'
                  : 'Next'
              }
              onPress={
                currentStep === 1 && currentComponentIndex === 0
                  ? openModal
                  : handleNext
              }
            />
            <View style={styles.skipBtn}>
              <AppButton
                buttonText={
                  currentStep === 4 && currentComponentIndex === 0
                    ? 'No'
                    : 'Skip'
                }
                fill={false}
                onPress={
                  currentStep === 4 && currentComponentIndex === 0
                    ? handleSkip
                    : handleSkip
                }
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
