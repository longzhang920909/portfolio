import styled from 'styled-components';

export const StyledBox = styled('div')<{ $ownStyle: any }>(({ $ownStyle }) => ({
  ...$ownStyle,
}));
