import React from 'react';
import {
  Container,
  Content,
  Caption,
  Date,
  H3,
  Description,
  Menu,
  Head,
  Li,
  ContainerExperiences,
} from './styles';
import { Title } from '@components/Title';

export function Experiences() {
  const experiences = [
    {
      title: 'Desenvolvedor Front-end Jr',
      date: 'Maio 2022 a Outubro 2023',
      company: 'Geofusion – São Paulo, SP',
      description:
        'Desenvolvimento de aplicações web com foco em React, comprovado por mais de 1 ano de experiência. Implementação de bibliotecas de UI, incluindo Material UI, para melhorar a experiência do usuário. Utilização de gerenciamento de estado com React Context, Redux e outras ferramentas, para manter a integridade dos dados e melhorar a eficiência da aplicação. Proficiência em diferentes métodos de estilização, como CSS, CSS modules, tailwind, e outros, para criar interfaces atraentes e responsivas. Experiência no gerenciamento de formulários e validações, com o uso de Redux Form e outras tecnologias, garantindo a precisão e confiabilidade dos dados de entrada.',
    },

    {
      title: 'Estagiária FullStack',
      date: 'Junho 2021 a Janeiro 2022',
      company: 'Luby Software – São Paulo, SP',
      description:
        'Desenvolvimento do layout dos projetos com base em layouts feitos pela equipe de designers utilizando tecnologias como react.js, react native, sass, typescript, git, github.',
    },
    {
      title: 'Estágio de Suporte e Desenvolvimento',
      date: 'Abril 2021 a Junho 2021',
      company: 'Gamefik – Belo Horizonte, MG',
      description:
        'Suporte ao cliente com relação a plataforma da company. E desenvolvimento e manutenção de funcionalidades com as tecnologias React, TypeScript, styled-components. Também usando git, git-hub',
    },
  ];

  const [selected, setSelected] = React.useState(0);

  function changeSelected(id: number) {
    setSelected(id);
  }

  return (
    <Container>
      <Content>
        <Title>Experiências</Title>
        <ContainerExperiences>
          <Menu>
            <ul>
              {experiences.map(({ company }, id) => (
                <Li
                  key={id}
                  onClick={() => changeSelected(id)}
                  isSelected={id === selected}
                >
                  {company}
                </Li>
              ))}
            </ul>
          </Menu>
          <div>
            <Head>
              <H3>{experiences[selected].title}</H3>
              <Date>{experiences[selected].date}</Date>
            </Head>
            <Caption>{experiences[selected].company}</Caption>
            <Description>{experiences[selected].description}</Description>
          </div>
        </ContainerExperiences>
      </Content>
    </Container>
  );
}
