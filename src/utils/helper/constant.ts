import {Coordinates, CalculationMethod, PrayerTimes} from 'adhan';
import {UserPrayers} from '../../types/types';

const coordinates = new Coordinates(31.5204, 74.3587);
const date = new Date();
const params = CalculationMethod.MoonsightingCommittee();
const prayerTimes = new PrayerTimes(coordinates, date, params);

console.log(
  prayerTimes.nextPrayer(),
  prayerTimes?.currentPrayer,
  'android next',
);

export const Prayers: UserPrayers[] = [
  {
    id: 0,
    name: 'fajr',
    prayerTime: prayerTimes?.fajr,
    notification: 0,
    isOffered: false,
    isOfferedTimePassed: false,
  },
  {
    id: 1,
    name: 'dhuhr',
    prayerTime: prayerTimes.dhuhr,
    notification: 0,
    isOffered: false,
    isOfferedTimePassed: false,
  },
  {
    id: 2,
    name: 'asr',
    prayerTime: prayerTimes.asr,
    notification: 0,
    isOffered: false,
    isOfferedTimePassed: false,
  },
  {
    id: 3,
    name: 'maghrib',
    prayerTime: prayerTimes.maghrib,
    notification: 0,
    isOffered: false,
    isOfferedTimePassed: false,
  },
  {
    id: 4,
    name: 'isha',
    prayerTime: prayerTimes.isha,
    notification: 0,
    isOffered: false,
    isOfferedTimePassed: false,
  },
];
