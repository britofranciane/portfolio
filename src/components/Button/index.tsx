import React from 'react';
import { Container } from './styles';

interface Props {
  children: React.ReactNode;
}

export function Button({ children }: Props) {
  return <Container>{children}</Container>;
}
