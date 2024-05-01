import { FC, ReactNode } from 'react';
import Box from '../box/box.tsx';
import Text from '../text';
import { StyledUiLink } from './assets/ui-link.styles.ts';

const UiLink: FC<{
  icon?: ReactNode;
  label: string;
  href: string;
  size?: 'medium' | 'small';
}> = ({ icon, label, href, size = 'medium' }) => {
  return (
    <StyledUiLink as={'a'} href={href}>
      {icon && (
        <Box as={'span'} sx={() => ({ width: 20, height: 20 })}>
          {icon}
        </Box>
      )}
      <Text as={'span'} variant={size === 'medium' ? 'main' : 'small'}>
        {label}
      </Text>
    </StyledUiLink>
  );
};

export default UiLink;
