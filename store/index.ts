import { Action } from 'redux';
import { useDispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { encryptTransform } from 'redux-persist-transform-encrypt';

import { authSlice } from './Auth.store';
import { counterSlice } from './Counter.store';
import { alertSlice } from './Alert.store';

const encryptor = encryptTransform({
  secretKey: process.env.NEXT_PUBLIC_ENCRYPTOR_SECRET || '',
  onError: function (error) {
    console.error(error);
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
  transforms: [encryptor],
};

const reducers = combineReducers({
  alert: alertSlice.reducer,
  auth: authSlice.reducer,
  counter: counterSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

const persistor = persistStore(store);
export { store, persistor };
