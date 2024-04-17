import { FC, ReactNode } from 'react';
import Box from '../box';

const Mark: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={(theme) => ({
        color: theme.palette.secondary.main,
      })}
      as={'span'}
    >
      {children}
    </Box>
  );
};

export default Mark;
