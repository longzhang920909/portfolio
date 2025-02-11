import { FC } from 'react';
import Cta from '../../components/cta';
import Box from '../../ui/box';
import Container from '../../ui/container';
import Mark from '../../ui/mark';
import Text from '../../ui/text';
import TimelineItem from '../../ui/timeline-item';
import useTimelineData from './utils/use-timeline-data';

const About: FC = () => {
  const timelineData = useTimelineData();
  return (
    <Container>
      <Text as={'h2'} variant={'h3'}>
        Hey there!
      </Text>
      <Text>
        <p>
          I’m a front-end developer with over three years of experience building user-friendly,
          scalable applications with <Mark>TypeScript</Mark>, <Mark>React</Mark>, and <Mark>Next.js</Mark>.
          I enjoy crafting intuitive interfaces, optimizing performance,
          and designing efficient system architectures.
        </p>

        <p>
          I’ve worked on CRM and HRM platforms, <Mark>UI libraries</Mark>, and business tools,
          integrating <Mark>REST API</Mark>, <Mark>GraphQL</Mark>, and real-time updates.
          While front-end development is my focus,
          I also explore back-end technologies like Node.js, Express,
          and databases to gain a deeper understanding of the overall development process.
        </p>

        <p>
          Always open to exciting projects and new challenges!
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
