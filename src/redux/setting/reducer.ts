import {ActionTypes} from './types';
import {SettingState} from '../../types/types';
import {generateRendomNumber} from '../../utils/helper/helpers';

// state
const initialState: SettingState = {
  loginsData: [],
  secureNotes: [],
  creditCard: [],
  identities: [],
  passwords: [],
  documents: [],
};

// Reducers
export default function reducer(state = initialState, action: any = {}) {
  switch (action.type) {
    case ActionTypes.USER_LOGINS_CREDENTIALS_CREATE: {
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
        loginsData:
          state?.loginsData?.length > 0
            ? [...state?.loginsData, newData]
            : [newData],
      };
    }
    case ActionTypes.USER_LOGINS_CREDENTIALS_UPDATE: {
      let newUpdate = action?.payload?.loginInfo;
      let currentData = state?.loginsData;
      let updatedData = currentData.map(itm => {
        if (itm?.id === newUpdate?.id) {
          return {
            ...itm,
            email: newUpdate?.email,
            password: newUpdate?.password,
          };
        }
        return itm;
      });
      return {
        ...state,
        loginsData: updatedData,
      };
    }
    case ActionTypes.USER_LOGINS_CREDENTIALS_DELETE: {
      const deleteId = action?.payload?.loginId;
      const currentData = state?.loginsData;
      const newData = currentData.filter(item => item?.id !== deleteId);
      return {
        ...state,
        loginsData: newData,
      };
    }
    case ActionTypes.USER_SECURE_NOTES_CREATE: {
      const newNote = action?.payload?.noteInfo;
      console.log(newNote, 'this is reducer create');
      const cretId = generateRendomNumber();
      const createNote = {
        id: cretId,
        title: newNote?.title,
        details: newNote?.details,
      };
      return {
        ...state,
        secureNotes:
          state?.secureNotes?.length > 0
            ? [...state?.secureNotes, createNote]
            : [createNote],
      };
    }
    case ActionTypes.USER_SECURE_NOTES_DELETE: {
      const noteId = action?.payload?.noteId;
      const allNotes = state.secureNotes;
      const deletedItem = allNotes.filter(itm => itm?.id !== noteId);
      return {
        ...state,
        secureNotes: deletedItem,
      };
    }
    case ActionTypes.USER_SECURE_NOTES_UPDATE: {
      const updatedNote = action?.payload?.updata;
      console.log(updatedNote, 'this is from reducer');
      const allNotes = state.secureNotes;
      const newUpdateNote = allNotes.map(item => {
        if (item?.id === updatedNote?.id) {
          return {
            ...item,
            title: updatedNote?.title,
            details: updatedNote?.details,
          };
        }
        return item;
      });
      return {
        ...state,
        secureNotes: newUpdateNote,
      };
    }
    case ActionTypes.USER_CREDIT_CARD_CREATE: {
      const cardData = action?.payload?.cardInfo;
      const id = generateRendomNumber();
      const newData = {
        id: id,
        number: cardData?.number,
        name: cardData?.name,
        expiry: cardData?.expiry,
        cvv: cardData?.cvv,
        type: cardData?.type,
      };
      return {
        ...state,
        creditCard:
          state?.creditCard?.length > 0
            ? [...state.creditCard, newData]
            : [newData],
      };
    }
    case ActionTypes.USER_CREDIT_CARD_UPDATE: {
      const updatedData = action?.payload?.updata;
      let updated = state?.creditCard?.map(itm => {
        if (itm?.id === updatedData?.id) {
          return {
            ...itm,
            number: updatedData?.id,
            name: updatedData?.name,
            expiry: updatedData?.expiry,
            cvv: updatedData?.cvv,
            type: updatedData?.type,
          };
        }
        return itm;
      });
      return {
        ...state,
        creditCard: updated,
      };
    }
    case ActionTypes.USER_CREDIT_CARD_DELETE: {
      const cardID = action?.payload?.id;
      const afterDelete = state?.creditCard.filter(itm => itm?.id != cardID);
      return {
        ...state,
        creditCard: afterDelete,
      };
    }
    case ActionTypes.USER_VAULT_IDENTITY_CREATE: {
      const identity = action?.payload?.identityInfo;
      const id = generateRendomNumber();
      const newIdentity = {
        id: id,
        type: identity?.type,
        name: identity?.name,
        number: identity?.number,
        photo: identity?.photo,
        photoName: identity?.photoName,
      };
      return {
        ...state,
        identities:
          state?.identities?.length > 0
            ? [...state?.identities, newIdentity]
            : [newIdentity],
      };
    }
    case ActionTypes.USER_VAULT_IDENTITY_UPDATE: {
      const identity = action?.payload?.identityInfo;
      const oldData = state?.identities;
      let updatedData = oldData.map(itm => {
        if (itm?.id === identity?.id) {
          return {
            ...itm,
            id: identity?.id,
            type: identity?.type,
            name: identity?.name,
            number: identity?.number,
            photo: identity?.photo,
            photoName: identity?.photoName,
          };
        }
        return itm;
      });
      return {
        ...state,
        identities: updatedData,
      };
    }
    case ActionTypes.USER_VAULT_IDENTITY_DELETE: {
      const id = action?.payload?.id;
      const oldData = state?.identities;
      let aftreDelete = oldData.filter(itm => itm?.id !== id);
      return {
        ...state,
        identities: aftreDelete,
      };
    }
    case ActionTypes.USER_VAULT_PASSWORD_CREATE: {
      const password = action?.payload?.passwordInfo;
      console.log(password, 'ds');
      const id = generateRendomNumber();
      const newPassword = {
        id: id,
        name: password?.name,
        email: password?.email,
        password: password?.password,
      };
      return {
        ...state,
        passwords:
          state?.passwords?.length > 0
            ? [...state?.passwords, newPassword]
            : [newPassword],
      };
    }
    case ActionTypes.USER_VAULT_PASSWORD_UPDATE: {
      const password = action?.payload?.passwordInfo;
      const oldData = state?.passwords;
      console.log(password, 'in reducer password');

      const updatedPass = oldData?.map(item => {
        if (item?.id == password?.id) {
          return {
            ...item,
            id: password?.id,
            name: password?.name,
            email: password?.email,
            password: password?.password,
          };
        }
        return item;
      });
      return {
        ...state,
        passwords: updatedPass,
      };
    }
    case ActionTypes.USER_VAULT_PASSWORD_DELETE: {
      const id = action?.payload?.id;
      const oldData = state?.passwords;

      let aftreDelete = oldData?.filter(itm => itm?.id !== id);
      console.log(aftreDelete, 'thsi is after delete in redu');

      return {
        ...state,
        passwords: aftreDelete,
      };
    }
    case ActionTypes.USER_VAULT_DOCUMENT_ADD: {
      const docData = action?.payload?.documentInfo;
      console.log(docData, 'thsi is after docu in redu');
      const id = generateRendomNumber();
      const newDoc = {
        id: id,
        docName: docData?.name,
        docUri: docData?.uri,
      };
      return {
        ...state,
        documents:
          state?.documents?.length > 0
            ? [...state?.documents, newDoc]
            : [newDoc],
      };
    }
    case ActionTypes.USER_VAULT_DOCUMENT_DELETE: {
      const id = action?.payload?.id;
      console.log(id, 'thsi is after docu in redu');
      const oldData = state?.documents;
      const afterDelete = oldData.filter(itm => itm?.id !== id);
      return {
        ...state,
        documents: afterDelete,
      };
    }
    // default is below
    default:
      return state;
  }
}
