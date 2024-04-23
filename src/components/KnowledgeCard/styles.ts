import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.div<{ size?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ size }) => {
    switch (size) {
      case 'small':
        return '2.5rem';
      case 'medium':
        return '3.75rem';
      default:
        return '5rem';
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'small':
        return '3.25rem';
      case 'medium':
        return '6.25rem';
      default:
        return '12.5rem';
    }
  }};
  max-width: ${({ size }) => {
    switch (size) {
      case 'small':
        return '4.5rem';
      case 'medium':
        return '7.5rem';
      default:
        return '12.5rem';
    }
  }};
  width: 100%;
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.dark};
  border: 1px solid ${({ theme }) => theme.colors.outline};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  letter-spacing: -1.5px;
  transition: 0.5s all ease;
  box-sizing: border-box;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const Name = styled.p`
  margin: 0;
  padding: ${({ theme }) => theme.spacing.small};
  text-align: center;
`;
