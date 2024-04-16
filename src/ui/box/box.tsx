import { FC, HTMLAttributes } from 'react';
import styled, { CSSObject, DefaultTheme, useTheme } from 'styled-components';

type SCSSStyles = string;
interface TBoxProps {
  sx?: (theme: DefaultTheme) => CSSObject;
  as?: keyof HTMLElementTagNameMap;
}

const StyledBox = styled('div')(({ style }) => ({
  ...style,
}));

const Box: FC<
  HTMLAttributes<HTMLElement> & TBoxProps & { [key: string]: any }
> = ({ children, as = 'div', sx, ...props }) => {
  const theme = useTheme();

  let styles: CSSObject | SCSSStyles | undefined =
    typeof sx === 'function' ? sx(theme) : sx;

  return (
    <StyledBox {...props} as={as} style={styles}>
      {children}
    </StyledBox>
  );
};

export default Box;
