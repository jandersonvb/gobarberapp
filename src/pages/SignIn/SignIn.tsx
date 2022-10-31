import React from 'react';
import { Image } from 'react-native';

import logoImg from '../../assets/logo.png';

import { Container } from './SignIn.styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
    </Container>
  );
};
export { SignIn };
