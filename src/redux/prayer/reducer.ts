import {PrayerState, SunnahInterface, UserPrayers} from '../../types/types';
import {Prayers} from '../../utils/helper/constant';
import {generateRendomNumber} from '../../utils/helper/helpers';
import {ActionTypes} from './types';

const initialState: PrayerState = {
  prayerData: Prayers,
  task: [],
  sunnahPrayer: [],
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
    case ActionTypes.ADD_SUNNAH_PRAYER: {
      let prayer = action?.payload?.prayer;
      console.log(prayer, 'prayer from red');
      const id = generateRendomNumber();
      let data = {
        id: id,
        isRead: prayer?.isRead,
        name: prayer?.name,
        rakats: prayer?.rakats,
      };
      return {
        ...state,
        sunnahPrayer:
          state?.sunnahPrayer?.length > 0
            ? [...state?.sunnahPrayer, data]
            : [data],
      };
    }
    case ActionTypes.UPDATE_SUNNAH_PRAYER: {
      let id = action?.payload?.id;
      console.log(id, 'prayer from red');
      const oldData = state.sunnahPrayer;
      let updated = oldData.map((itm: SunnahInterface) => {
        if (itm?.id == id)
          return {
            ...itm,
            isRead: !itm?.isRead,
          };
        return itm;
      });
      return {
        ...state,
        sunnahPrayer: updated,
      };
    }
    case ActionTypes.DELETE_SUNNAH_PRAYER: {
      let id = action?.payload?.id;
      console.log(id, 'prayer from red');
      const oldData = state.sunnahPrayer;
      let updated = oldData.filter(itm => itm?.id !== id);
      return {
        ...state,
        sunnahPrayer: updated,
      };
    }
    // case ActionTypes.ADD_TO_DO_TASK: {
    //   const task = action?.payload?.task;
    //   const id = generateRendomNumber();
    // }
    default:
      return state;
  }
}
