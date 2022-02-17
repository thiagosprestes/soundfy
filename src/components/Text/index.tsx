import React from 'react';

import { Text } from './styles';

interface TextComponentInterface {
  children: React.ReactNode;
  size?: number;
}

const TextComponent = ({ children, size }: TextComponentInterface) => (
  <Text size={size}>{children}</Text>
);

export default TextComponent;
