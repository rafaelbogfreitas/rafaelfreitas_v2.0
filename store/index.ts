// import { createStore, applyMiddleware, Action } from 'redux';
import { Action } from 'redux';
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
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';
import { ThunkAction } from 'redux-thunk';
// import rootReducer from './reducers';
import { authSlice } from './Auth.store';
import { counterSlice } from './Counter.store';
import { useDispatch } from 'react-redux';

const encryptor = encryptTransform({
  secretKey: process.env.NEXT_PUBLIC_ENCRYPTOR_SECRET || '',
  onError: function (error) {
    console.error(error);
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'counter'],
  transforms: [encryptor],
};

const reducers = combineReducers({
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

// export type ApplicationState = ReturnType<typeof rootReducer>;
// export type RootStore = ReturnType<typeof rootReducer>;

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

// const store = createStore(
//   persistedReducer,
//   composeWithDevTools(applyMiddleware(thunk, logger))
// );

const persistor = persistStore(store);
export { store, persistor };
