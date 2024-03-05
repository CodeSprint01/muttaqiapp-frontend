import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import prayerReducer from './prayer/reducer';
import userReducer from './user/reducer';

// below every reducer config
const prayerPersistConfig = {
  key: 'prayer',
  storage: AsyncStorage,
  whitelist: ['prayerData'], // our initial state that is persist
  // blacklist: [''] //  our initial state that is Not persist
};
const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['userLocation'], // our initial state that is persist
  // blacklist: [''] //  our initial state that is Not persist
};

// here we combine all reducer
const rootReducer = combineReducers({
  prayer: persistReducer(prayerPersistConfig, prayerReducer as any),
  user: persistReducer(userPersistConfig, userReducer as any),
});

export default rootReducer;
