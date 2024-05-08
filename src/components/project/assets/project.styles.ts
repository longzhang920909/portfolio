import styled from 'styled-components';
import Box from '../../../ui/box';
import Text from '../../../ui/text';

export const StyledProjectWrap = styled(Box)(() => {
  return {
    display: 'grid',
    gridTemplateColumns: '180px 1fr',
    gap: '16px',
  };
});

export const StyledProjectThumbnail = styled(Box)(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.light,
    height: '120px',
    borderRadius: '8px',
    overflow: 'hidden',
    '& img': {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
  };
});

export const StyledProjectTitle = styled(Text)(() => {
  return {
    fontWeight: 500,
    display: 'flex',
    gap: '8px',
    cursor: 'pointer',
    '& svg': {
      marginTop: '8px',
    },
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    },
  };
});

export const StyledProjectChips = styled(Box)(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
    marginTop: '14px',
  };
});

export const StyledProjectLinks = styled(Box)(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    flexWrap: 'wrap',
    marginTop: '14px',
  };
});
