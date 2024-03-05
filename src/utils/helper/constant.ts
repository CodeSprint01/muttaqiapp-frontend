import {Coordinates, CalculationMethod, PrayerTimes} from 'adhan';
import {FC} from 'react';
import {UserPrayers} from '../../types/types';

const coordinates = new Coordinates(31.5204, 74.3587);
const date = new Date();
const params = CalculationMethod.MoonsightingCommittee();
const prayerTimes = new PrayerTimes(coordinates, date, params);

export const Prayers: UserPrayers[] = [
  {
    id: 0,
    name: 'fajr',
    prayerTime: prayerTimes?.fajr,
    notification: {
      isSilent: false,
      isOff: false,
      isOn: false,
    },
    isOffered: false,
    isOfferedTimePassed: false,
  },
  {
    id: 1,
    name: 'dhuhr',
    prayerTime: prayerTimes.dhuhr,
    notification: {
      isSilent: false,
      isOff: false,
      isOn: false,
    },
    isOffered: false,
    isOfferedTimePassed: false,
  },
  {
    id: 2,
    name: 'asr',
    prayerTime: prayerTimes.asr,
    notification: {
      isSilent: false,
      isOff: false,
      isOn: false,
    },
    isOffered: false,
    isOfferedTimePassed: false,
  },
  {
    id: 3,
    name: 'maghrib',
    prayerTime: prayerTimes.maghrib,
    notification: {
      isSilent: false,
      isOff: false,
      isOn: false,
    },
    isOffered: false,
    isOfferedTimePassed: false,
  },
  {
    id: 4,
    name: 'isha',
    prayerTime: prayerTimes.isha,
    notification: {
      isSilent: false,
      isOff: false,
      isOn: false,
    },
    isOffered: false,
    isOfferedTimePassed: false,
  },
];
