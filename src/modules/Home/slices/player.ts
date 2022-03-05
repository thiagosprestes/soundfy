import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Track } from '../types';

interface InitialStateProps {
  isOpened: boolean;
  track: Track;
  index: number;
}

const initialState: InitialStateProps = {
  isOpened: false,
  track: {} as Track,
  index: 0,
};

interface PlayTrackProps {
  track: Track;
  index: number;
}

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
    playTrack(state, action: PayloadAction<PlayTrackProps>) {
      state.track = action.payload.track;
      state.index = action.payload.index;
    },
  },
});

export const { hidePlayer, playTrack, showPlayer } = playerSlice.actions;

export default playerSlice.reducer;
