// import { siteConfig } from '../config/siteData';

// export default function Footer() {
//   return (
//     <footer className="bg-black text-white border-t border-zinc-800 pt-16 pb-8 px-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
//         <div>
//           <h3 className="text-xl font-bold border-b-2 border-yellow-500 inline-block pb-2 mb-6">Navigation</h3>
//           <ul className="space-y-3 text-gray-400">
//             <li><a href="#" className="hover:text-yellow-500 transition">Home</a></li>
//             <li><a href="#" className="hover:text-yellow-500 transition">About Us</a></li>
//             <li><a href="#" className="hover:text-yellow-500 transition">Contact Us</a></li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-xl font-bold border-b-2 border-yellow-500 inline-block pb-2 mb-6">Useful Links</h3>
//           <ul className="space-y-3 text-gray-400">
//             <li><a href="#" className="hover:text-yellow-500 transition">Blogs</a></li>
//             <li><a href="#" className="hover:text-yellow-500 transition">Privacy Policy</a></li>
//             <li><a href="#" className="hover:text-yellow-500 transition">Return and Refund</a></li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-xl font-bold border-b-2 border-yellow-500 inline-block pb-2 mb-6">Contact Info</h3>
//           <ul className="space-y-4 text-gray-400">
//             <li><strong className="text-yellow-500">Address:</strong> {siteConfig.address}</li>
//             <li><strong className="text-yellow-500">Phone:</strong> {siteConfig.phone}</li>
//             <li><strong className="text-yellow-500">Email:</strong> {siteConfig.email}</li>
//           </ul>
//         </div>

//       </div>
//       <div className="text-center text-gray-600 text-sm mt-8">
//         © {new Date().getFullYear()} {siteConfig.brandName}. All Rights Reserved.
//       </div>
//     </footer>
//   );
// }


import { siteConfig } from '../config/siteData';

export default function Footer() {
  return (
    // Changed bg-black to your signature Deep Navy Blue
    <footer className="bg-[#0a1930] text-white border-t border-blue-900/50 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        <div>
          {/* Changed yellow borders to bright blue */}
          <h3 className="text-xl font-bold border-b-2 border-blue-500 inline-block pb-2 mb-6">Navigation</h3>
          <ul className="space-y-3 text-blue-100/80">
            <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold border-b-2 border-blue-500 inline-block pb-2 mb-6">Useful Links</h3>
          <ul className="space-y-3 text-blue-100/80">
            <li><a href="#" className="hover:text-blue-400 transition">Blogs</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Return and Refund</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold border-b-2 border-blue-500 inline-block pb-2 mb-6">Contact Info</h3>
          <ul className="space-y-4 text-blue-100/80">
            {/* Changed yellow text to bright blue */}
            <li><strong className="text-blue-400">Address:</strong> {siteConfig.address}</li>
            <li><strong className="text-blue-400">Phone:</strong> {siteConfig.phone}</li>
            <li><strong className="text-blue-400">Email:</strong> {siteConfig.email}</li>
          </ul>
        </div>

      </div>
      
      {/* Softened the copyright text and added a subtle top border */}
      <div className="text-center text-blue-200/50 text-sm mt-8 pt-8 border-t border-blue-900/50">
        © {new Date().getFullYear()} {siteConfig.brandName}. All Rights Reserved.
      </div>
    </footer>
  );
}