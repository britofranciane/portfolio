import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.onDark};
  height: 5rem;
  box-sizing: border-box;
  padding: 0 ${({ theme }) => theme.spacing.large};
  border-top: 1px solid ${({ theme }) => theme.colors.outline};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
`;

export const Powered = styled.p`
  @media (max-width: 400px) {
    display: none;
  }
`;
