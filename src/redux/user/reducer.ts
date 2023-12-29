import {ActionTypes} from './types';
import {AppState} from '../../types/types';

// state
const initialState: AppState = {
  userLocation: [],
};

// Reducers
export default function reducer(state = initialState, action: any = {}) {
  switch (action.type) {
    case ActionTypes.USER_LOCATION:
      return {
        ...state,
        userLocation: action?.payload?.location,
      };
    default:
      return state;
  }
}
