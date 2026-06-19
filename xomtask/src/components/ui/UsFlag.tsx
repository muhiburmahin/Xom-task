export default function UsFlag({ className }: { className?: string }) {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      aria-hidden="true"
      className={`shrink-0 overflow-hidden rounded-[2px] border border-[#E5E7EB] ${className ?? ''}`}
    >
      <rect width="22" height="16" fill="#B22234" />
      <path
        d="M0 1.23h22M0 3.08h22M0 4.92h22M0 6.77h22M0 8.62h22M0 10.46h22M0 12.31h22M0 14.15h22"
        stroke="#fff"
        strokeWidth="1.23"
      />
      <rect width="9" height="8.62" fill="#3C3B6E" />
      <g fill="#fff">
        {[
          [1.5, 1.3],
          [3, 1.3],
          [4.5, 1.3],
          [6, 1.3],
          [7.5, 1.3],
          [2.25, 2.45],
          [3.75, 2.45],
          [5.25, 2.45],
          [6.75, 2.45],
          [1.5, 3.6],
          [3, 3.6],
          [4.5, 3.6],
          [6, 3.6],
          [7.5, 3.6],
          [2.25, 4.75],
          [3.75, 4.75],
          [5.25, 4.75],
          [6.75, 4.75],
          [1.5, 5.9],
          [3, 5.9],
          [4.5, 5.9],
          [6, 5.9],
          [7.5, 5.9],
          [2.25, 7.05],
          [3.75, 7.05],
          [5.25, 7.05],
          [6.75, 7.05],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="0.38" />
        ))}
      </g>
    </svg>
  )
}
