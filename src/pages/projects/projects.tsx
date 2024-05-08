import { FC, useState } from 'react';
import Filter from '../../components/filter';
import Project from '../../components/project';
import Box from '../../ui/box';
import Container from '../../ui/container';
import useProjectData from './utils/data.ts';

const Projects: FC = () => {
  const projects = useProjectData();

  const [currentFilter, setCurrentFilter] = useState('spa');

  const filters = [
    { label: 'SPA', name: 'spa' },
    { label: 'Plain JS', name: 'plain' },
    { label: 'Static', name: 'static' },
  ];

  return (
    <Container>
      <Filter
        filters={filters}
        defaultValue={'spa'}
        handleSelect={(filter) => setCurrentFilter(filter.name)}
      />
      <Box sx={() => ({ marginTop: '30px' })}>
        {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
        {projects
          .filter((project) => project.categories.includes(currentFilter))
          .map(({ categories, ...props }) => (
            <Project {...props} />
          ))}
      </Box>
    </Container>
  );
};

export default Projects;
