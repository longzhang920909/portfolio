import styled from "styled-components";

export const StyledBannerWrap = styled('div')(({theme}) => ({
  background: `linear-gradient(180deg, ${theme.palette.primary.extraDark}, transparent)`,
  height: '200px',
  position: 'relative'
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