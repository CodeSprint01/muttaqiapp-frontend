import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../../styles/color';
import AppText from '../app-text/AppText';
import {AppIconSvg} from '../app-icon-svg';
import {exploreInterface} from '../../../utils/mocks/AllMockArray';
import LinearGradient from 'react-native-linear-gradient';

const ExploreCard: FC<exploreInterface> = ({
  image,
  firstTxt,
  secondTxt,
  index,
}) => {
  return (
    <View
      style={[
        styles.container,
        {marginRight: index === 3 ? 12 : 0, marginLeft: index === 0 ? 12 : 0},
      ]}>
      <LinearGradient colors={['#1290A1', '#1DA28F']} style={styles.card}>
        <View style={styles.cardIcon}>
          <AppIconSvg icon={image} width={50} height={50} color={'black'} />
          <View style={styles.blurView} />
        </View>
        <AppText text={firstTxt} style={styles.cardFirstTxt} />
        <AppText text={secondTxt} style={styles.cardSecondTxt} />
      </LinearGradient>
    </View>
  );
};

export default ExploreCard;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 25,
  },
  card: {
    width: 130,
    backgroundColor: '#afe1af',
    borderRadius: 20,
    marginTop: 20,
    elevation: 10,
    marginHorizontal: 8,
  },
  cardIcon: {
    marginTop: 20,
    marginLeft: 20,
    position: 'absolute',
  },
  cardFirstTxt: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
    marginTop: 100,
    marginLeft: 20,
  },
  blurView: {
    width: 47,
    height: 20,
    backgroundColor: 'black',
    marginTop: 5,
    opacity: 0.04,
    borderRadius: 100,
  },
  cardSecondTxt: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '500',
    paddingTop: 5,
    marginLeft: 20,
    paddingBottom: 20,
  },
});
