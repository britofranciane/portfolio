import React from 'react';
import {
  Container,
  Content,
  Image,
  Title,
  Caption,
  Description,
  ContainerCards,
} from './styles';
import { KnowledgeCard } from '@components/KnowledgeCard';
import { IoLogoInstagram } from 'react-icons/io';
import { PiDiscordLogoLight } from 'react-icons/pi';
import { LiaGithubAlt } from 'react-icons/lia';
import { CiLinkedin } from 'react-icons/ci';
import { TbBrandGmail } from 'react-icons/tb';
import { LiaWhatsapp } from 'react-icons/lia';
import Meejp from '@assets/Meejp.png';

export function WhoAmI() {
  const images = [
    IoLogoInstagram,
    CiLinkedin,
    PiDiscordLogoLight,
    LiaGithubAlt,
    TbBrandGmail,
    LiaWhatsapp,
  ];

  return (
    <Container>
      <Image src={Meejp} alt='Programadora' />

      <Content>
        <div>Quem sou</div>
        <Title>Franciane Brito</Title>
        <Caption>Desenvolvedora Front-End</Caption>
        <Description>
          Meu compromisso com a excelência se reflete na minha atenção aos
          detalhes, desde a implementação de gerenciamento de estado eficiente
          até a garantia de interfaces de usuário atraentes e funcionais. Além
          de minhas habilidades técnicas, estou sempre buscando novas formas de
          melhorar a experiência do usuário através de designs intuitivos e
          interativos. Como desenvolvedora front-end, meu objetivo é entregar
          soluções que não apenas atendam, mas superem as expectativas,
          garantindo sempre a melhor performance, acessibilidade e SEO
        </Description>
        <ContainerCards>
          {images.map((image, index) => {
            <KnowledgeCard size={'small'} key={index}>
              {/* <Image /> */}
            </KnowledgeCard>;
          })}
        </ContainerCards>
      </Content>
    </Container>
  );
}
