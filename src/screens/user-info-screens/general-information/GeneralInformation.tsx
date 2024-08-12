import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
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
import LiabilitiesInfo from '../user-info/LiabilitiesInfo';
import {AppIconSvg, Icons} from '../../../components/atoms/app-icon-svg';

const GeneralInformation = () => {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(0);
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const [isVisible, setVisible] = useState(false);
  const scrollViewRef = useRef(null);

  const onPressConfirm = () => {
    setVisible(false);
    handleNext();
  };

  const renderUserInfoView = [
    [<GeneralInfo scrollViewRef={scrollViewRef} key="GeneralInfo" />],
    [
      <FamilyInfo
        onPressConfirm={onPressConfirm}
        key="FamilyInfo"
        isVisible={isVisible}
      />,
      <ChildrenInfo key="ChildrenInfo" />,
      <ChildrenOtherInfo key={'ChildrenOtherInfo'} />,
      <NumberOfSiblings key={'NumberOfSiblings'} />,
      <SiblingsInfo scrollViewRef={scrollViewRef} key="SiblingsInfo" />,
    ],
    [
      <AssetsSalaryInfo key="AssetsSalaryInfo" />,
      <AssetsBusinessInfo key="AssetsBusinessInfo" />,
    ],
    [<NomineeInfo key="NomineeInfo" />],
    [<LiabilitiesInfo key={'LiabilitiesInfo'} />],
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
    } else if (currentStep === 5) {
      navigation.navigate(screens.INHERITANCE_BREAK_DOWN);
    }
  };

  const handleSkip = () => {
    navigation.navigate(screens.APP_STACK);
  };

  const openModal = () => {
    setVisible(true);
  };

  const handleBack = () => {
    if (currentComponentIndex > 0) {
      setCurrentComponentIndex(currentComponentIndex - 1);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setCurrentComponentIndex(renderUserInfoView[currentStep - 1].length - 1);
    }
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
          <TouchableOpacity style={styles.backBtnView} onPress={handleBack}>
            <AppIconSvg
              icon={Icons.ArrowLeft}
              height={20}
              width={20}
              color={COLORS.green}
            />
          </TouchableOpacity>
          <View style={{paddingHorizontal: 20}}>
            <AppText
              text={`${currentStep + 1}/${renderUserInfoView.length}`}
              style={styles.formNumberTxt}
            />
          </View>
          <ScrollView
            ref={scrollViewRef}
            showsVerticalScrollIndicator={false}
            style={styles.scroll}>
            <View style={{paddingHorizontal: 20}}>
              {renderUserInfoView[currentStep][currentComponentIndex]}
            </View>
          </ScrollView>
          <View style={styles.bottomBtns}>
            <AppButton
              buttonText={
                currentStep === 5 && currentComponentIndex === 0
                  ? 'Yes'
                  : currentStep === 5 && currentComponentIndex === 1
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
                  currentStep === 5 && currentComponentIndex === 0
                    ? 'No'
                    : 'Skip'
                }
                fill={false}
                onPress={
                  currentStep === 5 && currentComponentIndex === 0
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
  backBtnView: {
    height: 30,
    width: 30,
    marginTop: 20,
    marginLeft: 16,
    justifyContent: 'center',
  },
});
