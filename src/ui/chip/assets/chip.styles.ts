import styled from 'styled-components';
import Box from '../../box';

const StyledChipBase = styled(Box)(() => {
  return {
    fontSize: '12px',
    lineHeight: 1,
    padding: '6px 14px',
  };
});

export const StyledChip = styled(StyledChipBase)<{
  $color: 'primary' | 'secondary';
}>(() => {
  return {};
});
