import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import {COLORS, fonts} from '../../../styles/color';
import AppText from '../../../components/atoms/app-text/AppText';

const AboutMuttaqiSetting = () => {
  const appVersion = 1.1;
  const year = 2024;
  return (
    <AppContainer style={styles.container}>
      <View style={styles.topContainer}>
        <ScreenHeader headerText="About Muttaqi" extraStyle={styles.header} />
        <View style={styles.logoContainer}>
          <AppText text={'LOGO'} style={styles.logoTxt} />
        </View>
        <AppText text={`Version ${appVersion}`} style={styles.vertionTxt} />
      </View>
      <View style={styles.bottomContainer}>
        <AppText
          text={`@${year} All Rights reserved to Muttaqi`}
          style={styles.copyright}
        />
      </View>
    </AppContainer>
  );
};

export default AboutMuttaqiSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pale_mint,
  },
  topContainer: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 10,
  },
  logoContainer: {
    width: 169,
    height: 145,
    backgroundColor: COLORS.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 60,
  },
  logoTxt: {
    color: COLORS.very_dark_gray,
    fontFamily: fonts.dmSans[700],
    fontSize: 20,
  },
  vertionTxt: {
    color: COLORS.dark_gray,
    fontSize: 18,
    fontFamily: fonts.dmSans[400],
    textAlign: 'center',
    marginTop: 32,
  },
  bottomContainer: {
    flex: 1,
  },
  copyright: {
    color: COLORS.dark_gray,
    fontSize: 18,
    fontFamily: fonts.dmSans[400],
    textAlign: 'center',
    position: 'absolute',
    right: 0,
    left: 0,
    top: 250,
  },
});
