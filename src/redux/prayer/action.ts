import {ActionTypes} from './types';

export const getPrayers = (prayerDatas: any) => {
  console.log(prayerDatas, 'this is action prayerDatas');
  return {
    type: ActionTypes.PRAYER_TIMES_UPDATE,
    payload: {
      prayerDatas,
    },
  };
};
