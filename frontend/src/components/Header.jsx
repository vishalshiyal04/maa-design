import React, { useState } from 'react';
import { siteConfig } from '../config/siteData';
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import mainImage from '../assets/main-image.jpeg';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      
      {/* Top Info Bar */}
      <div className="bg-white text-[#0a1930] border-b border-gray-200 py-2 px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs md:text-sm font-bold text-center">
        <div className="flex items-center gap-2 mb-1 sm:mb-0">
          <FaMapMarkerAlt className="flex-shrink-0 text-blue-600" /> 
          <a href={siteConfig.mapLink} target="_blank" rel="noopener noreferrer" className="truncate max-w-[280px] sm:max-w-none hover:text-blue-600 transition-colors cursor-pointer">
            {siteConfig.address}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="flex-shrink-0 text-blue-600" /> 
          <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="hover:text-blue-600 transition-colors cursor-pointer">
            {siteConfig.phone}
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#0a1930] text-white py-4 px-4 sm:px-6 flex justify-between items-center relative">
        <a href="/#home" className="flex items-center gap-3 z-50">
          <img src={mainImage} alt="Maa Embroidery Logo" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-contain bg-white border-2 border-white shadow-lg" loading="lazy" />
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider">MAA</h1>
            <p className="text-[8px] sm:text-[10px] md:text-xs text-blue-300 tracking-widest uppercase">Embroidery Design</p>
          </div>
        </a>

        <ul className="hidden md:flex gap-8 text-sm font-semibold">
          <li><a href="/#home" className="hover:text-blue-300 transition">Home</a></li>
          <li><a href="/#about" className="hover:text-blue-300 transition">About Us</a></li>
          <li><a href="/#gallery" className="hover:text-blue-300 transition">Gallery</a></li>
          <li><a href="/blogs" className="hover:text-blue-300 transition">Blogs</a></li>
          <li><a href="/#contact" className="hover:text-blue-300 transition">Contact Us</a></li>
        </ul>

        <div className="hidden md:flex">
            <a href={siteConfig.socials.whatsapp} target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2 font-bold transition shadow-lg">
              <FaWhatsapp className="text-xl" /> WhatsApp
            </a>
        </div>

        <button className="md:hidden text-2xl text-white z-50 focus:outline-none" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`md:hidden absolute top-full left-0 w-full bg-white text-[#0a1930] border-b border-gray-200 transition-all duration-300 overflow-hidden flex flex-col ${isMobileMenuOpen ? 'max-h-96 py-6 shadow-2xl' : 'max-h-0 py-0'}`}>
          <ul className="flex flex-col items-center gap-6 text-base font-bold">
            <li><a href="/#home" onClick={toggleMenu} className="hover:text-blue-600 transition">Home</a></li>
            <li><a href="/#about" onClick={toggleMenu} className="hover:text-blue-600 transition">About Us</a></li>
            <li><a href="/#gallery" onClick={toggleMenu} className="hover:text-blue-600 transition">Gallery</a></li>
            <li><a href="/blogs" onClick={toggleMenu} className="hover:text-blue-600 transition">Blogs</a></li>
            <li><a href="/#contact" onClick={toggleMenu} className="hover:text-blue-600 transition">Contact Us</a></li>
            <li>
                <a href={siteConfig.socials.whatsapp} onClick={toggleMenu} target="_blank" rel="noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-full flex items-center gap-2 font-bold mt-2">
                    <FaWhatsapp className="text-xl" /> Chat on WhatsApp
                </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}