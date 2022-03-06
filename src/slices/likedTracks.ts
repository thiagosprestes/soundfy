import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LikedTrack {
  name: string;
  userEmail: string;
}

interface InitialStateProps {
  likedTracks: LikedTrack[];
}

const initialState: InitialStateProps = {
  likedTracks: [],
};

const likedTracksSlice = createSlice({
  name: 'likedTracks',
  initialState,
  reducers: {
    likeTrack(state, action: PayloadAction<LikedTrack>) {
      state.likedTracks = [...state.likedTracks, action.payload];
    },
    removeLike(state, action: PayloadAction<string>) {
      state.likedTracks = state.likedTracks.filter(
        track => track.name !== action.payload,
      );
    },
  },
});

export const { likeTrack, removeLike } = likedTracksSlice.actions;

export default likedTracksSlice.reducer;
