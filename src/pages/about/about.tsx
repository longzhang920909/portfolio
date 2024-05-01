import { FC } from 'react';
import Cta from '../../components/cta';
import Box from '../../ui/box';
import Container from '../../ui/container';
import Mark from '../../ui/mark';
import Text from '../../ui/text';
import TimelineItem from '../../ui/timeline-item';
import { timelineData } from './assets/data.ts';

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
      <Cta sx={() => ({ marginTop: '30px' })} />
      <Text as={'h2'} variant={'h3'} sx={() => ({ marginTop: '40px' })}>
        Work experience
      </Text>
      <Box
        sx={() => ({
          marginTop: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
        })}
      >
        {timelineData.map((props) => (
          <TimelineItem {...props} />
        ))}
      </Box>
    </Container>
  );
};

export default About;
