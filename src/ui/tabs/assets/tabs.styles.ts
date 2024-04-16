import styled from 'styled-components';
import Box from '../../box';

export const StyledTabsWrap = styled(Box)(() => ({
  display: 'grid',
  gridAutoFlow: 'column',
  gridAutoColumns: '1fr',
  gridTemplateRows: 'auto',
}));
