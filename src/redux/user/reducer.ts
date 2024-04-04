import {ActionTypes} from './types';
import {AppState} from '../../types/types';

// state
const initialState: AppState = {
  error: undefined,
  userLocation: [],
  userInfo: [],
  isLogedIn: false,
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
    case ActionTypes.USER_IS_LOGED_IN: {
      console.log('in redeucer ', action?.payload?.isLogin);
      return {
        ...state,
        isLogedIn: action?.payload?.isLogin,
      };
    }
    default:
      return state;
  }
}
