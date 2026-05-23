// import { siteConfig } from '../config/siteData';

// export default function Hero() {
//   return (
//     <section className="bg-black text-white py-20 px-6 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
//         {/* Left Content */}
//         <div className="z-10">
//           <h2 className="text-5xl font-bold mb-6 text-yellow-500">Exquisite Embroidery Designs</h2>
//           <p className="text-gray-400 mb-8 max-w-md">
//             Blending creativity, tradition, and innovation in every single stitch. Discover our premium collections.
//           </p>
          
//           <ul className="space-y-3">
//             {siteConfig.services.slice(0, 5).map((service, index) => (
//               <li key={index} className="flex items-center gap-3 text-lg font-medium">
//                 <span className="text-yellow-500">✦</span> {service}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right Image/Graphics (Placeholder for Model Images) */}
//         <div className="relative h-96 flex gap-4 justify-end">
//            <div className="w-48 h-full bg-zinc-800 rounded-tl-full rounded-br-full border border-yellow-500/30 overflow-hidden shadow-2xl">
//               {/* Insert Image 1 */}
//            </div>
//            <div className="w-48 h-5/6 my-auto bg-zinc-800 rounded-tr-full rounded-bl-full border border-yellow-500/30 overflow-hidden shadow-2xl">
//               {/* Insert Image 2 */}
//            </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { useState, useEffect } from 'react';
// import { FaChevronLeft, FaChevronRight, FaHandPointRight } from 'react-icons/fa';
// import { siteConfig } from '../config/siteData';

// // Importing your main logo and local images
// import mainImage from '../assets/main-image.jpeg';
// import design1 from '../assets/app1.jpeg'; // Using your local images to fix the CORB error
// import design2 from '../assets/app2.jpeg';
// import design3 from '../assets/app3.jpeg';

// export default function HeroSlider() {
//   // Notice we completely removed the Unsplash links here!
//   const slides = [
//     mainImage,
//     design1,
//     design2,
//     design3
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto-play functionality
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 4000); 
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   const nextSlide = () => {
//     setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
//   };

//   return (
//     <section className="bg-[#111111] text-white pt-8 pb-0 relative overflow-hidden">
//       <div className="max-w-[1400px] mx-auto px-6">
        
//         <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[500px]">
          
//           {/* Left Side: Services List */}
//           <div className="lg:col-span-4 z-10 py-12">
//             <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-wide">
//               Embroidery <span className="text-yellow-500">design</span>
//             </h2>
            
//             <ul className="space-y-4">
//               {siteConfig.services.map((service, index) => (
//                 <li key={index} className="flex items-center gap-4 text-lg font-semibold group cursor-default">
//                   <FaHandPointRight className="text-yellow-500 text-2xl group-hover:scale-125 transition-transform duration-300" /> 
//                   <span className="group-hover:text-yellow-500 transition-colors duration-300 uppercase tracking-wider">
//                     {service}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Right Side: Modern Slanted Image Slider */}
//           <div className="lg:col-span-8 relative h-[400px] md:h-[600px] w-full flex justify-center items-center group">
            
//             {/* The Slanted Image Container */}
//             <div 
//               className="relative w-full max-w-[800px] h-full overflow-hidden transition-all duration-700 ease-in-out shadow-2xl"
//               style={{ 
//                 clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0% 100%)' 
//               }}
//             >
//               {slides.map((slide, index) => (
//                 <div
//                   key={index}
//                   className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//                     index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
//                   } ${
//                     // White background for logo, dark for photos
//                     index === 0 ? 'bg-[#f4f4f4]' : 'bg-zinc-900'
//                   }`}
//                 >
//                   <img 
//                     src={slide} 
//                     alt={`Embroidery Design ${index + 1}`}
//                     className={`w-full h-full transition-transform duration-[4000ms] ease-linear ${
//                       // Contain the logo so it doesn't crop, cover the photos
//                       index === 0 ? 'object-contain p-8' : 'object-cover'
//                     } ${
//                       index === currentSlide ? 'scale-105' : 'scale-100'
//                     }`}
//                   />
//                   {/* Show gradient overlay ONLY on the photos, not the logo */}
//                   {index !== 0 && (
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Navigation Arrows (Visible on Hover) */}
//             <button 
//               onClick={prevSlide}
//               className="absolute left-0 md:left-10 z-20 bg-black/50 hover:bg-yellow-500 text-white hover:text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border border-white/10"
//             >
//               <FaChevronLeft className="text-xl" />
//             </button>
//             <button 
//               onClick={nextSlide}
//               className="absolute right-0 md:right-10 z-20 bg-black/50 hover:bg-yellow-500 text-white hover:text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border border-white/10"
//             >
//               <FaChevronRight className="text-xl" />
//             </button>
            
//           </div>
//         </div>

//       </div>

//       {/* Bottom Contact Bar */}
//       <div className="w-full bg-[#5c2a2a] border-t-4 border-yellow-500 py-3 px-6 mt-8">
//         <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center text-sm md:text-base font-bold text-white/90 gap-4">
//           <div className="flex items-center gap-3 text-yellow-500 text-xl md:text-2xl tracking-widest">
//             {siteConfig.phone}
//           </div>
          
//           <div className="flex items-center gap-2">
//              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
//              <span className="w-2 h-2 rounded-full bg-white/50"></span>
//           </div>

//           <div className="flex flex-col md:flex-row gap-6 items-center uppercase text-xs md:text-sm tracking-wider">
//              <div className="flex items-center gap-2">
//                <span className="bg-white text-[#5c2a2a] p-1 rounded-full text-[10px]">🌐</span>
//                WWW.MAAEMBROIDERY.IN
//              </div>
//              <div className="flex items-center gap-2">
//                <span className="bg-white text-[#5c2a2a] p-1 rounded-full text-[10px]">📍</span>
//                AHMEDABAD, GUJARAT 382350
//              </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaHandPointRight } from 'react-icons/fa';
import { siteConfig } from '../config/siteData';

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
    // Changed bg-[#111111] to bg-slate-50 and text-white to text-[#0a1930]
    <section className="bg-slate-50 text-[#0a1930] pt-6 lg:pt-8 pb-0 relative overflow-hidden w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 w-full">
        
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-center min-h-[auto] lg:min-h-[500px]">
          
          <div className="w-full lg:col-span-4 z-10 py-4 lg:py-12 order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 lg:mb-10 tracking-wide text-center lg:text-left text-[#0a1930]">
              Embroidery <br className="hidden lg:block"/> 
              {/* Changed yellow text to a lighter blue accent to match app */}
              <span className="text-blue-600">design</span>
            </h2>
            
            <ul className="space-y-3 sm:space-y-4 max-w-sm mx-auto lg:mx-0">
              {siteConfig.services.map((service, index) => (
                <li key={index} className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg font-bold group cursor-default">
                  {/* Changed yellow pointers to Navy Blue */}
                  <FaHandPointRight className="text-[#0a1930] text-xl sm:text-2xl group-hover:scale-125 transition-transform duration-300 flex-shrink-0" /> 
                  <span className="group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wider">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
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

      {/* Bottom Contact Bar - Now Navy Blue to match app Bottom Nav */}
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