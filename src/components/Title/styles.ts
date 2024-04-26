import styled from 'styled-components';

export const Container = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin: 0;
  width: max-content;
  &:after {
    content: ' .';
    color: ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSizes.extraExtraLarge};
  }
`;
