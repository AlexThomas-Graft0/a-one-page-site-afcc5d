'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, ShoppingBag, MapPin, ChevronRight, Award, Truck, Leaf } from 'lucide-react';

export default function CoffeezuraLanding() {
  const features = [
    { icon: <Leaf className="w-6 h-6" />, title: "Ethically Sourced", desc: "Sustainably grown beans from prehistoric-friendly farms." },
    { icon: <Truck className="w-6 h-6" />, title: "Cardiff Delivery", desc: "Roasted in Cardiff and delivered to your lair, fast." },
    { icon: <Award className="w-6 h-6" />, title: "Roast Mastery", desc: "Expertly roasted to bring out the volcanic flavor." },
  ];

  const products = [
    { name: "T-Rex Dark Roast", desc: "Bold, intense, and ready to wake the dead.", price: "£14.99", img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800" },
    { name: "Velociraptor Espresso", desc: "Fast, sharp, and packs a serious punch.", price: "£12.99", img: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=800" },
    { name: "Herbivore House Blend", desc: "Smooth, nutty, and perfectly balanced.", price: "£11.99", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800" },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter text-amber-900 flex items-center gap-2">
          <Coffee className="w-8 h-8" /> COFFEEZURA
        </div>
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#shop" className="hover:text-amber-700">Shop</a>
          <a href="#about" className="hover:text-amber-700">Our Story</a>
          <a href="#contact" className="hover:text-amber-700">Contact</a>
        </div>
        <button className="bg-amber-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-800 transition">
          Order Now
        </button>
      </nav>

      {/* Hero */}
      <header className="px-8 py-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-6xl md:text-8xl font-extrabold text-stone-950 leading-none mb-6">
            Coffee with a <span className="text-amber-700">Prehistoric</span> Kick.
          </h1>
          <p className="text-xl text-stone-600 mb-8 max-w-lg">
            Small-batch, dinosaur-themed coffee beans roasted right here in the heart of Cardiff. Unleash your inner beast with every sip.
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-xl hover:bg-stone-700 transition">
              <ShoppingBag /> Browse Beans
            </button>
          </div>
        </motion.div>
        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200" 
            alt="Coffee beans" 
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      {/* Features */}
      <section className="bg-amber-900 py-20 text-stone-100">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="p-3 bg-amber-800 w-fit rounded-lg">{f.icon}</div>
              <h3 className="text-2xl font-bold">{f.title}</h3>
              <p className="text-amber-200">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="shop" className="py-24 max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold mb-12">Dino-Roast Collection</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
              <img src={p.img} alt={p.name} className="w-full h-64 object-cover rounded-xl mb-6" />
              <h3 className="text-xl font-bold mb-2">{p.name}</h3>
              <p className="text-stone-600 mb-4">{p.desc}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">{p.price}</span>
                <button className="text-amber-800 font-semibold flex items-center hover:underline">
                  Add to Cart <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-16 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-white text-xl font-bold mb-4">Coffeezura Cardiff</h4>
            <p className="flex items-center gap-2 mb-2"><MapPin className="w-4 h-4" /> Roastery: Roath, Cardiff, UK</p>
            <p>© 2024 Coffeezura. Brewed for the bold.</p>
          </div>
          <div className="text-right">
            <h4 className="text-white font-bold mb-4">Follow the Herd</h4>
            <div className="flex gap-4 justify-end">
              <span>Instagram</span>
              <span>Twitter</span>
              <span>Facebook</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}