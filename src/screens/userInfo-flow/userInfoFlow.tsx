import {StyleSheet, View} from 'react-native';
import React from 'react';
import UserGeneralInfomation from '../../components/organisums/user-general-Infomation/UserGeneralInfomation';
import UserInfoHeader, {
  UserInfoSteps,
} from '../../components/atoms/user-info-header/UserInfoSteps';
import {COLORS} from '../../styles/color';
import UserFamilyInformation from '../../components/organisums/user-family-Infomation/UserFamilyInformation';
import AppButton from '../../components/molecules/app-button/AppButton';

const userInfoFlow = () => {
  return (
    <View style={styles.container}>
      <UserInfoHeader stepValue={UserInfoSteps.assest} />
      <UserGeneralInfomation />
      {/* <UserFamilyInformation /> */}
      <View style={{marginBottom:34}}>
        <AppButton buttonText='Continue' />
      </View>
    </View>
  );
};

export default userInfoFlow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    color: COLORS.error,
  },
});
