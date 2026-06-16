import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import CollectionsPreview from "../../components/CommunityPreview/CommunityPreview";
import BestSellers from "../../components/BestSellers/BestSellers";
import FounderStory from "../../components/FounderStory/FounderStory";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  
  useEffect(() => {
    const scrollTo = localStorage.getItem("scrollTo");
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
          localStorage.removeItem("scrollTo");
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FEFDE4] text-[#6D442C]">
      <div className="bg-[#ffe4ec] text-center text-xs uppercase tracking-[0.3em] text-[#6D442C]">
        <p className="py-2">💗 free shipping on orders above 699 💗</p>
      </div>

      <Hero />
      <CollectionsPreview />
      <BestSellers />
      {/* Added ID here so it can be targeted by the scroll */}
      <div id="founder-story">
        <FounderStory />
      </div>
      <Footer />
    </div>
  );
}