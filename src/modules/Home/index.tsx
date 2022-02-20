import React, { useState } from 'react';
import HomeContainer from './container';
import { ComponentState } from '../../utils/globalTypes';

const Home = () => {
  const [componentState, setComponentState] = useState(ComponentState.default);

  const handleOnLogin = async () => {};

  return <HomeContainer componentState={componentState} />;
};
export default Home;
