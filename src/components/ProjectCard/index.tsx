import React from 'react';
import { Container, Title, Description, Link, Content } from './styles';

interface ProjectCardProps {
  item: {
    title: string;
    description: string;
    link: string;
  };
}

export function ProjectCard({ item }: ProjectCardProps) {
  const { title, description, link } = item;

  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Link href={link} target='_blank' rel='noopener noreferrer'>
          {link}
        </Link>
      </Content>
    </Container>
  );
}
