import styled from 'styled-components/native';
import { LoginOption } from '.';
import SoundFy from '../../../assets/soundfy-logo.svg';
import { colors, defaultPadding } from '../../../styles/styleguide';

interface ButtonTextProps {
  type: LoginOption;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primaryBlue};
  justify-content: center;
  padding: ${defaultPadding};
`;

export const SoundFyLogo = styled(SoundFy)`
  margin-bottom: 42px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${colors.white};
  border-radius: 25px;
  padding: 7px 12px;
  margin-bottom: 18px;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${props =>
    props.type === LoginOption.Facebook
      ? colors.loginWithFacebookButtonText
      : colors.grey};
  font-weight: bold;
  flex: 1;
  text-align: center;
`;
