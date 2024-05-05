import { FC } from 'react';
import { TChipProps } from './assets/chip.model.ts';
import { StyledChip } from './assets/chip.styles.ts';

const Chip: FC<TChipProps> = ({
  color = '#FFFFFF',
  children,
  size = 'small',
  variant = 'filled',
  sx,
  onClick,
}) => {
  return (
    <StyledChip
      sx={sx}
      $color={color}
      $size={size}
      $variant={variant}
      onClick={onClick}
    >
      {children}
    </StyledChip>
  );
};

export default Chip;
