
import React from 'react';
import { Product } from './types';
import { Sofa, Lamp, Table, Bed, Armchair, LayoutGrid } from 'lucide-react';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Nordic Velvet Sofa',
    category: 'Seating',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
    description: 'A luxurious velvet sofa with minimalist Scandinavian lines.'
  },
  {
    id: '2',
    name: 'Apollo Marble Table',
    category: 'Dining',
    price: 850,
    image: 'https://images.unsplash.com/photo-1530018607912-eff2df17c979?auto=format&fit=crop&q=80&w=800',
    description: 'Carrara marble top with a brushed gold geometric base.'
  },
  {
    id: '3',
    name: 'Elysian Reading Lamp',
    category: 'Lighting',
    price: 245,
    image: 'https://images.unsplash.com/photo-1507473884658-6697ec367d5d?auto=format&fit=crop&q=80&w=800',
    description: 'Dimmable warm light with a sleek matte black finish.'
  },
  {
    id: '4',
    name: 'Oakwood Platform Bed',
    category: 'Bedroom',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867821c?auto=format&fit=crop&q=80&w=800',
    description: 'Solid white oak frame with integrated bedside shelving.'
  },
  {
    id: '5',
    name: 'Velvet Wing Chair',
    category: 'Seating',
    price: 650,
    image: 'https://images.unsplash.com/photo-1598191383441-73bb1997d74e?auto=format&fit=crop&q=80&w=800',
    description: 'Classic wingback design reimagined for the modern home.'
  },
  {
    id: '6',
    name: 'Kanso Coffee Table',
    category: 'Living',
    price: 420,
    image: 'https://images.unsplash.com/photo-1565412850139-052410a563f7?auto=format&fit=crop&q=80&w=800',
    description: 'Japanese-inspired minimalist low table in walnut.'
  }
];

export const CATEGORIES = [
  { name: 'All', icon: <LayoutGrid className="w-5 h-5" /> },
  { name: 'Seating', icon: <Sofa className="w-5 h-5" /> },
  { name: 'Dining', icon: <Table className="w-5 h-5" /> },
  { name: 'Lighting', icon: <Lamp className="w-5 h-5" /> },
  { name: 'Bedroom', icon: <Bed className="w-5 h-5" /> }
];
