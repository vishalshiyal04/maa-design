// // import React, { useState, useEffect } from 'react';

// // // 👇 YAHAN APNA RENDER KA LIVE URL DAALEIN 👇
// // const BACKEND_URL = 'http://localhost:5000';

// // export default function Gallery() {
// //   const [galleryItems, setGalleryItems] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchGallery = async () => {
// //       try {
// //         // Localhost ki jagah ab live server se data aayega
// //         const response = await fetch(`${BACKEND_URL}/api/gallery`);
// //         if (response.ok) {
// //           const data = await response.json();
// //           setGalleryItems(data);
// //         }
// //       } catch (error) {
// //         console.error("Error fetching gallery:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchGallery();
// //   }, []);

// //   return (
// import React, { useState, useEffect } from 'react';
// import { FaTimes, FaSearchPlus } from 'react-icons/fa';

// // 👇 YAHAN APNA RENDER KA LIVE URL DAALEIN 👇
// const BACKEND_URL = 'http://localhost:5000';

// export default function Gallery() {
//   const [galleryItems, setGalleryItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     const fetchGallery = async () => {
//       try {
//         const response = await fetch(`${BACKEND_URL}/api/gallery`);
//         if (response.ok) {
//           const data = await response.json();
//           setGalleryItems(data);
//         }
//       } catch (error) {
//         console.error("Error fetching gallery:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchGallery();
//   }, []);

//   // Handle ESC key to close modal
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'Escape') setSelectedImage(null);
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, []);

//   // Disable background scrolling when modal is open
//   useEffect(() => {
//     if (selectedImage) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//   }, [selectedImage]);

//   return (
//     <section id="gallery" className="py-20 px-6 bg-slate-50 text-[#0a1930]">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-4">Gallery <span className="text-blue-600">Masterpieces</span></h2>
//         <p className="text-slate-600 mb-12 max-w-2xl mx-auto">Explore our latest computer embroidery designs crafted with precision and passion.</p>

//         {loading ? (
//           <div className="text-xl font-bold text-slate-400 animate-pulse py-10">Loading Masterpieces...</div>
//         ) : galleryItems.length === 0 ? (
//           <div className="text-xl font-bold text-slate-400 py-10">New designs coming soon!</div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {galleryItems.map((item) => (
//               <div key={item._id} className="group relative h-80 bg-white rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-slate-200">
                
//                 {/* Asli Image Database Se */}
//                 <img 
//                   src={item.image} 
//                   alt={item.title} 
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   loading="lazy"
//                 />
                
//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a1930]/90 via-[#0a1930]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
//                   <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">{item.category}</span>
//                   <h3 className="text-2xl font-bold text-white">{item.title}</h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect, useCallback, useRef } from 'react';

const BACKEND_URL = 'http://localhost:5000';

const MIN_ZOOM = 1;
const MAX_ZOOM = 5;
const clampZoom = (v) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, v));

// Zoomable + pannable image: buttons, mouse wheel, double click / double tap,
// drag to move, and two-finger pinch on mobile.
function ZoomableImage({ src, alt }) {
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false); // finger/mouse is down -> no animation
  const pointers = useRef(new Map());
  const pinchStart = useRef(null);
  const lastTap = useRef(0);

  const applyScale = (s) => {
    const c = clampZoom(s);
    setScale(c);
    if (c === 1) setPos({ x: 0, y: 0 });
  };
  const zoomIn = () => applyScale(scale * 1.4);
  const zoomOut = () => applyScale(scale / 1.4);
  const reset = () => applyScale(1);
  const toggle = () => applyScale(scale > 1 ? 1 : 2.5);

  const dist = () => {
    const [a, b] = [...pointers.current.values()];
    return Math.hypot(a.x - b.x, a.y - b.y);
  };

  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    setActive(true);

    if (pointers.current.size === 2) {
      pinchStart.current = { dist: dist(), scale };
    } else if (e.pointerType === 'touch') {
      const now = Date.now();
      if (now - lastTap.current < 300) toggle(); // double tap
      lastTap.current = now;
    }
  };

  const onPointerMove = (e) => {
    const prev = pointers.current.get(e.pointerId);
    if (!prev) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.current.size === 2 && pinchStart.current) {
      applyScale(pinchStart.current.scale * (dist() / pinchStart.current.dist));
    } else if (pointers.current.size === 1 && scale > 1) {
      setPos((p) => ({ x: p.x + e.clientX - prev.x, y: p.y + e.clientY - prev.y }));
    }
  };

  const onPointerUp = (e) => {
    pointers.current.delete(e.pointerId);
    pinchStart.current = null;
    if (pointers.current.size === 0) setActive(false);
  };

  const onWheel = (e) => applyScale(scale * (e.deltaY < 0 ? 1.15 : 1 / 1.15));

  const btn =
    'w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white text-xl leading-none flex items-center justify-center disabled:opacity-40 disabled:hover:bg-white/15';

  return (
    <>
      {/* Zoom toolbar */}
      <div
        className="fixed top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-black/50 rounded-full px-2 py-1"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className={btn} onClick={zoomOut} disabled={scale <= MIN_ZOOM} aria-label="Zoom out">
          −
        </button>
        <span className="text-white text-sm w-12 text-center tabular-nums">{Math.round(scale * 100)}%</span>
        <button type="button" className={btn} onClick={zoomIn} disabled={scale >= MAX_ZOOM} aria-label="Zoom in">
          +
        </button>
        <button type="button" className="text-white text-sm px-3 h-10 rounded-full hover:bg-white/20" onClick={reset}>
          Reset
        </button>
      </div>

      <img
        src={src}
        alt={alt}
        draggable={false}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onWheel={onWheel}
        onDoubleClick={toggle}
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
          transition: active ? 'none' : 'transform 0.15s ease-out',
          touchAction: 'none',
          cursor: scale > 1 ? (active ? 'grabbing' : 'grab') : 'zoom-in',
        }}
        className="h-[calc(100vh-5.5rem)] w-auto max-w-[96vw] object-contain rounded-lg select-none"
      />
    </>
  );
}

