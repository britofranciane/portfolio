import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  box-sizing: border-box;
  gap: ${({ theme }) => theme.spacing.extraSmall};
  border: 1px solid #333;
  &:hover {
    border: 1px solid #c17c38;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  box-sizing: border-box;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.extraLarge};
  box-sizing: border-box;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  max-width: 40rem;
  line-height: 140%;
  visibility: visible;
  margin: 0;
`;

export const Link = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
  cursor: pointer;
  text-decoration: none;
`;

export const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.onDark};
  line-height: 140%;
  font-size: ${({ theme }) => theme.fontSizes.large};
`;
