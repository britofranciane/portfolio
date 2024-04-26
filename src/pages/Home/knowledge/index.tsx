import React from 'react';
import { Container, Content } from './styles';
import { KnowledgeCard, Title } from '@components/index';
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoSass,
  IoLogoPython,
  IoLogoNodejs,
} from 'react-icons/io';
import {
  TbBrandNextjs,
  TbBrandCypress,
  TbBrandStorybook,
  TbSql,
} from 'react-icons/tb';
import { SiStyledcomponents, SiTailwindcss, SiRadixui } from 'react-icons/si';
import { SiJest } from 'react-icons/si';

const knowledgeIcons = [
  { Icon: IoLogoHtml5, name: 'Html5' },
  { Icon: IoLogoCss3, name: 'Css3' },
  { Icon: IoLogoJavascript, name: 'Javascript' },
  { Icon: IoLogoSass, name: 'Sass' },
  { Icon: TbBrandNextjs, name: 'Nextjs' },
  { Icon: SiStyledcomponents, name: 'Styled Components' },
  { Icon: SiTailwindcss, name: 'Tailwindcss' },
  { Icon: SiRadixui, name: 'Radix UI' },
  { Icon: TbBrandCypress, name: 'Cypress' },
  { Icon: TbBrandStorybook, name: 'Storybook' },
  { Icon: SiJest, name: 'Jest' },
  { Icon: IoLogoPython, name: 'Python' },
  { Icon: TbSql, name: 'SQL' },
  { Icon: IoLogoNodejs, name: 'Nodejs' },
];

export function Knowledge() {
  return (
    <Container>
      <Title>Conhecimentos</Title>

      <Content>
        {knowledgeIcons.map(({ Icon, name }, i) => (
          <KnowledgeCard key={i} size={'medium'} name={name}>
            <Icon />
          </KnowledgeCard>
        ))}
      </Content>
    </Container>
  );
}
