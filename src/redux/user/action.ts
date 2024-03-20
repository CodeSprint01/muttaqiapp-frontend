import {location, LoginsInfo, Types, UserInfo} from '../../types/types';
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
export const actionUserLoginsCredentialsCreate = (loginInfo: LoginsInfo) => {
  return {
    type: ActionTypes.USER_LOGINS_CREDENTIALS_CREATE,
    payload: {
      loginInfo,
    },
  };
};
export const actionUserLoginsCredentialsUpdate = (loginInfo: LoginsInfo) => {
  return {
    type: ActionTypes.USER_LOGINS_CREDENTIALS_UPDATE,
    payload: {
      loginInfo,
    },
  };
};

export const actionUserLoginsCredentialsDelete = (loginId: number) => {
  // console.log(loginId, 'in acrion');
  return {
    type: ActionTypes.USER_LOGINS_CREDENTIALS_DELETE,
    payload: {
      loginId,
    },
  };
};
