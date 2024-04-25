import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Home } from './pages/Home';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}
  body {
    background: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.white};
    min-height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}
