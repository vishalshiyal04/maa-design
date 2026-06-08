import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import About from './components/About';
import Gallery from './components/Gallery';
import AppDownload from './components/AppDownload';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import ReturnRefund from './components/ReturnRefund'; 
import Blogs from './components/Blogs';             

import { FaWhatsapp, FaTelegramPlane, FaInbox, FaChartLine, FaTrash, FaPenNib, FaEdit, FaNewspaper, FaLock, FaSignInAlt, FaSignOutAlt, FaImages, FaImage } from 'react-icons/fa';
import { siteConfig } from './config/siteData';
import { Helmet } from 'react-helmet-async';  

export default function App() {
  const path = window.location.pathname;
  const [isAdminAuth, setIsAdminAuth] = useState(!!localStorage.getItem('adminToken'));

  const handleLoginSuccess = (token) => {
    localStorage.setItem('adminToken', token);
    setIsAdminAuth(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAdminAuth(false);
  };

  const renderPageContent = () => {
    if (path === '/privacy-policy') return <PrivacyPolicy />;
    if (path === '/return-refund') return <ReturnRefund />;
    if (path === '/blogs') return <Blogs />;
    
    if (path === '/secret-maa-portal') {
      return isAdminAuth ? <AdminPanel onLogout={handleLogout} /> : <AdminLogin onLogin={handleLoginSuccess} />;
    }
    
    if (path === '/admin') {
     window.location.href = '/'; 
     return null;
  }
    return (
      <main>
        <Helmet>
           <title>Maa Embroidery Design | Premium Vector Patterns</title>
           <meta name="description" content="Custom industrial embroidery designs, vector patterns, and structural scaling solutions in Ahmedabad." />
           <meta name="keywords" content="embroidery design, custom patterns, Anarkali design, industrial embroidery" />
        </Helmet>
        <HeroSlider />
        <About />
        <Gallery />
        <AppDownload />
        <Contact />
      </main>
    );
  };

  return (
    <div className="font-sans relative bg-[#0a1930]">
      <Header />
      {renderPageContent()}
      <Footer />
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a href={siteConfig.socials.telegram} target="_blank" rel="noreferrer" className="bg-[#0088cc] text-white p-4 rounded-full shadow-2xl hover:bg-[#0077b5] hover:scale-110 transition-all animate-bounce"><FaTelegramPlane className="text-3xl" /></a>
        <a href={siteConfig.socials.whatsapp} target="_blank" rel="noreferrer" className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all animate-bounce"><FaWhatsapp className="text-3xl" /></a>
      </div>
    </div>
  );
}

function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (data.success) onLogin(data.token);
      else setError(data.message);
    } catch (err) { setError("Server error. Check backend."); } 
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center px-4 relative z-10 pt-10 pb-20">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
        <div className="text-center mb-8">
          <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-inner"><FaLock /></div>
          <h2 className="text-3xl font-extrabold text-[#0a1930]">Admin Access</h2>
        </div>
        {error && <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 font-bold text-center border border-red-200">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Admin Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 font-medium" placeholder="Your Email ID"/>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 font-medium" placeholder="••••••••"/>
          </div>
          <button type="submit" disabled={loading} className="w-full bg-[#0a1930] hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
            {loading ? 'Verifying...' : <><FaSignInAlt /> Login to Dashboard</>}
          </button>
        </form>
      </div>
    </div>
  );
}

