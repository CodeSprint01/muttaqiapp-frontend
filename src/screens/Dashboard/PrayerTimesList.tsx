import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import PrayerAlarmCard from '../../components/molecules/prayer-list/PrayerAlarmCard';
import {FlatList} from 'react-native-gesture-handler';

import {
  Coordinates,
  CalculationMethod,
  PrayerTimes,
  SunnahTimes,
  Prayer,
  Madhab,
  CalculationParameters,
} from 'adhan';
import moment from 'moment-timezone';
import {shadowLength} from 'adhan/lib/types/Madhab';

const PrayerTimesList = () => {
  const [isPrayerTime, setIsPrayerTime] = useState({
    fajr: true,
    duhar: true,
    asr: true,
    maghrib: true,
    isha: true,
  });
  const [icon, setIcon] = useState(0);
  const coordinates = new Coordinates(31.5204, 74.3587);
  const params = CalculationMethod.MoonsightingCommittee();
  const date = new Date();
  const prayerTimes = new PrayerTimes(coordinates, date, params);
  const sunnahTimes = new SunnahTimes(prayerTimes);

  // here is prayer time array
  const Prayers = [
    {id: 0, name: 'Fajr', time: moment(prayerTimes.fajr).format('h:mm A')},
    {id: 1, name: 'Dhuhr', time: moment(prayerTimes.dhuhr).format('h:mm A')},
    {id: 2, name: 'Asr', time: moment(prayerTimes.asr).format('h:mm A')},
    {
      id: 3,
      name: 'Maghrib',
      time: moment(prayerTimes.maghrib).format('h:mm A'),
    },
    {id: 4, name: 'Isha', time: moment(prayerTimes.isha).format('h:mm A')},
  ];

  // const getIcon = () => {};
  // if (!isPrayerTime && icon === 3) {
  //   return Icons.RingIcon;
  // }
  // else if (!isPrayerTime && ) {

  // }
  const onPress = index => {
    const prayer = Prayers[index];

    console.log(prayer);
  };

  // here return prayer name
  const prayerName = (prayer: any) => {
    // Define how you want to display the prayer name
    switch (prayer) {
      case Prayer.Fajr:
        return 'Fajr';
      case Prayer.Sunrise:
        return 'Sunrise';
      case Prayer.Dhuhr:
        return 'Dhuhr';
      case Prayer.Asr:
        return 'Asr';
      case Prayer.Maghrib:
        return 'Maghrib';
      case Prayer.Isha:
        return 'Isha';
      default:
        return 'None';
    }
  };
  // {moment(prayerTimes.fajr).format('h:mm A')}
  return (
    <View style={styles.container}>
      <FlatList
        data={Prayers}
        renderItem={({item, index}) => (
          <PrayerAlarmCard
            key={item.id}
            name={item.name}
            time={item.time}
            onPress={() => onPress(index)}
          />
        )}
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
