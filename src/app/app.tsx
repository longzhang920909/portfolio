import {FC} from "react";

import './assets/styles/normalize.scss';
import { AppContainer } from './resources/styles.ts';

const App: FC = () => {
  return (
    <AppContainer>
      <span>
        Hello World!
      </span>
    </AppContainer>
  )
}

export default App