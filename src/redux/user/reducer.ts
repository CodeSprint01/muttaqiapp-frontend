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
    case ActionTypes.USER_SIGN_IN_INFO_SCUCESS:
      console.log(
        action?.payload?.userInfo,
        'in redducer login action?.payload?.userInfo,',
      );
      return {
        ...state,
        userInfo: action?.payload?.userInfo,
      };
    case ActionTypes.USER_LOGINS_CREDENTIALS_CREATE:
      console.log(action?.payload?.loginInfo, 'in redducer logins,');
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
        loginsData: [...state?.loginsData, newData],
      };
    default:
      return state;
  }
}
