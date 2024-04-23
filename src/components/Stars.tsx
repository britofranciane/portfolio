import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define os tipos para as props de Star
interface StarProps {
  left: number;
  duration: number;
  size: number;
}

// Cria uma animação de keyframes que move o elemento de 100% abaixo para 0% (topo)
const moveUpwards = keyframes`
  from {
    transform: translateY(100vh); // Começa fora da tela na parte inferior
  }
  to {
    transform: translateY(-100vh); // Move para fora da tela na parte superior
  }
`;

// Styled component para a estrela
const Star = styled.div<StarProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  bottom: -${(props) => props.size}px; // Inicia fora da tela

  left: ${(props) =>
    props.left}vw; // Posição aleatória no eixo X baseada na largura da tela

  animation: ${moveUpwards} ${(props) => props.duration}s linear infinite;
`;

// Styled component para o container das estrelas
const StarFieldContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1; // Garante que o campo de estrelas fique atrás de outros conteúdos
`;

// Componente que renderiza várias estrelas
const StarField: React.FC = () => {
  // Cria um array de estrelas com posições e durações aleatórias
  const stars = Array.from({ length: 100 }).map((_, index) => (
    <Star
      key={index}
      left={Math.random() * 100}
      duration={Math.random() * (5 - 1) + 1} // Duração aleatória entre 1 e 5 segundos
      size={Math.random() * (3 - 1) + 1} // Tamanho aleatório entre 1 e 3 pixels
    />
  ));

  return <StarFieldContainer>{stars}</StarFieldContainer>;
};

export default StarField;
