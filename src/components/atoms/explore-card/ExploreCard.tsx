import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../../styles/color';
import AppText from '../app-text/AppText';
import {AppIconSvg} from '../app-icon-svg';
import {exploreInterface} from '../../../utils/mocks/AllMockArray';

const ExploreCard: FC<exploreInterface> = ({image, firstTxt, secondTxt}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardIcon}>
          <AppIconSvg icon={image} width={50} height={50} color={'black'} />
        </View>
        <AppText text={firstTxt} style={styles.cardFirstTxt} />
        <AppText text={secondTxt} style={styles.cardSecondTxt} />
      </View>
    </View>
  );
};

export default ExploreCard;

const styles = StyleSheet.create({
  container: {},
  card: {
    width: 140,
    backgroundColor: '#afe1af',
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal: 10,
  },
  cardIcon: {
    marginTop: 20,
    marginLeft: 20,
    position: 'absolute',
  },
  cardFirstTxt: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '500',
    marginTop: 100,
    marginLeft: 20,
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
