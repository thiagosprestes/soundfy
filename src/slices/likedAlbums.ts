import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LikedAlbum {
  name: string;
  userEmail: string;
}

interface InitialStateProps {
  likedAlbums: LikedAlbum[];
}

const initialState: InitialStateProps = {
  likedAlbums: [],
};

const likedAlbumsSlice = createSlice({
  name: 'likedAlbums',
  initialState,
  reducers: {
    likeAlbum(state, action: PayloadAction<LikedAlbum>) {
      state.likedAlbums = [...state.likedAlbums, action.payload];
    },
    removeAlbumLike(state, action: PayloadAction<string>) {
      state.likedAlbums = state.likedAlbums.filter(
        album => album.name !== action.payload,
      );
    },
  },
});

export const { likeAlbum, removeAlbumLike } = likedAlbumsSlice.actions;

export default likedAlbumsSlice.reducer;
