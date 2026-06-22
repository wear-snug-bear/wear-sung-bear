import React, { useState, useEffect } from 'react';

// The array is ordered: Light (#ffe4ec), Dark (#6D442C), Light (#ffe4ec), Dark (#6D442C)
const discounts = [
  { text: "🕒 Flash Sale: Grab These Cutesy Styles Before They're Gone! 🎀", bg: "#ffe4ec", color: "#6D442C" },
  { text: "✨ Buy 2, Get 10% Off Your Favorite Finds! 🧸", bg: "#6D442C", color: "#ffffff" },
  { text: "💗 Free Shipping On Orders Above 699 💗", bg: "#ffe4ec", color: "#6D442C" },
  { text: "💌 Join Our Newsletter & Get 10% Off Your First Order! 🍯", bg: "#6D442C", color: "#ffffff" },
];

export default function DiscountBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Cycles every 2 seconds
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % discounts.length);
    }, 2000); 
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="text-center text-xs uppercase tracking-[0.3em] py-3 transition-colors duration-500 overflow-hidden"
      // Apply background and color dynamically based on current index
      style={{ backgroundColor: discounts[index].bg, color: discounts[index].color }}
    >
      {/* Key is set to index so that the animation re-triggers on every change */}
      <p key={index} className="animate-slide-in">
        {discounts[index].text}
      </p>
      
      <style jsx>{`
        .animate-slide-in {
          animation: slide 0.5s ease-out;
        }
        @keyframes slide {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}