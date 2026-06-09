//     import React, { useState, useEffect, useRef } from 'react';
// import { FaInbox, FaTrash, FaPenNib, FaEdit, FaNewspaper, FaImages, FaImage, FaSignOutAlt } from 'react-icons/fa';

// export default function AdminPanel({ onLogout }) {
//   const [inquiries, setInquiries] = useState([]);
//   const [adminBlogs, setAdminBlogs] = useState([]);
//   const [adminGallery, setAdminGallery] = useState([]);
  
//   const [blogData, setBlogData] = useState({ title: '', slug: '', image: '', content: '' });
//   const [editingBlogId, setEditingBlogId] = useState(null);
  
//   const [galleryData, setGalleryData] = useState({ title: '', category: '', image: '' });
//   const [isUploadingGallery, setIsUploadingGallery] = useState(false);
//   const [editingGalleryId, setEditingGalleryId] = useState(null);
  
//   const blogFormRef = useRef(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const [inqRes, blogRes, galleryRes] = await Promise.all([
//         fetch('http://localhost:5000/api/inquiries'),
//         fetch('http://localhost:5000/api/blogs'),
//         fetch('http://localhost:5000/api/gallery')
//       ]);
//       if (inqRes.ok) setInquiries(await inqRes.json());
//       if (blogRes.ok) setAdminBlogs(await blogRes.json());
//       if (galleryRes.ok) setAdminGallery(await galleryRes.json());
//     } catch (error) { console.error("Fetch Error:", error); }
//   };

//   // --- Inquiry Actions ---
//   const markAsReviewed = async (id) => {
//     await fetch(`http://localhost:5000/api/inquiries/${id}/status`, { 
//         method: 'PATCH', 
//         headers: { 'Content-Type': 'application/json' }, 
//         body: JSON.stringify({ status: 'Reviewed' }) 
//     });
//     setInquiries(inquiries.map(inq => inq._id === id ? { ...inq, status: 'Reviewed' } : inq));
//   };

//   const deleteInquiry = async (id) => {
//     if(!window.confirm("Delete lead permanently?")) return;
//     await fetch(`http://localhost:5000/api/inquiries/${id}`, { method: 'DELETE' });
//     setInquiries(inquiries.filter(inq => inq._id !== id));
//   };

//   // --- Blog Actions ---
//   const handleBlogSubmit = async (e) => {
//     e.preventDefault();
//     const url = editingBlogId ? `http://localhost:5000/api/blogs/${editingBlogId}` : 'http://localhost:5000/api/blogs';
//     const method = editingBlogId ? 'PUT' : 'POST';
//     const res = await fetch(url, { 
//         method, 
//         headers: { 'Content-Type': 'application/json' }, 
//         body: JSON.stringify(blogData) 
//     });
//     if(res.ok) {
//         fetchData(); // Refresh data
//         setBlogData({ title: '', slug: '', image: '', content: '' });
//         setEditingBlogId(null);
//     }
//   };

//   const handleDeleteBlog = async (id) => {
//     if(!window.confirm("Delete blog permanently?")) return;
//     await fetch(`http://localhost:5000/api/blogs/${id}`, { method: 'DELETE' });
//     setAdminBlogs(adminBlogs.filter(blog => blog._id !== id));
//   };

//   // --- Gallery Actions ---
//   const handleGallerySubmit = async (e) => {
//     e.preventDefault();
//     setIsUploadingGallery(true);
//     const url = editingGalleryId ? `http://localhost:5000/api/gallery/${editingGalleryId}` : 'http://localhost:5000/api/gallery';
//     const method = editingGalleryId ? 'PUT' : 'POST';
    
//     await fetch(url, {
//         method, 
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(galleryData)
//     });
    
//     fetchData();
//     setGalleryData({ title: '', category: '', image: '' });
//     setEditingGalleryId(null);
//     setIsUploadingGallery(false);
//   };

