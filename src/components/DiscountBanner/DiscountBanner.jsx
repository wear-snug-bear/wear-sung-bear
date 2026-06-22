import React, { useState, useEffect } from 'react';

const discounts = [
  { text: "🕒 Flash Sale: Grab These Cutesy Styles! 🎀", bg: "#ffe4ec", color: "#6D442C" },
  { text: "✨ Buy 2, Get 10% Off Your Favorite Finds! 🧸", bg: "#6D442C", color: "#ffffff" },
  { text: "💗 Free Shipping On Orders Above 699 💗", bg: "#ffe4ec", color: "#6D442C" },
  { text: "💌 Get 10% Off Your First Order! 🍯", bg: "#6D442C", color: "#ffffff" },
];

export default function DiscountBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % discounts.length);
    }, 4000); 
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="w-full py-3 transition-colors duration-700 ease-in-out flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: discounts[index].bg }}
    >
      {/* The parent div (w-full overflow-hidden) ensures that even if 
        the text moves, it stays within the screen edges.
      */}
      <div className="w-full flex justify-center items-center overflow-hidden relative h-6">
        <p 
          key={index} 
          className="animate-slide-left absolute whitespace-nowrap font-bold uppercase tracking-[0.1em] sm:tracking-[0.25em] text-[10px] sm:text-[11px] md:text-xs px-4"
          style={{ color: discounts[index].color }}
        >
          {discounts[index].text}
        </p>
      </div>
      
      <style jsx>{`
        .animate-slide-left {
          animation: slideLeft 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes slideLeft {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}