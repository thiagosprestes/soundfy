import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userSlice from '../modules/Login/slices/user';
import playerSlice from '../modules/Home/slices/player';

export const store = configureStore({
  reducer: {
    user: userSlice,
    player: playerSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
