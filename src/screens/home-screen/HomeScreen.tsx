import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import '../../components/atoms/error/LogBox';
import React, {useState} from 'react';
import Swiper from 'react-native-swiper';
import {Icons} from '../../components/atoms/app-icon-svg';
import PrayerSwiper from './PrayerSwiper';
import {COLORS, fonts} from '../../styles/color';
import TaskSwiper from './';
import {exploreArray} from '../../utils/mocks/AllMockArray';
import ExploreCard from '../../components/atoms/explore-card/ExploreCard';
import AppText from '../../components/atoms/app-text/AppText';
import PrayerTimesList from './PrayerTimesList';
import notifee from '@notifee/react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import UserStatsSwiper from './UserStatsSwiper';
import {StatsListArray} from '../../utils/mocks/tracker/StatsListArray';
import TodayProgressSwiper from './TodayProgressSwiper';
import {useSelector} from 'react-redux';

const HomeScreen = () => {
  const [isShowGraph, setIsShowGraph] = useState<StatsList[]>(StatsListArray);
  const handleFilterSliderData = (index: number) => {
    console.log(index);
    const graphData = [...isShowGraph];
    graphData[index].isShowEye = !graphData[index]?.isShowEye;
    setIsShowGraph(graphData);
  };
  const navigation = useNavigation();

  // get data
  const data = useSelector(state => state?.prayerReducer?.PrayerData);
  console.log(data, 'this is useselector');
  console.log('this is useselecto');

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
        <View style={styles.swipercontainer}>
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
              <UserStatsSwiper
                graphData={isShowGraph}
                handleEyeClick={index => handleFilterSliderData(index)}
              />
            </View>
            <View style={styles.slide}>
              <TodayProgressSwiper taskAvg={70} />
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
    // backgroundColor: 'orange',
  },
  swipercontainer: {
    height: 230,
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
    backgroundColor: COLORS.light_black_gray,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    position: 'relative',
    bottom: 5,
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
    bottom: 5,
  },
  explore: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,
    // backgroundColor: 'red',
  },
  prayerAlarmContainer: {
    flex: 1,
    // backgroundColor: 'black',
    marginTop: -10,
  },
  prayerTimes: {
    fontSize: 24,
    color: COLORS.very_dark_gray,
    marginLeft: 24,
    paddingBottom: 16,
    fontFamily: fonts.dmSans[400],
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
