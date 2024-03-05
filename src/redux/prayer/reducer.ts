import {ActionTypes} from './types';

const initialState: any = {
  PrayerData: [],
};

// Reducers
export default function prayerReducer(state = initialState, action: any = {}) {
  switch (action.type) {
    case ActionTypes.PRAYER_TIMES_UPDATE:
      console.log(
        action?.payloads?.prayerDatas,
        'action  action?.payload?.prayerDatas',
      );
      return {
        ...state,
        PrayerData: action?.payload?.prayerDatas,
      };
    default:
      return state;
  }
}
