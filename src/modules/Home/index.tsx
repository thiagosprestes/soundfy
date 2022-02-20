import React, { useState } from 'react';
import HomeContainer from './container';
import { ComponentState } from '../../utils/globalTypes';
import albums from '../../utils/db/popularMusics.json';
import artists from '../../utils/db/artists.json';

const Home = () => {
  const [componentState, setComponentState] = useState(ComponentState.default);

  return (
    <HomeContainer
      albums={albums}
      artists={artists}
      componentState={componentState}
    />
  );
};
export default Home;
