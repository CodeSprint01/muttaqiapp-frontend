import {LoginsInfo, NotesInfo} from '../../types/types';
import {ActionTypes} from './types';

// Action
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
export const actionUserSecureNotesCreate = (noteInfo: NotesInfo) => {
  console.log(noteInfo, 'this is user note info aaction');
  return {
    type: ActionTypes.USER_SECURE_NOTES_CREATE,
    payload: {
      noteInfo,
    },
  };
};
export const actionUserSecureNotesDelete = (noteId: number) => {
  console.log(noteId, 'this is user note info aaction');
  return {
    type: ActionTypes.USER_SECURE_NOTES_DELETE,
    payload: {
      noteId,
    },
  };
};
export const actionUserSecureNotesUpdate = (updata: NotesInfo) => {
  console.log(updata, 'this is user note info aaction');
  return {
    type: ActionTypes.USER_SECURE_NOTES_UPDATE,
    payload: {
      updata,
    },
  };
};
