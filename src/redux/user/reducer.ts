import {ActionTypes} from './types';
import {AppState} from '../../types/types';

// state
const initialState: AppState = {
  loading: false,
  error: undefined,
  userLocation: [],
  userInfo: [],
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
      console.log(action?.payload.userInfo, 'sign up user data');
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
    case ActionTypes.USER_LOGED_IN: {
      const islg = action?.payload?.islog;
      console.log('in redeucer login', action?.payload?.islog);
      console.log(state?.userInfo, 'in reducer all state');
      const updatedObj = {
        userID: state?.userInfo?.userID,
        token: state?.userInfo?.token,
        name: state?.userInfo?.name,
        email: state?.userInfo?.email,
        isLoged: islg,
      };
      return {
        ...state,
        userInfo: updatedObj,
      };
    }
    default:
      return state;
  }
}
