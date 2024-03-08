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
  console.log(userInfo, 'in acrion');
  return {
    type: ActionTypes.USER_SIGN_UP_INFO_SCUCESS,
    payload: {
      userInfo,
    },
  };
};