export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null); // null = lightbox closed

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/gallery`);
        if (response.ok) {
          const data = await response.json();
          setGalleryItems(data);
        }
      } catch (error) {
        console.error('Error fetching gallery:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % galleryItems.length)),
    [galleryItems.length]
  );
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? i : (i - 1 + galleryItems.length) % galleryItems.length
      ),
    [galleryItems.length]
  );

  // Keyboard controls + lock page scroll while lightbox is open
  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);

    // Lock page scroll (html + body) and block wheel scrolling everywhere
    // while the viewer is open. Must be a non-passive listener to preventDefault.
    const html = document.documentElement;
    const oldBody = document.body.style.overflow;
    const oldHtml = html.style.overflow;
    const oldOverscroll = html.style.overscrollBehavior;
    document.body.style.overflow = 'hidden';
    html.style.overflow = 'hidden';
    html.style.overscrollBehavior = 'none';
    const blockWheel = (e) => e.preventDefault();
    window.addEventListener('wheel', blockWheel, { passive: false });

    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('wheel', blockWheel);
      document.body.style.overflow = oldBody;
      html.style.overflow = oldHtml;
      html.style.overscrollBehavior = oldOverscroll;
    };
  }, [activeIndex, close, next, prev]);

  const activeItem = activeIndex !== null ? galleryItems[activeIndex] : null;

  return (
    <section id="gallery" className="py-20 px-6 bg-slate-50 text-[#0a1930]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Gallery <span className="text-blue-600">Masterpieces</span>
        </h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
          Explore our latest computer embroidery designs crafted with precision and passion.
        </p>

        {loading ? (
          <div className="text-xl font-bold text-slate-400 animate-pulse py-10">
            Loading Masterpieces...
          </div>
        ) : galleryItems.length === 0 ? (
          <div className="text-xl font-bold text-slate-400 py-10">New designs coming soon!</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <button
                type="button"
                key={item._id}
                onClick={() => setActiveIndex(index)}
                aria-label={`Open ${item.title}`}
                className="group relative block w-full h-[32rem] bg-white rounded-2xl overflow-hidden cursor-zoom-in shadow-lg border border-slate-200 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />

                {/* Overlay: always visible on touch screens, hover-only on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1930]/90 via-[#0a1930]/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <span className="text-white/70 text-xs mt-1">Tap to view full image</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Full image viewer (lightbox) */}
      {activeItem && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-2 pt-16 pb-3"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white text-2xl leading-none flex items-center justify-center"
          >
            ×
          </button>

          {galleryItems.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white text-2xl flex items-center justify-center"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white text-2xl flex items-center justify-center"
              >
                ›
              </button>
            </>
          )}

          <figure
            className="max-w-full max-h-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* object-contain = poori image dikhegi, koi crop nahi */}
            <ZoomableImage key={activeItem._id} src={activeItem.image} alt={activeItem.title} />
            <figcaption className="fixed bottom-5 left-1/2 -translate-x-1/2 pointer-events-none text-center text-white bg-black/55 rounded-xl px-4 py-2 max-w-[80vw]">
              <span className="block text-xs font-bold uppercase tracking-widest text-blue-400">
                {activeItem.category}
              </span>
              <span className="block text-lg font-semibold">{activeItem.title}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}