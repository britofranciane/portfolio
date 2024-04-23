import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Content, Menu, ToggleButton, Menu2, Li } from './styles';

const menuItems = [
  { content: 'Projetos', link: '' },
  { content: 'Experiências', link: '' },
  { content: 'Fale Comigo', link: 'https://wa.me/5531984185762' },
];

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

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
        <Menu2>
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
        </Menu2>
      </Content>
      {isMenuVisible && (
        <Menu
          as={motion.ul}
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          {menuItems.map((item, index) => (
            <Li key={index}>{item}</Li>
          ))}
        </Menu>
      )}
    </Container>
  );
};

export default Header;
