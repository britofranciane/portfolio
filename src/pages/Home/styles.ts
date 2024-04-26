import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.primary};
  gap: ${({ theme }) => theme.spacing.extraExtraExtraLarge};
  align-items: center;
  width: 100%;
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

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  max-width: 40.75rem;
  line-height: 140%;
  font-size: ${({ theme }) => theme.fontSizes.extraExtraExtraLarge};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.onDark};
  margin: ${({ theme }) => theme.spacing.extraExtraLarge} 0;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  max-width: 56.25rem;
  line-height: 160%;
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;
