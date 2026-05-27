// import Header from './components/Header';
// import HeroSlider from './components/HeroSlider';
// import About from './components/About';
// import Gallery from './components/Gallery';
// import AppDownload from './components/AppDownload';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import PrivacyPolicy from './components/PrivacyPolicy'; // <-- We imported it here!

// import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
// import { siteConfig } from './config/siteData';

// export default function App() {
//   // This simple line checks if the URL has /privacy-policy at the end
//   const isPrivacyPage = window.location.pathname === '/privacy-policy';

//   return (
//     <div className="font-sans relative">
//       <Header />
      
//       {/* If we are on the Privacy Page, show ONLY the Privacy Policy.
//         Otherwise, show the main website sections! 
//       */}
//       {isPrivacyPage ? (
//         <PrivacyPolicy />
//       ) : (
//         <main>
//           <HeroSlider />
//           <About />
//           <Gallery />
//           <AppDownload />
//           <Contact />
//         </main>
//       )}

//       <Footer />

//       {/* FLOATING ACTION BUTTONS CONTAINER */}
//       <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
//         <a 
//           href={siteConfig.socials.telegram} 
//           target="_blank" 
//           rel="noreferrer" 
//           className="bg-[#0088cc] text-white p-4 rounded-full shadow-2xl hover:bg-[#0077b5] hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce" 
//           aria-label="Chat on Telegram"
//         >
//           <FaTelegramPlane className="text-3xl" />
//         </a>
//         <a 
//           href={siteConfig.socials.whatsapp} 
//           target="_blank" 
//           rel="noreferrer" 
//           className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce" 
//           aria-label="Chat on WhatsApp"
//         >
//           <FaWhatsapp className="text-3xl" />
//         </a>
//       </div>
//     </div>
//   );
// }

import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import About from './components/About';
import Gallery from './components/Gallery';
import AppDownload from './components/AppDownload';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import ReturnRefund from './components/ReturnRefund'; // New Import
import Blogs from './components/Blogs';             // New Import

import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { siteConfig } from './config/siteData';

export default function App() {
  const path = window.location.pathname;

  // Simple router logic to figure out which page to render
  const renderPageContent = () => {
    if (path === '/privacy-policy') return <PrivacyPolicy />;
    if (path === '/return-refund') return <ReturnRefund />;
    if (path === '/blogs') return <Blogs />;
    
    // Default Home Page
    return (
      <main>
        <HeroSlider />
        <About />
        <Gallery />
        <AppDownload />
        <Contact />
      </main>
    );
  };

  return (
    <div className="font-sans relative">
      <Header />
      
      {renderPageContent()}

      <Footer />

      {/* FLOATING ACTION BUTTONS CONTAINER */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a 
          href={siteConfig.socials.telegram} target="_blank" rel="noreferrer" 
          className="bg-[#0088cc] text-white p-4 rounded-full shadow-2xl hover:bg-[#0077b5] hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce" 
          aria-label="Chat on Telegram"
        >
          <FaTelegramPlane className="text-3xl" />
        </a>
        <a 
          href={siteConfig.socials.whatsapp} target="_blank" rel="noreferrer" 
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce" 
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-3xl" />
        </a>
      </div>
    </div>
  );
}