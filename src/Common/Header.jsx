import { useSelector } from "react-redux";
import { FaShoppingCart, FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Navitem from "../Components/Navitem";
import { useState, useEffect } from "react";
import { nav } from "../data/Data";

const Header = () => {
  const cartItems = useSelector((state) => state.cart?.data || []);
  const wishlistItems = useSelector((state) => state.wishlist?.data || []);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md bg-white/80 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 group z-50">
            <span className="font-poppins font-bold text-2xl tracking-tighter text-gray-900 group-hover:text-[var(--color-primary)] transition-colors">
              Home<span className="text-[var(--color-primary)]">Container</span>.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {nav.map((list, key) => (
              <div key={key} className="relative group">
                <Navitem 
                  to={list.path} 
                  label={list.text} 
                  className="text-sm font-medium uppercase tracking-wide text-gray-600 hover:text-[var(--color-primary)] transition-colors duration-200"
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"></span>
              </div>
            ))}
          </nav>

          {/* Actions & Mobile Toggle */}
          <div className="flex items-center space-x-6 z-50">
            <Link to="/wishlist" className="relative group">
              <FaHeart className="text-xl text-gray-600 transition-transform duration-300 group-hover:text-red-500 group-hover:scale-110" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            <Link to="/cart" className="relative group">
              <FaShoppingCart className="text-xl text-gray-600 transition-transform duration-300 group-hover:text-[var(--color-primary)] group-hover:scale-110" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-primary)] text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-2xl text-gray-700 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {nav.map((list, key) => (
          <Navitem 
            key={key}
            to={list.path} 
            label={list.text} 
            className="text-2xl font-bold text-gray-800 hover:text-[var(--color-primary)] transition-colors"
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
