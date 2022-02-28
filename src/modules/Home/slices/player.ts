import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpened: false,
};

const playerSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    showPlayer(state) {
      state.isOpened = true;
    },
    hidePlayer(state) {
      state.isOpened = false;
    },
  },
});

export const { showPlayer, hidePlayer } = playerSlice.actions;

export default playerSlice.reducer;
