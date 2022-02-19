import React from 'react';

import { Button, ButtonText, Container, Description, Title } from './styles';

interface ErrorProps {
  onRetry: () => void;
}

const Error = ({ onRetry }: ErrorProps) => (
  <Container>
    <Title size={18}>Ops! aconteceu um erro :(</Title>
    <Description>
      Infelizmente aconteceu um erro inesperado, você pode tentar novamente
      pressionando do botão abaixo!!
    </Description>
    <Button onPress={onRetry}>
      <ButtonText size={16}>Tentar novamente</ButtonText>
    </Button>
  </Container>
);

export default Error;
