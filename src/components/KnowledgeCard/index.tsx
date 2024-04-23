import React from 'react';
import { Container, Image, Name } from './styles';

export function KnowledgeCard({ children, size, name }) {
  return (
    <Container>
      <Image size={size || 'medium'}>{children}</Image>
      <Name>{name}</Name>
      {/* {name && <div>{name}</div>} */}
    </Container>
  );
}
