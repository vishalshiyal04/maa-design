// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import Gallery from './components/Gallery';
// import AppDownload from './components/AppDownload';
// import Footer from './components/Footer';
// import Contact from './components/Contact';
// import { siteConfig } from './config/siteData';
// import { FaWhatsapp } from 'react-icons/fa';

// function App() {
//   return (
//     <div className="min-h-screen font-sans bg-zinc-50 relative">
//       <Header />
      
//       {/* We add pt-24 to the main container so the fixed header doesn't hide the top of the Hero */}
//       <main className="pt-24">
//         <div id="home">
//           <Hero />
//         </div>
        
//         <About />
//         <Gallery />
//         <Contact />
//         {/* We wrap AppDownload in a div with id="contact" */}
//         <div id="contact">
//           <AppDownload />
//         </div>
//       </main>

//       <Footer />

//       {/* UNIQUE ADDITION: Floating WhatsApp Button */}
//       <a 
//         href={siteConfig.socials.whatsapp} 
//         target="_blank" 
//         rel="noreferrer"
//         className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center animate-bounce"
//         aria-label="Chat on WhatsApp"
//       >
//         <FaWhatsapp className="text-3xl" />
//       </a>
//     </div>
//   );
// }

// export default App;

import Header from './components/Header';
import HeroSlider from './components/HeroSlider'; // Import the new slider
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import AppDownload from './components/AppDownload';
import Footer from './components/Footer';
import { siteConfig } from './config/siteData';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen font-sans bg-zinc-50 relative">
      <Header />
     <main>
        <div id="home">
          <HeroSlider />   {/* Replaced <Hero /> with <HeroSlider /> */}
        </div>
        
        <About />
        <Gallery />
        <AppDownload />
        <Contact />

      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href={siteConfig.socials.whatsapp} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
}

export default App;