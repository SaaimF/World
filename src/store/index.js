import {createLogger} from 'redux-logger';

import createthunkMiddleware from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import {persistReducer, persistStore} from 'redux-persist';
import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers';

const loggerMiddleware = createLogger();
const routReducers = reducers;
const ThunkMiddleware = createthunkMiddleware;
const middlewares = [ThunkMiddleware];

middlewares.push(loggerMiddleware);
const persistconfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistconfig, routReducers);
const createStoreWithMiddleware = applyMiddleware(...middlewares);

export const store = createStore(persistedReducer, createStoreWithMiddleware);
export const configurestore = () => {
  return store;
};

export const persistor = persistStore(store);
