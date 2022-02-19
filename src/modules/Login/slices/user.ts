import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserState = FirebaseAuthTypes.UserCredential;

const initialState: Partial<UserState['user']> = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    storeUserData(state, action: PayloadAction<Partial<UserState['user']>>) {
      state = action.payload;
    },
  },
});

export const { storeUserData } = userSlice.actions;

export default userSlice.reducer;
