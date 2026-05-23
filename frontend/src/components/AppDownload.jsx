// import { siteConfig } from '../config/siteData';
// import { FaGooglePlay } from 'react-icons/fa';

// export default function AppDownload() {
//   // We use the exact business name and area so Google recognizes the place and shows the white info card
//   const mapQuery = "Maa Computer Embroidery Design, Sardar Patel Mall, Ahmedabad";
  
//   // Using standard maps.google.com embed format
//   const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=17&ie=UTF8&iwloc=&output=embed`;

//   return (
//     <section className="bg-zinc-100 py-16 px-6 text-center">
//       <h2 className="text-3xl font-bold mb-8">Download Our Application</h2>
      
//       <a 
//         href={siteConfig.appLink} 
//         target="_blank" 
//         rel="noopener noreferrer"
//         className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-500 hover:text-black transition shadow-lg mb-12"
//       >
//         <FaGooglePlay className="text-2xl" /> 
//         Get it on Google Play
//       </a>

//       {/* Map Integration */}
//       <div className="max-w-5xl mx-auto h-96 bg-gray-300 rounded-xl overflow-hidden shadow-md border-4 border-white relative">
//         <iframe 
//           title="Maa Embroidery Location"
//           src={embedUrl} 
//           width="100%" 
//           height="100%" 
//           style={{ border: 0 }} 
//           allowFullScreen="" 
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade">
//         </iframe>
//       </div>
//     </section>
//   );
// }

// import { siteConfig } from '../config/siteData';
// import { FaGooglePlay } from 'react-icons/fa';

// // Importing the images from your assets folder
// import app1 from '../assets/app1.jpeg';
// import app2 from '../assets/app2.jpeg';
// import app3 from '../assets/app3.jpeg';
// import app4 from '../assets/app4.jpeg';

// export default function AppDownload() {
//   // Map configuration
//   const mapQuery = "Maa Computer Embroidery Design, Sardar Patel Mall, Ahmedabad";
//   const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=17&ie=UTF8&iwloc=&output=embed`;

//   return (
//     <section className="bg-zinc-100 py-20 px-6 overflow-hidden relative">
//       <div className="max-w-7xl mx-auto">

//         {/* Top Section: App Info & Screenshots */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

//           {/* Left Side: Text & Download Button */}
//           <div className="text-center lg:text-left z-10">
//             <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
//               Experience Our Designs <br/>
//               <span className="text-yellow-500">On The Go</span>
//             </h2>
//             <p className="text-lg text-zinc-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
//               Download our official application to browse thousands of premium embroidery designs, save your favorites, and get exclusive updates straight to your mobile device.
//             </p>

//             <a 
//               href={siteConfig.appLink} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black hover:scale-105 transition-all duration-300 shadow-xl shadow-black/20 group"
//             >
//               <FaGooglePlay className="text-4xl" /> 
//               <div className="text-left">
//                 <span className="block text-xs uppercase tracking-wider font-medium text-zinc-400 group-hover:text-zinc-800">Get it on</span>
//                 <span className="block text-2xl font-bold -mt-1">Google Play</span>
//               </div>
//             </a>
//           </div>

//           {/* Right Side: Premium App Screenshot Grid */}
//           <div className="relative mt-12 lg:mt-0">
//             {/* Decorative yellow glow behind the images */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-500/20 rounded-full blur-[80px] -z-10"></div>

//             {/* The Staggered Image Layout */}
//             <div className="grid grid-cols-2 gap-4 md:gap-6 transform md:-rotate-6 md:scale-95 hover:scale-100 transition-transform duration-500">
              
//               {/* Column 1 (Shifted down) */}
//               <div className="space-y-4 md:space-y-6 translate-y-6 md:translate-y-12">
//                 <img src={app1} alt="App Screen 1" className="w-full rounded-2xl md:rounded-3xl shadow-2xl border-[6px] border-white object-cover aspect-[9/19]" />
//                 <img src={app2} alt="App Screen 2" className="w-full rounded-2xl md:rounded-3xl shadow-2xl border-[6px] border-white object-cover aspect-[9/19]" />
//               </div>

