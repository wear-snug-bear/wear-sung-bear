import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import CollectionsPreview from "../../components/CommunityPreview/CommunityPreview";
import BestSellers from "../../components/BestSellers/BestSellers";
import FounderStory from "../../components/FounderStory/FounderStory";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";
import Footer from "../../components/Footer/Footer";
import DiscountBanner from "../../components/DiscountBanner/DiscountBanner"; // Import the new component

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
      {/* Replaced static div with dynamic banner */}
      <DiscountBanner />

      <Hero />
      <CollectionsPreview />
      <BestSellers />
      <div id="founder-story">
        <FounderStory />
      </div>
      <CustomerReviews />
      <Footer />
    </div>
  );
}