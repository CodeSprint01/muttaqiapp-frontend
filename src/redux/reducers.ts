import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import prayerReducer from './prayer/reducer';
import userReducer from './user/reducer';
import settingReducer from './setting/reducer';

// below every reducer config
const prayerPersistConfig = {
  key: 'prayerReducer',
  storage: AsyncStorage,
  whitelist: ['prayerData'], // our initial state that is persist
  blacklist: [''], //  our initial state that is Not persist
};
const userPersistConfig = {
  key: 'userReducer',
  storage: AsyncStorage,
  whitelist: ['userLocation'], // our initial state that is persist
  blacklist: [''], //  our initial state that is Not persist
};
const settingPersistConfig = {
  key: 'setting',
  storage: AsyncStorage,
  whitelist: ['loginsData'], // our initial state that is persist
  // blacklist: [''], //  our initial state that is Not persist
};

const RESET_STORE = 'wyzepay/app/RESET_STORE';
const rootReducer = (state: any, action: any) => {
  // console.log(state, ' this is state');
  if (action.type === RESET_STORE) {
    state = undefined;
  }
  return appReducers(state, action);
};

// here we combine all reducer
const appReducers = combineReducers({
  prayerReducer: persistReducer(prayerPersistConfig, prayerReducer as any),
  userReducer: persistReducer(userPersistConfig, userReducer as any),
  settingReducer: persistReducer(settingPersistConfig, settingReducer as any),
});

export default rootReducer;
