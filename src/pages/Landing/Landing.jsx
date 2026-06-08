import { motion } from "framer-motion";
import bearImage from "../../assets/images/bear.png";

export default function LandingPage() {
  // Split the text into an array of characters for individual animation
  const brandName = "SnugBear";
  const letters = Array.from(brandName);

  // Container variants to handle orchestrating the staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // Delay the text slightly so the bear starts appearing first
        delayChildren: 0.8, 
        // Controls the speed gap between each letter appearing
        staggerChildren: 0.1, 
      },
    },
  };

  // Individual letter animation variants (moving from below up to center)
  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 100 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9], // Clean, snappy custom easing
      },
    },
  };

  return (
    // Reduced layout gap to tighten the space between image and text
    <section className="relative flex h-screen w-full flex-col items-center justify-center gap-4 overflow-hidden bg-[#F5F5DC] sm:flex-row sm:gap-2">
      
      {/* 1. THE BEAR IMAGE (Placed on the left side) */}
      <motion.img
        src={bearImage}
        alt="SnugBear Character"
        initial={{ opacity: 0, y: 40, scale: 0.6 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1], // Custom easeOutCubic curve
        }}
        className="relative z-20 w-[300px] object-contain drop-shadow-xl sm:w-[340px] md:w-[420px]"
      />

      {/* 2. THE TEXT COMPONENT (Placed tight to the right side with larger font bounds) */}
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 select-none text-center text-[7.5vw] font-extrabold tracking-tight text-[#5C3A21] sm:text-[12vw]"
        style={{
          // Custom soft serif lookup to closely match the visual brand vibe
          fontFamily: 'Soft-Serif, "Cooper Black", "Fredoka One", Georgia, serif',
          display: "flex",
        }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            style={{ display: "inline-block" }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>

    </section>
  );
}