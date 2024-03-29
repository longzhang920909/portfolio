import styled from "styled-components";
import palette from "../../../shared/theme";

export const StyledBannerWrap = styled('div')(() => ({
  background: `linear-gradient(180deg, ${palette.primary.extraDark}, transparent)`,
  height: '200px',
  position: 'relative'
}));

export const StyledDot = styled('div')(() => ({
  position: 'absolute',
  pointerEvents: 'none',
  span: {
    opacity: .8,
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: '100%',
  }
}));