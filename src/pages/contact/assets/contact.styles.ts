import styled from 'styled-components';
import Box from '../../../ui/box';

export const StyledContactLinks = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '16px',
}));

export const StyledContactBlock = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginTop: '16px',
}));