function AdminPanel({ onLogout }) {
  const [inquiries, setInquiries] = useState([]);
  const [adminBlogs, setAdminBlogs] = useState([]);
  const [adminGallery, setAdminGallery] = useState([]);
  
  const [loading, setLoading] = useState(true);

  // Blog State
  const [blogData, setBlogData] = useState({ title: '', slug: '', image: '', content: '' });
  const [editingBlogId, setEditingBlogId] = useState(null);
  
  // Gallery State
  const [galleryData, setGalleryData] = useState({ title: '', category: '', image: '' });
  const [isUploadingGallery, setIsUploadingGallery] = useState(false);
const [editingGalleryId, setEditingGalleryId] = useState(null);
  const blogFormRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [inqRes, blogRes, galleryRes] = await Promise.all([
          fetch('http://localhost:5000/api/inquiries'),
          fetch('http://localhost:5000/api/blogs'),
          fetch('http://localhost:5000/api/gallery')
        ]);
        if (inqRes.ok) setInquiries(await inqRes.json());
        if (blogRes.ok) setAdminBlogs(await blogRes.json());
        if (galleryRes.ok) setAdminGallery(await galleryRes.json());
      } catch (error) { console.error(error); } 
      finally { setLoading(false); }
    };
    fetchData();
  }, []);

  // INQUIRY FUNCS
  const markAsReviewed = async (id) => {
    await fetch(`http://localhost:5000/api/inquiries/${id}/status`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status: 'Reviewed' }) });
    setInquiries(inquiries.map(inq => inq._id === id ? { ...inq, status: 'Reviewed' } : inq));
  };
  const deleteInquiry = async (id) => {
    if(!window.confirm("Delete lead permanently?")) return;
    await fetch(`http://localhost:5000/api/inquiries/${id}`, { method: 'DELETE' });
    setInquiries(inquiries.filter(inq => inq._id !== id));
  };

  // BLOG FUNCS
  const handleTitleChange = (e) => {
    const title = e.target.value;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    setBlogData({ ...blogData, title, slug });
  };
  const handleEditClick = (blog) => {
    setBlogData({ title: blog.title, slug: blog.slug, image: blog.image, content: blog.content });
    setEditingBlogId(blog._id);
    blogFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleCancelEdit = () => { setBlogData({ title: '', slug: '', image: '', content: '' }); setEditingBlogId(null); };
  const handleDeleteBlog = async (id) => {
    if(!window.confirm("Delete blog permanently?")) return;
    await fetch(`http://localhost:5000/api/blogs/${id}`, { method: 'DELETE' });
    setAdminBlogs(adminBlogs.filter(blog => blog._id !== id));
  };
  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    const finalBlogData = { ...blogData, image: blogData.image.trim() === '' ? 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800' : blogData.image };
    const method = editingBlogId ? 'PUT' : 'POST';
    const url = editingBlogId ? `http://localhost:5000/api/blogs/${editingBlogId}` : 'http://localhost:5000/api/blogs';
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(finalBlogData) });
    if(res.ok) {
        const result = await res.json();
        if(editingBlogId) setAdminBlogs(adminBlogs.map(b => b._id === editingBlogId ? result.post : b));
        else setAdminBlogs([result.post, ...adminBlogs]);
        handleCancelEdit();
    }
  };

  // ✅ GALLERY FUNCS
  const handleGallerySubmit = async (e) => {
    e.preventDefault();
    setIsUploadingGallery(true);
    try {
      const response = await fetch('http://localhost:5000/api/gallery', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(galleryData)
      });
      if (response.ok) {
        const result = await response.json();
        setAdminGallery([result.item, ...adminGallery]);
        setGalleryData({ title: '', category: '', image: '' }); // Reset
        alert("Image added to gallery!");
      }
    } catch (error) { console.error("Error adding gallery:", error); } 
    finally { setIsUploadingGallery(false); }
  };

  const handleDeleteGallery = async (id) => {
    if(!window.confirm("Remove this image from public gallery?")) return;
    try {
      const response = await fetch(`http://localhost:5000/api/gallery/${id}`, { method: 'DELETE' });
      if (response.ok) setAdminGallery(adminGallery.filter(item => item._id !== id));
    } catch (error) { console.error("Error deleting image:", error); }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-[#0a1930] pt-24 pb-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ================= SECTION 1: INQUIRIES ================= */}
        <div>
          <div className="flex justify-between items-center border-b border-slate-200 pb-6 mb-6">
            <h1 className="text-3xl font-extrabold flex items-center gap-4">
              <span className="bg-[#0a1930] text-white p-3 rounded-2xl"><FaInbox /></span> Lead Management
            </h1>
            <button onClick={onLogout} className="bg-red-50 hover:bg-red-500 text-red-500 hover:text-white border border-red-200 px-4 py-3 rounded-2xl font-bold flex items-center gap-2"><FaSignOutAlt /> Logout</button>
          </div>
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr><th className="p-5 text-sm font-bold text-slate-500">Date</th><th className="p-5 text-sm font-bold text-slate-500">Customer</th><th className="p-5 text-sm font-bold text-slate-500">Message</th><th className="p-5 text-sm font-bold text-slate-500 text-right">Action</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {inquiries.map(inq => (
                  <tr key={inq._id}>
                    <td className="p-5 font-medium">{new Date(inq.createdAt).toLocaleDateString()}</td>
                    <td className="p-5 font-bold">{inq.name} <br/><span className="text-blue-600 text-sm">{inq.phone}</span></td>
                    <td className="p-5 text-sm">{inq.message || '-'}</td>
                    <td className="p-5 text-right flex justify-end gap-2">
                      {inq.status === 'Pending' ? <button onClick={() => markAsReviewed(inq._id)} className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold">Mark Reviewed</button> : <span className="text-slate-400 font-bold text-sm px-2">Completed</span>}
                      <button onClick={() => deleteInquiry(inq._id)} className="bg-red-50 text-red-500 hover:bg-red-500 hover:text-white p-2.5 rounded-xl"><FaTrash /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= SECTION 2: GALLERY MANAGER ================= */}
        <div>
          <div className="border-b border-slate-200 pb-6 mb-6">
            <h1 className="text-3xl font-extrabold flex items-center gap-4">
              <span className="bg-pink-600 text-white p-3 rounded-2xl"><FaImages /></span> Gallery Management
            </h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Gallery Upload / Edit Form */}
            <div className="lg:col-span-1 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm h-fit">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaImage className="text-pink-600"/> {editingGalleryId ? 'Edit Design' : 'Add New Design'}
              </h3>
              <form onSubmit={handleGallerySubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Title</label>
                  <input type="text" required value={galleryData.title} onChange={(e) => setGalleryData({...galleryData, title: e.target.value})} placeholder="e.g., Bridal Anarkali" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none"/>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Category</label>
                  <input type="text" required value={galleryData.category} onChange={(e) => setGalleryData({...galleryData, category: e.target.value})} placeholder="e.g., Heavy Work" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none"/>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Image URL</label>
                  <input type="url" required value={galleryData.image} onChange={(e) => setGalleryData({...galleryData, image: e.target.value})} placeholder="https://..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none"/>
                </div>
                
                <div className="flex flex-col gap-2 pt-2">
                  <button type="submit" disabled={isUploadingGallery} className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-xl transition-all shadow-md">
                    {isUploadingGallery ? 'Saving...' : (editingGalleryId ? 'Update Gallery Image' : 'Add to Public Gallery')}
                  </button>
                  {editingGalleryId && (
                    <button type="button" onClick={() => { setGalleryData({ title: '', category: '', image: '' }); setEditingGalleryId(null); }} className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-3 rounded-xl transition-all">
                      Cancel Edit
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Gallery Preview List */}
            <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm overflow-y-auto max-h-[500px]">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {adminGallery.length === 0 ? <p className="text-slate-400 font-bold col-span-3">No images in gallery.</p> : 
                  adminGallery.map(item => (
                    <div key={item._id} className={`relative group rounded-xl overflow-hidden border-2 ${editingGalleryId === item._id ? 'border-pink-500' : 'border-slate-200'}`}>
                      <img src={item.image} alt={item.title} className="w-full h-32 object-cover"/>
                      <div className="absolute inset-0 bg-[#0a1930]/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center">
                        <span className="text-white text-xs font-bold truncate w-full mb-2">{item.title}</span>
                        <div className="flex gap-2">
                          {/* ✅ NEW: EDIT BUTTON FOR GALLERY */}
                          <button onClick={() => { setGalleryData({ title: item.title, category: item.category, image: item.image }); setEditingGalleryId(item._id); }} className="bg-white text-slate-800 p-2 rounded-full hover:scale-110 shadow-lg"><FaEdit size={12}/></button>
                          <button onClick={() => handleDeleteGallery(item._id)} className="bg-red-500 text-white p-2 rounded-full hover:scale-110 shadow-lg"><FaTrash size={12}/></button>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECTION 3: BLOG MANAGER ================= */}
        <div>
          <div className="border-b border-slate-200 pb-6 mb-6">
            <h1 className="text-3xl font-extrabold flex items-center gap-4">
              <span className="bg-blue-600 text-white p-3 rounded-2xl"><FaNewspaper /></span> Blog Management
            </h1>
          </div>
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm mb-8">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr><th className="p-5 text-sm font-bold text-slate-500">Date</th><th className="p-5 text-sm font-bold text-slate-500">Blog Title</th><th className="p-5 text-sm font-bold text-slate-500 text-right">Actions</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {adminBlogs.map(blog => (
                  <tr key={blog._id}>
                    <td className="p-5 font-medium">{new Date(blog.createdAt).toLocaleDateString()}</td>
                    <td className="p-5 font-bold text-[#0a1930]">{blog.title}</td>
                    <td className="p-5 text-right flex justify-end gap-2">
                      <button onClick={() => handleEditClick(blog)} className="bg-slate-100 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2"><FaEdit /> Edit</button>
                      <button onClick={() => handleDeleteBlog(blog._id)} className="bg-red-50 text-red-500 p-2.5 rounded-xl"><FaTrash /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div ref={blogFormRef} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold mb-6 flex items-center gap-3">
              <FaPenNib className="text-blue-600"/> {editingBlogId ? 'Edit Blog Post' : 'Publish New Blog'}
            </h2>
            <form onSubmit={handleBlogSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="block text-sm font-bold text-slate-700 mb-2">Title</label><input type="text" required value={blogData.title} onChange={handleTitleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3"/></div>
                <div><label className="block text-sm font-bold text-slate-700 mb-2">Slug</label><input type="text" required value={blogData.slug} onChange={(e) => setBlogData({...blogData, slug: e.target.value})} className="w-full bg-slate-100 border border-slate-200 text-slate-500 rounded-xl px-4 py-3"/></div>
              </div>
              <div><label className="block text-sm font-bold text-slate-700 mb-2">Cover Image URL</label><input type="text" value={blogData.image} onChange={(e) => setBlogData({...blogData, image: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3"/></div>
              <div><label className="block text-sm font-bold text-slate-700 mb-2">Content</label><textarea required rows="4" value={blogData.content} onChange={(e) => setBlogData({...blogData, content: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3"></textarea></div>
              <div className="flex justify-end gap-4">
                {editingBlogId && <button type="button" onClick={handleCancelEdit} className="text-slate-500 font-bold px-4">Cancel</button>}
                <button type="submit" className="bg-[#0a1930] hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2">{editingBlogId ? 'Update' : 'Publish'}</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}