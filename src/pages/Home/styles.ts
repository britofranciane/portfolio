import styled, { keyframes } from 'styled-components';

const typingAnimation = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.primary};
  min-height: calc(100vh - 200px);
  box-sizing: border-box;
  padding: 7rem 0 0;
  @media (max-width: 768px) {
    padding: 4rem 0 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: ${({ theme }) => theme.maxWidth};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  height: calc(100vh - 150px);
  padding: 0 ${({ theme }) => theme.spacing.small};
`;

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  max-width: 650px;
  line-height: 140%;
  font-size: 2.5rem;
  font-weight: 500;
  visibility: visible;
  opacity: 1;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transition:
    opacity 2s cubic-bezier(0.5, 0, 0, 1) 0.3s,
    transform 2s cubic-bezier(0.5, 0, 0, 1) 0.3s;
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  }
`;

export const Description = styled.p<{ speed: number }>`
  color: ${({ theme }) => theme.colors.onDark};
  font-size: 1.5rem;
  max-width: 900px;
  margin: ${({ theme }) => theme.spacing.extraExtraLarge} 0;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 160%;
  border-right: 2px solid;
  white-space: nowrap;
  overflow: hidden;
  animation: ${({ speed }) => speed}s ${typingAnimation} steps(196, end)
    infinite;
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;
