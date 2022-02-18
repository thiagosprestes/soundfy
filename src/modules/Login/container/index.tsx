import React from 'react';
import { Text } from 'react-native';
import { Button, ButtonText, Container, SoundFyLogo } from './styles';
import FacebookIcon from '../../../assets/facebook-logo.svg';
import GoogleIcon from '../../../assets/google-logo.svg';

export enum LoginOption {
  Facebook = 'Facebook',
  Google = 'Google',
}

interface LoginButtonProps {
  type: LoginOption;
  icon: React.ReactNode;
}

interface LoginContainerProps {
  onLogin: (type: LoginOption) => void;
}

const LoginContainer = ({ onLogin }: LoginContainerProps) => {
  const LoginButton = ({ type, icon }: LoginButtonProps) => (
    <Button onPress={() => onLogin(type)}>
      {icon}
      <ButtonText type={type}>Entrar com {type}</ButtonText>
    </Button>
  );

  return (
    <Container>
      <SoundFyLogo />
      <LoginButton type={LoginOption.Facebook} icon={<FacebookIcon />} />
      <LoginButton type={LoginOption.Google} icon={<GoogleIcon />} />
    </Container>
  );
};

export default LoginContainer;