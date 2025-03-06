import styled from 'styled-components';

const pfpSize = 100;

export const StyledProfileWrap = styled('div')(() => {
  return {
    marginTop: (pfpSize - pfpSize / 2) * -1,
    display: 'flex',
    alignItems: 'center',
    gap: 18,
  };
});

export const StyledProfilePicture = styled('div')(({ theme }) => {
  return {
    width: pfpSize,
    height: pfpSize,
    borderRadius: '100%',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 10,
    border: '6px solid',
    borderColor: theme.palette.background.main,
    background: '#ccc',
    '&:hover': {
      img: {
        transform: 'scale(1.1)',
      },
    },
    '& img': {
      width: '100%',
      height: '100%',
      transition: 'all .3s',
    },
    '@media (max-width: 575px)': {},
  };
});
