import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppText from '../../components/atoms/app-text/AppText';
import {COLORS} from '../../styles/color';
import AppInput from '../../components/molecules/app-input/AppInput';
import {ShowEye, ArrowRight} from '../../../assets/images/index';
import AppButton from '../../components/molecules/app-button/AppButton';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.circle} />
        <AppText text="Muttaqi" style={styles.txt} />
      </View>
      <View style={styles.signUpFormContainer}>
        <View style={styles.inputFields}>
          <AppInput inputLabel="Email Address" />
        </View>

        <View style={styles.inputFields}>
          <AppInput
            inputLabel="Password"
            ImageName={ShowEye}
            imageHeight={17}
            imageWidth={17}
          />
        </View>
        <AppButton
          buttonText={'Sign In'}
          onPress={() => console.log('button sign up click')}
          textStyle={styles.signUpTxt}
          withOpacity={0.7}
        />
        <View style={styles.bottomContainer}>
          <TouchableOpacity>
            <View style={styles.alreadyTxt}>
              <AppText
                text="Don’t have an Account?"
                style={styles.alreadyTxt}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.signImage}>
            <TouchableOpacity>
              <AppText text="Sign Up" style={styles.signIn} />
            </TouchableOpacity>
            <View style={styles.arrowIcon}>
              <ArrowRight width={17} height={17} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  circleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 55,
  },
  circle: {
    width: 138,
    height: 138,
    backgroundColor: COLORS.tertiary,
    borderRadius: 69,
    alignSelf: 'center',
  },
  txt: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: '700',
    paddingTop: 20,
    lineHeight: 26.04,
  },
  signUpFormContainer: {
    flex: 2,
  },
  inputFields: {
    marginTop: 20,
  },
  signUpTxt: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20.83,
  },
  bottomContainer: {
    flexDirection: 'row',
    marginTop: 83,
    marginHorizontal: 30,
    justifyContent: 'space-between',
  },
  alreadyTxt: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 15.62,
    color: COLORS.black,
    paddingTop: 2,
  },
  signImage: {
    flexDirection: 'row',
  },
  signIn: {
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 20.83,
    paddingRight: 10,
  },
  arrowIcon: {
    paddingTop: 2,
  },
});
