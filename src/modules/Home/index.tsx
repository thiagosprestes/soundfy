import React, { useState } from 'react';
import HomeContainer from './container';
import { ComponentState } from '../../utils/globalTypes';
import albums from '../../utils/db/albums.json';
import artists from '../../utils/db/artists.json';
import songs from '../../utils/db/songs.json';
import { useAppSelector } from '../../store/hooks';

const Home = () => {
  const [componentState, setComponentState] = useState(ComponentState.default);

  const userName = useAppSelector(globalState => globalState.user.displayName);

  return (
    <HomeContainer
      albums={albums}
      artists={artists}
      componentState={componentState}
      songs={songs}
      userName={userName!}
    />
  );
};
export default Home;
