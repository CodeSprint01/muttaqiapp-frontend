import {fivePrayer} from '../../types/keyVlaue';
import {Icons} from '../helper/svg';

export const FivePrayerData: fivePrayer[] = [
  {
    id: 0,
    backgroundImg: require('../../../assets/images/prayer-background-img/fajrImage.png'),
    label: 'Next Prayer',
    prayerName: 'Fajr',
    time: '4:02 AM',
    icon: [Icons.Notification],
    heartValue: 70,
  },
  {
    id: 1,
    backgroundImg: require('../../../assets/images/prayer-background-img/duhrImage.png'),
    label: 'Next Prayer',
    prayerName: 'Duhr',
    time: '12:02 PM',
    icon: [Icons.Notification],
    heartValue: 70,
  },
  {
    id: 2,
    backgroundImg: require('../../../assets/images/prayer-background-img/asrImage.png'),
    label: 'Next Prayer',
    prayerName: 'Asr',
    time: '3:30 PM',
    icon: [Icons.Notification],
    heartValue: 70,
  },
  {
    id: 0,
    backgroundImg: require('../../../assets/images/prayer-background-img/maghribImage.png'),
    label: 'Next Prayer',
    prayerName: 'Maghrib',
    time: '05:02 PM',
    icon: [Icons.Notification],
    heartValue: 70,
  },
  {
    id: 0,
    backgroundImg: require('../../../assets/images/prayer-background-img/ishaImage.png'),
    label: 'Next Prayer',
    prayerName: 'Isha',
    time: '4:02 PM',
    icon: [Icons.Notification],
    heartValue: 70,
  },
];
