import styled, { keyframes } from 'styled-components';

const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(1rem);
  }
`;

export const ScrollDownButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.5rem;
  animation: ${moveUpDown} 1.5s ease-in-out infinite;
  margin-top: 4.5rem;
  &:focus {
    outline: none;
  }
  @media (max-width: 400px) {
    display: none;
  }
`;
