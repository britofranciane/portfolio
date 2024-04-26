import React from 'react';
import { Container, Image, Name } from './styles';
interface KnowledgeCardProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  name?: string;
}

export function KnowledgeCard({
  children,
  size = 'medium',
  name,
}: KnowledgeCardProps) {
  return (
    <Container>
      <Image size={size}>{children}</Image>
      <Name>{name}</Name>
    </Container>
  );
}
