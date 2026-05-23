// // import { siteConfig } from '../config/siteData';
// // import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

// // export default function Header() {
// //   return (
// //     <header className="w-full">
// //       {/* Top Info Bar */}
// //       <div className="bg-yellow-500 text-black py-2 px-6 flex flex-col md:flex-row justify-between items-center text-sm font-medium">
// //         <div className="flex items-center gap-2">
// //           <FaMapMarkerAlt /> <span>{siteConfig.address}</span>
// //         </div>
// //         <div className="flex items-center gap-4 mt-2 md:mt-0">
// //           <div className="flex items-center gap-2">
// //             <FaPhoneAlt /> <span>{siteConfig.phone}</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Navigation */}
// //       <nav className="bg-zinc-900 text-white py-4 px-6 flex justify-between items-center">
// //         {/* Unique Logo Concept */}
// //         <div className="flex items-center gap-3">
// //           <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xl">M</div>
// //           <div>
// //             <h1 className="text-2xl font-bold tracking-wider">MAA</h1>
// //             <p className="text-xs text-yellow-500 tracking-widest uppercase">Embroidery Design</p>
// //           </div>
// //         </div>

// //         <ul className="hidden md:flex gap-8 text-sm font-semibold">
// //           <li className="hover:text-yellow-500 cursor-pointer transition">Home</li>
// //           <li className="hover:text-yellow-500 cursor-pointer transition">About Us</li>
// //           <li className="hover:text-yellow-500 cursor-pointer transition">Gallery</li>
// //           <li className="hover:text-yellow-500 cursor-pointer transition">Contact Us</li>
// //         </ul>

// //         <a 
// //           href={siteConfig.socials.whatsapp} 
// //           className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2 font-bold transition"
// //         >
// //           <FaWhatsapp className="text-xl" /> WhatsApp
// //         </a>
// //       </nav>
// //     </header>
// //   );
// // }

// import { siteConfig } from '../config/siteData';
// import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

// export default function Header() {
//   return (
//     <header className="w-full fixed top-0 z-50 shadow-md">
//       {/* Top Info Bar */}
//       <div className="bg-yellow-500 text-black py-2 px-6 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm font-medium">
//         <div className="flex items-center gap-2">
//           <FaMapMarkerAlt /> <span>{siteConfig.address}</span>
//         </div>
//         <div className="flex items-center gap-4 mt-2 md:mt-0">
//           <div className="flex items-center gap-2">
//             <FaPhoneAlt /> <span>{siteConfig.phone}</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <nav className="bg-zinc-900 text-white py-4 px-6 flex justify-between items-center">
//         <a href="#home" className="flex items-center gap-3">
//           <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg shadow-yellow-500/20">M</div>
//           <div>
//             <h1 className="text-xl md:text-2xl font-bold tracking-wider">MAA</h1>
//             <p className="text-[10px] md:text-xs text-yellow-500 tracking-widest uppercase">Embroidery Design</p>
//           </div>
//         </a>

//         <ul className="hidden md:flex gap-8 text-sm font-semibold">
//           <li><a href="#home" className="hover:text-yellow-500 transition">Home</a></li>
//           <li><a href="#about" className="hover:text-yellow-500 transition">About Us</a></li>
//           <li><a href="#gallery" className="hover:text-yellow-500 transition">Gallery</a></li>
//           <li><a href="#contact" className="hover:text-yellow-500 transition">Contact Us</a></li>
//         </ul>

//         <a 
//           href={siteConfig.socials.whatsapp} 
//           target="_blank" rel="noreferrer"
//           className="hidden md:flex bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full items-center gap-2 font-bold transition shadow-lg shadow-green-500/30"
//         >
//           <FaWhatsapp className="text-xl" /> WhatsApp
//         </a>
//       </nav>
//     </header>
//   );
// }

// import { siteConfig } from '../config/siteData';
// import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
// import mainImage from '../assets/main-image.jpeg'; // <-- Import your new image

