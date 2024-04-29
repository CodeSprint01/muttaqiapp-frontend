import {Alert, FlatList, ScrollView, StyleSheet, View} from 'react-native';
import '../../components/atoms/error/LogBox';
import React, {useEffect, useState} from 'react';
import Swiper from 'react-native-swiper';
import PrayerSwiper from './PrayerSwiper';
import {COLORS, fonts} from '../../styles/color';
import {exploreArray} from '../../utils/mocks/AllMockArray';
import ExploreCard from '../../components/atoms/explore-card/ExploreCard';
import AppText from '../../components/atoms/app-text/AppText';
import PrayerTimesList from './PrayerTimesList';
import notifee from '@notifee/react-native';
import LinearGradient from 'react-native-linear-gradient';
import UserStatsSwiper from './UserStatsSwiper';
import {StatsListArray} from '../../utils/mocks/tracker/StatsListArray';
import TodayProgressSwiper from './TodayProgressSwiper';
import {useDispatch, useSelector} from 'react-redux';
import {Coordinates, CalculationMethod, PrayerTimes} from 'adhan';
import {Icons} from '../../utils/helper/svg';
import moment from 'moment-timezone';
import {
  getPrayers,
  offeredPrayerAndAlarm,
  prayerAlarmUpdate,
} from '../../redux/prayer/action';
import {UserPrayers} from '../../types/types';
import {State, screens} from '../../types/types';
import SettingList from '../../components/molecules/setting/SettingList';
import TrackerTodoTask from '../tracker/todo-task-record-screen/TrackerTodoTask';
import {FastingArray} from '../../utils/mocks/tracker/FastingArray';
import ShowmoreButton from '../../components/molecules/app-header/ShowmoreButton';
import TodoTask from '../add-todo-screen/TodoTask';
import {useNavigation} from '@react-navigation/native';
import {FIND_BANK_ACCOUNT} from '../../services/graphQL';
import {useQuery} from '@apollo/client';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const prayerData = useSelector(
    (state: any) => state?.prayerReducer?.prayerData,
  );

  const [isShowGraph, setIsShowGraph] = useState<StatsList[]>(StatsListArray);
  const [testCall, setTestCall] = useState(true);
  const coordinates = new Coordinates(31.5204, 74.3587);
  const date = new Date();
  const params = CalculationMethod.MoonsightingCommittee();
  const prayerTimes = new PrayerTimes(coordinates, date, params);
  const nextPrayer = prayerTimes?.nextPrayer();

  const navigation = useNavigation();

  const handleFilterSliderData = (index: number) => {
    const graphData = [...isShowGraph];
    graphData[index].isShowEye = !graphData[index]?.isShowEye;
    setIsShowGraph(graphData);
  };

  const updatePrayerData = () => {
    const currentTime = new Date();
    const updated = [...prayerData];
    updated.forEach(item => {
      let formatedTime = new Date(item?.prayerTime);
      let isTimePass = formatedTime < currentTime;
      item.isOfferedTimePassed = isTimePass;
      if (!isTimePass) {
        return item;
      }
    });
    dispatch(getPrayers(updated));
  };
  // todo list task
  const onPressTodoCheck = () => {
    //
  };
  useEffect(() => {
    updatePrayerData();
  }, [testCall]);
  useEffect(() => {
    setTimeout(() => {
      setTestCall(!testCall);
    }, 12000);
  }, [testCall]);

  const getAlarmIcon = data => {
    if (data?.notification?.isOn) {
      return Icons.Alarm;
    } else {
      return Icons.AlarmSlash;
    }
  };
  const getBackgroundImage = (data: any) => {
    switch (data?.name) {
      case 'fajr':
        return require('../../../assets/images/prayer-background-img/fajrImage.png');
      case 'dhuhr':
        return require('../../../assets/images/prayer-background-img/duhrImage.png');
      case 'asr':
        return require('../../../assets/images/prayer-background-img/duhrImage.png');
      case 'maghrib':
        return require('../../../assets/images/prayer-background-img/maghribImage.png');
      default:
        return require('../../../assets/images/prayer-background-img/ishaImage.png');
    }
  };
  const filterNextPrayer = () => {
    if (nextPrayer == 'none') {
      return 'fajr';
    } else if (nextPrayer == 'sunrise') {
      return 'dhuhr';
    } else if (nextPrayer == 'fajr') {
      return 'fajr';
    } else if (nextPrayer == 'dhuhr') {
      return 'dhuhr';
    } else if (nextPrayer == 'asr') {
      return 'asr';
    } else if (nextPrayer == 'maghrib') {
      return 'maghrib';
    } else if (nextPrayer == 'isha') {
      return 'isha';
    } else return 'no Prayer Time';
  };
  const nextPrayerData = prayerData?.find(
    (item: UserPrayers) => filterNextPrayer() == item?.name,
  );

  const handlePrayerPress = (item: UserPrayers) => {
    dispatch(offeredPrayerAndAlarm(item));
  };
  const handleAlarmPress = (item: UserPrayers) => {
    const data = {
      id: item?.id,
      // notification: item?.notification,
    };
    dispatch(prayerAlarmUpdate(data));
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
                icon={getAlarmIcon(nextPrayerData)}
                prayerName={nextPrayerData?.name}
                time={
                  nextPrayerData?.prayerTime
                    ? moment(nextPrayerData?.prayerTime).format('h:mm A')
                    : ''
                }
                backgroundImg={getBackgroundImage(nextPrayerData)}
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
        <View style={styles.todoTask}>
          <ShowmoreButton
            todoName="To-do list"
            isShowmore
            rightTxt="View planner"
            handelShowmore={() => navigation.navigate(screens.TAB_TO_DO)}
          />
          <TodoTask
            handleCheckBox={onPressTodoCheck}
            todoName="Read surat Al-mulk before sleep"
            repeatText="daily"
          />
        </View>
        <View style={{marginBottom: 2}}>
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
          <PrayerTimesList
            didPressPrayer={item => handlePrayerPress(item)}
            prayerData={prayerData}
            onPressAlarm={item => handleAlarmPress(item)}
          />
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
  todoTask: {
    // backgroundColor: 'pink',
    paddingHorizontal: 20,
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
