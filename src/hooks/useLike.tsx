import React from 'react';
import { useDispatch } from 'react-redux';
import { removeAlbumLike, likeAlbum } from '../slices/likedAlbums';
import { likeTrack, removeLike } from '../slices/likedTracks';
import { useAppSelector } from '../store/hooks';

const useLike = () => {
  const dispatch = useDispatch();

  const { likedAlbums } = useAppSelector(
    globalState => globalState.likedAlbums,
  );

  const { likedTracks } = useAppSelector(
    globalState => globalState.likedTracks,
  );

  const userId = useAppSelector(globalState => globalState.user.uid);

  const onVerifyAlbumLiked = (albumName: string) => {
    const isAlbumLiked = likedAlbums.albums.find(
      likedAlbum => likedAlbum === albumName,
    );

    return Boolean(isAlbumLiked && likedAlbums.userId === userId);
  };

  const onVerifyTrackLiked = (trackName: string) => {
    const isTrackLiked = likedTracks.tracks.find(
      likedTrack => likedTrack === trackName,
    );

    return Boolean(isTrackLiked && likedTracks.userId === userId);
  };

  const handleOnToggleAlbumLike = (albumName: string) => {
    const isAlbumLiked = onVerifyAlbumLiked(albumName);

    if (isAlbumLiked) {
      dispatch(removeAlbumLike(albumName));
    } else {
      dispatch(likeAlbum({ albumName, userId: userId! }));
    }
  };

  const handleOnToggleTrackLike = (trackName: string) => {
    const isTrackLiked = onVerifyTrackLiked(trackName);

    if (isTrackLiked) {
      dispatch(removeLike(trackName));
    } else {
      dispatch(likeTrack({ trackName, userId: userId! }));
    }
  };

  return {
    handleOnToggleAlbumLike,
    handleOnToggleTrackLike,
    onVerifyAlbumLiked,
    onVerifyTrackLiked,
    likedAlbums,
    likedTracks,
  };
};

export default useLike;
