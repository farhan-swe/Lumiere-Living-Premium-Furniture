
import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { ShoppingCart, Eye } from 'lucide-react';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="collections" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-stone-400 uppercase tracking-widest text-sm font-bold">New Arrivals</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold">Our Masterpieces</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.name 
                    ? 'bg-stone-900 text-white shadow-lg' 
                    : 'bg-stone-50 text-stone-600 hover:bg-stone-100'
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative flex flex-col">
              <div className="relative overflow-hidden aspect-[4/5] bg-stone-100 rounded-2xl">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <button className="bg-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform">
                    <ShoppingCart className="w-5 h-5 text-stone-900" />
                  </button>
                  <button className="bg-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform">
                    <Eye className="w-5 h-5 text-stone-900" />
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider text-stone-900">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-stone-900 group-hover:text-stone-600 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-stone-500 text-sm mt-1">{product.description}</p>
                </div>
                <span className="text-lg font-bold text-stone-900 font-serif">
                  ${product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
