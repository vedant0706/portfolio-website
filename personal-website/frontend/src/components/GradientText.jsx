import React from "react";

export default function GradientText({
  children,
  className = "",
  colors = ["#40ffaa", "#4079ff", "#40ffaa"],
  animationSpeed = 8,
  showBorder = false,
}) {
  const gradient = `linear-gradient(90deg, ${colors.join(", ")})`;

  const textStyle = {
    backgroundImage: gradient,
    backgroundSize: "300% 400%",
    backgroundPosition: "0% 55%",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    display: "inline-block",
    lineHeight: 1.10,
    animation: `gradientShift ${animationSpeed}s linear infinite`,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  };

  const borderLayer = showBorder ? (
    <span
      aria-hidden
      className="absolute inset-0 rounded-[1.25rem] -z-10"
      style={{
        backgroundImage: gradient,
        backgroundSize: "300% 100%",
        animation: `gradientShift ${animationSpeed} linear infinite`,
        filter: "blur(8px) saturate(120%)",
      }}
    />
  ) : null;

  return (
    <span className={`relative inline-block ${className}`}>
      {borderLayer}

      <span
        style={{
          padding: "0.25rem",
          borderRadius: "0.25rem",
          display: "inline-block",
        }}
      >
        <span style={textStyle} className="font-medium">
          {children}
        </span>
      </span>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </span>
  );
}
