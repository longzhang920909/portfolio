import styled from 'styled-components';
import Box from '../../box';

export const StyledUiLink = styled(Box)(({ theme }) => ({
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
}));
