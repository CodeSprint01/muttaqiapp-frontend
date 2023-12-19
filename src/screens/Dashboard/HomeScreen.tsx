import {ScrollView, StyleSheet, View} from 'react-native';
import '../../components/atoms/error/LogBox';
import React from 'react';
import Swiper from 'react-native-swiper';
import {Icons} from '../../components/atoms/app-icon-svg';
import PrayerSwiper from './PrayerSwiper';
import {COLORS} from '../../styles/color';
import TaskSwiper from './TaskSwiper';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.sliderContainer}>
        <Swiper
          dot={<View style={styles.inActiveDot} />}
          activeDot={<View style={styles.activeDot} />}>
          <View style={styles.slide}>
            <PrayerSwiper
              heartValue={80}
              icon={Icons.Notification}
              prayerName="Maghrib"
              time="05:22 AM"
              backgroundImg={require('../../../assets/images/prayer-background-img/maghribImage.png')}
            />
          </View>
          <View style={styles.slide}>
            <PrayerSwiper
              heartValue={80}
              icon={Icons.Notification}
              prayerName="Maghrib"
              time="05:22 AM"
              backgroundImg={require('../../../assets/images/prayer-background-img/maghribImage.png')}
            />
          </View>
        </Swiper>
      </View> */}
      <View>
        <TaskSwiper />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
  },
  slide: {
    marginHorizontal: 20,
  },
  sliderContainer: {
    backgroundColor: 'pink',
    flex: 1,
  },
  inActiveDot: {
    backgroundColor: COLORS.lightGray,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    position: 'relative',
    bottom: 590,
  },
  activeDot: {
    backgroundColor: COLORS.green,
    width: 15,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    position: 'relative',
    bottom: 590,
  },
});
