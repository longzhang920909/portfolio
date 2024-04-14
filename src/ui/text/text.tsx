import { FC } from 'react';
import { useTheme } from 'styled-components';
import type { TTextProps } from './assets/text.types';

const Text: FC<TTextProps> = ({
  variant = 'main',
  children,
  style = {},
  as: Component = 'div',
}) => {
  const theme = useTheme();
  const styleObj = {
    ...theme.text.variants[variant],
    color: theme.palette.text.primary,
    ...style,
  };

  return <Component style={styleObj}>{children}</Component>;
};

export default Text;
