import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FEFDE4] text-[#3C2F28]">
      <div className="bg-[#ffe4ec] text-center text-xs uppercase tracking-[0.3em] text-[#9c4566]">
        <p className="py-2">💗 free shipping on orders above 699 💗</p>
      </div>

      <Navbar />
      <Hero />

      <main className="px-4 py-8 sm:px-6">
        <h1 className="text-3xl font-bold text-[#3C2F28]">Home Page</h1>
      </main>
    </div>
  );
}