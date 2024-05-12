import styled from 'styled-components';
import Box from '../../../ui/box';
import Text from '../../../ui/text';

export const StyledProjectWrap = styled(Box)(() => {
  return {
    display: 'grid',
    gridTemplateColumns: '180px 1fr',
    gap: '16px',
    '@media (max-width: 575px)': {
      gridTemplateColumns: 'clamp(50px, 14vw, 180px) 1fr',
    },
  };
});

export const StyledProjectThumbnail = styled(Box)(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.light,
    borderRadius: '8px',
    overflow: 'hidden',
    width: '100%',
    aspectRatio: '1 / 0.6667',
    '& img': {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
    '@media (max-width: 575px)': {
      marginTop: '4px',
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
