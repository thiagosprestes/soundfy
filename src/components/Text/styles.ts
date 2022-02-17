import { TextProps as RNTextProps } from 'react-native';
import styled from 'styled-components/native';

interface TextProps extends RNTextProps {
  size?: number;
}

export const Text = styled.Text<TextProps>`
  font-family: 'Roboto-Medium';
  font-size: ${props => props.size ?? 14}px;
`;
