import { FC } from 'react';
import Box from '../box/box.tsx';
import type { TTextProps } from './assets/text.model.ts';

const Text: FC<TTextProps> = ({
  variant = 'main',
  children,
  sx,
  as = 'div',
}) => {
  return (
    <Box
      as={as}
      sx={(theme) => ({
        ...theme.text.variants[variant],
        color: 'inherit', // theme.palette.text.primary
        ...(sx ? sx(theme) : {}),
      })}
    >
      {children}
    </Box>
  );
};

export default Text;
