import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../styles/color';
import {AppIconSvg, Icons} from '../../components/atoms/app-icon-svg';
import AppText from '../../components/atoms/app-text/AppText';

interface CardProps {
  surahName: string | undefined;
  paraNo: string;
  onPress: () => void;
}

const QuranHeaderCard: FC<CardProps> = ({surahName, paraNo, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerConatiner}>
        <View style={styles.imgVew}>
          <Image
            source={require('../../../assets/images/explore-images/quranwithStars.png')}
            style={{
              width: 100,
              height: 100,
              backgroundColor: '#f5fafb',
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={styles.rightView}>
          <AppText text={'Last read'} style={styles.lastRead} />
          <AppText text={surahName} style={styles.currentSurah} />
          <AppText text={paraNo} style={styles.paraNo} />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.iconVew}
            onPress={onPress}>
            <AppIconSvg
              icon={Icons.ArrowRight}
              width={30}
              height={30}
              color={COLORS.green}
              style={styles.svgIcn}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default QuranHeaderCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
  headerConatiner: {
    backgroundColor: COLORS.light_Powder_Blue,
    height: 165,
    borderRadius: 38,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    elevation: 7,
    shadowColor: 'black',
    shadowOffset: {width: 15, height: 15},
    shadowRadius: 7,
    shadowOpacity: 0.1,
  },
  imgVew: {
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightView: {
    width: '60%',
    justifyContent: 'center',
  },
  lastRead: {
    color: COLORS.medium_gray,
    fontSize: 16,
    fontWeight: '400',
  },
  currentSurah: {
    fontSize: 26,
    fontWeight: '700',
    color: COLORS.dark_gray,
    paddingTop: 5,
  },
  paraNo: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.medium_gray,
    paddingTop: 5,
  },
  svgIcn: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  iconVew: {
    width: 36,
    height: 36,
    backgroundColor: COLORS.white,
    borderRadius: 18,
    position: 'absolute',
    bottom: 23,
    right: 17,
    elevation: 9,
    shadowColor: 'black',
    shadowOffset: {width: 15, height: 10},
    shadowRadius: 9,
    shadowOpacity: 0.2,
  },
});
