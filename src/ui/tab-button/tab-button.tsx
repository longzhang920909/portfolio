import { FC, forwardRef, MouseEvent, ReactNode } from 'react';
import { StyledTabButton } from './assets/tab-button.styles';

const TabButton: FC<{
  children: ReactNode;
  isActive?: boolean;
  handleClick?: (e: MouseEvent) => void;
}> = forwardRef(
  (
    {
      children,
      handleClick,
      // isActive,
    },
    ref,
  ) => {
    return (
      <StyledTabButton
        ref={ref}
        className={'tabs-button'}
        onClick={(e) => {
          handleClick && handleClick(e);
        }}
        sx={() => ({})}
      >
        {children}
      </StyledTabButton>
    );
  },
);

export default TabButton;

// ...(isActive
//   ? {
//     position: 'relative',
//     '&:before': {
//       position: 'absolute',
//       content: '""',
//       height: '3px',
//       width: '50%',
//       background: theme.palette.primary.main,
//       bottom: '-1px',
//       left: '50%',
//       transform: 'translateX(-50%)',
//     },
//   }
//   : {})
