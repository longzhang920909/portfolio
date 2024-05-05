import { FC } from 'react';
import { TChipProps } from './assets/chip.model.ts';
import { StyledChip } from './assets/chip.styles.ts';

const Chip: FC<TChipProps> = ({
  color = '#FFFFFF',
  children,
  size = 'small',
  variant = 'filled',
  sx,
}) => {
  return (
    <StyledChip sx={sx} $color={color} $size={size} $variant={variant}>
      {children}
    </StyledChip>
  );
};

export default Chip;
