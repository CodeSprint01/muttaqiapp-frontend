import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import rootReducer from './reducers';
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension';
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['prayerReducer', 'userReducer', 'settingReducer'], // our reducer names that is persist
  blacklist: [], // our reducer names that is not persist
};

export default function configureStore() {
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(logger, thunk)),
  );
  let persistor = persistStore(store);
  return {store, persistor};
}
