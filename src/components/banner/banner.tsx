import {FC, MouseEventHandler, useRef, useState} from "react";
import {StyledBannerWrap} from "./resources/styles.ts";

const Banner: FC = () => {
  const bannerRef = useRef<HTMLDivElement | null>(null);

  const [particles, setParticles] = useState<any[]>([]);

  const handleMouseMove: MouseEventHandler = (e) => {
    setParticles(state => [...state, {
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    }])
  }

  console.log(particles)

  return (
    <StyledBannerWrap ref={bannerRef} id={'profile-banner'} onMouseMove={handleMouseMove}></StyledBannerWrap>
  )
}

export default Banner