import React from "react";
import LightRays from "../components/LightRays.jsx";
import { useTheme } from "@/context/ThemeContext.jsx";

const Background = () => {
  const {isDark} = useTheme();
  return (
    <div style={{ width: "100%", height: "100%", position: "fixed", backgroundColor: isDark ? "black" : "whitesmoke"}}>
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
    </div>
  );
};

export default Background;
