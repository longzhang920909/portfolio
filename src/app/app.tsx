import {FC} from "react";

import './assets/styles/normalize.scss';
import {AppContainer, GlobalStyles} from './resources/styles.ts';
import Banner from "../components/banner";

const App: FC = () => {
  return (
    <AppContainer>
      <GlobalStyles/>
      <Banner/>
    </AppContainer>
  )
}

export default App