//               {/* Column 2 (Shifted up) */}
//               <div className="space-y-4 md:space-y-6 -translate-y-6 md:-translate-y-12">
//                 <img src={app3} alt="App Screen 3" className="w-full rounded-2xl md:rounded-3xl shadow-2xl border-[6px] border-white object-cover aspect-[9/19]" />
//                 <img src={app4} alt="App Screen 4" className="w-full rounded-2xl md:rounded-3xl shadow-2xl border-[6px] border-white object-cover aspect-[9/19]" />
//               </div>

//             </div>
//           </div>
//         </div>

//         {/* Bottom Section: Map Integration */}
//         <div className="max-w-5xl mx-auto h-[400px] md:h-[500px] bg-gray-300 rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white relative z-20">
//           <iframe 
//             title="Maa Embroidery Location"
//             src={embedUrl} 
//             width="100%" 
//             height="100%" 
//             style={{ border: 0 }} 
//             allowFullScreen="" 
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade">
//           </iframe>
//         </div>

//       </div>
//     </section>
//   );
// }

// import { siteConfig } from '../config/siteData';
// import { FaGooglePlay } from 'react-icons/fa';

// // Importing the images from your assets folder
// import app1 from '../assets/app1.jpeg';
// import app2 from '../assets/app2.jpeg';
// import app3 from '../assets/app3.jpeg';
// import app4 from '../assets/app4.jpeg';

// export default function AppDownload() {
//   // Map configuration
//   const mapQuery = "Maa Computer Embroidery Design, Sardar Patel Mall, Ahmedabad";
//   // Fixed a small typo in your map URL to ensure it loads perfectly
//   const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=17&ie=UTF8&iwloc=&output=embed`;

//   return (
//     // Changed to a soft slate background to match the new light theme
//     <section className="bg-slate-50 py-20 px-6 overflow-hidden relative">
//       <div className="max-w-7xl mx-auto">

//         {/* Top Section: App Info & Screenshots */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

//           {/* Left Side: Text & Download Button */}
//           <div className="text-center lg:text-left z-10">
//             {/* Navy Blue text with Bright Blue accent */}
//             <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0a1930]">
//               Experience Our Designs <br/>
//               <span className="text-blue-600">On The Go</span>
//             </h2>
//             <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
//               Download our official application to browse thousands of premium embroidery designs, save your favorites, and get exclusive updates straight to your mobile device.
//             </p>

//             {/* Button is now Navy Blue, and turns Bright Blue on hover */}
//             <a 
//               href={siteConfig.appLink} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-4 bg-[#0a1930] text-white px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300 shadow-xl shadow-[#0a1930]/20 group"
//             >
//               <FaGooglePlay className="text-4xl" /> 
//               <div className="text-left">
//                 <span className="block text-xs uppercase tracking-wider font-medium text-blue-200 group-hover:text-blue-100 transition-colors">Get it on</span>
//                 <span className="block text-2xl font-bold -mt-1">Google Play</span>
//               </div>
//             </a>
//           </div>

//           {/* Right Side: Premium App Screenshot Grid */}
//           <div className="relative mt-12 lg:mt-0">
//             {/* Decorative BLUE glow behind the images instead of yellow */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/20 rounded-full blur-[80px] -z-10"></div>

//             {/* The Staggered Image Layout */}
//             <div className="grid grid-cols-2 gap-4 md:gap-6 transform md:-rotate-6 md:scale-95 hover:scale-100 transition-transform duration-500">
              
//               {/* Column 1 (Shifted down) */}
//               <div className="space-y-4 md:space-y-6 translate-y-6 md:translate-y-12">
//                 <img src={app1} alt="App Screen 1" className="w-full rounded-2xl md:rounded-3xl shadow-2xl shadow-blue-900/20 border-[6px] border-white object-cover aspect-[9/19]" />
//                 <img src={app2} alt="App Screen 2" className="w-full rounded-2xl md:rounded-3xl shadow-2xl shadow-blue-900/20 border-[6px] border-white object-cover aspect-[9/19]" />
//               </div>

//               {/* Column 2 (Shifted up) */}
//               <div className="space-y-4 md:space-y-6 -translate-y-6 md:-translate-y-12">
//                 <img src={app3} alt="App Screen 3" className="w-full rounded-2xl md:rounded-3xl shadow-2xl shadow-blue-900/20 border-[6px] border-white object-cover aspect-[9/19]" />
//                 <img src={app4} alt="App Screen 4" className="w-full rounded-2xl md:rounded-3xl shadow-2xl shadow-blue-900/20 border-[6px] border-white object-cover aspect-[9/19]" />
//               </div>

