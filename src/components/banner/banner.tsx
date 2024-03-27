import {FC, MouseEventHandler, useRef} from "react";
import {StyledBannerWrap} from "./resources/styles.ts";

import './resources/styles.scss';
import useCreateStar from "./utils/use-create-star";

const Banner: FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  const createStar = useCreateStar();
  const handleMouseMove: MouseEventHandler = (e) => {
    createStar(e, bannerRef);
  }

  return (
    <StyledBannerWrap ref={bannerRef} id={'profile-banner'} onMouseMove={handleMouseMove}></StyledBannerWrap>
  )
}

export default Banner