// export default function Header() {
//   return (
//   <header className="w-full sticky top-0 z-50 shadow-md">
//       {/* Top Info Bar */}
//       <div className="bg-yellow-500 text-black py-2 px-6 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm font-medium">
//         <div className="flex items-center gap-2">
//           <FaMapMarkerAlt /> <span>{siteConfig.address}</span>
//         </div>
//         <div className="flex items-center gap-4 mt-2 md:mt-0">
//           <div className="flex items-center gap-2">
//             <FaPhoneAlt /> <span>{siteConfig.phone}</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <nav className="bg-zinc-900 text-white py-4 px-6 flex justify-between items-center">
        
//         {/* NEW LOGO SECTION */}
//         <a href="#home" className="flex items-center gap-3">
//           {/* We swapped the 'M' div for your actual image */}
//           <img 
//             src={mainImage} 
//             alt="Maa Embroidery Logo" 
//             className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500 shadow-lg shadow-yellow-500/20" 
//           />
//           <div>
//             <h1 className="text-xl md:text-2xl font-bold tracking-wider">MAA</h1>
//             <p className="text-[10px] md:text-xs text-yellow-500 tracking-widest uppercase">Embroidery Design</p>
//           </div>
//         </a>

//         <ul className="hidden md:flex gap-8 text-sm font-semibold">
//           <li><a href="#home" className="hover:text-yellow-500 transition">Home</a></li>
//           <li><a href="#about" className="hover:text-yellow-500 transition">About Us</a></li>
//           <li><a href="#gallery" className="hover:text-yellow-500 transition">Gallery</a></li>
//           <li><a href="#contact" className="hover:text-yellow-500 transition">Contact Us</a></li>
//         </ul>

//         <a 
//           href={siteConfig.socials.whatsapp} 
//           target="_blank" rel="noreferrer"
//           className="hidden md:flex bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full items-center gap-2 font-bold transition shadow-lg shadow-green-500/30"
//         >
//           <FaWhatsapp className="text-xl" /> WhatsApp
//         </a>
//       </nav>
//     </header>
//   );
// }

// import { useState } from 'react';
// import { siteConfig } from '../config/siteData';
// import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
// import mainImage from '../assets/main-image.jpeg';

// export default function Header() {
//   // State to control if the mobile menu is open or closed
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Function to toggle the menu
//   const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

//   return (
//     <header className="w-full sticky top-0 z-50 shadow-md bg-zinc-900">
      
//       {/* Top Info Bar - Adjusted text sizes for mobile */}
//       <div className="bg-yellow-500 text-black py-2 px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs md:text-sm font-medium text-center">
//         <div className="flex items-center gap-2 mb-1 sm:mb-0">
//           <FaMapMarkerAlt className="flex-shrink-0" /> 
//           <span className="truncate max-w-[280px] sm:max-w-none">{siteConfig.address}</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <FaPhoneAlt className="flex-shrink-0" /> <span>{siteConfig.phone}</span>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <nav className="text-white py-4 px-4 sm:px-6 flex justify-between items-center relative">
        
//         {/* LOGO */}
//         <a href="#home" className="flex items-center gap-3 z-50">
//           <img 
//             src={mainImage} 
//             alt="Maa Embroidery Logo" 
//             className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-yellow-500 shadow-lg shadow-yellow-500/20" 
//           />
//           <div>
//             <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider">MAA</h1>
//             <p className="text-[8px] sm:text-[10px] md:text-xs text-yellow-500 tracking-widest uppercase">Embroidery Design</p>
//           </div>
//         </a>

//         {/* DESKTOP MENU (Hidden on phones) */}
//         <ul className="hidden md:flex gap-8 text-sm font-semibold">
//           <li><a href="#home" className="hover:text-yellow-500 transition">Home</a></li>
//           <li><a href="#about" className="hover:text-yellow-500 transition">About Us</a></li>
//           <li><a href="#gallery" className="hover:text-yellow-500 transition">Gallery</a></li>
//           <li><a href="#contact" className="hover:text-yellow-500 transition">Contact Us</a></li>
//         </ul>

//         {/* DESKTOP WHATSAPP BUTTON (Hidden on phones) */}
//         <div className="hidden md:flex">
//             <a href={siteConfig.socials.whatsapp} target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2 font-bold transition shadow-lg shadow-green-500/30">
//               <FaWhatsapp className="text-xl" /> WhatsApp
//             </a>
//         </div>

