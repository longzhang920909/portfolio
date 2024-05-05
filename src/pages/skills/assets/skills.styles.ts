import styled from 'styled-components';
import Box from '../../../ui/box';

export const StyledChipBlock = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '14px',
}));

export const StyledSkillGroup = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
}));

export const StyledSkillsWrap = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  marginTop: '16px',
}));
