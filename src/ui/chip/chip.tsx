import { FC } from 'react';
import { StyledChip } from './assets/chip.styles.ts';

const Chip: FC<{ color?: 'primary' | 'secondary'; children?: string }> = ({
  color = 'secondary',
  children,
}) => {
  return <StyledChip $color={color}>{children}</StyledChip>;
};

export default Chip;
