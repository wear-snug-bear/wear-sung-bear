import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Replace these with your actual image paths
import polaroidImg1 from "../../assets/images/polaroid1.png";
import polaroidImg2 from "../../assets/images/polaroid2.png";

export default function Hero() {
  // Expanded array to make the background hearts more abundant with random layout behaviors
  const floatingHearts = [
    { id: 1, left: "5%", size: 14, delay: 0, duration: 6 },
    { id: 2, left: "15%", size: 22, delay: 2.5, duration: 7 },
    { id: 3, left: "28%", size: 16, delay: 1, duration: 5.5 },
    { id: 4, left: "40%", size: 26, delay: 4, duration: 8 },
    { id: 5, left: "52%", size: 12, delay: 0.5, duration: 5 },
    { id: 6, left: "65%", size: 20, delay: 3.2, duration: 6.5 },
    { id: 7, left: "78%", size: 15, delay: 1.8, duration: 7.5 },
    { id: 8, left: "92%", size: 24, delay: 4.5, duration: 6 },
  ];

  return (
    /* CHANGES MADE HERE:
      - Reduced `min-h-[85vh]` to `min-h-[70vh]` to decrease overall height.
      - Scaled down vertical padding slightly (`py-8 md:py-14`) to pull the elements tighter together.
    */
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-[#FFF9F6] px-4 py-8 sm:px-6 md:py-14 lg:px-8">
      
      {/* --- FLOATING BACKGROUND HEARTS SYSTEM --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 0, y: "80vh", scale: 0.6 }}
            animate={{
              opacity: [0, 0.5, 0.5, 0], // Smooth fade in and out bounds
              y: "-10vh",
              scale: [0.6, 1, 0.9, 0.7],
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute text-[#FFB7B2] select-none"
            style={{
              left: heart.left,
              fontSize: `${heart.size}px`,
            }}
          >
            ♥
          </motion.div>
        ))}
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row md:gap-8 relative z-10">
        
        {/* Left Side Content Column */}
        <div className="flex max-w-xl flex-col items-start space-y-5 text-left">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFEAE8] px-4 py-1.5 text-xs font-bold tracking-wide text-[#FF8580]">
            <span>♥</span> SNUG COMMUNITY <span>♥</span>
          </div>

          {/* Main Typography Header */}
          <h1 className="font-serif text-4xl font-extrabold tracking-tight text-[#4D3A2A] sm:text-5xl md:text-6xl lg:leading-[1.15]">
            Wear Your Mood. <br />
            <span className="text-[#FF8580]">Live Your Story.</span>
          </h1>

          {/* Subheadline and Description */}
          <div className="space-y-1.5">
            <h3 className="text-lg font-bold text-[#7A5A3A]">
              Cute. Comfy. Useful.
            </h3>
            <p className="text-sm leading-relaxed text-[#7A6B5C] sm:text-base">
              Real fits. Real people. Real SnugBear vibes. <br />
              Tag us{' '}
              <a 
                href="mailto:SNUGBEAROFFICIAL@GMAIL.COM" 
                className="font-semibold text-[#FF8580] hover:underline"
              >
                @snugbear.official
              </a>{' '}
              to be featured!
            </p>
          </div>

          {/* Call To Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Link
              to="/shop"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#FF8580] px-8 text-sm font-bold text-white shadow-md transition-all hover:bg-[#E5746F] hover:shadow-lg"
            >
              Shop Collection
            </Link>
            <Link
              to="/about"
              className="inline-flex h-12 items-center justify-center rounded-full border-2 border-[#4D3A2A]/20 bg-transparent px-8 text-sm font-bold text-[#4D3A2A] transition-all hover:bg-[#4D3A2A]/5"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Right Side Column: Polaroid Stack Dynamic Reproduction */}
        <div className="relative flex h-[400px] w-full max-w-[480px] items-center justify-center md:h-[480px] md:flex-1">
          
          {/* Left Polaroid - Tilted Slightly Left (-6deg) */}
          <div className="absolute left-[5%] top-[8%] z-10 w-[200px] -rotate-6 transform rounded-sm bg-white p-3 shadow-xl transition-transform hover:z-30 hover:scale-105 sm:w-[230px] md:w-[240px]">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-sm bg-[#F3ECE7]">
              <img 
                src={polaroidImg1} 
                alt="SnugBear Style Showcase 1" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-10 w-full bg-white" />
          </div>

          {/* Right Polaroid - Overlapping and Tilted Right (4deg) */}
          <div className="absolute right-[5%] bottom-[8%] z-20 w-[200px] rotate-4 transform rounded-sm bg-white p-3 shadow-2xl transition-transform hover:z-30 hover:scale-105 sm:w-[230px] md:w-[240px]">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-sm bg-[#F3ECE7]">
              <img 
                src={polaroidImg2} 
                alt="SnugBear Style Showcase 2" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-10 w-full bg-white" />
          </div>

          {/* Doodles Overlay Replication */}
          <div className="absolute -top-2 right-[8%] z-30 hidden rotate-12 select-none items-center justify-center rounded-full border border-dashed border-[#FFB7B2] bg-[#FFF9F6]/90 px-4 py-3 text-center text-[11px] font-medium tracking-tight text-[#FF8580] shadow-sm sm:flex">
            <div>
              you make <br /> the brand <br /> what it is <span className="text-[#FF8580]">♥</span>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}