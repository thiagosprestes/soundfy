export interface Track {
  name: string;
  artist: string;
  album: Album;
  duration: number;
  url: string;
}

export interface AlbumTrack {
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
