import {ActionTypes} from './types';
import {AppState} from '../../types/types';

// state
const initialState: AppState = {
  error: undefined,
  userLocation: [],
  userInfo: [],
};

// Reducers
export default function reducer(state = initialState, action: any = {}) {
  switch (action.type) {
    case ActionTypes.USER_LOCATION:
      return {
        ...state,
        userLocation: action?.payload?.location,
      };
    case ActionTypes.USER_SIGN_UP_INFO_SCUCESS:
      console.log(
        action?.payload?.userInfo,
        'in redducer action?.payload?.userInfo,',
      );
      return {
        ...state,
        userInfo: action?.payload?.userInfo,
      };
      return {
        ...state,
        error: action?.payload?.error,
      };
    default:
      return state;
  }
}
