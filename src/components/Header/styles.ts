import styled from 'styled-components';

const commonStyles = ({ theme }) => `
  color: ${theme.colors.primary};
`;

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.dark};
  ${commonStyles}
  box-sizing: border-box;
  position: fixed;
  z-index: 1;
  height: 6.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.outline};

  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 0 ${({ theme }) => theme.spacing.medium};
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  ${commonStyles}
  box-sizing: border-box;
`;

export const DeskTop = styled.menu`
  display: flex;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const ToggleButton = styled.button`
  display: none;

  @media (max-width: 1200px) {
    display: flex;
    align-items: right;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.extraExtraLarge};
    cursor: pointer;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.onDark};
  list-style: none;
  font-size: ${({ theme }) => theme.fontSizes.large};

  &:hover::after {
    width: 100%;
    left: 0;
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0.9;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.onDark};
    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Li = styled.li<{ isOpen?: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.medium};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 1200px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.dark};
    padding: 0;
  }
`;
