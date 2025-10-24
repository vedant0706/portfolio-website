import React from "react";

export default function GradientText({
  children,
  className = "",
  colors = ["#40ffaa", "#4079ff", "#40ffaa"],
  animationSpeed = 8, // seconds
  showBorder = false,
}) {
  const gradient = `linear-gradient(90deg, ${colors.join(", ")})`;

  // Inline style used directly on the text <span>
  const textStyle = {
    backgroundImage: gradient,
    backgroundSize: "300% 400%",           // more vertical space so gradient covers full glyph height
    backgroundPosition: "0% 55%",
    WebkitBackgroundClip: "text",          // required for WebKit browsers
    backgroundClip: "text",
    color: "transparent",
    display: "inline-block",               // needed to apply background sizing & positioning reliably
    lineHeight: 1.05,                      // adjust so gradient maps exactly to glyph height; tweak if needed
    animation: `gradientShift ${animationSpeed}s linear infinite`,
    // add optional smoothing hints (not required)
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  };

  // Optional border layer (kept separate so it won't clip the text gradient)
  const borderLayer = showBorder ? (
    <span
      aria-hidden
      className="absolute inset-0 rounded-[1.25rem] -z-10"
      style={{
        backgroundImage: gradient,
        backgroundSize: "300% 100%",
        animation: `gradientShift ${animationSpeed}s linear infinite`,
        filter: "blur(8px) saturate(120%)",
      }}
    />
  ) : null;

  return (
    <span className={`relative inline-block ${className}`}>
      {borderLayer}

      <span style={{ padding: "0 .25rem", borderRadius: "0.25rem", display: "inline-block" }}>
        <span style={textStyle} className="font-medium">
          {children}
        </span>
      </span>

      {/* local keyframes so component is self-contained */}
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
