import { FC } from 'react';
import Box from '../../ui/box';
import Text from '../../ui/text';
import Button from '../../ui/button';
import { TBoxProps } from '../../ui/box/assets/box.types.ts';

const Cta: FC<{ sx?: TBoxProps['sx'] }> = ({ sx }) => {
  return (
    <Box
      sx={(theme) => ({
        padding: '12px 24px',
        background: `linear-gradient(135.00deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%);`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...(sx?.(theme) || {}),
      })}
    >
      <Text as={'h2'} variant={'h3'}>
        Got an idea?
      </Text>
      <Button variant={'secondary'}>Let's chat!</Button>
    </Box>
  );
};

export default Cta;
