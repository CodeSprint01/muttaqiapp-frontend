import {ActionTypes} from './types';

const initialState: any = {
  prayerData: [],
};

// Reducers
export default function reducer(state = initialState, action: any = {}) {
  switch (action.type) {
    case ActionTypes.PRAYER_TIMES_UPDATE:
      // console.log(
      //   action?.payload?.prayerDatas,
      //   'reducer  action?.payload?.prayerDatas',
      // );
      return {
        ...state,
        prayerData: action?.payload?.prayerDatas,
      };
    default:
      return state;
  }
}
