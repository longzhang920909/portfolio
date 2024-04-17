import { FC } from 'react';
import Container from '../../ui/container';
import Text from '../../ui/text';
import Mark from '../../ui/mark';

const About: FC = () => {
  return (
    <Container>
      <Text as={'h2'} variant={'h3'}>
        Hey there!
      </Text>
      <Text>
        <p>
          My name is Emilia. I specialize in building interactive user
          interfaces with <Mark>React</Mark>, <Mark>Redux</Mark>, and{' '}
          <Mark>TypeScript</Mark>. Besides refining my front-end skills, I'm
          actively delving into <Mark>NodeJS</Mark>, <Mark>Express</Mark>, and{' '}
          <Mark>MongoDB</Mark> for back-end development. I also enjoy designing
          systems and <Mark>architectures</Mark> that streamline the creation of
          scalable applications, making the development process more efficient
          and effective.
        </p>
        <p>
          I'm readily available to collaborate on exciting projects and
          continuously enhance my skill set.
        </p>
      </Text>
    </Container>
  );
};

export default About;
