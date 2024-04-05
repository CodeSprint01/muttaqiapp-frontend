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

// here we combine all reducer
const rootReducer = combineReducers({
  prayerReducer: persistReducer(prayerPersistConfig, prayerReducer as any),
  userReducer: persistReducer(userPersistConfig, userReducer as any),
  settingReducer: persistReducer(settingPersistConfig, settingReducer as any),
});

export default rootReducer;
