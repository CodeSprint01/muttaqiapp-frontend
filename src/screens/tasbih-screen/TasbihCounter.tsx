import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ScreenHeader from '../../components/molecules/app-header/ScreenHeader';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import AppText from '../../components/atoms/app-text/AppText';
import AppButton from '../../components/molecules/app-button/AppButton';
import {COLORS} from '../../styles/color';

const TasbihCounter = () => {
  const [count, setCount] = useState(0);
  const handleCounter = () => {
    setCount(count + 1);
  };
  return (
    <AppContainer style={styles.container}>
      <View style={styles.headerContainer}>
        <ScreenHeader headerText="Counter" />
        <AppText text={'Subhan Allah'} style={styles.headerText} />
        <View style={styles.verticalLine} />
      </View>
      <View style={styles.middleContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.circleCounter}
          onPress={handleCounter}>
          <AppText text={count} style={styles.counterValue} />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <AppButton buttonText="Reset" onPress={() => setCount(0)} />
      </View>
    </AppContainer>
  );
};

export default TasbihCounter;

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  verticalLine: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.lightGray,
    marginTop: 13,
  },
  headerText: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    color: COLORS.green,
    textAlign: 'center',
    paddingTop: 19,
  },
  middleContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleCounter: {
    width: 330,
    height: 330,
    backgroundColor: COLORS.light_Powder_Blue,
    borderRadius: 175,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: COLORS.light_Powder_Blue,
    borderBottomColor: COLORS.light_Powder_Blue,
    borderWidth: 2,
    elevation: 15,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(111, 140, 176, 0.41)',
        shadowOffset: {width: 30, height: 30},
        shadowOpacity: 1,
        shadowRadius: 40,
      },
    }),
  },
  counterValue: {
    fontSize: 40,
    fontWeight: '700',
    color: COLORS.dark_gray,
  },
  bottomContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
