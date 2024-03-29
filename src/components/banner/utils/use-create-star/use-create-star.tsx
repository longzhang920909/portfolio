import {MutableRefObject, MouseEvent as ReactMouseEvent} from "react";
import makeStarSvg from "../make-star-svg";

const useCreateStar = () => {
  let prevX = 0;
  let prevY = 0;

  const colors = ['#AC75FF', '#FF67D5', '#FF9F74', '#F9F871'];
  const fallAnimations = ['fall-1', 'fall-2', 'fall-3'];

  return (e: ReactMouseEvent, parentRef: MutableRefObject<HTMLDivElement | null>) => {
    const currX = e.nativeEvent.offsetX;
    const currY = e.nativeEvent.offsetY;

    const deltaX = currX - prevX;
    const deltaY = currY - prevY;
    const distanceMoved = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    const spawnDistanceThreshold = 70;

    if (parentRef.current && distanceMoved >= spawnDistanceThreshold) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomAnimation = fallAnimations[Math.floor(Math.random() * fallAnimations.length)];

      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.innerHTML = makeStarSvg({color: randomColor})

      particle.style.top = currY + 'px';
      particle.style.left = currX + 'px';
      particle.style.animation = `${randomAnimation} 1.5s ease 0s`;
      particle.style.animationFillMode = 'forwards';

      parentRef.current.appendChild(particle);

      setTimeout(() => {
        if (parentRef.current) {
          parentRef.current.removeChild(particle);
        }
      }, 1000);

      prevX = currX;
      prevY = currY;
    }
  }
}

export default useCreateStar