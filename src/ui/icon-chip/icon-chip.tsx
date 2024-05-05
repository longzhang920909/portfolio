import { FC, ReactNode } from 'react';
import alpha from '../../shared/utils/alpha/alpha.ts';
import Box from '../box';
import Text from '../text';

const IconChip: FC<{ icon: ReactNode; label?: string; color?: string }> = ({
  icon,
  label,
  color = '#FFFFFF',
}) => {
  return (
    <Box
      sx={() => ({
        padding: '8px 16px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        borderRadius: '28px',
        background: alpha(color, 0.1),
        '& .icon-chip-label': {
          fontWeight: 500,
          lineHeight: 1,
        },
        '& .icon-chip-svg': {
          width: '20px',
          height: '20px',
        },
      })}
    >
      <Box className={'icon-chip-svg'}>{icon}</Box>
      <Text className={'icon-chip-label'}>{label}</Text>
    </Box>
  );
};

export default IconChip;