//             </div>
//           </div>
//         </div>

//         {/* Bottom Section: Map Integration */}
//         <div className="max-w-5xl mx-auto h-[400px] md:h-[500px] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border-[8px] border-white relative z-20">
//           <iframe 
//             title="Maa Embroidery Location"
//             src={embedUrl} 
//             width="100%" 
//             height="100%" 
//             style={{ border: 0 }} 
//             allowFullScreen="" 
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade">
//           </iframe>
//         </div>

//       </div>
//     </section>
//   );
// }

import { siteConfig } from '../config/siteData';
// We added FaApple here to get the Apple logo!
import { FaGooglePlay, FaApple } from 'react-icons/fa';

// Importing the images from your assets folder
import app1 from '../assets/app1.jpeg';
import app2 from '../assets/app2.jpeg';
import app3 from '../assets/app3.jpeg';
import app4 from '../assets/app4.jpeg';

export default function AppDownload() {
  return (
    <section className="bg-slate-50 py-20 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">

        {/* Top Section: App Info & Screenshots */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-10">

          {/* Left Side: Text & Download Buttons */}
          <div className="text-center lg:text-left z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0a1930]">
              Experience Our Designs <br/>
              <span className="text-blue-600">On The Go</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Download our official application to browse thousands of premium embroidery designs, save your favorites, and get exclusive updates straight to your mobile device.
            </p>

            {/* BUTTON CONTAINER: Side-by-side on desktop, stacked on mobile */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              
              {/* Google Play Button */}
              <a 
                href={siteConfig.appLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 bg-[#0a1930] text-white px-6 sm:px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300 shadow-xl shadow-[#0a1930]/20 group"
              >
                <FaGooglePlay className="text-3xl sm:text-4xl" /> 
                <div className="text-left">
                  <span className="block text-[10px] sm:text-xs uppercase tracking-wider font-medium text-blue-200 group-hover:text-blue-100 transition-colors">Get it on</span>
                  <span className="block text-xl sm:text-2xl font-bold -mt-1">Google Play</span>
                </div>
              </a>

              {/* Apple App Store Button */}
              <a 
                // You can add iosLink to your siteData.js later!
                href={siteConfig.iosLink || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 bg-[#0a1930] text-white px-6 sm:px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300 shadow-xl shadow-[#0a1930]/20 group"
              >
                <FaApple className="text-4xl sm:text-5xl -mt-1" /> 
                <div className="text-left">
                  <span className="block text-[10px] sm:text-xs uppercase tracking-wider font-medium text-blue-200 group-hover:text-blue-100 transition-colors">Download on the</span>
                  <span className="block text-xl sm:text-2xl font-bold -mt-1">App Store</span>
                </div>
              </a>

            </div>
          </div>

          {/* Right Side: Premium App Screenshot Grid */}
          <div className="relative mt-12 lg:mt-0">
            {/* Decorative BLUE glow behind the images */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/20 rounded-full blur-[80px] -z-10"></div>

            {/* The Staggered Image Layout */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 transform md:-rotate-6 md:scale-95 hover:scale-100 transition-transform duration-500">
              
              {/* Column 1 */}
              <div className="space-y-4 md:space-y-6 translate-y-6 md:translate-y-12">
                <img src={app1} alt="App Screen 1" className="w-full rounded-2xl md:rounded-3xl shadow-2xl shadow-blue-900/20 border-[6px] border-white object-cover aspect-[9/19]" />
                <img src={app2} alt="App Screen 2" className="w-full rounded-2xl md:rounded-3xl shadow-2xl shadow-blue-900/20 border-[6px] border-white object-cover aspect-[9/19]" />
              </div>

              {/* Column 2 */}
              <div className="space-y-4 md:space-y-6 -translate-y-6 md:-translate-y-12">
                <img src={app3} alt="App Screen 3" className="w-full rounded-2xl md:rounded-3xl shadow-2xl shadow-blue-900/20 border-[6px] border-white object-cover aspect-[9/19]" />
                <img src={app4} alt="App Screen 4" className="w-full rounded-2xl md:rounded-3xl shadow-2xl shadow-blue-900/20 border-[6px] border-white object-cover aspect-[9/19]" />
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}