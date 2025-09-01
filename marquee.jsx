import React from "react";
import "./marquee.css";

export function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  duration = "40s",
  ...props
}) {
  const containerClass = `marquee-container ${vertical ? 'marquee-vertical' : 'marquee-horizontal'} ${className}`;
  const itemClass = `marquee-content ${vertical ? 'marquee-content-vertical' : 'marquee-content-horizontal'} ${pauseOnHover ? 'pause-on-hover' : ''} ${reverse ? 'reverse' : ''}`;

  return (
    <div
      {...props}
      className={containerClass}
      style={{ '--duration': duration, '--gap': '1rem' }}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={itemClass}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
