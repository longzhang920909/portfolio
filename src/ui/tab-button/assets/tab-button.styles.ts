import styled from 'styled-components';
import Box from '../../box';

export const StyledTabButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  cursor: 'pointer',
  '&:hover': {
    background: theme.palette.background.secondary,
  },
}));
