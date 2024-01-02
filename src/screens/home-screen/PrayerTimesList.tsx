import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import PrayerAlarmCard from '../../components/molecules/prayer-list/PrayerAlarmCard';
import {FlatList} from 'react-native-gesture-handler';

import {Coordinates, CalculationMethod, PrayerTimes} from 'adhan';
import moment from 'moment-timezone';
import {Icons} from '../../utils/helper/svg';

const PrayerTimesList = () => {
  const [isPrayerTime, setIsPrayerTime] = useState({
    fajr: true,
    duhar: true,
    asr: false,
    maghrib: true,
    isha: true,
  });
  const [offerCount, setOfferCount] = useState(0);
  const [alarmCount, setAlarmCount] = useState(0);

  const coordinates = new Coordinates(31.5204, 74.3587);
  const params = CalculationMethod.MoonsightingCommittee();
  const date = new Date();
  const prayerTimes = new PrayerTimes(coordinates, date, params);

  // here is prayer time array
  const Prayers = [
    {id: 0, name: 'Fajr', time: moment(prayerTimes.fajr).format('h:mm A')},
    {
      id: 1,
      name: 'sunrise',
      time: moment(prayerTimes.sunrise).format('h:mm A'),
    },
    {id: 2, name: 'Dhuhr', time: moment(prayerTimes.dhuhr).format('h:mm A')},
    {id: 3, name: 'Asr', time: moment(prayerTimes.asr).format('h:mm A')},
    {
      id: 4,
      name: 'Maghrib',
      time: moment(prayerTimes.maghrib).format('h:mm A'),
    },
    {id: 5, name: 'Isha', time: moment(prayerTimes.isha).format('h:mm A')},
  ];

  // here is offer prayed icon fun
  const offerPrayed = () => {
    switch (offerCount) {
      case 0:
        return Icons.EmptyCircle;
      case 1:
        return Icons.TickCircle;
      default:
        return Icons.EmptyCircle;
    }
  };

  const alarmState = () => {
    switch (alarmCount) {
      case 0:
        return Icons.Alarm;
      case 1:
        return Icons.AlarmSlash;
      case 2:
        return Icons.AlarmCross;
      default:
        return Icons.Alarm;
    }
  };

  // current prayer time

  const currentPrayer = () => {
    switch (prayerTimes.nextPrayer()) {
      case 'fajr':
        return 0;
      case 'sunrise':
        return 1;
      case 'dhuhr':
        return 2;
      case 'asr':
        return 3;
      case 'maghrib':
        return 4;
      case 'isha':
        return 5;
      default:
        return 6;
    }
  };

  // check prayer time fun

  // const checkPrayersTime = () => {
  //   switch () {
  //     case value:

  //       break;

  //     default:
  //       break;
  //   }
  // };

  useEffect(() => {}, []);

  // // here return prayer name
  // const prayerName = (prayer: any) => {
  //   // Define how you want to display the prayer name
  //   switch (prayer) {
  //     case Prayer.Fajr:
  //       return 'Fajr';
  //     case Prayer.Sunrise:
  //       return 'Sunrise';
  //     case Prayer.Dhuhr:
  //       return 'Dhuhr';
  //     case Prayer.Asr:
  //       return 'Asr';
  //     case Prayer.Maghrib:
  //       return 'Maghrib';
  //     case Prayer.Isha:
  //       return 'Isha';
  //     default:
  //       return 'None';
  //   }
  // };
  // {moment(prayerTimes.fajr).format('h:mm A')}
  return (
    <View style={styles.container}>
      {/* <Text> {prayerTimes.nextPrayer()}</Text> */}
      <FlatList
        data={Prayers}
        renderItem={({item, index}) =>
          index === 1 ? null : (
            <PrayerAlarmCard
              key={item.id}
              name={item.name}
              time={item.time}
              prayerIcon={isPrayerTime ? offerPrayed() : alarmState()}
              onPress={() => onPress(index)}
            />
          )
        }
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default PrayerTimesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'skyblue',
  },
});
