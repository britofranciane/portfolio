import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Content, Menu, ToggleButton, DeskTop, Li } from './styles';

const menuItems = [
  { content: 'Projetos', link: '#projects' },
  { content: 'Experiências', link: '#experiences' },
  { content: 'Fale Comigo', link: 'https://wa.me/5531984185762' },
];

export function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function toggleMenuVisibility() {
    setIsMenuVisible(!isMenuVisible);
  }

  return (
    <Container>
      <Content
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Franciane Brito</h1>
        <ToggleButton onClick={toggleMenuVisibility}>☰</ToggleButton>
        <DeskTop>
          <Menu
            as={motion.ul}
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            {menuItems.map(({ content, link }, index) => (
              <a href={link} key={index}>
                <Li>{content}</Li>
              </a>
            ))}
          </Menu>
        </DeskTop>
      </Content>
      {isMenuVisible && (
        <Menu
          as={motion.ul}
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          {menuItems.map(({ content, link }, index) => (
            <a
              href={link}
              key={index}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Li>{content}</Li>
            </a>
          ))}
        </Menu>
      )}
    </Container>
  );
}
