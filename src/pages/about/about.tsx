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
          Able to work with amazing speed and accuracy.
        </p>

        <p>
          Advanced FullStack deveoper capable of various kinds of frameworks and blockchain contracts
        </p>

        <p>
          Fluent in web & blockchain development fields along with high qualified codes.
        </p>
        <p>
          My major covers <Mark>Web Technologies</Mark> and <Mark>Blockchain</Mark> fields.
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
