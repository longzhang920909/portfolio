import { FC } from 'react';
import Box from '../box';
import Text from '../text';

const text =
  'Are sentiments apartments decisively the especially alteration. Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced.\nLed income months itself and houses you. After nor you leave might share court balls.';

const TimelineItem: FC = () => {
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
        <Text variant={'small'}>Jul 2023 - present</Text>
      </Box>
      <Box>
        <Text as={'h3'} variant={'h4'}>
          Front-end developer (React)
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
