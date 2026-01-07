
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import ChatAssistant from './components/ChatAssistant';
import Footer from './components/Footer';
import { Quote } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 selection:bg-stone-900 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* Brand Philosophy Section */}
        <section id="about" className="py-24 px-6 md:px-12 bg-stone-50">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Quote className="w-12 h-12 text-stone-300 mx-auto" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold italic text-stone-900 leading-tight">
              "We don't just sell furniture; we curate the silent moments of comfort that define your home."
            </h2>
            <div className="w-20 h-px bg-stone-300 mx-auto" />
            <p className="text-stone-500 uppercase tracking-[0.3em] text-sm font-bold">
              The Lumiere Philosophy
            </p>
          </div>
        </section>

        <Products />

        {/* Visual Storytelling Section */}
        <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-stone-400 uppercase tracking-widest text-sm font-bold">The Process</h2>
              <h3 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-stone-900">
                Crafted With <br /> <span className="text-stone-500">Unrivaled Precision</span>
              </h3>
              <p className="text-stone-600 text-lg leading-relaxed max-w-xl">
                Every piece in our collection undergoes a rigorous selection process. We collaborate with master craftsmen who treat wood, metal, and fabric like poetry. 
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold font-serif">100%</h4>
                  <p className="text-xs uppercase tracking-wider text-stone-500 font-bold">Sustainably Sourced</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold font-serif">25yr</h4>
                  <p className="text-xs uppercase tracking-wider text-stone-500 font-bold">Warranty Included</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative group">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                <img 
                  src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80&w=1000" 
                  alt="Craftsmanship" 
                  className="w-full"
                />
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-stone-100 rounded-full -z-10 animate-pulse" />
              <div className="absolute -bottom-8 -left-8 bg-stone-900 text-white p-8 rounded-2xl shadow-xl z-20 max-w-xs">
                <p className="text-sm italic font-serif">"The attention to detail in the Kanso series is simply unmatched. It changed how I view my living space."</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-stone-400">— Sofia Chen, Interior Architect</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-24 px-6 md:px-12 bg-stone-900 text-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="space-y-4">
              <div className="text-amber-200 text-3xl font-serif">01.</div>
              <h4 className="text-xl font-bold">White Glove Delivery</h4>
              <p className="text-stone-400 text-sm leading-relaxed">We don't just drop off boxes. We install, assemble, and position your furniture exactly where you want it.</p>
            </div>
            <div className="space-y-4">
              <div className="text-amber-200 text-3xl font-serif">02.</div>
              <h4 className="text-xl font-bold">Free Design Consult</h4>
              <p className="text-stone-400 text-sm leading-relaxed">Book a 30-minute session with our interior experts to build your dream mood board for any room.</p>
            </div>
            <div className="space-y-4">
              <div className="text-amber-200 text-3xl font-serif">03.</div>
              <h4 className="text-xl font-bold">Custom Dimensions</h4>
              <p className="text-stone-400 text-sm leading-relaxed">Found a piece you love but it doesn't fit? We offer bespoke resizing for most of our signature collection.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default App;
