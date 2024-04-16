import { FC, HTMLAttributes } from 'react';
import { useTheme } from 'styled-components';
import type { TBoxProps } from './assets/box.types';
import { StyledBox } from './assets/box.styles.ts';

const Box: FC<
  HTMLAttributes<HTMLElement> & TBoxProps & { [key: string]: any }
> = ({ children, as = 'div', sx, ...props }) => {
  const theme = useTheme();

  return (
    <StyledBox {...props} as={as} $ownStyle={sx && sx(theme)}>
      {children}
    </StyledBox>
  );
};

export default Box;
