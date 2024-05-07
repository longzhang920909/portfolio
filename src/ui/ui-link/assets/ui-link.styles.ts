import styled, { CSSObject } from 'styled-components';
import Box from '../../box';
import { TUiLinkProps } from './ui-link.model.ts';

const linkIconStyles = {
  medium: {
    height: '20px',
  },
  small: {
    height: '12px',
  },
};

const wrapStyles: { [key: string]: CSSObject } = {
  left: {},
  right: {
    flexDirection: 'row-reverse',
  },
};

export const StyledUiLink = styled(Box)<{
  $iconPosition: NonNullable<TUiLinkProps['iconPosition']>;
  $size: NonNullable<TUiLinkProps['size']>;
}>(({ theme, $size, $iconPosition }) => {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '.5em',
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    lineHeight: 1,
    transition: 'all .3s',
    ...wrapStyles[$iconPosition],
    '&:hover': {
      color: theme.palette.text.primary,
    },
    '& .link-icon': {
      ...linkIconStyles[$size],
    },
  };
});
