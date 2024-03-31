import {FC} from "react";

import './assets/styles/normalize.scss';
import {AppContainer, GlobalStyles} from './resources/styles.ts';
import {ThemeProvider} from "styled-components";
import theme from "../shared/theme";
import Profile from "../components/profile";

const App: FC = () => {
  return (
    <AppContainer>
      <GlobalStyles/>
      <ThemeProvider theme={theme}>
        <Profile/>
      </ThemeProvider>
    </AppContainer>
  )
}

export default App