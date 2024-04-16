import {FC, ReactNode} from 'react';
import { StyledIconLink } from './assets/icon-link.styles.ts';

const IconLink: FC<{icon: ReactNode; label: string; href: string}> = () => {
  return <StyledIconLink></StyledIconLink>;
};

export default IconLink;
