// import { siteConfig } from '../config/siteData';
// import { FaChevronRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// export default function Footer() {
//   return (
//     <footer className="bg-[#0a1930] text-white pt-20 pb-10 px-6 border-t border-white/10 relative overflow-hidden">
      
//       {/* Subtle Background Glow for a modern 2026 feel */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 relative z-10">
        
//         {/* COLUMN 1: Navigation (Fully Working Anchor Links) */}
//         <div>
//           <h3 className="text-xl font-extrabold mb-8 flex items-center gap-2">
//             <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
//             Navigation
//           </h3>
//           <ul className="space-y-4 text-blue-100/80 font-medium">
//             <li>
//               <a href="#home" className="group flex items-center gap-2 hover:text-white transition-colors">
//                 <FaChevronRight className="text-[10px] text-blue-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
//                 <span className="transform group-hover:translate-x-1 transition-transform duration-300">Home</span>
//               </a>
//             </li>
//             <li>
//               <a href="#about" className="group flex items-center gap-2 hover:text-white transition-colors">
//                 <FaChevronRight className="text-[10px] text-blue-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
//                 <span className="transform group-hover:translate-x-1 transition-transform duration-300">About Us</span>
//               </a>
//             </li>
//             <li>
//               <a href="#gallery" className="group flex items-center gap-2 hover:text-white transition-colors">
//                 <FaChevronRight className="text-[10px] text-blue-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
//                 <span className="transform group-hover:translate-x-1 transition-transform duration-300">Gallery</span>
//               </a>
//             </li>
//             <li>
//               <a href="#contact" className="group flex items-center gap-2 hover:text-white transition-colors">
//                 <FaChevronRight className="text-[10px] text-blue-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
//                 <span className="transform group-hover:translate-x-1 transition-transform duration-300">Contact Us</span>
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* COLUMN 2: Useful Links */}
//         <div>
//           <h3 className="text-xl font-extrabold mb-8 flex items-center gap-2">
//             <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
//             Useful Links
//           </h3>
//           <ul className="space-y-4 text-blue-100/80 font-medium">
//             {/* These are placeholder links. When you build the Privacy/Refund pages later, put the actual URLs in the href */}
//             <li>
//               <a href="#" className="group flex items-center gap-2 hover:text-white transition-colors">
//                 <FaChevronRight className="text-[10px] text-blue-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
//                 <span className="transform group-hover:translate-x-1 transition-transform duration-300">Blogs</span>
//               </a>
//             </li>
//             <li>
//               <a href="/privacy-policy" className="group flex items-center gap-2 hover:text-white transition-colors">
//                 <FaChevronRight className="text-[10px] text-blue-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
//                 <span className="transform group-hover:translate-x-1 transition-transform duration-300">Privacy Policy</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="group flex items-center gap-2 hover:text-white transition-colors">
//                 <FaChevronRight className="text-[10px] text-blue-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
//                 <span className="transform group-hover:translate-x-1 transition-transform duration-300">Return and Refund</span>
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* COLUMN 3: Contact Info (Now Fully Clickable!) */}
//         <div>
//           <h3 className="text-xl font-extrabold mb-8 flex items-center gap-2">
//             <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
//             Contact Info
//           </h3>
//           <ul className="space-y-6 text-blue-100/80 font-medium">
//             <li>
//               <a href={siteConfig.mapLink} target="_blank" rel="noreferrer" className="flex items-start gap-4 hover:text-white group transition-colors">
//                 <div className="bg-white/5 p-3 rounded-full text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
//                   <FaMapMarkerAlt className="text-sm" />
//                 </div>
//                 <span className="leading-relaxed mt-1">{siteConfig.address}</span>
//               </a>
//             </li>
//             <li>
//               <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4 hover:text-white group transition-colors">
//                 <div className="bg-white/5 p-3 rounded-full text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
//                   <FaPhoneAlt className="text-sm" />
//                 </div>
//                 <span>{siteConfig.phone}</span>
//               </a>
//             </li>
//             <li>
//               <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 hover:text-white group transition-colors">
//                 <div className="bg-white/5 p-3 rounded-full text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
//                   <FaEnvelope className="text-sm" />
//                 </div>
//                 <span className="truncate max-w-[200px] sm:max-w-none">{siteConfig.email}</span>
//               </a>
//             </li>
//           </ul>
//         </div>

