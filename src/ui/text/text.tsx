import { FC } from 'react';
import { useTheme } from 'styled-components';
import type { TTextProps } from './assets/text.types';

const Text: FC<TTextProps> = ({ variant = 'main', children, style = {} }) => {
  const theme = useTheme();
  return (
    <div
      style={{
        ...theme.text.variants[variant],
        color: theme.palette.text.primary,
        fontFamily: theme.text.fontFamily,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Text;
