import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
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
import PrayerTimesList from './PrayerTimesList';
import notifee from '@notifee/react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

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
    setCheckboxes(prevCheckboxes =>
      prevCheckboxes.map(checkbox =>
        checkbox.id === checkboxId
          ? {...checkbox, isChecked: !checkbox.isChecked}
          : checkbox,
      ),
    );
  };
  const navigation = useNavigation();
  // here is explore sction

  const handelExploreCard = (index: number) => {
    console.log(index);
  };
  // here is notification code
  async function onCreateTriggerNotification() {
    const setupChannels = async () => {
      await notifee.requestPermission();
      await notifee.createChannel({
        id: 'default',
        name: 'Muttaqi Channel',
        sound: 'alarm',
      });
    };
    // const timestamp = new Date().getTime() + 5000;
    // const date = new Date();
    // const hours = date.getHours();
    // const min = date.getMinutes();

    // const trigger: TimestampTrigger = {
    //   type: TriggerType.TIMESTAMP,
    //   timestamp: timestamp,
    //   alarmManager: true,
    // };
    setupChannels();
    await notifee.displayNotification({
      // title: `Meeting with Jane ${hours} : ${min}`,
      title: `Meeting with Jane `,
      body: 'Today at your time',
      android: {
        channelId: 'default',
      },
      ios: {
        categoryId: 'default',
      },
    });
  }

  // Call the function to create the notification

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.sliderContainer}>
        <View style={{height: 210}}>
          <Swiper
            scrollEnabled={true}
            nestedScrollEnabled={true}
            dot={<View style={styles.inActiveDot} />}
            activeDot={<View style={styles.activeDot} />}>
            <View style={styles.slide}>
              <PrayerSwiper
                heartValue={70}
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
        <View style={{marginBottom: 2}}>
          {/* <TouchableOpacity
            onPress={() =>
              navigation.navigate('HomeStack', {screen: screens.HADITH})
            }>
            <Text>click to move</Text>
          </TouchableOpacity> */}
          <AppText text={'Explore'} style={styles.explore} />
          <FlatList
            data={exploreArray}
            keyExtractor={item => item.title}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <ExploreCard 
                image={item.image}
                title={item.title}
                subTitle={item.subTitle}
                index={index}
                routeName={item.routeName}
                // handleCardClick={index => handelExploreCard(index)}
              />
            )}
          />
        </View>
        <View style={styles.prayerAlarmContainer}>
          <AppText text={'Prayer times'} style={styles.prayerTimes} />
          <PrayerTimesList />
        </View>
        <View style={styles.bottom} />
      </ScrollView>
      <LinearGradient
        colors={['#ffffff00', COLORS.white]}
        style={styles.gradient}
      />
      {/* <View style={styles.opacity} /> */}
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightBlack,
  },
  slide: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  sliderContainer: {
    backgroundColor: COLORS.pale_mint,
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
    bottom: -7,
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
    bottom: -7,
  },
  explore: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 10,
    marginLeft: 20,
  },
  prayerAlarmContainer: {
    flex: 1,
    // backgroundColor: 'black',
    marginTop: -10,
  },
  prayerTimes: {
    fontSize: 24,
    fontWeight: '500',
    color: COLORS.very_dark_gray,
    marginLeft: 24,
    paddingBottom: 16,
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '15%',
    left: 0,
    right: 0,
    bottom: 0,
  },
  bottom: {
    backgroundColor: COLORS.pale_mint,
    width: '100%',
    height: 150,
  },
  opacity: {
    height: 110,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
