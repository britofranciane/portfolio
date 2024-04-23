import React from 'react';
import { Container, Content, Description, H1 } from './styles';
import StarField from '../../components/Stars';
import { Button } from '../../components/Button';
import { WhoAmI } from './whoAmI';
import { Experiences } from './experiences';
import { Projects } from './projects';
import { Knowledge } from './knowledge';
import ScrollButton from '../../components/ScrollButton';

export function Home() {
  return (
    <Container>
      <StarField />

      <Content>
        <H1>
          Transformando ideias em realidade com tecnologia de ponta e uma paixão
          incansável por inovação.
        </H1>

        <Description>
          Da lógica de programação à implementação de interfaces interativas,
          meu objetivo é impulsionar a evolução digital através de soluções
          front-end que não apenas atendam, mas superem as expectativas.
        </Description>

        <a href='https://wa.me/5531984185762' target='_blank'>
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
