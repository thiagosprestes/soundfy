import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LikedTrack {
  userId: string;
  tracks: string[];
}

interface LikeTrackAction {
  trackName: string;
  userId: string;
}

interface InitialStateProps {
  likedTracks: LikedTrack;
}

const initialState: InitialStateProps = {
  likedTracks: {
    userId: '',
    tracks: [],
  },
};

const likedTracksSlice = createSlice({
  name: 'likedTracks',
  initialState,
  reducers: {
    likeTrack(state, action: PayloadAction<LikeTrackAction>) {
      state.likedTracks.tracks = [
        ...state.likedTracks.tracks,
        action.payload.trackName,
      ];
      state.likedTracks.userId = action.payload.userId;
    },
    removeLike(state, action: PayloadAction<string>) {
      state.likedTracks.tracks = state.likedTracks.tracks.filter(
        track => track !== action.payload,
      );
    },
  },
});

export const { likeTrack, removeLike } = likedTracksSlice.actions;

export default likedTracksSlice.reducer;
