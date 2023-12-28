import moment from 'moment';

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

export default Prayers;
