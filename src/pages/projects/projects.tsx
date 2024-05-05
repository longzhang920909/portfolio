import { FC } from 'react';
import Box from '../../ui/box';
import Container from '../../ui/container';
import FilterIcon from '../../ui/icons/filter-icon.tsx';
import FilterChip from './ui/filter-chip';

const Projects: FC = () => {
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
        <FilterChip isActive={true}>Static</FilterChip>
        <FilterChip isActive={false}>Plain JS</FilterChip>
        <FilterChip isActive={false}>SPA</FilterChip>
      </Box>
    </Container>
  );
};

export default Projects;
