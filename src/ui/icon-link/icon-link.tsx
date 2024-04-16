import { FC, ReactNode } from 'react';
import Box from '../box/box.tsx';
import Text from '../text';

const IconLink: FC<{
  icon: ReactNode;
  label: string;
  href: string;
  size?: 'medium' | 'small';
}> = ({ icon, label, href, size = 'medium' }) => {
  return (
    <Box
      as={'a'}
      href={href}
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '.5em',
        textDecoration: 'none',
        color: theme.palette.text.secondary,
        lineHeight: 1,
        transition: 'all .3s',
        '&:hover': {
          color: theme.palette.text.primary,
        },
      })}
    >
      <Box as={'span'} sx={() => ({ width: 20, height: 20 })}>
        {icon}
      </Box>
      <Text as={'span'} variant={size === 'medium' ? 'main' : 'small'}>
        {label}
      </Text>
    </Box>
  );
};

export default IconLink;
