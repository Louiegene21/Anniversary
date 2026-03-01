import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Burst = {
  id: string;
  x: number;
  y: number;
};

export default function HeartBurst() {
  const [bursts, setBursts] = useState<Burst[]>([]);

  const onClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const id = `${Date.now()}-${Math.random()}`;
    setBursts((prev) => [...prev, { id, x, y }]);

    // remove after animation
    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== id));
    }, 700);
  }, []);

  return (
    <div
      onClick={onClick}
      style={{ position: "absolute", inset: 0, cursor: "pointer" }}
      aria-label="Tap for hearts"
    >
      <AnimatePresence>
        {bursts.map((b) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, scale: 0.6, x: b.x, y: b.y }}
            animate={{ opacity: 1, scale: 1.2, y: b.y - 40 }}
            exit={{ opacity: 0, scale: 0.8, y: b.y - 70 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              fontSize: 50,
              filter: "drop-shadow(0 10px 18px rgba(255,77,141,0.35))",
            }}
          >
            💖
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}