import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  gap: ${({ theme }) => theme.spacing.medium};
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.extraLarge};
  @media (max-width: 1200px) {
    padding: ${({ theme }) => `${theme.spacing.large} ${theme.spacing.medium}`};
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const ContainerCards = styled.div`
  margin-top: ${({ theme }) => theme.spacing.extraLarge};
  gap: ${({ theme }) => theme.spacing.large};
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  li {
    padding: ${({ theme }) => theme.spacing.large};
    text-align: left;
    background-color: ${({ theme }) => theme.colors.dark};
    border-left: ${({ theme }) => theme.spacing.extraSmall} solid #111;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    width: 17rem;
    box-sizing: border-box;
  }
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  max-width: 40rem;
  line-height: 140%;
  font-size: ${({ theme }) => theme.spacing.large};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  visibility: visible;
  margin: 0;
`;

export const Caption = styled.a`
  font-size: ${({ theme }) => theme.spacing.large};
  margin: ${({ theme }) => theme.spacing.extraLarge} 0;
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Date = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.onDark};
  line-height: 140%;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  line-height: 140%;
  color: ${({ theme }) => theme.colors.onDark};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;
