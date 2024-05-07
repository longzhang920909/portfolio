import { FC } from 'react';
import Filter from '../../components/filter';
import Project from '../../components/project';
import Box from '../../ui/box';
import Container from '../../ui/container';

const Projects: FC = () => {
  const filters = [
    { label: 'Static', name: 'static' },
    { label: 'Plain JS', name: 'plain' },
    { label: 'SPA', name: 'spa' },
  ];

  return (
    <Container>
      <Filter
        filters={filters}
        defaultValue={'static'}
        handleSelect={(filter) => console.log(filter)}
      />
      <Box sx={() => ({ marginTop: '30px' })}>
        <Project />
      </Box>
    </Container>
  );
};

export default Projects;
