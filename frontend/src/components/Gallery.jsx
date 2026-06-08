import React, { useState, useEffect } from 'react';

export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/gallery');
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
              <div key={item._id} className="group relative h-80 bg-white rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-slate-200">
                
                {/* Asli Image Database Se */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1930]/90 via-[#0a1930]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">{item.category}</span>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}