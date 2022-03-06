import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userSlice from '../modules/Login/slices/user';
import playerSlice from '../modules/Home/slices/player';
import likedTracksSlice from '../slices/likedTracks';
import likedAlbumsSlice from '../slices/likedAlbums';

const rootReducer = combineReducers({
  user: userSlice,
  player: playerSlice,
  likedTracks: likedTracksSlice,
  likedAlbums: likedAlbumsSlice,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['likedTracks', 'likedAlbums'],
  timeout: 0,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
