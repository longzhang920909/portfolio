import { FC } from 'react';

import './assets/scss/normalize.scss';
import './assets/scss/global.scss';
import { ThemeProvider } from 'styled-components';
import Profile from '../components/profile';
import theme from '../shared/theme';
import { AppContainer, GlobalStyles } from './assets/styles.ts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from '../ui/container';

const App: FC = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Router>
          <Profile />
          <Container>
            <Routes>
              <Route path={'/'} element={'about'} />
              <Route path={'/skills'} element={'skills'} />
              <Route path={'/projects'} element={'projects'} />
              <Route path={'/contact'} element={'contact'} />
            </Routes>
          </Container>
        </Router>
      </ThemeProvider>
    </AppContainer>
  );
};

export default App;
