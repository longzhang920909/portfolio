import { FC, forwardRef, MouseEvent, ReactNode } from 'react';
import { StyledTabButton } from './assets/tab-button.styles';
import { TTab } from '../tabs/assets/tabs.types.ts';
import { TBoxProps } from '../box/assets/box.types.ts';

const TabButton: FC<{
  children: ReactNode;
  isActive?: boolean;
  handleClick?: (e: MouseEvent) => void;
  value: TTab['value'];
  as?: TBoxProps['as'];
}> = forwardRef(({ children, handleClick, value, as = 'div' }, ref) => {
  return (
    <StyledTabButton
      ref={ref}
      as={as}
      className={`tabs-button tabs-button-${value}`}
      id={`${value}`}
      onClick={(e) => {
        handleClick && handleClick(e);
      }}
      sx={() => ({})}
    >
      {children}
    </StyledTabButton>
  );
});

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
