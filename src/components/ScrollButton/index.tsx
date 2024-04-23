import React from 'react';
import { ScrollDownButton } from './styles';
import { RiArrowDownSLine } from 'react-icons/ri';

const ScrollButton = () => {
  const scrollToNextSection = () => {
    const scrollAmount = window.innerHeight * 0.85;
    window.scrollBy({
      top: scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollDownButton onClick={scrollToNextSection}>
      <RiArrowDownSLine />
    </ScrollDownButton>
  );
};

export default ScrollButton;
