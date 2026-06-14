import { motion } from "framer-motion";

const decorations = [
  { id: 1, left: "8%", top: "12%", symbol: "♥", color: "#FFB7B2", size: 18, delay: 0.4, duration: 8 },
  { id: 2, left: "18%", top: "35%", symbol: "✦", color: "#FFD1DA", size: 16, delay: 1.1, duration: 7 },
  { id: 3, left: "25%", top: "72%", symbol: "●", color: "#FEFDE4", size: 10, delay: 0.7, duration: 9 },
  { id: 4, left: "42%", top: "22%", symbol: "♥", color: "#FF8580", size: 22, delay: 1.5, duration: 10 },
  { id: 5, left: "62%", top: "62%", symbol: "✦", color: "#FFD1DA", size: 14, delay: 0.2, duration: 7.5 },
  { id: 6, left: "75%", top: "14%", symbol: "♥", color: "#FFB7B2", size: 20, delay: 0.9, duration: 8.5 },
  { id: 7, left: "83%", top: "45%", symbol: "●", color: "#FEFDE4", size: 12, delay: 1.8, duration: 9.5 },
  { id: 8, left: "55%", top: "86%", symbol: "✦", color: "#FFD1DA", size: 18, delay: 0.5, duration: 10 },
];

export default function PageGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {decorations.map((dot) => (
        <motion.div
          key={dot.id}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{
            opacity: [0, 0.7, 0.7, 0],
            y: [20, -10, 10, -5],
            scale: [0.8, 1, 0.95, 0.85],
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute select-none text-opacity-90"
          style={{
            left: dot.left,
            top: dot.top,
            fontSize: dot.size,
            color: dot.color,
          }}
        >
          {dot.symbol}
        </motion.div>
      ))}
    </div>
  );
}
