import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateProps {
  likedTracks: string[];
}

const initialState: InitialStateProps = {
  likedTracks: [],
};

const likedTracksSlice = createSlice({
  name: 'likedTracks',
  initialState,
  reducers: {
    likeTrack(state, action: PayloadAction<string>) {
      state.likedTracks = [...state.likedTracks, action.payload];
    },
    removeLike(state, action: PayloadAction<string>) {
      state.likedTracks = state.likedTracks.filter(
        track => track !== action.payload,
      );
    },
  },
});

export const { likeTrack, removeLike } = likedTracksSlice.actions;

export default likedTracksSlice.reducer;
