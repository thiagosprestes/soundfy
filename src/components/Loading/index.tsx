import React from 'react';
import LottieView from 'lottie-react-native';

import { View } from 'react-native';
import { AnimationContainer, Container } from './styles';

import loadingAnimation from '../../assets/animations/loading.json';

const Loading = () => (
  <Container>
    <AnimationContainer>
      <LottieView source={loadingAnimation} autoPlay resizeMode="cover" />
    </AnimationContainer>
  </Container>
);

export default Loading;
