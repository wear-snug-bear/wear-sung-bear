import { motion } from "framer-motion";
import PageGlow from "../../components/PageGlow/PageGlow";
// Importing the new combined asset containing both the bear and the font text style
import snugbearImage from "../../assets/images/snugbear.png";

export default function LandingPage() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#FEFDE4]">
      <PageGlow />
      
      <motion.img
        src={snugbearImage}
        alt="SnugBear Logo"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 2.5, // Increased duration for a slower, more dramatic entrance
          ease: [0.25, 1, 0.5, 1], // Custom curve that ensures a very slow, smooth fade-in and finish
        }}
        className="w-[95%] max-w-[500px] object-contain drop-shadow-md sm:max-w-[650px] md:max-w-[850px]"
      />

    </section>
  );
}