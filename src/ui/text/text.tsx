import { FC } from 'react';
import Box from '../box/box';
import type { TTextProps } from './assets/text.model.ts';

const Text: FC<TTextProps> = ({
  variant = 'main',
  children,
  sx,
  as = 'div',
  className,
}) => {
  return (
    <Box
      as={as}
      sx={(theme) => ({
        ...theme.text.variants[variant],
        color: 'inherit', // theme.palette.text.primary
        ...(sx ? sx(theme) : {}),
      })}
      className={className}
    >
      {children}
    </Box>
  );
};

export default Text;
