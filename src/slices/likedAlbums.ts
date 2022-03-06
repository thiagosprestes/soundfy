import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LikedAlbum {
  userId: string;
  albums: string[];
}

interface LikeAlbumAction {
  albumName: string;
  userId: string;
}

interface InitialStateProps {
  likedAlbums: LikedAlbum;
}

const initialState: InitialStateProps = {
  likedAlbums: {
    userId: '',
    albums: [],
  },
};

const likedAlbumsSlice = createSlice({
  name: 'likedAlbums',
  initialState,
  reducers: {
    likeAlbum(state, action: PayloadAction<LikeAlbumAction>) {
      state.likedAlbums.albums = [
        ...state.likedAlbums.albums,
        action.payload.albumName,
      ];
      state.likedAlbums.userId = action.payload.userId;
    },
    removeAlbumLike(state, action: PayloadAction<string>) {
      state.likedAlbums.albums = state.likedAlbums.albums.filter(
        album => album !== action.payload,
      );
    },
  },
});

export const { likeAlbum, removeAlbumLike } = likedAlbumsSlice.actions;

export default likedAlbumsSlice.reducer;
