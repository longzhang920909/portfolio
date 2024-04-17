import { FC } from 'react';

import './assets/scss/normalize.scss';
import './assets/scss/global.scss';
import { ThemeProvider } from 'styled-components';
import Profile from '../components/profile';
import theme from '../shared/theme';
import { AppContainer, GlobalStyles } from './assets/styles.ts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Box from '../ui/box';
import About from '../pages/about';

const App: FC = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Router>
          <Profile />
          <Box sx={() => ({ marginTop: '30px' })}>
            <Routes>
              <Route path={'/'} element={<About />} />
              <Route path={'/skills'} element={''} />
              <Route path={'/projects'} element={''} />
              <Route path={'/contact'} element={''} />
            </Routes>
          </Box>
        </Router>
      </ThemeProvider>
    </AppContainer>
  );
};

export default App;
