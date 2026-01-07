
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-8">
          <a href="#" className="text-2xl font-serif font-bold tracking-tighter hover:opacity-80 transition-opacity">
            LUMIERE LIVING
          </a>
          <div className="hidden md:flex gap-6 text-sm font-medium tracking-wide uppercase">
            <a href="#collections" className="hover:text-stone-500 transition-colors">Collections</a>
            <a href="#about" className="hover:text-stone-500 transition-colors">About</a>
            <a href="#contact" className="hover:text-stone-500 transition-colors">Contact</a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="p-2 hover:bg-stone-100 rounded-full transition-colors hidden md:block">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-stone-100 rounded-full transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 bg-stone-900 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-stone-200 py-8 px-6 flex flex-col gap-6 shadow-xl animate-in fade-in slide-in-from-top-4">
          <a href="#collections" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium">Collections</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium">About</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium">Contact</a>
          <div className="h-px bg-stone-100 w-full" />
          <button className="bg-stone-900 text-white py-3 px-6 rounded-lg font-medium">Shop Now</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
