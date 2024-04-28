import styled from 'styled-components';
import alpha from '../../../shared/utils/alpha/alpha.ts';
import Box from '../../box';

const StyledChipBase = styled(Box)(() => {
  return {
    fontSize: '12px',
    lineHeight: 1,
    padding: '6px 14px',
    borderRadius: '28px',
    maxWidth: 'max-content',
  };
});

export const StyledChip = styled(StyledChipBase)<{
  $color: 'primary' | 'secondary';
}>(({ theme, $color }) => {
  return {
    backgroundColor: alpha(theme.palette[$color].main, 0.1),
    color: theme.palette[$color].main,
  };
});
