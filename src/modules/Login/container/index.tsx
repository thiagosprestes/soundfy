import React from 'react';
import { Button, ButtonText, Container, SoundFyLogo } from './styles';
import GoogleIcon from '../../../assets/google-logo.svg';
import { ComponentState } from '../../../utils/globalTypes';
import Error from '../../../components/Error';
import Loading from '../../../components/Loading';

interface LoginContainerProps {
  componentState: ComponentState;
  onLogin: () => void;
  onRetry: () => void;
}

const LoginContainer = ({
  componentState,
  onLogin,
  onRetry,
}: LoginContainerProps) => {
  const renderDefault = (
    <>
      <SoundFyLogo />
      <Button onPress={onLogin}>
        <GoogleIcon />
        <ButtonText>Entrar com Google</ButtonText>
      </Button>
    </>
  );

  const renderLoading = <Loading />;

  const renderError = <Error onRetry={onRetry} />;

  return (
    <Container>
      {
        {
          [ComponentState.default]: renderDefault,
          [ComponentState.loading]: renderLoading,
          [ComponentState.error]: renderError,
        }[componentState]
      }
    </Container>
  );
};

export default LoginContainer;