//         {/* MOBILE MENU BUTTON (Hidden on desktops) */}
//         <button 
//           className="md:hidden text-2xl text-yellow-500 z-50 focus:outline-none" 
//           onClick={toggleMenu}
//           aria-label="Toggle Menu"
//         >
//           {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         {/* MOBILE MENU DROPDOWN */}
//         <div 
//           className={`md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 transition-all duration-300 overflow-hidden flex flex-col ${
//             isMobileMenuOpen ? 'max-h-96 py-6 shadow-2xl' : 'max-h-0 py-0'
//           }`}
//         >
//           <ul className="flex flex-col items-center gap-6 text-base font-semibold">
//             {/* Added onClick={toggleMenu} so the menu closes automatically when a link is clicked */}
//             <li><a href="#home" onClick={toggleMenu} className="hover:text-yellow-500 transition">Home</a></li>
//             <li><a href="#about" onClick={toggleMenu} className="hover:text-yellow-500 transition">About Us</a></li>
//             <li><a href="#gallery" onClick={toggleMenu} className="hover:text-yellow-500 transition">Gallery</a></li>
//             <li><a href="#contact" onClick={toggleMenu} className="hover:text-yellow-500 transition">Contact Us</a></li>
//             <li>
//                 <a href={siteConfig.socials.whatsapp} onClick={toggleMenu} target="_blank" rel="noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-full flex items-center gap-2 font-bold mt-2">
//                     <FaWhatsapp className="text-xl" /> Chat on WhatsApp
//                 </a>
//             </li>
//           </ul>
//         </div>

//       </nav>
//     </header>
//   );
// }

import { useState } from 'react';
import { siteConfig } from '../config/siteData';
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import mainImage from '../assets/main-image.jpeg';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      
      {/* Top Info Bar - Now White with Navy Text to match app */}
      <div className="bg-white text-[#0a1930] border-b border-gray-200 py-2 px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs md:text-sm font-bold text-center">
        <div className="flex items-center gap-2 mb-1 sm:mb-0">
          <FaMapMarkerAlt className="flex-shrink-0 text-blue-600" /> 
          <span className="truncate max-w-[280px] sm:max-w-none">{siteConfig.address}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="flex-shrink-0 text-blue-600" /> <span>{siteConfig.phone}</span>
        </div>
      </div>

      {/* Main Navigation - Now Deep Navy Blue */}
      <nav className="bg-[#0a1930] text-white py-4 px-4 sm:px-6 flex justify-between items-center relative">
        
        {/* LOGO */}
        <a href="#home" className="flex items-center gap-3 z-50">
          <img 
            src={mainImage} 
            alt="Maa Embroidery Logo" 
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-contain bg-white border-2 border-white shadow-lg" 
          />
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider">MAA</h1>
            <p className="text-[8px] sm:text-[10px] md:text-xs text-blue-300 tracking-widest uppercase">Embroidery Design</p>
          </div>
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-sm font-semibold">
          <li><a href="#home" className="hover:text-blue-300 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-300 transition">About Us</a></li>
          <li><a href="#gallery" className="hover:text-blue-300 transition">Gallery</a></li>
          <li><a href="#contact" className="hover:text-blue-300 transition">Contact Us</a></li>
        </ul>

        {/* DESKTOP WHATSAPP BUTTON */}
        <div className="hidden md:flex">
            <a href={siteConfig.socials.whatsapp} target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2 font-bold transition shadow-lg">
              <FaWhatsapp className="text-xl" /> WhatsApp
            </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden text-2xl text-white z-50 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* MOBILE MENU DROPDOWN - Light Theme */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full bg-white text-[#0a1930] border-b border-gray-200 transition-all duration-300 overflow-hidden flex flex-col ${
            isMobileMenuOpen ? 'max-h-96 py-6 shadow-2xl' : 'max-h-0 py-0'
          }`}
        >
          <ul className="flex flex-col items-center gap-6 text-base font-bold">
            <li><a href="#home" onClick={toggleMenu} className="hover:text-blue-600 transition">Home</a></li>
            <li><a href="#about" onClick={toggleMenu} className="hover:text-blue-600 transition">About Us</a></li>
            <li><a href="#gallery" onClick={toggleMenu} className="hover:text-blue-600 transition">Gallery</a></li>
            <li><a href="#contact" onClick={toggleMenu} className="hover:text-blue-600 transition">Contact Us</a></li>
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