import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import basicsImg from "../../assets/images/basics.png";
import moodyImg from "../../assets/images/moody.png";
import deluluImg from "../../assets/images/delulu.png";

export default function CollectionsPreview() {
  const [cuteEffects, setCuteEffects] = useState([]);

  useEffect(() => {
    const symbols = ["✨", "♥", "🌸", "☁️", "🎀", "⭐", "🎵"];
    const interval = setInterval(() => {
      const id = Math.random().toString(36).substring(2, 9);
      const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      const startX = Math.random() * 100;
      const startY = 40 + Math.random() * 50;
      const driftX = (Math.random() - 0.5) * 40;
      const randomScale = 0.6 + Math.random() * 0.7;
      const duration = 4 + Math.random() * 3;

      const newEffect = {
        id,
        symbol: randomSymbol,
        style: { left: `${startX}%`, top: `${startY}%` },
        animation: {
          x: driftX,
          y: -180,
          scale: [0, randomScale, randomScale * 0.7],
          opacity: [0, 0.5, 0.5, 0],
        },
        duration
      };
      setCuteEffects((prev) => [...prev.slice(-15), newEffect]);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const collections = [
    {
      id: "basics",
      title: "SnugBear Basics",
      image: basicsImg,
      description: ["minimal aesthetics", "softest organic textures", "warm hugs in thread form"],
      badge: "Core Line",
      bg: "bg-[#F7F2EF]",
      border: "border-[#6D442C]/20",
      textAccent: "text-[#6D442C]/80",
      btnStyle: "bg-[#6D442C] text-[#FFF9F6] hover:bg-[#523320]",
      // UPDATED: Added query parameter for filtering
      link: "/collections?filter=Snugbear Basics",
    },
    {
      id: "moody",
      title: "Moody Collection",
      image: moodyImg,
      description: ["deep emotional tones", "expressive styles", "for cozy espresso days"],
      badge: "Trending",
      bg: "bg-[#F7ECE1]",
      border: "border-[#EBD4C0]",
      textAccent: "text-[#4D3A2A]/80",
      btnStyle: "bg-[#FF8580] text-white hover:bg-[#E5746F]",
      // UPDATED: Added query parameter for filtering
      link: "/collections?filter=Moody Collection",
    },
    {
      id: "delulu",
      title: "Delulu Diaries",
      image: deluluImg,
      description: ["dreamy pastel clouds", "unfiltered thoughts", "manifesting sweet dreams"],
      badge: "Coming Soon",
      isComingSoon: true,
      bg: "bg-[#FFF0F0]",
      border: "border-[#FFE0E0]",
      textAccent: "text-[#FF8580]/80",
      btnStyle: "bg-transparent border-2 border-[#FF8580]/30 text-[#FF8580] cursor-not-allowed",
      link: "#",
    },
  ];

  return (
    <section className="relative w-full bg-[#FFF9F6] px-4 py-16 sm:px-6 md:py-24 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <AnimatePresence>
          {cuteEffects.map((effect) => (
            <motion.span
              key={effect.id}
              style={effect.style}
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={effect.animation}
              exit={{ opacity: 0 }}
              transition={{ duration: effect.duration, ease: "easeOut" }}
              className="absolute text-xl sm:text-2xl filter drop-shadow-xs"
            >
              {effect.symbol}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-14 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFEAE8] px-4 py-1 text-xs font-bold tracking-wide text-[#FF8580]">
            ♥ DISCOVER ♥
          </span>
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#4D3A2A] sm:text-4xl">
            Explore the <span className="text-[#FF8580]">Collections</span>
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 ${item.border} ${item.bg} p-5 min-h-[540px] shadow-sm hover:shadow-lg sm:p-6`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold tracking-wider uppercase ${item.isComingSoon ? "bg-[#FF8580] text-white animate-pulse" : "bg-white/90 text-[#7A5A3A] shadow-sm"}`}>
                    {item.badge}
                  </span>
                </div>
                <div className="relative mb-5 aspect-[4/5] w-full overflow-hidden rounded-xl bg-white/40 shadow-inner">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <h3 className="font-serif text-2xl font-extrabold text-[#4D3A2A] mb-2.5">{item.title}</h3>
                <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium tracking-wide">
                  {item.description.map((phrase, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      {idx > 0 && <span className="text-[10px] opacity-40">•</span>}
                      <span className={item.textAccent}>{phrase}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 relative z-10">
                <Link
                  to={item.isComingSoon ? "#" : item.link}
                  className={`w-full inline-flex h-11 items-center justify-center rounded-xl text-xs font-bold tracking-wider uppercase shadow-sm transition-all ${item.btnStyle}`}
                >
                  {item.isComingSoon ? "Coming Soon" : "View Collection"}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}