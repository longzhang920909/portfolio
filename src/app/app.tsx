import { FC } from 'react';

import './assets/scss/normalize.scss';
import './assets/scss/global.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Footer from '../components/footer';
import Profile from '../components/profile';
import About from '../pages/about';
import theme from '../shared/theme';
import Box from '../ui/box';
import { AppContainer, GlobalStyles } from './assets/styles.ts';

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
          <Footer />
        </Router>
      </ThemeProvider>
    </AppContainer>
  );
};

export default App;
