import {FC} from "react";

import './assets/styles/normalize.scss';
import {AppContainer, GlobalStyles} from './resources/styles.ts';
import Banner from "../components/banner";
import {ThemeProvider} from "styled-components";
import theme from "../shared/theme";

const App: FC = () => {
  return (
    <AppContainer>
      <GlobalStyles/>
      <ThemeProvider theme={theme}>
        <Banner/>
      </ThemeProvider>
    </AppContainer>
  )
}

export default App