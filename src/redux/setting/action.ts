import {
  CardInfo,
  IdentityInfo,
  LoginsInfo,
  NotesInfo,
  PasswordsInfo,
} from '../../types/types';
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
export const actionUserCreditCardCreate = (cardInfo: CardInfo) => {
  console.log(cardInfo, 'this is user card info aaction');
  return {
    type: ActionTypes.USER_CREDIT_CARD_CREATE,
    payload: {
      cardInfo,
    },
  };
};
export const actionUserCreditCardUpdate = (updata: CardInfo) => {
  console.log(updata, 'this is user card info aaction');
  return {
    type: ActionTypes.USER_CREDIT_CARD_UPDATE,
    payload: {
      updata,
    },
  };
};
export const actionUserCreditCardDelete = (id: number) => {
  console.log(id, 'this is user note info aaction');
  return {
    type: ActionTypes.USER_CREDIT_CARD_DELETE,
    payload: {
      id,
    },
  };
};
export const actionUserIdentityCreate = (identityInfo: IdentityInfo) => {
  console.log(identityInfo, 'this is user identity info aaction');
  return {
    type: ActionTypes.USER_VAULT_IDENTITY_CREATE,
    payload: {
      identityInfo,
    },
  };
};
export const actionUserIdentityUpdate = (identityInfo: IdentityInfo) => {
  console.log(identityInfo, 'this is user identity info aaction');
  return {
    type: ActionTypes.USER_VAULT_IDENTITY_UPDATE,
    payload: {
      identityInfo,
    },
  };
};
export const actionUserIdentityDelete = (id: number) => {
  console.log(id, 'this is user identity info aaction');
  return {
    type: ActionTypes.USER_VAULT_IDENTITY_DELETE,
    payload: {
      id,
    },
  };
};
export const actionUserPasswordsCreate = (passwordInfo: PasswordsInfo) => {
  console.log(passwordInfo, 'this is user password info aaction');
  return {
    type: ActionTypes.USER_VAULT_PASSWORD_CREATE,
    payload: {
      passwordInfo,
    },
  };
};
export const actionUserPasswordsUpdate = (passwordInfo: PasswordsInfo) => {
  console.log(passwordInfo, 'this is user password info aaction');
  return {
    type: ActionTypes.USER_VAULT_PASSWORD_UPDATE,
    payload: {
      passwordInfo,
    },
  };
};
export const actionUserPasswordsDelete = (id: number) => {
  console.log(id, 'this is user password info aaction');
  return {
    type: ActionTypes.USER_VAULT_PASSWORD_DELETE,
    payload: {
      id,
    },
  };
};