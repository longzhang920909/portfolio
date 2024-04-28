import { FC } from 'react';
import { StyledChip } from './assets/chip.styles.ts';

const Chip: FC<{ color?: 'primary' | 'secondary'; label?: string }> = ({
  color = 'secondary',
  label,
}) => {
  return <StyledChip $color={color}>{label}</StyledChip>;
};

export default Chip;
