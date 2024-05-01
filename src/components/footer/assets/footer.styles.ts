import styled from 'styled-components';
import Box from '../../../ui/box';

export const StyledFooterWrap = styled(Box)(({ theme }) => ({
  marginTop: '50px',
  padding: '10px 48px',
  background: theme.palette.background.light,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@media (max-width: 575px)': {
    padding: '10px 24px',
    display: 'block',
  },
}));

export const StyledFooterMenu = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  '@media (max-width: 575px)': {
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '16px',
    // flexDirection: 'column',
  },
}));
