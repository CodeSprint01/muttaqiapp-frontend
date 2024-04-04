import {location, Types, UserInfo} from '../../types/types';
import {ActionTypes} from './types';

// Action
export const getUserLocation = (location: location): Types => {
  return {
    type: ActionTypes.USER_LOCATION,
    payload: {
      location,
    },
  };
};

export const actionGetUserInfoSucess = (userInfo: UserInfo) => {
  return {
    type: ActionTypes.USER_SIGN_UP_INFO_SCUCESS,
    payload: {
      userInfo,
    },
  };
};
export const actionLoginUserInfoSucess = (userInfo: UserInfo) => {
  return {
    type: ActionTypes.USER_SIGN_IN_INFO_SCUCESS,
    payload: {
      userInfo,
    },
  };
};
export const actionUserLogedIn = (isLogin: boolean) => {
  return {
    type: ActionTypes.USER_IS_LOGED_IN,
    payload: {
      isLogin,
    },
  };
};
