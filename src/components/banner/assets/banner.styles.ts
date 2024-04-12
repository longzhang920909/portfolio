import styled from "styled-components";

export const StyledBannerWrap = styled('div')(({theme}) => ({
  background: `linear-gradient(180deg, ${theme.palette.primary.extraDark}, transparent)`,
  height: '200px',
  position: 'relative',
  '& .particle, .glow': {
    position: 'absolute',
    pointerEvents: 'none'
  },
  '& .glow': {
    width: '1px',
    height: '1px',
    background: 'rgba(255, 255, 255, 0)',
    boxShadow: '0 0 20px 10px rgba(222, 91, 255, 0.1)',
  }
}));

export const StyledDot = styled('div')(() => ({
  position: 'absolute',
  pointerEvents: 'none',
  span: {
    opacity: .6,
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: '100%',
  }
}));