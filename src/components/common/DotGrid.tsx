import React from 'react';

interface DotGridProps {
  rows?: number;
  cols?: number;
  dotSize?: number;
  gap?: number;
  className?: string;
  color?: string;
}

export const DotGrid: React.FC<DotGridProps> = ({
  rows = 4,
  cols = 12,
  dotSize = 7,
  gap = 14,
  className = '',
  color = '#1B263B'
}) => {
  const width = cols * (dotSize + gap) - gap;
  const height = rows * (dotSize + gap) - gap;

  const circles: { cx: number; cy: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      circles.push({
        cx: c * (dotSize + gap) + dotSize / 2,
        cy: r * (dotSize + gap) + dotSize / 2
      });
    }
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className={`dot-grid-svg ${className}`}
      aria-hidden="true"
    >
      {circles.map((circle, index) => (
        <circle
          key={index}
          cx={circle.cx}
          cy={circle.cy}
          r={dotSize / 2}
          fill={color}
        />
      ))}
    </svg>
  );
};

export default DotGrid;
