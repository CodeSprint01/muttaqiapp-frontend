import {
  BankAccount,
  CardInfo,
  DocumentInfo,
  IdentityInfo,
  LoginsInfo,
  NotesInfo,
  PasswordsInfo,
  SocialNumbers,
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
  return {
    type: ActionTypes.USER_LOGINS_CREDENTIALS_DELETE,
    payload: {
      loginId,
    },
  };
};
export const actionUserSecureNotesCreate = (noteInfo: NotesInfo) => {
  return {
    type: ActionTypes.USER_SECURE_NOTES_CREATE,
    payload: {
      noteInfo,
    },
  };
};
export const actionUserSecureNotesDelete = (noteId: number) => {
  return {
    type: ActionTypes.USER_SECURE_NOTES_DELETE,
    payload: {
      noteId,
    },
  };
};
export const actionUserSecureNotesUpdate = (updata: NotesInfo) => {
  return {
    type: ActionTypes.USER_SECURE_NOTES_UPDATE,
    payload: {
      updata,
    },
  };
};
export const actionUserCreditCardCreate = (cardInfo: CardInfo) => {
  return {
    type: ActionTypes.USER_CREDIT_CARD_CREATE,
    payload: {
      cardInfo,
    },
  };
};
export const actionUserCreditCardUpdate = (updata: CardInfo) => {
  return {
    type: ActionTypes.USER_CREDIT_CARD_UPDATE,
    payload: {
      updata,
    },
  };
};
export const actionUserCreditCardDelete = (id: number) => {
  return {
    type: ActionTypes.USER_CREDIT_CARD_DELETE,
    payload: {
      id,
    },
  };
};
export const actionUserIdentityCreate = (identityInfo: IdentityInfo) => {
  return {
    type: ActionTypes.USER_VAULT_IDENTITY_CREATE,
    payload: {
      identityInfo,
    },
  };
};
export const actionUserIdentityUpdate = (identityInfo: IdentityInfo) => {
  return {
    type: ActionTypes.USER_VAULT_IDENTITY_UPDATE,
    payload: {
      identityInfo,
    },
  };
};
export const actionUserIdentityDelete = (id: number) => {
  return {
    type: ActionTypes.USER_VAULT_IDENTITY_DELETE,
    payload: {
      id,
    },
  };
};
export const actionUserPasswordsCreate = (passwordInfo: PasswordsInfo) => {
  return {
    type: ActionTypes.USER_VAULT_PASSWORD_CREATE,
    payload: {
      passwordInfo,
    },
  };
};
export const actionUserPasswordsUpdate = (passwordInfo: PasswordsInfo) => {
  return {
    type: ActionTypes.USER_VAULT_PASSWORD_UPDATE,
    payload: {
      passwordInfo,
    },
  };
};
export const actionUserPasswordsDelete = (id: number) => {
  return {
    type: ActionTypes.USER_VAULT_PASSWORD_DELETE,
    payload: {
      id,
    },
  };
};
export const actionUserDocumentAdd = (documentInfo: DocumentInfo) => {
  return {
    type: ActionTypes.USER_VAULT_DOCUMENT_ADD,
    payload: {
      documentInfo,
    },
  };
};
export const actionUserDocumentDelete = (id: number) => {
  return {
    type: ActionTypes.USER_VAULT_DOCUMENT_DELETE,
    payload: {
      id,
    },
  };
};
export const actionUserBankAccountAdd = (bankInfo: BankAccount) => {
  console.log(bankInfo, 'this is user doc bankInfo info aaction');
  return {
    type: ActionTypes.USER_VAULT_BANK_ACCOUNT_ADD,
    payload: {
      bankInfo,
    },
  };
};
export const actionUserBankAccountUpdate = (bankInfo: BankAccount) => {
  console.log(bankInfo, 'this is user doc bankInfo info aaction');
  return {
    type: ActionTypes.USER_VAULT_BANK_ACCOUNT_UPDATE,
    payload: {
      bankInfo,
    },
  };
};
export const actionUserBankAccountDelete = (id: number) => {
  console.log(id, 'this is user doc id info aaction');
  return {
    type: ActionTypes.USER_VAULT_BANK_ACCOUNT_DELETE,
    payload: {
      id,
    },
  };
};

export const actionUserSocialSecurityNumberAdd = (
  socialInfo: SocialNumbers,
) => {
  console.log(socialInfo, 'this is user doc socialInfo info aaction');
  return {
    type: ActionTypes.USER_VAULT_SOCIAL_SECURITY_NUMBER_ADD,
    payload: {
      socialInfo,
    },
  };
};
export const actionUserSocialSecurityNumberUpdate = (
  socialInfo: BankAccount,
) => {
  console.log(socialInfo, 'this is user doc socialInfo info aaction');
  return {
    type: ActionTypes.USER_VAULT_SOCIAL_SECURITY_NUMBER_UPDATE,
    payload: {
      socialInfo,
    },
  };
};
export const actionUserSocialSecurityNumberDelete = (id: number) => {
  console.log(id, 'this is user doc id info aaction');
  return {
    type: ActionTypes.USER_VAULT_SOCIAL_SECURITY_NUMBER_DELETE,
    payload: {
      id,
    },
  };
};
