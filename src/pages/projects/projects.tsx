import { FC } from 'react';
import Filter from '../../components/filter';
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
    </Container>
  );
};

export default Projects;
