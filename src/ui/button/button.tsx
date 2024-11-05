import { FC } from 'react';
import Box from '../box';
import { TBoxProps } from '../box/assets/box.model.ts';
import type { TButtonProps } from './assets/button.model.ts';

const variants: { [key: string]: NonNullable<TBoxProps['sx']> } = {
  primary: () => ({}),
  secondary: (theme) => ({
    border: '2px solid',
    borderColor: theme.palette.text.primary,
  }),
};

const Button: FC<TButtonProps & { [key: string]: any }> = ({
  children,
  variant = 'primary',
  as = 'button',
  ...props
}) => {
  return (
    <Box
      as={as}
      sx={(theme) => ({
        all: 'unset',
        padding: '8px 16px',
        borderRadius: '24px',
        cursor: 'pointer',
        fontWeight: 500,
        lineHeight: 1,
        ...variants[variant](theme),
      })}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Button;
