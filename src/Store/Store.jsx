/* eslint-disable import/no-extraneous-dependencies */

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import dragonreducer from './dragonreducer';
import missionReducer from './reducers';
import rocketReducer from './rocketReducer';

const rootReducer = combineReducers({
  mission: missionReducer,
  dragon: dragonreducer,
  rockets: rocketReducer,
});
const config = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(config, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
});

const persistedStore = persistStore(store);
export { persistedStore };
export default store;
