export interface Song {
  cover: string;
  name: string;
}

export interface Artist extends Song {}

export interface Album extends Song {}
