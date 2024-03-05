import {Coordinates, CalculationMethod, PrayerTimes} from 'adhan';
import moment from 'moment-timezone';

const coordinates = new Coordinates(31.5204, 74.3587);
const date = new Date();
const params = CalculationMethod.MoonsightingCommittee();
const prayerTimes = new PrayerTimes(coordinates, date, params);
export const Prayers = [
  {
    id: 0,
    name: 'Fajr',
    prayerTime: moment(prayerTimes.fajr).format('h:mm A'),
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
    name: 'Dhuhr',
    prayerTime: moment(prayerTimes.dhuhr).format('h:mm A'),
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
    name: 'Asr',
    prayerTime: moment(prayerTimes.asr).format('h:mm A'),
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
    name: 'Maghrib',
    prayerTime: moment(prayerTimes.maghrib).format('h:mm A'),
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
    name: 'Isha',
    prayerTime: moment(prayerTimes.isha).format('h:mm A'),
    notification: {
      isSilent: false,
      isOff: false,
      isOn: false,
    },
    isOffered: false,
    isOfferedTimePassed: false,
  },
];
