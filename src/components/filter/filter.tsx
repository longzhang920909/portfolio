import { FC, useState } from 'react';
import Box from '../../ui/box';
import FilterIcon from '../../ui/icons/filter-icon.tsx';
import { TFilterProps } from './assets/filter.model.ts';
import FilterChip from './ui/filter-chip';

const Filter: FC<TFilterProps> = ({ filters, handleSelect, defaultValue }) => {
  const [currentFilter, setCurrentFilter] = useState(defaultValue);

  const handleSelectFilter = (name: string) => {
    setCurrentFilter(name);
  };
  
  return (
    <Box
      sx={() => ({
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
      })}
    >
      <FilterIcon />
      {filters.map((filter) => (
        <FilterChip
          isActive={currentFilter === filter.name}
          handleClick={() => {
            handleSelectFilter(filter.name);
            handleSelect && handleSelect(filter);
          }}
        >
          {filter.label}
        </FilterChip>
      ))}
    </Box>
  );
};

export default Filter;
