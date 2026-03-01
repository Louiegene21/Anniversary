import { Box } from "@mui/material";
import { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

type Heart = {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

function generateHearts(count = 24): Heart[] {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: 24 + Math.random() * 30,      // bigger so visible
    duration: 6 + Math.random() * 6,
    delay: Math.random() * 3,
    opacity: 0.6 + Math.random() * 0.4, // more visible
  }));
}

export default function HeartsRain() {
  // ✅ generated once on mount (no effects, no refs)
  const [hearts] = useState<Heart[]>(() => generateHearts(50));

  // ✅ Portal so it appears above everything
  return createPortal(
    <Box
      aria-hidden
      sx={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 2147483647,
      }}
    >
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          initial={{ y: "120vh", rotate: -10 }}
          animate={{
            y: "-30vh",
            x: [0, -20, 20, -10, 10, 0],
            rotate: [0, 10, -10, 8, -8, 0],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: h.left,
            bottom: "-10vh",
            fontSize: h.size,
            opacity: h.opacity,
            willChange: "transform",
            filter: "drop-shadow(0 8px 18px rgba(255, 77, 141, 0.35))",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </Box>,
    document.body
  );
}