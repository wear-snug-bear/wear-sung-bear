import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext"; // 🛒 Import your shared cart hook here

// 🐻 IMPORT YOUR REAL IMAGE ASSETS FROM YOUR REPO FILE TREE
import basicsImg from "../../assets/images/basics.png";
import cloudyNapImg from "../../assets/images/cloudy_nap.png";
import creamyBearImg from "../../assets/images/creamy_beary.png";
import crybabyClubImg from "../../assets/images/crybaby_club.png";
import daydreamBloomImg from "../../assets/images/daydream_bloom.png";
import deluluImg from "../../assets/images/delulu.png";
import honeyBearImg from "../../assets/images/Honey_bear.png";
import honeyHugImg from "../../assets/images/Honey_Hug.png";
import rosyBearImg from "../../assets/images/rosy_bear.png";
import sleepyBabyImg from "../../assets/images/sleepy_baby.png";
import tinyTantrumImg from "../../assets/images/tiny_tantrum.png";

// ==========================================
// 1. RANDOM GENERATING CUTE EFFECTS (SPARKLES)
// ==========================================
function SparkleEffect({ containerId }) {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const symbols = ["✨", "🌸", "⭐", "☁️", "💗"];
    const generated = Array.from({ length: 4 }).map((_, i) => ({
      id: `${containerId}-sparkle-${i}`,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      top: `${Math.random() * 80 + 5}%`,
      left: `${Math.random() * 80 + 5}%`,
      delay: Math.random() * 4,
      duration: Math.random() * 4 + 4,
    }));
    setSparkles(generated);
  }, [containerId]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((sp) => (
        <motion.span
          key={sp.id}
          style={{ position: "absolute", top: sp.top, left: sp.left }}
          className="text-sm select-none opacity-40 filter blur-[0.5px]"
          animate={{
            scale: [0, 1.2, 1, 0],
            opacity: [0, 0.5, 0.3, 0],
            y: [0, -15, -30],
          }}
          transition={{
            duration: sp.duration,
            repeat: Infinity,
            delay: sp.delay,
            ease: "easeInOut"
          }}
        >
          {sp.symbol}
        </motion.span>
      ))}
    </div>
  );
}

