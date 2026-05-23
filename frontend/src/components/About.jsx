// import { siteConfig } from '../config/siteData';

// export default function About() {
//   return (
//     <section id="about" className="py-20 px-6 bg-white text-zinc-900">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         {/* Abstract Gold Accent Graphic */}
//         <div className="relative h-96 bg-zinc-100 rounded-3xl overflow-hidden border-l-8 border-yellow-500 shadow-2xl flex items-center justify-center">
//             <h2 className="text-9xl text-zinc-200 font-black absolute opacity-50">MAA</h2>
//             <p className="text-xl font-bold text-zinc-500 z-10 text-center px-8">
//               "Every stitch tells a story of tradition and precision."
//             </p>
//         </div>

//         <div>
//           <h2 className="text-4xl font-bold mb-6">
//             About <span className="text-yellow-500">{siteConfig.brandName}</span>
//           </h2>
//           <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
//             Welcome to the premier destination for exquisite, high-quality computer embroidery designs. Located in the heart of Ahmedabad, we specialize in bridging traditional artistry with modern technology.
//           </p>
//           <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
//             Whether you are looking for intricate bridal wear details, trendy crop top patterns, or elegant Anarkali motifs, our state-of-the-art machinery and expert designers ensure absolute perfection in every thread.
//           </p>
          
//           <div className="grid grid-cols-2 gap-6">
//             <div className="bg-zinc-50 p-4 border border-zinc-200 rounded-xl">
//               <h3 className="text-3xl font-black text-yellow-500 mb-1">1000+</h3>
//               <p className="text-sm font-bold text-zinc-700">Unique Designs</p>
//             </div>
//             <div className="bg-zinc-50 p-4 border border-zinc-200 rounded-xl">
//               <h3 className="text-3xl font-black text-yellow-500 mb-1">100%</h3>
//               <p className="text-sm font-bold text-zinc-700">Quality Assured</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

  // import { siteConfig } from '../config/siteData';

  // export default function About() {
  //   return (
  //     <section id="about" className="py-20 px-6 bg-white text-[#0a1930]">
  //       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
  //         {/* Abstract Blue Accent Graphic */}
  //         <div className="relative h-96 bg-slate-50 rounded-3xl overflow-hidden border-l-8 border-blue-600 shadow-xl flex items-center justify-center">
  //             <h2 className="text-9xl text-slate-200 font-black absolute opacity-50">MAA</h2>
  //             <p className="text-xl font-bold text-slate-600 z-10 text-center px-8">
  //               "Every stitch tells a story of tradition and precision."
  //             </p>
  //         </div>

  //         <div>
  //           <h2 className="text-4xl font-bold mb-6">
  //             About <span className="text-blue-600">{siteConfig.brandName}</span>
  //           </h2>
  //           <p className="text-lg text-slate-600 mb-6 leading-relaxed">
  //             Welcome to the premier destination for exquisite, high-quality computer embroidery designs. Located in the heart of Ahmedabad, we specialize in bridging traditional artistry with modern technology.
  //           </p>
  //           <p className="text-lg text-slate-600 mb-8 leading-relaxed">
  //             Whether you are looking for intricate bridal wear details, trendy crop top patterns, or elegant Anarkali motifs, our state-of-the-art machinery and expert designers ensure absolute perfection in every thread.
  //           </p>
            
  //           <div className="grid grid-cols-2 gap-6">
  //             <div className="bg-slate-50 p-4 border border-blue-100 rounded-xl shadow-sm">
  //               <h3 className="text-3xl font-black text-blue-600 mb-1">1000+</h3>
  //               <p className="text-sm font-bold text-[#0a1930]">Unique Designs</p>
  //             </div>
  //             <div className="bg-slate-50 p-4 border border-blue-100 rounded-xl shadow-sm">
  //               <h3 className="text-3xl font-black text-blue-600 mb-1">100%</h3>
  //               <p className="text-sm font-bold text-[#0a1930]">Quality Assured</p>
  //             </div>
  //           </div>
  //         </div>
          
  //       </div>
  //     </section>
  //   );
  // }

  import { siteConfig } from '../config/siteData';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white text-[#0a1930]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Abstract Graphic - Now matching the Deep Navy from the app's bottom nav */}
        <div className="relative h-96 bg-[#0a1930] rounded-3xl overflow-hidden shadow-2xl shadow-[#0a1930]/30 flex items-center justify-center">
            <h2 className="text-9xl text-white/10 font-black absolute">MAA</h2>
            <p className="text-xl font-bold text-white z-10 text-center px-8">
              "Every stitch tells a story of tradition and precision."
            </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-[#0a1930]">{siteConfig.brandName}</span>
          </h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Welcome to the premier destination for exquisite, high-quality computer embroidery designs. Located in the heart of Ahmedabad, we specialize in bridging traditional artistry with modern technology.
          </p>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Whether you are looking for intricate bridal wear details, trendy crop top patterns, or elegant Anarkali motifs, our state-of-the-art machinery and expert designers ensure absolute perfection in every thread.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl shadow-sm hover:border-[#0a1930]/50 transition-colors">
              <h3 className="text-3xl font-black text-[#0a1930] mb-1">1000+</h3>
              <p className="text-sm font-bold text-slate-600">Unique Designs</p>
            </div>
            <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl shadow-sm hover:border-[#0a1930]/50 transition-colors">
              <h3 className="text-3xl font-black text-[#0a1930] mb-1">100%</h3>
              <p className="text-sm font-bold text-slate-600">Quality Assured</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}