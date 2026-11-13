import { useState } from 'react'

// The logo mark: a hexagon with an HG monogram, matching the HG Web Developments logo.
export function HexMark({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <polygon
        points="50,3 91,26.5 91,73.5 50,97 9,73.5 9,26.5"
        fill="#14171c"
        stroke="#f0621c"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <text
        x="50"
        y="63"
        textAnchor="middle"
        className="font-display"
        fontWeight="700"
        fontSize="34"
        fill="#f0621c"
      >
        HG
      </text>
    </svg>
  )
}

// A hexagon-cropped portrait with an orange outline that draws itself on load.
export function HexPortrait({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative aspect-[100/115.47] ${className}`}>
      <svg
        viewBox="0 0 100 115.47"
        className="absolute inset-0 h-full w-full translate-x-[6%] translate-y-[4%] overflow-visible"
        aria-hidden="true"
      >
        <polygon
          points="50,0 100,28.87 100,86.6 50,115.47 0,86.6 0,28.87"
          fill="none"
          stroke="#f0621c"
          strokeWidth="3"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          pathLength="1"
          className="hex-draw"
        />
      </svg>
      <div className="absolute inset-0 bg-night [clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)]">
        {src && !failed ? (
          <img
            src={src}
            alt={alt}
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={alt}
            className="flex h-full w-full items-center justify-center font-display text-7xl font-bold text-ember"
          >
            HG
          </div>
        )}
      </div>
    </div>
  )
}
