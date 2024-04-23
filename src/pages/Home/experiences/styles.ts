import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.white};
  padding: 6rem 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  gap: ${({ theme }) => theme.spacing.medium};
  @media (max-width: 1200px) {
    padding: ${({ theme }) => `${theme.spacing.large} ${theme.spacing.medium}`};
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
`;

export const ContainerExperiences = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 40px;
  box-sizing: border-box;
  width: 100%;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Li = styled.li<{ isSelected: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.large}`};
  background: ${({ theme }) => theme.colors.dark};
  border-left: 0.25rem solid ${({ theme }) => theme.colors.outline};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-align: left;
  width: 17.25rem;
  box-sizing: border-box;
  cursor: pointer;
  color: ${({ isSelected }) =>
    isSelected ? ({ theme }) => theme.colors.primary : '#ccc'};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-left: 0.25rem solid ${({ theme }) => theme.colors.primary};
  }
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  max-width: 42rem;
  line-height: 140%;
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  visibility: visible;
  margin: 0;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const Caption = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  margin: 1.5rem 0;
  font-weight: 500;
`;

export const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.onDark};
  line-height: 160%;
  margin: 0;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.onDark};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 140%;
  @media (max-width: 1200px) {
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;

export const Menu = styled.div`
  width: 25%;
  @media (max-width: 1200px) {
    width: 100%;
    li {
      width: 100%;
    }
  }
`;