//   const handleDeleteGallery = async (id) => {
//     if(!window.confirm("Delete image?")) return;
//     await fetch(`http://localhost:5000/api/gallery/${id}`, { method: 'DELETE' });
//     fetchData();
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 text-[#0a1930] pt-24 pb-20 px-6">
//       <div className="max-w-7xl mx-auto space-y-12">
//         {/* Lead Section */}
//         <div className="flex justify-between items-center">
//             <h1 className="text-3xl font-extrabold flex items-center gap-4"><FaInbox/> Lead Management</h1>
//             <button onClick={onLogout} className="bg-red-500 text-white px-4 py-2 rounded-xl font-bold"><FaSignOutAlt/> Logout</button>
//         </div>
        
//         {/* Table code yahan wahi rahega... */}
//         {/* Gallery Form code yahan... */}
//         {/* Blog Form code yahan... */}
//       </div>
//     </div>
//   );
// }
// import React, { useState, useEffect, useRef } from 'react';
// import { FaInbox, FaTrash, FaPenNib, FaEdit, FaNewspaper, FaImages, FaImage, FaSignOutAlt } from 'react-icons/fa';

// export default function AdminPanel({ onLogout }) {
//   const [inquiries, setInquiries] = useState([]);
//   const [adminBlogs, setAdminBlogs] = useState([]);
//   const [adminGallery, setAdminGallery] = useState([]);
  
//   const [blogData, setBlogData] = useState({ title: '', slug: '', image: '', content: '' });
//   const [editingBlogId, setEditingBlogId] = useState(null);
  
//   const [galleryData, setGalleryData] = useState({ title: '', category: '', image: '' });
//   const [isUploadingGallery, setIsUploadingGallery] = useState(false);
//   const [editingGalleryId, setEditingGalleryId] = useState(null);
  
//   const blogFormRef = useRef(null);

//   useEffect(() => { fetchData(); }, []);

//   const fetchData = async () => {
//     try {
//       const [inqRes, blogRes, galleryRes] = await Promise.all([
//         fetch('http://localhost:5000/api/inquiries'),
//         fetch('http://localhost:5000/api/blogs'),
//         fetch('http://localhost:5000/api/gallery')
//       ]);
//       if (inqRes.ok) setInquiries(await inqRes.json());
//       if (blogRes.ok) setAdminBlogs(await blogRes.json());
//       if (galleryRes.ok) setAdminGallery(await galleryRes.json());
//     } catch (error) { console.error(error); }
//   };

//   const markAsReviewed = async (id) => {
//     await fetch(`http://localhost:5000/api/inquiries/${id}/status`, { 
//         method: 'PATCH', headers: { 'Content-Type': 'application/json' }, 
//         body: JSON.stringify({ status: 'Reviewed' }) 
//     });
//     setInquiries(inquiries.map(inq => inq._id === id ? { ...inq, status: 'Reviewed' } : inq));
//   };

//   const deleteInquiry = async (id) => {
//     if(!window.confirm("Delete lead permanently?")) return;
//     await fetch(`http://localhost:5000/api/inquiries/${id}`, { method: 'DELETE' });
//     setInquiries(inquiries.filter(inq => inq._id !== id));
//   };

//   const handleBlogSubmit = async (e) => {
//     e.preventDefault();
//     const url = editingBlogId ? `http://localhost:5000/api/blogs/${editingBlogId}` : 'http://localhost:5000/api/blogs';
//     const method = editingBlogId ? 'PUT' : 'POST';
//     const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(blogData) });
//     if(res.ok) { fetchData(); setBlogData({ title: '', slug: '', image: '', content: '' }); setEditingBlogId(null); }
//   };

//   const handleDeleteBlog = async (id) => {
//     if(!window.confirm("Delete blog?")) return;
//     await fetch(`http://localhost:5000/api/blogs/${id}`, { method: 'DELETE' });
//     fetchData();
//   };

//   const handleGallerySubmit = async (e) => {
//     e.preventDefault();
//     setIsUploadingGallery(true);
//     const url = editingGalleryId ? `http://localhost:5000/api/gallery/${editingGalleryId}` : 'http://localhost:5000/api/gallery';
//     const method = editingGalleryId ? 'PUT' : 'POST';
//     await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(galleryData) });
//     fetchData(); setIsUploadingGallery(false); setGalleryData({ title: '', category: '', image: '' }); setEditingGalleryId(null);
//   };

//   const handleDeleteGallery = async (id) => {
//     if(!window.confirm("Delete image?")) return;
//     await fetch(`http://localhost:5000/api/gallery/${id}`, { method: 'DELETE' });
//     fetchData();
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 text-[#0a1930] pt-24 pb-20 px-6">
//       <div className="max-w-7xl mx-auto space-y-12">
//         {/* Lead Management Section */}
//         <div className="flex justify-between items-center border-b pb-6">
//             <h1 className="text-3xl font-extrabold flex items-center gap-4"><FaInbox/> Lead Management</h1>
//             <button onClick={onLogout} className="bg-red-500 text-white px-4 py-3 rounded-2xl font-bold flex items-center gap-2"><FaSignOutAlt /> Logout</button>
//         </div>
        
//         <div className="bg-white border p-6 rounded-3xl shadow-sm">
//             <table className="w-full">
//                 <thead><tr className="text-slate-500 border-b"><th>Date</th><th>Customer</th><th>Action</th></tr></thead>
//                 <tbody>
//                     {inquiries.map(inq => (
//                         <tr key={inq._id} className="border-b">
//                             <td className="p-4">{new Date(inq.createdAt).toLocaleDateString()}</td>
//                             <td className="p-4 font-bold">{inq.name}</td>
//                             <td className="p-4 flex gap-2">
//                                 <button onClick={() => markAsReviewed(inq._id)} className="bg-blue-600 text-white px-3 py-1 rounded-lg">Reviewed</button>
//                                 <button onClick={() => deleteInquiry(inq._id)} className="bg-red-500 text-white px-3 py-1 rounded-lg"><FaTrash/></button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>

//         {/* Gallery Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             <div className="bg-white p-6 rounded-3xl border">
//                 <h2 className="text-2xl font-bold mb-4">Gallery Manager</h2>
//                 <form onSubmit={handleGallerySubmit} className="space-y-3">
//                     <input type="text" placeholder="Title" value={galleryData.title} onChange={(e) => setGalleryData({...galleryData, title: e.target.value})} className="w-full border p-3 rounded-xl"/>
//                     <input type="text" placeholder="Category" value={galleryData.category} onChange={(e) => setGalleryData({...galleryData, category: e.target.value})} className="w-full border p-3 rounded-xl"/>
//                     <input type="url" placeholder="Image URL" value={galleryData.image} onChange={(e) => setGalleryData({...galleryData, image: e.target.value})} className="w-full border p-3 rounded-xl"/>
//                     <button type="submit" className="w-full bg-pink-600 text-white py-3 rounded-xl font-bold">Save Image</button>
//                 </form>
//             </div>
//             <div className="grid grid-cols-3 gap-2">
//                 {adminGallery.map(item => (
//                     <div key={item._id} className="border rounded-lg overflow-hidden">
//                         <img src={item.image} alt={item.title} className="h-20 w-full object-cover"/>
//                         <button onClick={() => handleDeleteGallery(item._id)} className="w-full bg-red-100 text-red-600 p-1 text-xs">Delete</button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// }