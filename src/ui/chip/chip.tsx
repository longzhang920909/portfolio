import { FC } from 'react';
import { TChipProps } from './assets/chip.model.ts';
import { StyledChip } from './assets/chip.styles.ts';

const Chip: FC<TChipProps> = ({
  color = 'secondary',
  children,
  size = 'small',
  variant = 'filled',
}) => {
  return (
    <StyledChip $color={color} $size={size} $variant={variant}>
      {children}
    </StyledChip>
  );
};

export default Chip;
