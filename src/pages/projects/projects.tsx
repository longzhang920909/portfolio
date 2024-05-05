import { FC, useState } from 'react';
import Box from '../../ui/box';
import Container from '../../ui/container';
import FilterIcon from '../../ui/icons/filter-icon.tsx';
import FilterChip from './ui/filter-chip';

const Projects: FC = () => {
  const [currentFilter, setCurrentFilter] = useState('static');

  const filters = [
    { label: 'Static', name: 'static' },
    { label: 'Plain JS', name: 'plain' },
    { label: 'SPA', name: 'spa' },
  ];

  const handleSelectFilter = (name: string) => {
    setCurrentFilter(name);
  };

  return (
    <Container>
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
            }}
          >
            {filter.label}
          </FilterChip>
        ))}
      </Box>
    </Container>
  );
};

export default Projects;
