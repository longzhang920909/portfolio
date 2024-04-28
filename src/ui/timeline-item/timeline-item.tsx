import { FC } from 'react';
import Box from '../box';
import Chip from '../chip';
import Text from '../text';
import { TTimelineItemProps } from './assets/timeline-item.types.ts';

const TimelineItem: FC<TTimelineItemProps> = ({ title, text, date }) => {
  return (
    <Box
      sx={() => ({
        display: 'grid',
        gridTemplateColumns: '82px 1fr',
        gridTemplateRows: 'auto',
        columnGap: '18px',
      })}
    >
      <Box>
        <Text variant={'small'}>{date}</Text>
      </Box>
      <Box>
        <Text as={'h3'} variant={'h4'}>
          {title}
        </Text>
        <Text variant={'small'} sx={() => ({ marginTop: '8px' })}>
          {text.split('\n').map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </Text>
        <Box sx={() => ({ marginTop: '14px' })}>
          <Chip>TypeScript</Chip>
        </Box>
      </Box>
    </Box>
  );
};

export default TimelineItem;
