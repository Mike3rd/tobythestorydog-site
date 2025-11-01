import React from "react";

type Paw = {
  top: string;
  left: string;
  width: number;
  rotation: number;
  opacity: number;
  color: string;
};

// Manually placed paw prints
const pawData: Paw[] = [
  // Outer corners / edges
  { top: "1%", left: "10%", width: 100, rotation: 110, opacity: 0.5, color: "var(--color-primary)" },
  { top: "30%", left: "25%", width: 108, rotation: 25, opacity: 0.4, color: "var(--color-primary)" },
  { top: "45%", left: "70%", width: 90, rotation: -130, opacity: 0.3, color: "var(--color-accent)" },
  { top: "61%", left: "15%", width: 110, rotation: 30, opacity: 0.2, color: "var(--color-primary)" },
    { top: "83%", left: "5%", width: 120, rotation: 30, opacity: 0.2, color: "var(--color-primary)" },


  // Central subtle paws behind subtitle and button
  { top: "35%", left: "50%", width: 60, rotation: 10, opacity: 0.08, color: "var(--color-primary)" },
  { top: "40%", left: "55%", width: 50, rotation: -15, opacity: 0.07, color: "var(--color-accent)" },
  { top: "45%", left: "48%", width: 70, rotation: 25, opacity: 0.09, color: "var(--color-primary)" },
    { top: "78%", left: "70%", width: 100, rotation: -30, opacity: 0.4, color: "var(--color-accent)" },


  // Top-right more visible
    { top: "10%", left: "80%", width: 80, rotation: -110, opacity: 0.8, color: "var(--color-accent)" }, // increased opacity
{ top: "23%", left: "70%", width: 90, rotation: -130, opacity: 0.5, color: "var(--color-accent)" },
];

export default function PawPrints() {
  return (
    <>
      {pawData.map((paw, i) => (
        <svg
          key={i}
          className="absolute pointer-events-none z-0"
          style={{
            top: paw.top,
            left: paw.left,
            width: `${paw.width}px`,
            height: `${paw.width}px`,
            transform: `rotate(${paw.rotation}deg)`,
            opacity: paw.opacity,
            position: "absolute",
          }}
          viewBox="0 0 64 64"
          fill={paw.color}
        >
          {/* Pad */}
          <ellipse cx="32" cy="36" rx="12" ry="12" />
          {/* Toes */}
          <ellipse cx="18" cy="20" rx="4" ry="5" />
          <ellipse cx="26" cy="14" rx="4" ry="5" />
          <ellipse cx="36" cy="14" rx="4" ry="5" />
          <ellipse cx="46" cy="20" rx="4" ry="5" />
        </svg>
      ))}
    </>
  );
}
