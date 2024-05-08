import { FC } from 'react';
import Box from '../box/box';
import Text from '../text';
import { TUiLinkProps } from './assets/ui-link.model';
import { StyledUiLink } from './assets/ui-link.styles';

const UiLink: FC<TUiLinkProps> = ({
  icon,
  label,
  href,
  size = 'medium',
  iconPosition = 'left',
  as = 'a',
  ...props
}) => {
  const textSize = {
    medium: 'main',
    small: 'small',
  };
  return (
    <StyledUiLink
      className={'link'}
      as={as}
      href={href}
      $size={size}
      $iconPosition={iconPosition}
      {...props}
    >
      {icon && (
        <Box as={'span'} className={'link-icon'}>
          {icon}
        </Box>
      )}
      <Text as={'span'} variant={textSize[size] as 'small' | 'main'}>
        {label}
      </Text>
    </StyledUiLink>
  );
};

export default UiLink;
