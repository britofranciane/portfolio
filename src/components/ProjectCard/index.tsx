import React from 'react';
import { Container, Title, Description, Link, Content } from './styles';

export function ProjectCard({ item }) {
  const { title, description, link } = item;

  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Link>{link}</Link>
      </Content>
    </Container>
  );
}
