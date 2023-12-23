import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import '../../components/atoms/error/LogBox';
import React, {useEffect, useState} from 'react';
import Swiper from 'react-native-swiper';
import {Icons} from '../../components/atoms/app-icon-svg';
import PrayerSwiper from './PrayerSwiper';
import {COLORS} from '../../styles/color';
import TaskSwiper from './TaskSwiper';
import {exploreArray} from '../../utils/mocks/AllMockArray';
import ExploreCard from '../../components/atoms/explore-card/ExploreCard';
import AppText from '../../components/atoms/app-text/AppText';
import PrayerTimes from './PrayerTimes';
import notifee from '@notifee/react-native';

const HomeScreen = () => {
  const initialCheckboxes = [
    {id: 1, label: 'memorize quran', isChecked: false},
    {id: 2, label: 'memorize quran', isChecked: false},
    {id: 3, label: 'memorize quran', isChecked: false},
    {id: 4, label: 'memorize quran', isChecked: false},
    {id: 5, label: 'memorize quran', isChecked: false},
    {id: 6, label: 'memorize quran', isChecked: false},
    {id: 7, label: 'memorize quran', isChecked: false},
  ];
  const [checkboxes, setCheckboxes] = useState(initialCheckboxes);

  const handleCheckboxChange = (checkboxId: number) => {
    console.log('click');
    setCheckboxes(prevCheckboxes =>
      prevCheckboxes.map(checkbox =>
        checkbox.id === checkboxId
          ? {...checkbox, isChecked: !checkbox.isChecked}
          : checkbox,
      ),
    );
  };
  // here is notification code

  const notificationTime = new Date();
  const setupChannels = async () => {
    await notifee.requestPermission();
    await notifee.createChannel({
      id: 'default',
      name: 'Muttaqi Channel',
      sound: 'alarm',
    });
  };

  const notificationDemo = async () => {
    setupChannels();
    await notifee.displayNotification({
      title: 'Duhar Prayer ',
      body: 'It is a time for Duhhar Prayer',
      subtitle: `${notificationTime.toLocaleTimeString()}`,

      android: {
        channelId: 'default',
        pressAction: {
          id: 'default',
        },
      },
      ios: {
        categoryId: 'default',
      },
    });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.sliderContainer}>
      <View style={{height: 200}}>
        <Swiper
          scrollEnabled={true}
          nestedScrollEnabled={true}
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
            <TaskSwiper
              circleValue={77}
              checkboxes={checkboxes}
              handleCheckboxChange={handleCheckboxChange}
            />
          </View>
        </Swiper>
      </View>
      <View style={{paddingBottom: 24}}>
        <AppText text={'Explore'} style={styles.explore} />
        <FlatList
          data={exploreArray}
          keyExtractor={item => item.firstTxt}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <ExploreCard
              image={item.image}
              firstTxt={item.firstTxt}
              secondTxt={item.secondTxt}
            />
          )}
        />
      </View>
      <View style={styles.prayerAlarmContainer}>
        <AppText text={'Prayer times'} style={styles.prayerTimes} />
        <PrayerTimes onPress={notificationDemo} />
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
    marginTop: 30,
  },
  sliderContainer: {
    backgroundColor: COLORS.pale_mint,
    flex: 1,
    elevation: 10,
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
    bottom: -15,
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
    bottom: -15,
  },
  explore: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 10,
    marginLeft: 20,
  },
  prayerAlarmContainer: {
    flex: 1,
    // backgroundColor: 'skyblue',
  },
  prayerTimes: {
    fontSize: 24,
    fontWeight: '500',
    color: COLORS.very_dark_gray,
    marginLeft: 24,
    paddingBottom: 16,
  },
});
