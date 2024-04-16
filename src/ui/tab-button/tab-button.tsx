import { FC, ReactNode } from 'react';
import { StyledTabButton } from './assets/tab-button.styles';

const TabButton: FC<{ children: ReactNode; isActive?: boolean }> = ({
  children,
  isActive,
}) => {
  return (
    <StyledTabButton
      sx={(theme) => ({
        ...(isActive
          ? {
              position: 'relative',
              '&:before': {
                position: 'absolute',
                content: '""',
                height: '3px',
                width: '50%',
                background: theme.palette.primary.main,
                bottom: '-1px',
                left: '50%',
                transform: 'translateX(-50%)',
              },
            }
          : {}),
      })}
    >
      {children}
    </StyledTabButton>
  );
};

export default TabButton;
