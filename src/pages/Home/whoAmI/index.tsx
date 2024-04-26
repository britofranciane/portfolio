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
import { LiaGithubAlt } from 'react-icons/lia';
import { CiLinkedin } from 'react-icons/ci';
import { TbBrandGmail } from 'react-icons/tb';
import { LiaWhatsapp } from 'react-icons/lia';
import { IconType } from 'react-icons';
import dev from '@assets/dev.png';

interface Icons {
  Icon: IconType;
  link: string;
}

export function WhoAmI() {
  const icons: Icons[] = [
    { Icon: CiLinkedin, link: '' },
    { Icon: LiaGithubAlt, link: '' },
    { Icon: TbBrandGmail, link: '' },
    { Icon: LiaWhatsapp, link: 'https://wa.me/5531984185762' },
  ];

  const description =
    'Meu compromisso com a excelência se reflete na minha atenção aos detalhes, desde a implementação de gerenciamento de estado eficiente até a garantia de interfaces de usuário atraentes e funcionais. Além de minhas habilidades técnicas, estou sempre buscando novas formas de melhorar a experiência do usuário. Como desenvolvedora front-end, meu objetivo é entregar soluções que não apenas atendam, mas superem as expectativas, garantindo sempre a melhor performance, acessibilidade e SEO';

  return (
    <Container>
      <Image src={dev} alt='Programadora' />

      <Content>
        <div>Quem sou</div>
        <Title>Franciane Brito</Title>
        <Caption>Desenvolvedora Front-End</Caption>
        <Description>{description}</Description>
        <ContainerCards>
          {icons.map(({ Icon, link }, i) => (
            <a href={link} key={i}>
              <KnowledgeCard size={'small'}>
                <Icon />
              </KnowledgeCard>
            </a>
          ))}
        </ContainerCards>
      </Content>
    </Container>
  );
}
