import { FaArrowLeft, FaCalendarAlt, FaUserEdit } from 'react-icons/fa';

export default function Blogs() {
  const dummyBlogs = [
    {
      id: 1,
      title: "Top 10 Anarkali Embroidery Trends for 2026",
      excerpt: "Discover the latest fusion of traditional motifs and modern geometric patterns dominating the Anarkali fashion scene this year.",
      date: "May 15, 2026",
      author: "Design Team",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Choosing the Right Thread for 3-Piece Designs",
      excerpt: "A comprehensive guide to selecting between rayon, polyester, and metallic threads for complex multi-layered garments.",
      date: "May 02, 2026",
      author: "Embroidery Expert",
      category: "Tutorials",
      image: "https://images.unsplash.com/photo-1584043204475-8cc101d6c77a?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "How to Digitize Your Own Custom Necklines",
      excerpt: "Learn the basics of taking a hand-drawn sketch and converting it into a machine-ready embroidery file for Kurtis.",
      date: "April 28, 2026",
      author: "Tech Team",
      category: "Software",
      image: "https://images.unsplash.com/photo-1620794341491-9f2425afc2c8?auto=format&fit=crop&q=80&w=800"
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyBlogs.map((blog) => (
            <article key={blog.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-100 group flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#0a1930] text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                  {blog.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-4 hover:text-blue-600 transition-colors cursor-pointer leading-tight">
                  {blog.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                  {blog.excerpt}
                </p>
                
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500 font-medium">
                  <div className="flex items-center gap-2">
                    <FaUserEdit className="text-blue-500" /> {blog.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-blue-500" /> {blog.date}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}