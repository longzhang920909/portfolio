import { FC, useState } from 'react';
import Filter from '../../components/filter';
import Project from '../../components/project';
import Container from '../../ui/container';
import { StyledProjectList } from './assets/projects.styles.ts';
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
      <StyledProjectList>
        {projects
          .filter((project) => project.categories.includes(currentFilter))
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .map(({ categories, ...props }) => (
            <Project key={props.title} {...props} />
          ))}
      </StyledProjectList>
    </Container>
  );
};

export default Projects;
