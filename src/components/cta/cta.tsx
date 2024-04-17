import { FC } from 'react';
import Box from '../../ui/box';
import Text from '../../ui/text';

const Cta: FC = () => {
  return (
    <Box
      sx={(theme) => ({
        padding: '12px 24px',
        background: `linear-gradient(135.00deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%);`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      })}
    >
      <Text as={'h2'} variant={'h3'}>
        Got an idea?
      </Text>
    </Box>
  );
};

export default Cta;
