import React from 'react';
// 👇 Image ko import karein (path check kar lena)
import bannerImg from '../assets/image.png'; 

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white text-[#0a1930] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* ========================================== */}
          {/* 🌟 2026 PRO LEVEL IMAGE ANIMATION 🌟 */}
          {/* ========================================== */}
          <div className="relative group cursor-pointer w-full max-w-xl mx-auto lg:mx-0">
            {/* 1. Animated Neon Glow Background (The Magic) */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-500 to-yellow-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-300 animate-tilt"></div>
            
            {/* 2. Main Image Container (3D Lift) */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-white transform transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:-translate-y-3">
              
              <img 
                src={bannerImg} 
                alt="Maa Embroidery Design Banner" 
                className="w-full h-auto object-contain transform transition-transform duration-700"
              />
              
              {/* 3. Glossy Glass Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-x-full group-hover:translate-x-full ease-in-out"></div>
            </div>
          </div>
          {/* ========================================== */}

          {/* Right Side: Text Content */}
          <div className="space-y-8 animate-in slide-in-from-right-10 duration-1000">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-[#0a1930]">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Maa Embroidery Design</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Welcome to the premier destination for exquisite, high-quality computer embroidery designs. Located in the heart of Ahmedabad, we specialize in bridging traditional artistry with modern technology.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Whether you are looking for intricate bridal wear details, trendy crop top patterns, or elegant Anarkali motifs, our state-of-the-art machinery and expert designers ensure absolute perfection in every thread.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors shadow-sm hover:shadow-md">
                <h4 className="text-4xl font-black text-[#0a1930] mb-2">1000+</h4>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Unique Designs</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors shadow-sm hover:shadow-md">
                <h4 className="text-4xl font-black text-[#0a1930] mb-2">100%</h4>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Quality Assured</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}