import styled from 'styled-components';
import alpha from '../../../shared/utils/alpha/alpha.ts';
import Box from '../../box';
import { TChipProps } from './chip.model.ts';

const sizes = {
  small: {
    fontSize: '12px',
    padding: '6px 14px',
  },
  medium: {
    fontSize: '14px',
    padding: '8px 16px',
  },
};

const getVariant = (
  color: string,
  variant: NonNullable<TChipProps['variant']>,
) => {
  const variants = {
    filled: {},
    outlined: {
      border: `${color} 1px solid`,
    },
  };
  return {
    backgroundColor: alpha(color, 0.1),
    color: color,
    ...variants[variant],
  };
};

const StyledChipBase = styled(Box)(() => {
  return {
    lineHeight: 1,
    borderRadius: '28px',
    maxWidth: 'max-content',
  };
});

export const StyledChip = styled(StyledChipBase)<{
  $color: NonNullable<TChipProps['color']>;
  $size: NonNullable<TChipProps['size']>;
  $variant: NonNullable<TChipProps['variant']>;
}>(({ $color, $size, $variant }) => {
  return {
    transition: 'all .3s',
    ...sizes[$size],
    ...getVariant($color, $variant),
  };
});
