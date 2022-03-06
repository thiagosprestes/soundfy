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

  const userEmail = useAppSelector(globalState => globalState.user.email);

  const onVerifyAlbumLiked = (albumName: string) => {
    const isAlbumLiked = likedAlbums.find(
      likedAlbum =>
        likedAlbum.name === albumName && likedAlbum.userEmail === userEmail,
    );

    return Boolean(isAlbumLiked);
  };

  const onVerifyTrackLiked = (trackName: string) => {
    const isTrackLiked = likedTracks.find(
      likedTrack =>
        likedTrack.name === trackName && likedTrack.userEmail === userEmail,
    );

    return Boolean(isTrackLiked);
  };

  const handleOnToggleAlbumLike = (albumName: string) => {
    const isAlbumLiked = onVerifyAlbumLiked(albumName);

    if (isAlbumLiked) {
      dispatch(removeAlbumLike(albumName));
    } else {
      dispatch(likeAlbum({ name: albumName, userEmail: userEmail! }));
    }
  };

  const handleOnToggleTrackLike = (trackName: string) => {
    const isTrackLiked = onVerifyTrackLiked(trackName);

    if (isTrackLiked) {
      dispatch(removeLike(trackName));
    } else {
      dispatch(likeTrack({ name: trackName, userEmail: userEmail! }));
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
