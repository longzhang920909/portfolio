import { FC } from 'react';

import './assets/scss/normalize.scss';
import './assets/scss/global.scss';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Footer from '../components/footer';
import Profile from '../components/profile';
import About from '../pages/about';
import Contact from '../pages/contact';
import Projects from '../pages/projects';
import Skills from '../pages/skills';
import theme from '../shared/theme';
import Box from '../ui/box';
import { AppContainer, GlobalStyles } from './assets/styles.ts';

const App: FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 575px)' });

  const responsiveTheme = {
    ...theme,
    text: {
      ...theme.text,
      ...(isMobile
        ? { variants: theme.text.variants.mobile }
        : { variants: theme.text.variants.default }),
    },
  };

  return (
    <AppContainer>
      <GlobalStyles />
      <ThemeProvider theme={responsiveTheme}>
        <Router>
          <Profile />
          <Box sx={() => ({ marginTop: '30px' })}>
            <Routes>
              <Route path={'/'} element={<About />} />
              <Route path={'/skills'} element={<Skills />} />
              <Route path={'/projects'} element={<Projects />} />
              <Route path={'/contact'} element={<Contact />} />
            </Routes>
          </Box>
          <Footer />
        </Router>
      </ThemeProvider>
    </AppContainer>
  );
};

export default App;
