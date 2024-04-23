import styled from 'styled-components';

export const Container = styled.button`
  padding: ${({ theme }) =>
    `${theme.spacing.medium} ${theme.spacing.extraExtraLarge}`};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.large};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  width: max-content;
  outline: none;
  cursor: pointer;
  text-transform: capitalize;
  &:hover {
    opacity: 0.8;
  }
`;
