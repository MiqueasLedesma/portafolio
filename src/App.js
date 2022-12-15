import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Presentation } from './components/Presentation';
import { Proyects } from './components/Proyects';
import { Skills } from './components/Skills';
import { language } from './Languages';
import { myTheme } from './StaticConst';
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;


const AppContainer = styled.div`
  font-family: Monospace;
  background-color: ${props => localStorage.theme !== 'primary' ? props.theme.backgroundSecundary : props.theme.backgroundPrimary};
  strong {
       font-family: cursive;
       font-weight: 400;
       font-size: 3.5rem;
       text-decoration: underline;
       transition: 1s;
       &:hover {
        font-size: 3.8rem;
       }
    }
`

function App() {

  const [state, setState] = useState(localStorage.theme);
  const [lang, setLanguage] = useState(localStorage.language);

  useEffect(() => {

    const setLocalStorage = () => {
      !state && localStorage.setItem('theme', 'primary');
      !lang && localStorage.setItem('language', 'en');
    }
    setLocalStorage();

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

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  
  return (
    <ThemeProvider theme={myTheme}>
      <AppContainer>
        <Navbar handleClick={handleClick} handleSelect={handleSelect} language={language} />
        <Presentation language={language} />
        <Skills language={language} />
        <Proyects language={language} />
        <Contact language={language} />
        <Footer language={language} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
