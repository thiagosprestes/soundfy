export interface Song {
  name: string;
  artist?: string;
  album: Album;
}

export interface AlbumSong {
  name: string;
  artist?: string;
}

export interface Artist {
  cover: string;
  name: string;
}

export interface Album {
  cover: string;
  name: string;
}
