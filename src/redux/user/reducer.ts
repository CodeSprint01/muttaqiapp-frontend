import {ActionTypes} from './types';
import {AppState} from '../../types/types';
import {generateRendomNumber} from '../../utils/helper/helpers';

// state
const initialState: AppState = {
  error: undefined,
  userLocation: [],
  userInfo: [],
  loginsData: [],
};

// Reducers
export default function reducer(state = initialState, action: any = {}) {
  switch (action.type) {
    case ActionTypes.USER_LOCATION: {
      return {
        ...state,
        userLocation: action?.payload?.location,
      };
    }
    case ActionTypes.USER_SIGN_UP_INFO_SCUCESS: {
      return {
        ...state,
        userInfo: action?.payload?.userInfo,
      };
    }
    case ActionTypes.USER_SIGN_IN_INFO_SCUCESS: {
      return {
        ...state,
        userInfo: action?.payload?.userInfo,
      };
    }
    case ActionTypes.USER_LOGINS_CREDENTIALS_CREATE: {
      const userCred = action?.payload?.loginInfo;
      const credId = generateRendomNumber();
      const newData = {
        id: credId,
        title: userCred?.title,
        email: userCred?.email,
        password: userCred?.password,
      };
      return {
        ...state,
        loginsData:
          state?.loginsData.length > 0
            ? [...state?.loginsData, newData]
            : [newData],
      };
    }
    case ActionTypes.USER_LOGINS_CREDENTIALS_UPDATE: {
      let newUpdate = action?.payload?.loginInfo;
      let currentData = state?.loginsData;
      let updatedData = currentData.map(itm => {
        if (itm?.id === newUpdate?.id) {
          return {
            ...itm,
            email: newUpdate?.email,
            password: newUpdate?.password,
          };
        }
        return itm;
      });
      return {
        ...state,
        loginsData: updatedData,
      };
    }

    case ActionTypes.USER_LOGINS_CREDENTIALS_DELETE: {
      const deleteId = action?.payload?.loginId;
      const currentData = state?.loginsData;
      const newData = currentData.filter(item => item?.id !== deleteId);
      return {
        ...state,
        loginsData: newData,
      };
    }
    default:
      return state;
  }
}
