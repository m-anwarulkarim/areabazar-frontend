import React from "react";

type LogoSize = "sm" | "md" | "lg" | "xl";
type LogoVariant = "full" | "icon" | "wordmark";

interface AreaBazarLogoProps {
  size?: LogoSize;
  variant?: LogoVariant;
  className?: string;
  /** Override the pill background color */
  bgColor?: string;
  /** Dark mode: set to true for a dark-background version */
  dark?: boolean;
}

const sizeMap: Record<LogoSize, { width: number; height: number }> = {
  sm: { width: 180, height: 54 },
  md: { width: 280, height: 84 },
  lg: { width: 400, height: 120 },
  xl: { width: 560, height: 168 },
};

export const AreaBazarLogo: React.FC<AreaBazarLogoProps> = ({
  size = "md",
  variant = "full",
  className = "",
  dark = false,
}) => {
  const { width, height } = sizeMap[size];

  if (variant === "icon") {
    return (
      <svg
        width={height}
        height={height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        role="img"
        aria-label="AreaBazar icon"
      >
        <defs>
          <linearGradient id="ab-pin-icon" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1D9E75" />
            <stop offset="100%" stopColor="#0F6E56" />
          </linearGradient>
          <linearGradient id="ab-dot-icon" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5DCAA5" />
            <stop offset="100%" stopColor="#1D9E75" />
          </linearGradient>
          <filter id="ab-icon-shadow">
            <feDropShadow
              dx="0"
              dy="3"
              stdDeviation="4"
              floodColor="#085041"
              floodOpacity="0.25"
            />
          </filter>
        </defs>

        {/* Pill background */}
        <rect
          x="8"
          y="8"
          width="84"
          height="84"
          rx="42"
          fill={dark ? "#0A2E25" : "#E1F5EE"}
        />

        {/* Pin */}
        <g filter="url(#ab-icon-shadow)">
          <path
            d="M50 22 C38 22 30 31 30 42 C30 58 50 78 50 78 C50 78 70 58 70 42 C70 31 62 22 50 22Z"
            fill="url(#ab-pin-icon)"
          />
          <circle cx="50" cy="42" r="10" fill="white" opacity="0.95" />
          <circle cx="50" cy="42" r="4.5" fill="url(#ab-dot-icon)" />
        </g>

        {/* Price tag lines (small badge) */}
        <rect
          x="62"
          y="35"
          width="20"
          height="14"
          rx="4"
          fill={dark ? "#085041" : "#9FE1CB"}
          opacity="0.9"
        />
        <line
          x1="66"
          y1="40"
          x2="78"
          y2="40"
          stroke="#1D9E75"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <line
          x1="66"
          y1="44"
          x2="75"
          y2="44"
          stroke="#1D9E75"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (variant === "wordmark") {
    return (
      <svg
        width={width}
        height={Math.round(height * 0.5)}
        viewBox="0 0 400 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        role="img"
        aria-label="AreaBazar"
      >
        <defs>
          <linearGradient id="ab-wm-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1D9E75" />
            <stop offset="100%" stopColor="#0F6E56" />
          </linearGradient>
        </defs>
        <text
          x="0"
          y="46"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="52"
          fontWeight="700"
          fill={dark ? "#9FE1CB" : "#085041"}
          letterSpacing="-1"
        >
          Area
        </text>
        <text
          x="148"
          y="46"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="52"
          fontWeight="700"
          fill="url(#ab-wm-grad)"
          letterSpacing="-1"
        >
          Bazar
        </text>
      </svg>
    );
  }

  // Full variant (default)
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 560 168"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="AreaBazar — Your Local Marketplace"
    >
      <defs>
        <linearGradient id="ab-pin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1D9E75" />
          <stop offset="100%" stopColor="#0F6E56" />
        </linearGradient>
        <linearGradient id="ab-dot" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5DCAA5" />
          <stop offset="100%" stopColor="#1D9E75" />
        </linearGradient>
        <linearGradient id="ab-tag" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={dark ? "#085041" : "#E1F5EE"} />
          <stop offset="100%" stopColor={dark ? "#0F6E56" : "#9FE1CB"} />
        </linearGradient>
        <filter id="ab-shadow">
          <feDropShadow
            dx="0"
            dy="5"
            stdDeviation="10"
            floodColor="#0F6E56"
            floodOpacity="0.18"
          />
        </filter>
        <filter id="ab-pin-shadow">
          <feDropShadow
            dx="0"
            dy="6"
            stdDeviation="6"
            floodColor="#085041"
            floodOpacity="0.22"
          />
        </filter>
      </defs>

      {/* Pill background */}
      <rect
        x="4"
        y="20"
        width="552"
        height="130"
        rx="65"
        fill={dark ? "#0A2E25" : "#F1FFFA"}
        stroke={dark ? "#0F6E56" : "#9FE1CB"}
        strokeWidth="1.2"
        filter="url(#ab-shadow)"
      />

      {/* Location pin */}
      <g filter="url(#ab-pin-shadow)">
        <path
          d="M94 40 C74 40 60 53 60 70 C60 93 94 120 94 120 C94 120 128 93 128 70 C128 53 114 40 94 40Z"
          fill="url(#ab-pin)"
        />
        <circle cx="94" cy="70" r="14" fill="white" opacity="0.95" />
        <circle cx="94" cy="70" r="6" fill="url(#ab-dot)" />
      </g>

      {/* Price tag badge */}
      <rect
        x="128"
        y="58"
        width="38"
        height="26"
        rx="7"
        fill="url(#ab-tag)"
        stroke="#5DCAA5"
        strokeWidth="0.8"
      />
      <circle cx="136" cy="71" r="3" fill="#1D9E75" opacity="0.5" />
      <line
        x1="143"
        y1="65"
        x2="160"
        y2="65"
        stroke="#1D9E75"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.65"
      />
      <line
        x1="143"
        y1="71"
        x2="161"
        y2="71"
        stroke="#1D9E75"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.65"
      />
      <line
        x1="143"
        y1="77"
        x2="157"
        y2="77"
        stroke="#1D9E75"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.65"
      />

      {/* Wordmark */}
      <text
        x="182"
        y="100"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="62"
        fontWeight="700"
        fill={dark ? "#9FE1CB" : "#085041"}
        letterSpacing="-1"
      >
        Area
      </text>
      <text
        x="360"
        y="100"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="62"
        fontWeight="700"
        fill="url(#ab-pin)"
        letterSpacing="-1"
      >
        Bazar
      </text>

      {/* Tagline */}
      {/* Tagline */}
      <text
        x="280"
        y="130"
        textAnchor="middle"
        fontFamily="'Inter', 'Poppins', sans-serif"
        fontSize="13"
        fontWeight="500"
        fill={dark ? "#7CE0C3" : "#065F46"}
        letterSpacing="1.8"
        opacity="0.9"
      >
        Find & Buy from Your Local Marketplace
      </text>

      {/* Dot accents around tagline */}
      <circle cx="102" cy="126" r="2" fill="#5DCAA5" opacity="0.5" />
      <circle cx="458" cy="126" r="2" fill="#5DCAA5" opacity="0.5" />
    </svg>
  );
};

export default AreaBazarLogo;
