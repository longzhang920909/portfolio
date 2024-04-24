import { FC } from 'react';
import Box from '../box';
import { TBoxProps } from '../box/assets/box.types.ts';
import type { TButtonProps } from './assets/button.types.ts';

const variants: { [key: string]: NonNullable<TBoxProps['sx']> } = {
  primary: () => ({}),
  secondary: (theme) => ({
    border: '2px solid',
    borderColor: theme.palette.text.primary,
  }),
};

const Button: FC<TButtonProps> = ({ children, variant = 'primary' }) => {
  return (
    <Box
      as={'button'}
      sx={(theme) => ({
        all: 'unset',
        padding: '8px 16px',
        borderRadius: '24px',
        cursor: 'pointer',
        fontWeight: 500,
        lineHeight: 1,
        ...variants[variant](theme),
      })}
    >
      {children}
    </Box>
  );
};

export default Button;
