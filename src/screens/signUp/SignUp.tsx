import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppText from '../../components/atoms/appText/AppText';
import {COLORS} from '../../styles/color';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.circle} />
        <AppText text="Muttaqi" style={styles.txt} />
      </View>
      <View style={styles.signUpFormContainer}></View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    // backgroundColor:"pink"
  },
  circleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
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
    backgroundColor: 'grey',
  },
});
