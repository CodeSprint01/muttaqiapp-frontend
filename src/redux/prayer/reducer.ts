import {UserPrayers} from '../../types/types';
import {Prayers} from '../../utils/helper/constant';
import {ActionTypes} from './types';

const initialState: any = {
  prayerData: Prayers,
};

// Reducers
export default function reducer(state = initialState, action: any = {}) {
  switch (action.type) {
    case ActionTypes.PRAYER_TIMES_UPDATE:
      // console.log(
      //   action?.payload?.prayerTimes,
      //   'reducer  action?.payload?.prayerTimes',
      // );
      return {
        ...state,
        prayerData: action?.payload.prayerData,
      };
    case ActionTypes.PRAYER_OFFERED_AND_ALARM:
      // console.log(action?.payload?.prayer, 'reducer  action?.payload?.prayer');
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
    case ActionTypes.PRAYER_ALARM_UPDATE: {
      const alarm = action?.payload?.alarmData;
      console.log(alarm, 'alarm in reducer');

      const alarmData = state?.prayerData;
      const updated = alarmData.map((itm: any) => {
        if (itm?.id === alarm?.id) {
          return {
            ...itm,
            id: alarm?.id,
            notification:
              itm.notification == 0 ? 1 : itm?.notification == 1 ? 2 : 0,
          };
        }
        return itm;
      });
      return {
        ...state,
        prayerData: updated,
      };
    }

    default:
      return state;
  }
}
