import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import userSlice from '../modules/Login/slices/user';
import playerSlice from '../modules/Home/slices/player';
import likedTracksSlice from '../slices/likedTracks';
import likedAlbumsSlice from '../slices/likedAlbums';

export const store = configureStore({
  reducer: {
    user: userSlice,
    player: playerSlice,
    likedTracks: likedTracksSlice,
    likedAlbums: likedAlbumsSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
