"use client";

type SparklineProps = {
  data: number[];
  positive?: boolean;
  width?: number;
  height?: number;
};

export default function Sparkline({
  data,
  positive = true,
  width = 120,
  height = 36,
}: SparklineProps) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((v - min) / range) * (height - 4) - 2;
      return `${x},${y}`;
    })
    .join(" ");

  const areaPoints = `0,${height} ${points} ${width},${height}`;
  const color = positive ? "#10b981" : "#E63946";
  const gradId = `grad-${positive ? "up" : "down"}-${Math.random().toString(36).slice(2, 7)}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="overflow-visible"
    >
      <defs>
        <linearGradient id={gradId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.45" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill={`url(#${gradId})`} />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={width}
        cy={
          height -
          ((data[data.length - 1] - min) / range) * (height - 4) -
          2
        }
        r="2.5"
        fill={color}
      />
    </svg>
  );
}
