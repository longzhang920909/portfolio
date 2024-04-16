import { FC, ReactNode } from 'react';
import { StyledTabButton } from './assets/tab-button.styles';

const TabButton: FC<{ children: ReactNode }> = ({ children }) => {
  return <StyledTabButton>{children}</StyledTabButton>;
};

export default TabButton;
