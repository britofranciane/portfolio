import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Home } from './pages/Home';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  return (
    <ThemeProvider
      theme={theme}
      className='App'
      style={{ background: '#000', color: '#fff', minHeight: '100vh' }} // Remover
    >
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
