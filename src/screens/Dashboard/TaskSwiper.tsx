import {Image, StyleSheet, View, ImageBackground} from 'react-native';
import '../../components/atoms/error/LogBox';
import React, {FC} from 'react';
import {AppIconSvg} from '../../components/atoms/app-icon-svg';
import AppText from '../../components/atoms/app-text/AppText';
import {COLORS} from '../../styles/color';
import {CircularProgress} from 'react-native-circular-progress';

interface prayerProps {
  backgroundImg: any;
  prayerName: string;
  icon: any;
  time: string;
  heartValue: number;
}

const TaskSwiper = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <View style={styles.prayerSection}>
          <AppText text={'Next Prayer'} style={styles.nextPrayer} />
          <View style={styles.prayerAndIcon}>
            <AppText text={'prayerName'} style={styles.prayer} />
            {/* <AppIconSvg
              icon={i}
              width={24}
              height={24}
              color={COLORS.white}
            /> */}
          </View>
          <AppText text={'time'} style={styles.prayerTime} />
        </View>
        <View style={styles.heartContainer}>
          <View style={styles.heratView}>
            <AppText text={`23 %`} style={styles.goodDeeds} />
            <CircularProgress
              size={100}
              width={7}
              fill={70}
              tintColor={COLORS.forest_Green}
              backgroundColor={COLORS.Crimson}
              rotation={270}
            />
            <AppText text={'30 %'} style={styles.bedDeeds} />
            <View style={{position: 'absolute'}}>
              <Image
                source={require('../../../assets/images/userHeart.png')}
                style={{width: 60, height: 60}}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'green',
  },
  sliderContainer: {
    borderRadius: 22,
    flexDirection: 'row',
    resizeMode: 'contain',
  },
  prayerSection: {
    flex: 7,
    paddingLeft: 10,
    paddingTop: 40,
    paddingBottom: 37,
  },
  heartContainer: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextPrayer: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  prayerAndIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  prayer: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.white,
    paddingRight: 9,
  },
  prayerTime: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.white,
    paddingTop: 10,
  },
  heratView: {
    width: 140,
    height: 140,
    borderRadius: 75,
    backgroundColor: COLORS.light_blue_gray,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goodDeeds: {
    fontSize: 10,
    fontWeight: '400',
    color: COLORS.forest_Green,
    paddingBottom: 3,
  },
  bedDeeds: {
    fontSize: 10,
    fontWeight: '400',
    color: COLORS.Crimson,
    paddingTop: 2,
  },
});

export default TaskSwiper;
