import React from 'react';

interface PinwheelProps {
  size?: number;
  className?: string;
  color?: string;
}

export const Pinwheel: React.FC<PinwheelProps> = ({
  size = 64,
  className = '',
  color = 'currentColor'
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`pinwheel-icon ${className}`}
      fill={color}
      aria-hidden="true"
    >
      {/* 4 alternating triangles meeting at the center (50,50) to form the geometric pinwheel */}
      <polygon points="50,50 0,0 50,0" />
      <polygon points="50,50 100,0 100,50" />
      <polygon points="50,50 100,100 50,100" />
      <polygon points="50,50 0,100 0,50" />
    </svg>
  );
};

export default Pinwheel;
