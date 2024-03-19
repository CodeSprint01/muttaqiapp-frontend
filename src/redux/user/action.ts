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
  console.log(userInfo, 'in acrion');
  return {
    type: ActionTypes.USER_SIGN_UP_INFO_SCUCESS,
    payload: {
      userInfo,
    },
  };
};
export const actionLoginUserInfoSucess = (userInfo: UserInfo) => {
  console.log(userInfo, 'in acrion');
  return {
    type: ActionTypes.USER_SIGN_IN_INFO_SCUCESS,
    payload: {
      userInfo,
    },
  };
};
export const actionUserLoginsCredentialsCreate = (loginInfo: LoginsInfo) => {
  console.log(loginInfo, 'in acrion');
  return {
    type: ActionTypes.USER_LOGINS_CREDENTIALS_CREATE,
    payload: {
      loginInfo,
    },
  };
};
export const actionUserLoginsCredentialsUpdate = (loginInfo: LoginsInfo) => {
  console.log(loginInfo, 'in acrion');
  return {
    type: ActionTypes.USER_LOGINS_CREDENTIALS_CREATE,
    payload: {
      loginInfo,
    },
  };
};
