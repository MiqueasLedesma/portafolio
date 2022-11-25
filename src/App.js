import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Presentation } from './components/Presentation';
import { Proyects } from './components/Proyects';
import { Skills } from './components/Skills';
import { language } from './Languages';

export const myTheme = {
  primary: '#213f6d',
  secundary: '#ffffff',
  textPrimary: '#e2e2e2',
  textSecundary: '#120907',
  backgroundPrimary: '#0e1b36',
  backgroundSecundary: '#beceff',
  proyectPrimary: '#124860',
  proyectSecundary: '#f3eae8',
};

const AppContainer = styled.div`
  background-color: ${props => localStorage.theme !== 'primary' ? props.theme.backgroundSecundary : props.theme.backgroundPrimary};
`

function App() {

  const [state, setState] = useState(localStorage.theme);
  const [lang, setLanguage] = useState(localStorage.language);

  useEffect(() => {
    let haveTheme = () => !state && localStorage.setItem('theme', 'primary');
    haveTheme();
    let haveLanguage = () => !language && localStorage.setItem('language', 'en');
    haveLanguage();
  }, [state, lang]);

  const handleClick = e => {
    if (state == 'primary') {
      localStorage.setItem('theme', 'secundary');
      return setState(localStorage.theme);
    }
    localStorage.setItem('theme', 'primary');
    return setState(localStorage.theme);
  }

  const handleSelect = e => {
    localStorage.setItem('language', e.target.value);
    setLanguage(e.target.value);
  }

  return (
    <ThemeProvider theme={myTheme}>
      <AppContainer>
        <Navbar handleClick={handleClick} handleSelect={handleSelect} language={language} />
        <Presentation language={language} />
        <Skills language={language} />
        <Proyects language={language} />
        <Footer language={language} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
