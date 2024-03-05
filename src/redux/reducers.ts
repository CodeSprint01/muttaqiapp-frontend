import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import prayerReducer from './prayer/reducer';

const appReducers = combineReducers({
  prayer: prayerReducer,
});

const userDataPersistConfig = {
  key: 'userData',
  storage: AsyncStorage,
  // whitelist: ['']
  // blacklist: ['']
};

const rootReducer = combineReducers({
  // userData: persistReducer(userDataPersistConfig, reducer),
  userData: persistReducer(userDataPersistConfig, prayerReducer),
});
export default rootReducer;
