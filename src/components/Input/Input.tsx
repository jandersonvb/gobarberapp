import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './Input.styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const { name, icon, ...rest } = props;

  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />
      <TextInput {...rest} />
    </Container>
  );
};

export { Input };
