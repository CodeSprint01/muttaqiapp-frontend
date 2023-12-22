import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../../styles/color';
import AppText from '../app-text/AppText';
import {AppIconSvg} from '../app-icon-svg';
import {exploreInterface} from '../../../utils/mocks/AllMockArray';
import LinearGradient from 'react-native-linear-gradient';

const ExploreCard: FC<exploreInterface> = ({image, firstTxt, secondTxt}) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#1290A1', '#1DA28F']} style={styles.card}>
        <View style={styles.cardIcon}>
          <AppIconSvg icon={image} width={50} height={50} color={'black'} />
          <View
            // blurAmount={1}
            style={styles.blurView}
            // blurType="dark"
            // reducedTransparencyFallbackColor="black"
          />
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
    marginLeft: 18,
  },
  card: {
    width: 140,
    // height: 176,
    backgroundColor: '#afe1af',
    borderRadius: 20,
    marginTop: 20,
    // marginHorizontal: 16,
    elevation: 10,
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
    marginTop: 120,
    marginLeft: 20,
  },
  blurView: {
    width: 47,
    height: 20,
    backgroundColor: 'black',
    marginTop: 5,
    opacity: 0.04,
    borderRadius: 100,
    // marginLeft: 5,
    // width: 47,
    // height: 30,
    // borderRadius: 25, // Adjust the borderRadius to get the desired shape
    // marginTop: 55,
    // opacity: 0.5, // Adjust the opacity to control the intensity of the shadow
    // position: 'absolute',
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
