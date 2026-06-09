import { Link } from "react-router-dom";
// Replace these with your actual image paths
import polaroidImg1 from "../../assets/images/polaroid1.png";
import polaroidImg2 from "../../assets/images/polaroid2.png";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-[#FFF9F6] px-4 py-12 sm:px-6 md:py-20 lg:px-8">
      {/* Background Decorative Sparkles / Doodles (Optional Placement placeholders) */}
      <div className="absolute top-12 left-1/4 opacity-40 select-none text-[#FFB7B2] text-xl">✦</div>
      <div className="absolute bottom-16 right-1/3 opacity-30 select-none text-[#FFB7B2] text-2xl">♥</div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 md:flex-row md:gap-8">
        
        {/* Left Side Content Column */}
        <div className="flex max-w-xl flex-col items-start space-y-6 text-left">
          
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
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-[#7A5A3A]">
              Cute. Comfy. Useful.
            </h3>
            <p className="text-sm leading-relaxed text-[#7A6B5C] sm:text-base">
              Real fits. Real people. Real SnugBear vibes. <br />
              Tag us <span className="font-semibold text-[#FF8580]">@snugbear.official</span> to be featured!
            </p>
          </div>

          {/* Call To Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
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
        <div className="relative flex h-[450px] w-full max-w-[500px] items-center justify-center md:h-[550px] md:flex-1">
          
          {/* Left Polaroid - Tilted Slightly Left (-6deg) */}
          <div className="absolute left-[5%] top-[10%] z-10 w-[220px] -rotate-6 transform rounded-sm bg-white p-3 shadow-xl transition-transform hover:z-30 hover:scale-105 sm:w-[250px] md:w-[260px]">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-sm bg-[#F3ECE7]">
              <img 
                src={polaroidImg1} 
                alt="SnugBear Style Showcase 1" 
                className="h-full w-full object-cover"
              />
            </div>
            {/* Polaroid Bottom Margin Label Area */}
            <div className="h-12 w-full bg-white" />
          </div>

          {/* Right Polaroid - Overlapping and Tilted Right (4deg) */}
          <div className="absolute right-[5%] bottom-[10%] z-20 w-[220px] rotate-4 transform rounded-sm bg-white p-3 shadow-2xl transition-transform hover:z-30 hover:scale-105 sm:w-[250px] md:w-[260px]">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-sm bg-[#F3ECE7]">
              <img 
                src={polaroidImg2} 
                alt="SnugBear Style Showcase 2" 
                className="h-full w-full object-cover"
              />
            </div>
            {/* Polaroid Bottom Margin Label Area */}
            <div className="h-12 w-full bg-white" />
          </div>

          {/* Doodles Overlay Replication (Handwritten Speech Bubble Frame Asset) */}
          <div className="absolute -top-4 right-[8%] z-30 hidden rotate-12 select-none items-center justify-center rounded-full border border-dashed border-[#FFB7B2] bg-[#FFF9F6]/90 px-4 py-3 text-center text-[11px] font-medium tracking-tight text-[#FF8580] shadow-sm sm:flex">
            <div>
              you make <br /> the brand <br /> what it is <span className="text-[#FF8580]">♥</span>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}