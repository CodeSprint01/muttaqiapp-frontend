import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from './reducer';

const persistConfig = {
  timeout: 15000,
  key: 'root',
  storage: AsyncStorage,
  // whitelist: [
  //     "changeLangauge",
  //     'user',
  // ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
export const persistor = persistStore(store);
export default store;
