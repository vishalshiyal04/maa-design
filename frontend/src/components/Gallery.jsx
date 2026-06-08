export default function Gallery() {
  // Placeholder data - you can replace these with your actual image paths later
  const galleryItems = [
    { id: 1, title: "Bridal Anarkali", category: "Heavy Work" },
    { id: 2, title: "Modern Crop Top", category: "Trending" },
    { id: 3, title: "Classic Sarara", category: "Traditional" },
    { id: 4, title: "Elegant Kurti", category: "Daily Wear" },
    { id: 5, title: "Gharara Design", category: "Heavy Work" },
    { id: 6, title: "Cord Set Motif", category: "Modern" },
  ];

  return (
    // Changed to a soft light background to flow perfectly from the white About section
    <section id="gallery" className="py-20 px-6 bg-slate-50 text-[#0a1930]">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Dark Navy text with a bright blue accent */}
        <h2 className="text-4xl font-bold mb-4">Our <span className="text-blue-600">Masterpieces</span></h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">Explore our latest computer embroidery designs crafted with precision and passion.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            // Light grey placeholders for the cards until you add real photos
            <div key={item.id} className="group relative h-80 bg-white rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-slate-200">
              
              {/* Replace this div with an actual <img src="..." /> later */}
              <div className="absolute inset-0 bg-slate-200 group-hover:scale-110 transition-transform duration-500"></div>
              
              {/* Hover Overlay - Keeping the dark navy gradient so the white text is readable over your future images */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1930]/90 via-[#0a1930]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">{item.category}</span>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}