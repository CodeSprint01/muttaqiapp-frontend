import {AlarmUpdate, UserPrayers} from '../../types/types';
import {ActionTypes} from './types';

export function getPrayers(prayerData: any) {
  return {
    type: ActionTypes.PRAYER_TIMES_UPDATE,
    payload: {
      prayerData,
    },
  };
}
export function offeredPrayerAndAlarm(prayer: UserPrayers) {
  return {
    type: ActionTypes.PRAYER_OFFERED_AND_ALARM,
    payload: {
      prayer,
    },
  };
}
export function prayerAlarmUpdate(alarmData: AlarmUpdate) {
  return {
    type: ActionTypes.PRAYER_ALARM_UPDATE,
    payload: {
      alarmData,
    },
  };
}
export function addToDoTask(task: any) {
  return {
    type: ActionTypes.PRAYER_OFFERED_AND_ALARM,
    payload: {
      task,
    },
  };
}
