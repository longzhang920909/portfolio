import { FC } from 'react';
import { useTheme } from 'styled-components';
import Chip from '../../../../ui/chip';
import { TFilterChipProps } from './assets/filter-chip.model.ts';

const FilterChip: FC<TFilterChipProps> = ({ isActive, children }) => {
  const theme = useTheme();
  const color = isActive
    ? theme.palette.primary.main
    : theme.palette.text.secondary;
  return (
    <Chip
      color={color}
      sx={() => ({ cursor: 'pointer' })}
      size={'medium'}
      variant={'outlined'}
    >
      {children}
    </Chip>
  );
};

export default FilterChip;
