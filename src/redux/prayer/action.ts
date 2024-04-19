import {AlarmUpdate, SunnahPrayer, UserPrayers} from '../../types/types';
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
export function addToDoTask(task: any) {
  console.log(task, 'action data');
  return {
    type: ActionTypes.PRAYER_OFFERED_AND_ALARM,
    payload: {
      task,
    },
  };
}
export function addSunnahPrayer(prayer: SunnahPrayer) {
  console.log(prayer, 'action data');
  return {
    type: ActionTypes.ADD_SUNNAH_PRAYER,
    payload: {
      prayer,
    },
  };
}
export function updateSunnahPrayer(id: number) {
  console.log(id, 'action data');
  return {
    type: ActionTypes.UPDATE_SUNNAH_PRAYER,
    payload: {
      id,
    },
  };
}
export function deleteSunnahPrayer(id: number) {
  console.log(id, 'action data');
  return {
    type: ActionTypes.DELETE_SUNNAH_PRAYER,
    payload: {
      id,
    },
  };
}
