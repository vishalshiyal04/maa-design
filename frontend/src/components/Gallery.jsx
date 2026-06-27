import React, { useState, useEffect } from 'react';

// 👇 YAHAN AB LOCALHOST SET HAI 👇
const BACKEND_URL = 'http://localhost:5000'; 

export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // States for Popup and Zoom
  const [selectedImage, setSelectedImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false); // Naya state HD Zoom ke liye

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/gallery`);
        if (response.ok) {
          const data = await response.json();
          setGalleryItems(data);
        }
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  // Popup close karne ka function (zoom bhi reset karega)
  const closePopup = () => {
    setSelectedImage(null);
    setIsZoomed(false); // Band karte waqt zoom hata do
  };

  // Keyboard se 'Escape' dabane par close karne ke liye
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closePopup();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="gallery" className="py-20 px-6 bg-slate-50 text-[#0a1930]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Our <span className="text-blue-600">Masterpieces</span></h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">Explore our latest computer embroidery designs crafted with precision and passion.</p>

        {loading ? (
          <div className="text-xl font-bold text-slate-400 animate-pulse py-10">Loading Masterpieces...</div>
        ) : galleryItems.length === 0 ? (
          <div className="text-xl font-bold text-slate-400 py-10">New designs coming soon!</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div 
                key={item._id} 
                className="group relative h-80 bg-white rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-slate-200"
                onClick={() => setSelectedImage(item)} 
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1930]/90 via-[#0a1930]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">{item.category}</span>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ========================================== */}
      {/* 🌟 FULL HD ZOOM LIGHTBOX START 🌟 */}
      {/* ========================================== */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md animate-in fade-in duration-300"
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white text-5xl font-light transition-colors z-[110]"
            onClick={closePopup}
          >
            &times;
          </button>
          
          {/* Zoom Instruction Hint */}
          {!isZoomed && (
             <div className="absolute top-6 left-1/2 -translate-x-1/2 z-[110] bg-white/10 text-white/80 px-4 py-1.5 rounded-full text-sm backdrop-blur-sm border border-white/20 pointer-events-none animate-pulse">
               Click image for HD Zoom
             </div>
          )}

          {/* Scrollable Container */}
          <div 
            className="w-full h-full overflow-auto flex items-center justify-center p-4 md:p-8 custom-scrollbar"
            onClick={closePopup} // Bahar click karne se close hoga
          >
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title} 
              onClick={(e) => {
                e.stopPropagation(); // Image pe click karne se popup close nahi hoga
                setIsZoomed(!isZoomed); // Zoom In / Zoom Out Toggle
              }}
              className={`transition-all duration-500 ease-in-out shadow-2xl rounded-sm ${
                isZoomed 
                  ? 'max-w-none w-auto h-auto cursor-zoom-out' // HD View (True Size)
                  : 'max-w-full max-h-[85vh] object-contain cursor-zoom-in' // Fit to Screen View
              }`}
            />
          </div>

          {/* Image Details (Neeche Text) */}
          {!isZoomed && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none animate-in slide-in-from-bottom-4 duration-500">
              <span className="text-blue-400 text-sm font-black uppercase tracking-[0.2em] drop-shadow-md">{selectedImage.category}</span>
              <h3 className="text-white text-3xl font-bold mt-2 drop-shadow-lg">{selectedImage.title}</h3>
            </div>
          )}
        </div>
      )}
      {/* ========================================== */}
      {/* 🌟 FULL HD ZOOM LIGHTBOX END 🌟 */}
      {/* ========================================== */}

    </section>
  );
}