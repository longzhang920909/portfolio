import styled from "styled-components";
import palette from "../../../shared/palette";

export const StyledBannerWrap = styled('div')(() => ({
  background: `linear-gradient(180deg, ${palette.primary.extraDark}, transparent)`,
  height: '200px',
  position: 'relative'
}))