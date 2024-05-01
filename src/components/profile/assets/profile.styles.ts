import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

export const StyledProfilePicture = styled('div')(({ theme }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 575px)' });

  const pfpSize = isMobile ? 120 : 160;

  return {
    width: pfpSize,
    height: pfpSize,
    marginTop: (pfpSize - pfpSize / 2) * -1,
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
