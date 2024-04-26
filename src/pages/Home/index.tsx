import React from 'react';
import { Container, Content, Description, Title } from './styles';
import { WhoAmI } from './whoAmI';
import { Experiences } from './experiences';
import { Projects } from './projects';
import { Knowledge } from './knowledge';
import { ScrollButton, Button } from '@components/index';

export function Home() {
  const description =
    'Da lógica de programação à implementação de interfaces interativas, meu objetivo é impulsionar a evolução digital através de soluções front-end que não apenas atendam, mas superem as expectativas.';
  const title =
    'Transformando ideias em realidade com tecnologia de ponta e uma paixão incansável por inovação.';

  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <a
          href='https://wa.me/5531984185762'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button>Saiba Mais</Button>
        </a>
        <ScrollButton />
      </Content>
      <WhoAmI />
      <Experiences />
      <Projects />
      <Knowledge />
    </Container>
  );
}
