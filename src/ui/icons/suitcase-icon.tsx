import { FC } from 'react';

const SuitcaseIcon: FC<{ size?: number }> = ({ size = 20 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <clipPath id="clip8_158">
          <rect
            id="svg"
            width="20.000000"
            height="20.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#clip8_158)">
        <path
          id="path"
          d="M2.64 5.97C3.61 5 5.19 5 8.33 5L11.66 5C14.8 5 16.38 5 17.35 5.97C18.33 6.95 18.33 8.52 18.33 11.66C18.33 14.8 18.33 16.38 17.35 17.35C16.38 18.33 14.8 18.33 11.66 18.33L8.33 18.33C5.19 18.33 3.61 18.33 2.64 17.35C1.66 16.38 1.66 14.8 1.66 11.66C1.66 8.52 1.66 6.95 2.64 5.97Z"
          stroke="#9D9DA4"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
        />
        <path
          id="path"
          d="M13.33 5C13.33 3.42 13.33 2.64 12.84 2.15C12.35 1.66 11.57 1.66 9.99 1.66C8.42 1.66 7.64 1.66 7.15 2.15C6.66 2.64 6.66 3.42 6.66 5"
          stroke="#9D9DA4"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
        />
        <path
          id="path"
          d="M14.16 7.5C14.16 7.96 13.79 8.33 13.33 8.33C12.87 8.33 12.5 7.96 12.5 7.5C12.5 7.03 12.87 6.66 13.33 6.66C13.79 6.66 14.16 7.03 14.16 7.5Z"
          fill="#9D9DA4"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
        <path
          id="path"
          d="M7.5 7.5C7.5 7.96 7.12 8.33 6.66 8.33C6.2 8.33 5.83 7.96 5.83 7.5C5.83 7.03 6.2 6.66 6.66 6.66C7.12 6.66 7.5 7.03 7.5 7.5Z"
          fill="#9D9DA4"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default SuitcaseIcon;
