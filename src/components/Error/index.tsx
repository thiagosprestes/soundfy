import React from 'react';
import LottieView from 'lottie-react-native';

import {
  AnimationContainer,
  Button,
  ButtonText,
  Container,
  Description,
  Title,
} from './styles';

import errorAnimation from '../../assets/animations/error.json';

interface ErrorProps {
  onRetry: () => void;
}

const Error = ({ onRetry }: ErrorProps) => (
  <Container>
    <AnimationContainer>
      <LottieView source={errorAnimation} autoPlay loop={false} />
    </AnimationContainer>
    <Title size={18}>Ops! aconteceu um erro :(</Title>
    <Description>
      Infelizmente aconteceu um erro inesperado, você pode tentar novamente
      pressionando o botão abaixo!!
    </Description>
    <Button onPress={onRetry}>
      <ButtonText size={16}>Tentar novamente</ButtonText>
    </Button>
  </Container>
);

export default Error;