//       </div>
      
//       {/* Bottom Copyright Section */}
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-blue-200/50 text-sm font-medium">
//         <p>© {new Date().getFullYear()} {siteConfig.brandName}. All Rights Reserved.</p>
//         <p className="flex items-center gap-1">
//           Designed with <span className="text-blue-500">♥</span> for a seamless experience.
//         </p>
//       </div>
//     </footer>
//   );
// }

import { siteConfig } from '../config/siteData';
import { FaChevronRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0a1930] text-white pt-20 pb-10 px-6 border-t border-white/10 relative overflow-hidden">
      
      {/* Subtle Background Glow for a modern 2026 feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 relative z-10">
        
        {/* COLUMN 1: Navigation (Fully Working Anchor Links) */}
        <div>
          <h3 className="text-xl font-extrabold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
            Navigation
          </h3>
          <ul className="space-y-4 text-blue-100/80 font-medium">
            <li>
              <a href="/#home" className="group flex items-center gap-2 hover:text-white transition-colors">
                <FaChevronRight className="text-[10px] text-blue-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">Home</span>
              </a>
            </li>
            <li>
              <a href="/#about" className="group flex items-center gap-2 hover:text-white transition-colors">
                <FaChevronRight className="text-[10px] text-blue-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">About Us</span>
              </a>
            </li>
            <li>
              <a href="/#gallery" className="group flex items-center gap-2 hover:text-white transition-colors">
                <FaChevronRight className="text-[10px] text-blue-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">Gallery</span>
              </a>
            </li>
            <li>
              <a href="/#contact" className="group flex items-center gap-2 hover:text-white transition-colors">
                <FaChevronRight className="text-[10px] text-blue-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">Contact Us</span>
              </a>
            </li>
          </ul>
        </div>

        {/* COLUMN 2: Useful Links */}
        <div>
          <h3 className="text-xl font-extrabold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
            Useful Links
          </h3>
          <ul className="space-y-4 text-blue-100/80 font-medium">
            <li>
              <a href="/#" className="group flex items-center gap-2 hover:text-white transition-colors">
                <FaChevronRight className="text-[10px] text-blue-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">Blogs</span>
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="group flex items-center gap-2 hover:text-white transition-colors">
                <FaChevronRight className="text-[10px] text-blue-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">Privacy Policy</span>
              </a>
            </li>
            <li>
              <a href="/return-refund" className="group flex items-center gap-2 hover:text-white transition-colors">
                <FaChevronRight className="text-[10px] text-blue-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">Return and Refund</span>
              </a>
            </li>
          </ul>
        </div>

        {/* COLUMN 3: Contact Info */}
        <div>
          <h3 className="text-xl font-extrabold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
            Contact Info
          </h3>
          <ul className="space-y-6 text-blue-100/80 font-medium">
            <li>
              <a href={siteConfig.mapLink} target="_blank" rel="noreferrer" className="flex items-start gap-4 hover:text-white group transition-colors">
                <div className="bg-white/5 p-3 rounded-full text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <span className="leading-relaxed mt-1">{siteConfig.address}</span>
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4 hover:text-white group transition-colors">
                <div className="bg-white/5 p-3 rounded-full text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <FaPhoneAlt className="text-sm" />
                </div>
                <span>{siteConfig.phone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 hover:text-white group transition-colors">
                <div className="bg-white/5 p-3 rounded-full text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <FaEnvelope className="text-sm" />
                </div>
                <span className="truncate max-w-[200px] sm:max-w-none">{siteConfig.email}</span>
              </a>
            </li>
          </ul>
        </div>

      </div>
      
      {/* Bottom Copyright Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-blue-200/50 text-sm font-medium">
        <p>© {new Date().getFullYear()} {siteConfig.brandName}. All Rights Reserved.</p>
        <p className="flex items-center gap-1">
          Designed with <span className="text-blue-500">♥</span> for a seamless experience.
        </p>
      </div>
    </footer>
  );
}