// ==========================================
// 2. SORT DROPDOWN COMPONENT
// ==========================================
function SortDropdown({ currentSort, setCurrentSort }) {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    { value: "featured", label: "Featured Cozy" },
    { value: "low-high", label: "Price: Low to High" },
    { value: "high-low", label: "Price: High to Low" }
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex h-9 items-center justify-between gap-2 rounded-full border border-[#6D442C]/15 bg-white px-4 text-xs font-bold tracking-wide text-[#7A6B5C] outline-none transition-all focus:border-[#FF8580]"
      >
        <span>🎀 Sort: {options.find(o => o.value === currentSort)?.label}</span>
        <span className={`text-[10px] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>▼</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute right-0 mt-2 w-44 origin-top-right rounded-xl border border-[#6D442C]/10 bg-white p-1.5 shadow-lg z-30"
          >
            {options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  setCurrentSort(opt.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  currentSort === opt.value ? "bg-[#FFEAE8] text-[#FF8580]" : "text-[#7A6B5C] hover:bg-[#FFF9F6]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ==========================================
// 3. FILTER SIDEBAR COMPONENT
// ==========================================
function FilterSidebar({ selectedCategory, setSelectedCategory, selectedSize, setSelectedSize }) {
  const categories = ["All Collections", "Snugbear Basics", "Moody Collection", "Delulu Diaries"];
  const sizes = ["S", "M", "L", "XL"];

  return (
    <div className="space-y-7 rounded-2xl border border-[#6D442C]/10 bg-white/70 backdrop-blur-xs p-5 shadow-xs">
      <div className="space-y-3">
        <h3 className="font-serif text-sm font-black uppercase tracking-wider text-[#4D3A2A] flex items-center gap-1.5">
          <span>🧸</span> Collections
        </h3>
        <div className="flex flex-col gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`w-full text-left px-3 py-2 text-xs font-bold rounded-xl transition-all ${
                selectedCategory === cat 
                  ? "bg-[#6D442C] text-white translate-x-1" 
                  : "text-[#7A6B5C] hover:bg-[#FFEAE8]/50 hover:text-[#4D3A2A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3 pt-4 border-t border-[#6D442C]/5">
        <h3 className="font-serif text-sm font-black uppercase tracking-wider text-[#4D3A2A] flex items-center gap-1.5">
          <span>📏</span> Size Fit
        </h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(selectedSize === size ? "" : size)}
              className={`h-8 w-8 inline-flex items-center justify-center rounded-xl text-xs font-bold border transition-all ${
                selectedSize === size
                  ? "bg-[#6D442C] text-white border-[#6D442C]"
                  : "bg-white text-[#7A6B5C] border-[#6D442C]/15 hover:border-[#FF8580] hover:text-[#FF8580]"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-[#FFF0F0] p-3 text-[11px] font-medium text-[#6D442C] leading-normal">
        ✨ <b>Cozy Tip:</b> All collection drops feature an oversized relaxed fit design. Order true to size!
      </div>
    </div>
  );
}

// ==========================================
// 4. COMPACT PRODUCT CARD COMPONENT
// ==========================================
function ProductCard({ product, index, onQuickView }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const discountPercentage = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1200); // Reset animation back to normal text
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#6D442C]/10 bg-white p-3 shadow-xs hover:shadow-md transition-shadow"
    >
      <div>
        <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
          <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-xs px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-[#7A5A3A] uppercase shadow-xs">
            {product.badge}
          </span>
          {product.isComingSoon ? (
            <span className="inline-flex items-center rounded-full bg-[#FFD1DA] px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-[#6D442C] uppercase shadow-xs">
              Soon ✨
            </span>
          ) : (
            <button className="pointer-events-auto h-7 w-7 flex items-center justify-center rounded-full bg-white/95 shadow-xs text-sm text-[#FFB7B2] hover:text-[#FF8580] hover:scale-110 active:scale-95 transition-all">
              ♥
            </button>
          )}
        </div>

        <SparkleEffect containerId={product.id} />

        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#FFF9F6]">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        <div className="mt-3 px-1">
          <h4 className="text-[11px] font-bold tracking-wider text-[#7A6B5C] uppercase">
            {product.collectionName}
          </h4>
          <h3 className="font-serif text-base font-extrabold text-[#4D3A2A] tracking-tight truncate mt-0.5">
            {product.name}
          </h3>
          
          <div className="mt-1 flex items-baseline gap-2 font-sans">
            {product.isComingSoon ? (
              <span className="text-sm font-bold tracking-wide text-[#FF8580] bg-[#FFF0F0] px-2 py-0.5 rounded-md uppercase">
                Coming Soon
              </span>
            ) : (
              <>
                <span className="text-base font-black text-[#6D442C]">₹{product.price}</span>
                <span className="text-xs font-medium text-[#7A6B5C]/50 line-through">₹{product.mrp}</span>
                {discountPercentage > 0 && (
                  <span className="text-[10px] font-bold text-[#FF8580] bg-[#FFF0F0] px-1.5 py-0.5 rounded-md">
                    SAVE {discountPercentage}%
                  </span>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {/* 🌟 FIXED: Quick View triggers onQuickView action handler rather than basic page redirect linking */}
        <button 
          onClick={() => !product.isComingSoon && onQuickView(product)}
          disabled={product.isComingSoon}
          className={`inline-flex h-9 items-center justify-center rounded-xl bg-[#FFF9F6] border border-[#6D442C]/10 text-[11px] font-bold uppercase tracking-wider text-[#6D442C] transition-all ${
            product.isComingSoon ? "opacity-50 cursor-not-allowed" : "hover:bg-[#6D442C] hover:text-white"
          }`}
        >
          Quick View
        </button>
        
        {/* 🌟 FIXED: Now hooks up seamlessly to the global context state dispenser container handler */}
        <button 
          onClick={handleAddToCart}
          disabled={product.isComingSoon}
          className={`inline-flex h-9 items-center justify-center rounded-xl text-[11px] font-bold uppercase tracking-wider text-white shadow-xs transition-all ${
            product.isComingSoon 
              ? "bg-[#6D442C] opacity-40 cursor-not-allowed" 
              : isAdded 
                ? "bg-[#4CAF50] hover:bg-[#4CAF50]" 
                : "bg-[#6D442C] hover:opacity-90 active:scale-98"
          }`}
        >
          {product.isComingSoon ? "Unavailable" : isAdded ? "Added! 🎉" : "Add To Cart"}
        </button>
      </div>
    </motion.div>
  );
}

// ==========================================
// MAIN COLLECTIONS PAGE CONTAINER COMPONENT
// ==========================================
export default function Collections() {
  const [selectedCategory, setSelectedCategory] = useState("All Collections");
  const [selectedSize, setSelectedSize] = useState("");
  const [currentSort, setCurrentSort] = useState("featured");
  const [activePreviewProduct, setActivePreviewProduct] = useState(null); // Modal context view track states

  const { addToCart } = useCart();

  const mockProducts = [
    { id: "honey-bear", name: "Honey Bear", collectionName: "Snugbear Basics", badge: "Basics Essential", price: 549, mrp: 799, image: honeyBearImg },
    { id: "rosy-bear", name: "Rosy Bear", collectionName: "Snugbear Basics", badge: "Basics Essential", price: 549, mrp: 799, image: rosyBearImg },
    { id: "creamy-bear", name: "Creamy Bear", collectionName: "Snugbear Basics", badge: "Basics Essential", price: 549, mrp: 799, image: creamyBearImg },
    { id: "daydream-bloom", name: "Daydream Bloom", collectionName: "Moody Collection", badge: "Moody Collection", price: 699, mrp: 999, image: daydreamBloomImg },
    { id: "sleepy-baby", name: "Sleepy Baby", collectionName: "Moody Collection", badge: "Cozy Choice", price: 699, mrp: 999, image: sleepyBabyImg },
    { id: "crybaby-club", name: "Crybaby Club", collectionName: "Moody Collection", badge: "Trending", price: 699, mrp: 999, image: crybabyClubImg },
    { id: "honey-hug", name: "Honey Hug", collectionName: "Moody Collection", badge: "Oversized Fit", price: 699, mrp: 999, image: honeyHugImg },
    { id: "cloudy-nap", name: "Cloudy Nap", collectionName: "Moody Collection", badge: "Limited Drop", price: 699, mrp: 999, image: cloudyNapImg },
    { id: "tiny-tantrum", name: "Tiny Tantrum", collectionName: "Moody Collection", badge: "Classic Drop", price: 699, mrp: 999, image: tinyTantrumImg },
    { id: "solulu-diaries", name: "He Loves Me (Probably)", collectionName: "Delulu Diaries", badge: "Coming Soon", price: 0, mrp: 0, image: deluluImg, isComingSoon: true }
  ];

  let filteredProducts = mockProducts.filter((p) => {
    return selectedCategory === "All Collections" || p.collectionName === selectedCategory;
  });

  if (currentSort === "low-high") {
    filteredProducts.sort((a, b) => {
      if (a.isComingSoon) return 1;
      if (b.isComingSoon) return -1;
      return a.price - b.price;
    });
  } else if (currentSort === "high-low") {
    filteredProducts.sort((a, b) => {
      if (a.isComingSoon) return 1;
      if (b.isComingSoon) return -1;
      return b.price - a.price;
    });
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FEFDE4] font-sans text-[#6D442C] pt-4 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-2">
        
        <motion.div 
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 border-b border-[#6D442C]/10 pb-6 mb-8"
        >
          <div className="space-y-1">
            <h1 className="font-serif text-4xl font-black text-[#4D3A2A] sm:text-5xl lg:text-6xl tracking-tight">
              Our Little <span className="text-[#FF8580]">Collections</span>
            </h1>
            <p className="text-xs font-medium text-[#7A6B5C]">
              Showing {filteredProducts.length} comfort items matched for your style palette.
            </p>
          </div>
          
          <div className="flex items-center self-end sm:self-auto">
            <SortDropdown currentSort={currentSort} setCurrentSort={setCurrentSort} />
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-12 items-start">
          <motion.aside 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-1 lg:col-span-3 sticky top-24 z-10"
          >
            <FilterSidebar 
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
          </motion.aside>

          <main className="md:col-span-3 lg:col-span-9">
            <AnimatePresence mode="wait">
              {filteredProducts.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20 bg-white/40 rounded-2xl border-2 border-dashed border-[#6D442C]/10"
                >
                  <span className="text-4xl block mb-2">🧸</span>
                  <p className="text-sm font-bold text-[#7A6B5C]">No cozy items found matching your filters!</p>
                </motion.div>
              ) : (
                <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProducts.map((product, idx) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      index={idx} 
                      onQuickView={(p) => setActivePreviewProduct(p)} 
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>

      {/* ==========================================
          🌟 NEW: QUICK VIEW INTERACTIVE MODAL OVERLAY
          ========================================== */}
      <AnimatePresence>
        {activePreviewProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setActivePreviewProduct(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            />
            
            {/* Modal Body Context Card Canvas */}
            <motion.div 
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 16 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-[#6D442C]/10 bg-[#FEFDE4] p-6 shadow-2xl z-10 grid gap-6 md:grid-cols-2 text-[#6D442C]"
            >
              {/* Close Button X */}
              <button 
                onClick={() => setActivePreviewProduct(null)}
                className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-full bg-white/80 border border-[#6D442C]/10 text-xs font-bold hover:bg-[#6D442C] hover:text-white transition-colors"
              >
                ✕
              </button>

              {/* Product Preview Left Image Container */}
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#FFF9F6] border border-[#6D442C]/5">
                <img 
                  src={activePreviewProduct.image} 
                  alt={activePreviewProduct.name} 
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Product Info Description Right Frame Side */}
              <div className="flex flex-col justify-between pt-2">
                <div>
                  <span className="inline-flex items-center rounded-full bg-[#FFEAE8] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#FF8580]">
                    {activePreviewProduct.badge}
                  </span>
                  <h2 className="font-serif text-2xl font-black text-[#4D3A2A] tracking-tight mt-2">
                    {activePreviewProduct.name}
                  </h2>
                  <p className="text-xs font-bold text-[#7A6B5C]/70 uppercase mt-0.5 tracking-wide">
                    {activePreviewProduct.collectionName}
                  </p>
                  
                  <div className="mt-4 flex items-baseline gap-2 font-sans border-t border-[#6D442C]/10 pt-4">
                    <span className="text-2xl font-black text-[#6D442C]">₹{activePreviewProduct.price}</span>
                    <span className="text-sm font-medium text-[#7A6B5C]/50 line-through">₹{activePreviewProduct.mrp}</span>
                  </div>

                  <p className="text-xs text-[#7A6B5C] mt-4 leading-relaxed">
                    Crafted meticulously with premium materials optimized for supreme daily relaxation, casual lounges, and cozy naps.
                  </p>
                </div>

                <div className="mt-6 space-y-2">
                  <button 
                    onClick={() => {
                      addToCart(activePreviewProduct);
                      setActivePreviewProduct(null);
                    }}
                    className="w-full h-11 inline-flex items-center justify-center rounded-xl bg-[#6D442C] text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:opacity-90 active:scale-98 transition-all"
                  >
                    Add This Item To Cart 🧸
                  </button>
                  <Link 
                    to={`/product/${activePreviewProduct.id}`}
                    onClick={() => setActivePreviewProduct(null)}
                    className="w-full h-11 inline-flex items-center justify-center rounded-xl bg-white border border-[#6D442C]/15 text-xs font-bold uppercase tracking-wider text-[#6D442C] hover:bg-[#FFF9F6] transition-colors"
                  >
                    View Details Page
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}