import styled from 'styled-components';

const commonStyles = `
  box-sizing: border-box;
  width: 100%;
`;

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  background: ${({ theme }) => theme.colors.surface};
  padding: 6rem 0;
  height: 100%;
  ${commonStyles}

  @media (max-width: 400px) {
    padding: ${({ theme }) => theme.spacing.medium};
    gap: ${({ theme }) => theme.spacing.medium};
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  justify-items: center;
  align-items: center;
  gap: 3rem;
  max-width: ${({ theme }) => theme.maxWidth};
  padding: ${({ theme }) => theme.spacing.medium};
  ${commonStyles}

  @media (max-width: 400px) {
    gap: ${({ theme }) => theme.spacing.medium};
  }
`;
