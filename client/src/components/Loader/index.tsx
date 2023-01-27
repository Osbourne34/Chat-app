import { FC } from 'react';

export const Loader: FC = () => {
  return (
    <svg width="104px" height="104px" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="44"
        strokeWidth="10"
        stroke="#2563eb"
        strokeDasharray="69.11503837897544 69.11503837897544"
        fill="none"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;1"
          values="0 50 50;360 50 50"
        ></animateTransform>
      </circle>
    </svg>
  );
};
