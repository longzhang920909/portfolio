import { FC, forwardRef, HTMLAttributes } from 'react';
import { useTheme } from 'styled-components';
import type { TBoxProps } from './assets/box.types';
import { StyledBox } from './assets/box.styles.ts';

const Box: FC<
  HTMLAttributes<HTMLElement> & TBoxProps & { [key: string]: any }
> = forwardRef(({ children, as = 'div', sx, ...props }, ref) => {
  const theme = useTheme();

  return (
    <StyledBox {...props} ref={ref} as={as} $ownStyle={sx && sx(theme)}>
      {children}
    </StyledBox>
  );
});

export default Box;
