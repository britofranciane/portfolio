import styled from 'styled-components';

export const Container = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ theme }) => theme.colors.outline};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.colors.surface};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  gap: ${({ theme }) => theme.spacing.large};
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 3.5rem 0;
  box-sizing: border-box;
  @media (max-width: 1200px) {
    flex-direction: column;
    margin: 0 ${({ theme }) => theme.spacing.large};
  }

  @media (max-width: 400px) {
    padding: ${({ theme }) => theme.spacing.extraSmall};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 18.75rem;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.extraExtraLarge};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin: ${({ theme }) => theme.spacing.medium} 0;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  @media (max-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

export const Caption = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.onDark};
  text-align: start;
  margin: 1rem 0 2rem;
  line-height: 140%;
`;

export const Image = styled.img`
  color: ${({ theme }) => theme.colors.white};
  min-width: 32rem;
  height: 31.25rem;
  background: ${({ theme }) => theme.colors.dark};
  box-sizing: border-box;
  @media (max-width: 1200px) {
    min-width: 0;
    width: 100%;
  }
`;
