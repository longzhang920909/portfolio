import { FC } from 'react';
import Project from '../../components/project';
import Container from '../../ui/container';
import { StyledProjectList } from './assets/projects.styles.ts';
import useProjectData from './utils/data.ts';

const Projects: FC = () => {
  const projects = useProjectData();

  return (
    <Container>
      <StyledProjectList>
        {projects
          .map(({ ...props }) => (
            <Project key={props.title} {...props} />
          ))}
      </StyledProjectList>
    </Container>
  );
};

export default Projects;
