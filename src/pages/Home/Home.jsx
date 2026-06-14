import Hero from "../../components/Hero/Hero";
import CollectionsPreview from "../../components/CommunityPreview/CommunityPreview";
import BestSellers from "../../components/BestSellers/BestSellers";
import FounderStory from "../../components/FounderStory/FounderStory";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FEFDE4] text-[#6D442C]">
      {/* Pink Free Shipping Banner Announcement Row */}
      <div className="bg-[#ffe4ec] text-center text-xs uppercase tracking-[0.3em] text-[#6D442C]">
        <p className="py-2">💗 free shipping on orders above 699 💗</p>
      </div>

      {/* Main Section Content Elements Layout */}
      <Hero />
      <CollectionsPreview />
      <BestSellers />
      <FounderStory />
      <Footer />
    </div>
  );
}