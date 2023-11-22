import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppText from '../../components/atoms/appText/AppText';
import {colors} from '../../styles/colours';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.circle} />
        <AppText text="Muttaqi" style={styles.txt} />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary.main,
  },
  circleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 138,
    height: 138,
    backgroundColor: colors.primary.white,
    borderRadius: 69,
    alignSelf: 'center',
  },
  txt: {
    color: colors.primary.white,
    fontSize: 20,
    // fontWeight: '700',
    paddingTop: 20,
    lineHeight: 26.04,
  },
});
