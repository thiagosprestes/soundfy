import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateProps {
  likedAlbums: string[];
}

const initialState: InitialStateProps = {
  likedAlbums: [],
};

const likedAlbumsSlice = createSlice({
  name: 'likedAlbums',
  initialState,
  reducers: {
    likeAlbum(state, action: PayloadAction<string>) {
      state.likedAlbums = [...state.likedAlbums, action.payload];
    },
    removeAlbumLike(state, action: PayloadAction<string>) {
      state.likedAlbums = state.likedAlbums.filter(
        track => track !== action.payload,
      );
    },
  },
});

export const { likeAlbum, removeAlbumLike } = likedAlbumsSlice.actions;

export default likedAlbumsSlice.reducer;
