import {CSSProperties, FC, MouseEventHandler, useEffect, useRef, useState} from "react";
import {StyledBannerWrap, StyledDot} from "./resources/styles.ts";

import './resources/styles.scss';
import useCreateStar from "./utils/use-create-star";
import createGlow from "./utils/create-glow";

const Banner: FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  const [dots, setDots] = useState<{style: CSSProperties}[]>([]);

  const shineAnimations = ['shine-1', 'shine-2'];

  useEffect(() => {
    // random number from 30 to 60
    const randomNumber = Math.floor(Math.random() * (60 - 30 + 1)) + 30;

    if (bannerRef.current) {
      const dots = [];

      const width = Math.floor(bannerRef.current.offsetWidth);
      const height = Math.floor(bannerRef.current.offsetHeight);

      for (let i = 0; i <= randomNumber; i++) {
        const randomX = Math.floor(Math.random() * width);
        const randomY = Math.floor(Math.random() * height);
        const randomSize = Math.floor((Math.random() * 3)) + 1;

        const randomDelay = Math.floor(Math.random() * 10);
        const randomAnimation = shineAnimations[Math.floor(Math.random() * 2)]

        dots[i] = {
          style: {
            width: randomSize,
            height: randomSize,
            top: randomY,
            left: randomX,
            animation: `${randomAnimation} 1.5s ease ${randomDelay}s infinite alternate`
          }
        }
      }

      setDots(dots);
    }

  }, [])

  const createStar = useCreateStar();
  const handleMouseMove: MouseEventHandler = (e) => {
    createStar(e, bannerRef);
    createGlow(e, bannerRef);
  }

  return (
    <StyledBannerWrap ref={bannerRef} id={'profile-banner'} onMouseMove={handleMouseMove}>
      {dots.map((dot, i) => (
        <StyledDot key={i} style={dot.style}><span></span></StyledDot>
      ))}
    </StyledBannerWrap>
  )
}

export default Banner