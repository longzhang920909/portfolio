import styled from 'styled-components';
import Box from '../../../ui/box';

export const StyledTabsWrap = styled(Box)(() => ({
  position: 'relative',
  display: 'grid',
  gridAutoFlow: 'column',
  gridAutoColumns: '1fr',
  gridTemplateRows: 'auto',
}));
