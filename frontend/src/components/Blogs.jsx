import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaCalendarAlt, FaUserEdit } from 'react-icons/fa';

// 👇 YAHAN APNA RENDER KA LIVE URL DAALEIN 👇
const BACKEND_URL = 'https://maa-design.onrender.com';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Localhost ki jagah ab live server se data aayega
        const response = await fetch(`${BACKEND_URL}/api/blogs`); 
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Could not load blogs at this time. Please try again later.");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section className="pt-32 pb-24 px-6 bg-slate-50 min-h-screen text-[#0a1930] relative z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <a href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-[#0a1930] font-bold mb-6 transition-colors bg-blue-50 hover:bg-slate-200 px-4 py-2 rounded-full">
              <FaArrowLeft /> Back to Home
            </a>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a1930]">Our Latest <span className="text-blue-600">Blogs</span></h1>
            <p className="text-slate-500 font-medium mt-4 max-w-xl">Insights, tutorials, and the latest trends from the world of premium digital embroidery design.</p>
          </div>
        </div>

        {loading && (
          <div className="text-center py-20 text-xl font-bold text-slate-500 animate-pulse">
            Loading latest articles...
          </div>
        )}

        {error && (
          <div className="text-center py-10 text-red-500 font-bold bg-red-50 rounded-xl">
            {error}
          </div>
        )}

        {!loading && !error && blogs.length === 0 && (
          <div className="text-center py-20 text-xl font-bold text-slate-500">
            No blogs published yet. Check back soon!
          </div>
        )}

        {!loading && !error && blogs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article key={blog._id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-100 group flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#0a1930] text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                    Embroidery
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold mb-4 hover:text-blue-600 transition-colors cursor-pointer leading-tight">
                    {blog.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow line-clamp-3">
                    {blog.content}
                  </p>
                  
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500 font-medium">
                    <div className="flex items-center gap-2">
                      <FaUserEdit className="text-blue-500" /> Admin
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-blue-500" /> {formatDate(blog.createdAt)}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}