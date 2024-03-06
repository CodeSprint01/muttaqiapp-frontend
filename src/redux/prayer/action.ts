import {UserPrayers} from '../../types/types';
import {ActionTypes} from './types';

export function getPrayers(prayerDatas: any) {
  // console.log(prayerDatas, 'action data');
  return {
    type: ActionTypes.PRAYER_TIMES_UPDATE,
    payload: {
      prayerDatas,
    },
  };
}
export function offeredPrayerAndAlarm(prayer: UserPrayers) {
  // console.log(prayer, 'action data');
  return {
    type: ActionTypes.PRAYER_OFFERED_AND_ALARM,
    payload: {
      prayer,
    },
  };
}
