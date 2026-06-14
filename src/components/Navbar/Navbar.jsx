import { Link } from "react-router-dom";
import logo from "../../assets/images/snugbear.png";
import { useCart } from "../../context/CartContext"; // 🛒 Import your shared cart hook here

export default function Navbar() {
  const { totalItemsCount } = useCart(); // 🌟 Grab the live cart badge count from global state

  return (
    <header className="sticky top-0 z-50 border-b border-[#F0E4DD] bg-white/95 backdrop-blur-md">
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
        
        {/* Logo Left */}
        <Link to="/" className="z-10 flex items-center">
          <img 
            src={logo} 
            alt="SnugBear Logo" 
            className="h-auto w-36 object-fill sm:w-44 md:w-52" 
          />
        </Link>

        {/* Desktop Navigation Links Middle */}
        <nav className="hidden absolute left-1/2 transform -translate-x-1/2 items-center gap-8 text-sm font-semibold text-[#4D3A2A] md:flex">
          <Link to="/" className="transition hover:text-[#7A5A3A]">Home</Link>
          <Link to="/collections" className="transition hover:text-[#7A5A3A]">Collections</Link>
          <Link to="/community" className="transition hover:text-[#7A5A3A]">Community</Link>
          <Link to="/about" className="transition hover:text-[#7A5A3A]">About</Link>
          <Link to="/contact" className="transition hover:text-[#7A5A3A]">Contact</Link>
        </nav>

        {/* Action Controls Right */}
        <div className="z-10 flex items-center gap-3">
          {/* Search Button */}
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#F7EFE2] text-[#4D3A2A] transition hover:bg-[#E6D4C3]" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* 🌟 UPDATED: Shopping Cart Anchor Container */}
          <Link 
            to="/cart" 
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#F7EFE2] text-[#4D3A2A] transition hover:bg-[#E6D4C3]" 
            aria-label="Cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>

            {/* 🎀 Dynamic Cozy Counter Badge Overlay */}
            {totalItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#FF8580] px-1 text-[10px] font-black text-white shadow-xs select-none animate-scaleIn">
                {totalItemsCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}