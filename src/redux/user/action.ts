import {Dispatch} from 'redux';
import {location, Types, UserInfo} from '../../types/types';
import {ActionTypes} from './types';
import axios from 'axios';

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
// export const actionLoginUserInfoSucess = (userInfo: UserInfo) => {
//   return {
//     type: ActionTypes.USER_SIGN_IN_INFO_SCUCESS,
//     payload: {
//       userInfo,
//     },
//   };
// };

// export const actionUserLogedIn = (islog: any) => {
//   console.log(islog, 'islog');
//   return {
//     type: ActionTypes.USER_LOGED_IN,
//     payload: {
//       islog,
//     },
//   };
// };

export const actionSendEmailForOtp = (email: string) => {
  return {
    type: ActionTypes.SEND_EMAIL_OTP,
    payload: {
      email,
    },
  };
};
export function actionResetStore() {
  return {
    type: ActionTypes.RESET_STORE,
  };
}

// new user actions 11 oct, 2024
export const signupRequest = () => {
  return {
    type: ActionTypes.USER_SIGNUP_REQUEST,
  };
};

export const signupUserSuccess = (user: any) => {
  return {
    type: ActionTypes.USER_SIGNUP_SUCCESS,
    payload: user,
  };
};

export const signupUserFailure = (error: Error) => {
  return {
    type: ActionTypes.USER_SIGNUP_FAILURE,
    payload: error,
  };
};

export const signUp = () => {
  return (dispatch: Dispatch) => {
    dispatch(signupRequest());
    axios
      .post('185.192.96.94:7000/user/sign-up')
      .then(response => {
        const user = response.data;
        dispatch(signupUserSuccess(user));
      })
      .catch((error: Error) => {
        dispatch(signupUserFailure(error));
      });
  };
};
