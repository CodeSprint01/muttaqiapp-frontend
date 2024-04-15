import {AlarmUpdate, UserPrayers} from '../../types/types';
import {ActionTypes} from './types';

export function getPrayers(prayerData: any) {
  // console.log(prayerData, 'action data');
  return {
    type: ActionTypes.PRAYER_TIMES_UPDATE,
    payload: {
      prayerData,
    },
  };
}
export function offeredPrayerAndAlarm(prayer: UserPrayers) {
  console.log(prayer, 'action data');
  return {
    type: ActionTypes.PRAYER_OFFERED_AND_ALARM,
    payload: {
      prayer,
    },
  };
}
export function prayerAlarmUpdate(alarmData: AlarmUpdate) {
  console.log(alarmData);
  return {
    type: ActionTypes.PRAYER_ALARM_UPDATE,
    payload: {
      alarmData,
    },
  };
}
