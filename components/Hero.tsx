
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Living Room"
          className="w-full h-full object-cover scale-105 animate-[pulse_10s_infinite]"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-white">
        <div className="max-w-2xl space-y-6">
          <p className="text-stone-300 uppercase tracking-widest font-semibold text-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            Est. 2024 — Curated Comfort
          </p>
          <h1 className="text-5xl md:text-8xl font-serif font-bold leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Elevate Your <br /> <span className="italic">Everyday.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-200 leading-relaxed max-w-lg animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            Discover a collection of artisanal furniture pieces designed to bring timeless elegance and modern functionality to your home.
          </p>
          <div className="flex flex-wrap gap-4 pt-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
            <button className="bg-white text-stone-900 px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-stone-100 transition-all hover:scale-105">
              Explore Collections <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-white/50 text-white px-8 py-4 rounded-full font-bold backdrop-blur-sm hover:bg-white/10 transition-all">
              Watch Film
            </button>
          </div>
        </div>
      </div>

      {/* Stats/Badge */}
      <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-end gap-2 animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
        <div className="flex gap-4">
          <div className="text-right">
            <div className="text-white font-bold text-3xl">500+</div>
            <div className="text-stone-300 text-xs uppercase tracking-wider">Unique Designs</div>
          </div>
          <div className="w-px bg-white/30 h-10 self-center" />
          <div className="text-right">
            <div className="text-white font-bold text-3xl">12</div>
            <div className="text-stone-300 text-xs uppercase tracking-wider">Global Studios</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
