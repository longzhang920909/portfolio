import styled from 'styled-components';
import Box from '../box';

const Container = styled(Box)(() => ({
  maxWidth: '572px',
  margin: '0 auto',
  '@media (max-width: 767px)': {
    padding: '0 14px',
  },
}));

export default Container;
