import styled from 'styled-components';
import Box from '../../../ui/box';

export const StyledFooterWrap = styled(Box)(({ theme }) => ({
  marginTop: '50px',
  padding: '10px 48px',
  background: theme.palette.background.light,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));
