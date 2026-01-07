
import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, Github, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-950 text-stone-100 pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-stone-800/10 rounded-full blur-[120px] -mr-64 -mt-64" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold tracking-tighter">LUMIERE LIVING</h2>
            <p className="text-stone-400 leading-relaxed text-sm">
              We create spaces that resonate with your soul. Every piece is handcrafted by master artisans to ensure quality that lasts generations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-stone-800 rounded-full hover:bg-stone-100 hover:text-stone-900 transition-all"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="p-2 border border-stone-800 rounded-full hover:bg-stone-100 hover:text-stone-900 transition-all"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="p-2 border border-stone-800 rounded-full hover:bg-stone-100 hover:text-stone-900 transition-all"><Twitter className="w-4 h-4" /></a>
              <a href="https://github.com/khdxsohee" target="_blank" className="p-2 border border-stone-800 rounded-full hover:bg-stone-100 hover:text-stone-900 transition-all"><Github className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-stone-100">Quick Links</h4>
            <ul className="space-y-4 text-sm text-stone-400">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Artisan Studio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trade Program</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Showroom Locations</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-stone-100">Customer Care</h4>
            <ul className="space-y-4 text-sm text-stone-400">
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Warranty Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Instructions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-stone-100">Newsletter</h4>
            <p className="text-stone-400 text-sm">Join our inner circle for exclusive previews and design inspiration.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address"
                className="bg-stone-900 border-none rounded-l-lg px-4 py-3 text-sm flex-1 focus:ring-1 focus:ring-stone-700 outline-none"
              />
              <button className="bg-stone-100 text-stone-950 px-4 py-3 rounded-r-lg hover:bg-white transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-stone-800 mb-12">
          <div className="flex items-center gap-4 text-sm text-stone-400">
            <div className="bg-stone-900 p-3 rounded-xl"><MapPin className="w-5 h-5" /></div>
            <span>88 Luxury Way, Milan, Italy</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-stone-400">
            <div className="bg-stone-900 p-3 rounded-xl"><Phone className="w-5 h-5" /></div>
            <span>+39 (0) 555 0123</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-stone-400">
            <div className="bg-stone-900 p-3 rounded-xl"><Mail className="w-5 h-5" /></div>
            <span>hello@lumiereliving.com</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 text-[11px] uppercase tracking-widest font-bold text-stone-600">
          <p>© 2024 LUMIERE LIVING. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-stone-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-stone-400 transition-colors">Accessibility</a>
          </div>
          <p>DESIGNED BY <a href="https://github.com/khdxsohee" className="text-stone-400 hover:text-white underline decoration-stone-800 underline-offset-4">KHDXSOHEE</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
