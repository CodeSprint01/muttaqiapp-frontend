import {PrayerState, UserPrayers} from '../../types/types';
import {Prayers} from '../../utils/helper/constant';
import {generateRendomNumber} from '../../utils/helper/helpers';
import {ActionTypes} from './types';

const initialState: PrayerState = {
  prayerData: Prayers,
  task: [],
};

// Reducers
export default function reducer(state = initialState, action: any = {}) {
  switch (action.type) {
    case ActionTypes.PRAYER_TIMES_UPDATE: {
      return {
        ...state,
        prayerData: action?.payload.prayerData,
      };
    }
    case ActionTypes.PRAYER_OFFERED_AND_ALARM: {
      const singlePrayer = action?.payload?.prayer;
      const updatedPrayerData = state?.prayerData?.map((item: UserPrayers) => {
        if (singlePrayer?.id === item?.id) {
          if (singlePrayer?.isOfferedTimePassed === true) {
            return {
              ...item,
              isOffered: !item.isOffered,
            };
          }
          if (!singlePrayer?.isOfferedTimePassed) {
            let updatedNotification = item?.notification + 1;
            updatedNotification =
              updatedNotification === 3 ? 0 : updatedNotification;
            return {
              ...item,
              notification: updatedNotification,
            };
          } else {
            return {
              ...item,
            };
          }
        } else {
          return {
            ...item,
          };
        }
      });
      return {
        ...state,
        prayerData: updatedPrayerData,
      };
    }
    case ActionTypes.ADD_TO_DO_TASK: {
      const task = action?.payload?.task;
      const id = generateRendomNumber();
    }
    default:
      return state;
  }
}
