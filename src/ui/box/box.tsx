import { FC, HTMLAttributes } from 'react';
import styled, { CSSObject, DefaultTheme, useTheme } from 'styled-components';

interface TBoxProps {
  sx?: (theme: DefaultTheme) => CSSObject;
  as?: keyof HTMLElementTagNameMap;
}

const StyledBox = styled('div')<{ $ownStyle: any }>(({ $ownStyle }) => ({
  ...$ownStyle,
}));

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
