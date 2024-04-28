import { FC } from 'react';
import Box from '../box';
import Text from '../text';

const TimelineItem: FC<{
  title: string;
  text: string;
  date: string;
}> = ({ title, text, date }) => {
  console.log(text);
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
        <Box sx={() => ({ marginTop: '14px' })}></Box>
      </Box>
    </Box>
  );
};

export default TimelineItem;
