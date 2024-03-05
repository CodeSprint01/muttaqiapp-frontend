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

// export function
