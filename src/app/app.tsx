import { FC } from 'react';

import './assets/scss/normalize.scss';
import './assets/scss/global.scss';
import { ThemeProvider } from 'styled-components';
import Profile from '../components/profile';
import theme from '../shared/theme';
import { AppContainer, GlobalStyles } from './assets/styles.ts';

const App: FC = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Profile />
      </ThemeProvider>
    </AppContainer>
  );
};

export default App;
