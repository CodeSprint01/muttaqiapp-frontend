import React from 'react';
import {Text, View} from 'react-native';
import {
  Coordinates,
  CalculationMethod,
  PrayerTimes,
  SunnahTimes,
  Prayer,
  Qibla,
} from 'adhan';
import moment from 'moment-timezone';

const UserProfile = () => {
  const coordinates = new Coordinates(31.5204, 74.3587);
  const params = CalculationMethod.MoonsightingCommittee();
  const date = new Date();
  const prayerTimes = new PrayerTimes(coordinates, date, params);
  const sunnahTimes = new SunnahTimes(prayerTimes);

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

  return (
    <View>
      <Text>
        Fajr:
        {moment(prayerTimes.fajr).format('h:mm A')}
      </Text>
    </View>
  );
};

export default UserProfile;
