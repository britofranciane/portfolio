import React from 'react';
import { ProjectCard, Title } from '@components/index';
import { Container, Content, Caption, ContainerCards } from './styles';

export function Projects() {
  const data = [
    {
      title: 'Indisponivel',
      description:
        'Esse projeto está em desenvolvimento, em breve estará disponivel.',
      link: 'Link do projeto',
    },
    {
      title: 'Indisponivel',
      description:
        'Esse projeto está em desenvolvimento, em breve estará disponivel.',
      link: 'Link do projeto',
    },
    {
      title: 'Indisponivel',
      description:
        'Esse projeto está em desenvolvimento, em breve estará disponivel.',
      link: 'Link do projeto',
    },
    {
      title: 'Indisponivel',
      description:
        'Esse projeto está em desenvolvimento, em breve estará disponivel.',
      link: 'Link do projeto',
    },
    {
      title: 'Indisponivel',
      description:
        'Esse projeto está em desenvolvimento, em breve estará disponivel.',
      link: 'Link do projeto',
    },
    {
      title: 'Indisponivel',
      description:
        'Esse projeto está em desenvolvimento, em breve estará disponivel.',
      link: 'Link do projeto',
    },
  ];

  return (
    <Container>
      <Content>
        <Title>Projetos</Title>
        <ContainerCards>
          {data.map((item, index) => (
            <ProjectCard key={index} item={item} />
          ))}
        </ContainerCards>
        <Caption>Repositórios do GitHub</Caption>
      </Content>
    </Container>
  );
}
