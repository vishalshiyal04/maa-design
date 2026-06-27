import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { siteConfig } from '../config/siteData';

// 👇 Naye 2026 Premium Icons
import { FaPenNib, FaCut, FaLeaf, FaStar } from 'react-icons/fa';

import mainImage from '../assets/main-image.jpeg';
import design1 from '../assets/app1.jpeg'; 
import design2 from '../assets/app2.jpeg';
import design3 from '../assets/app3.jpeg';

export default function HeroSlider() {
  const slides = [mainImage, design1, design2, design3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); 
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  const prevSlide = () => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);

  return (
    <section className="bg-slate-50 text-[#0a1930] pt-6 lg:pt-8 pb-0 relative overflow-hidden w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 w-full">
        
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-center min-h-[auto] lg:min-h-[500px]">
          
          <div className="w-full lg:col-span-4 z-10 py-4 lg:py-12 order-2 lg:order-1">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 tracking-wide text-center lg:text-left text-[#0a1930]">
              Embroidery <br className="hidden lg:block"/> 
              <span className="text-blue-600 drop-shadow-sm">design</span>
            </h2>
            
            {/* ========================================== */}
            {/* 🌟 PREMIUM 2026 ANIMATED LIST 🌟 */}
            {/* ========================================== */}
            <div className="mt-8 space-y-4 max-w-sm mx-auto lg:mx-0">
              {[
                { name: "UNSTITCH DESIGN", icon: <FaPenNib className="text-xl" />, color: "text-blue-500", bg: "bg-blue-50" },
                { name: "SUIT PIECE DESIGN", icon: <FaCut className="text-xl" />, color: "text-purple-500", bg: "bg-purple-50" },
                { name: "KURTI DESIGN", icon: <FaLeaf className="text-xl" />, color: "text-emerald-500", bg: "bg-emerald-50" },
                { name: "DORI DESIGN", icon: <FaStar className="text-xl" />, color: "text-orange-500", bg: "bg-orange-50" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group flex items-center gap-5 p-3 rounded-2xl cursor-pointer transition-all duration-500 ease-out hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 hover:translate-x-2 border border-transparent hover:border-slate-200"
                >
                  <div className={`relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 overflow-hidden flex-shrink-0`}>
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${item.bg}`}></div>
                    <div className={`relative z-10 transition-colors duration-300 text-slate-400 group-hover:${item.color}`}>
                      {item.icon}
                    </div>
                  </div>

                  <span className="text-[#0a1930] font-extrabold text-sm sm:text-base tracking-wide relative overflow-hidden">
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                  </span>
                </div>
              ))}
            </div>
            {/* ========================================== */}
          </div>

          <div className="w-full lg:col-span-8 relative h-[300px] sm:h-[400px] lg:h-[600px] flex justify-center items-center group order-1 lg:order-2 mt-2 lg:mt-0">
            <div className="relative w-full max-w-[800px] h-full overflow-hidden transition-all duration-700 ease-in-out rounded-2xl lg:rounded-none lg:[clip-path:polygon(15%_0,100%_0,85%_100%,0%_100%)] lg:shadow-2xl">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  } ${
                    index === 0 ? 'bg-white' : 'bg-slate-200'
                  }`}
                >
                  <img 
                    src={slide} 
                    alt={`Embroidery Design ${index + 1}`}
                    className={`w-full h-full transition-transform duration-[4000ms] ease-linear ${
                      index === 0 ? 'object-contain p-4 lg:p-8' : 'object-cover'
                    } ${
                      index === currentSlide ? 'scale-105' : 'scale-100'
                    }`}
                  />
                  {index !== 0 && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1930]/40 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>

            <button onClick={prevSlide} className="absolute left-2 lg:left-10 z-20 bg-white/80 hover:bg-[#0a1930] text-[#0a1930] hover:text-white p-2 lg:p-3 rounded-full opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all shadow-md">
              <FaChevronLeft className="text-lg lg:text-xl" />
            </button>
            <button onClick={nextSlide} className="absolute right-2 lg:right-10 z-20 bg-white/80 hover:bg-[#0a1930] text-[#0a1930] hover:text-white p-2 lg:p-3 rounded-full opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all shadow-md">
              <FaChevronRight className="text-lg lg:text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Contact Bar */}
      <div className="w-full bg-[#0a1930] border-t-4 border-blue-100 py-4 px-4 mt-8">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-center text-sm md:text-base font-bold text-white gap-4 text-center">
          <div className="flex items-center gap-3 text-white text-lg sm:text-xl md:text-2xl tracking-widest">
            {siteConfig.phone}
          </div>
          
          <div className="hidden lg:flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
             <span className="w-2 h-2 rounded-full bg-white/50"></span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center uppercase text-[10px] sm:text-xs md:text-sm tracking-wider">
             <div className="flex items-center gap-2">
               <span className="bg-white text-[#0a1930] p-1 rounded-full text-[10px]">🌐</span>
               WWW.MAAEMBROIDERY.IN
             </div>
             <div className="flex items-center gap-2">
               <span className="bg-white text-[#0a1930] p-1 rounded-full text-[10px]">📍</span>
               AHMEDABAD, GUJARAT
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}