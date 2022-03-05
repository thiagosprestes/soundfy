export interface Track {
  index: number;
  name: string;
  artist?: string;
  album: Album;
  duration: number;
  url: any;
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
