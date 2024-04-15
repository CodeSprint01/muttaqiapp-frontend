import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['prayerReducer', 'userReducer', 'settingReducer'], // our reducer names that is persist
  blacklist: [], // our reducer names that is not persist
};

export default function configureStore() {
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return {store, persistor};
}
