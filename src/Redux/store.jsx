import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import authSlice from './authSlice';
import recettesSlice from './recettesSlice';
import userReducer from './userSlice';
import favorisSlice from './favorisSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'users', 'recettes',"favoris"],
};

const rootReducer = combineReducers({
  auth: authSlice,
  recettes: recettesSlice,
  users: userReducer,
  favoris: favorisSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});
export default store;
export const persistor = persistStore(store);
