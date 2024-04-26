import React from 'react';
import { Header, Footer } from './components/index';
import { Home } from './pages/Home';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './styles/GlobalStyle';

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
