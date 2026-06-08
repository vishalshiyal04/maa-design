import { useState } from 'react';
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

import { FaWhatsapp, FaTelegramPlane, FaInbox, FaChartLine } from 'react-icons/fa';
import { siteConfig } from './config/siteData';

import { Helmet } from 'react-helmet-async';  

export default function App() {
  const path = window.location.pathname;

  // Simple router logic to figure out which page to render
  const renderPageContent = () => {
    if (path === '/privacy-policy') return <PrivacyPolicy />;
    if (path === '/return-refund') return <ReturnRefund />;
    if (path === '/blogs') return <Blogs />;
    
    // NEW: Admin Panel Route
    if (path === '/admin') return <AdminPanel />;
    
    // Default Home Page
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

      {/* FLOATING ACTION BUTTONS CONTAINER */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a 
          href={siteConfig.socials.telegram} target="_blank" rel="noreferrer" 
          className="bg-[#0088cc] text-white p-4 rounded-full shadow-2xl hover:bg-[#0077b5] hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce" 
          aria-label="Chat on Telegram"
        >
          <FaTelegramPlane className="text-3xl" />
        </a>
        <a 
          href={siteConfig.socials.whatsapp} target="_blank" rel="noreferrer" 
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce" 
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-3xl" />
        </a>
      </div>
    </div>
  );
}

// =====================================================================
// NEW FEATURE: INQUIRY ADMIN PANEL (Kept in the same file for ease)
// =====================================================================
function AdminPanel() {
  // Temporary state for UI preview (Later, fetch this from MongoDB)
  const [inquiries, setInquiries] = useState([
    { id: 1, name: "Rajesh Kumar", phone: "9876543210", email: "rajesh@example.com", message: "Need custom embroidery for 500 Kurtis.", status: "Pending", date: "27-May-2026" },
    { id: 2, name: "Priya Sharma", phone: "9123456789", email: "priya@gmail.com", message: "Looking for new Anarkali design patterns.", status: "Reviewed", date: "26-May-2026" }
  ]);

  const markAsReviewed = (id) => {
    setInquiries(inquiries.map(inq => inq.id === id ? { ...inq, status: 'Reviewed' } : inq));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-[#0a1930] pt-24 pb-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-8 mb-8">
          <div>
            <h1 className="text-4xl font-extrabold flex items-center gap-4">
              <span className="bg-[#0a1930] text-white p-3 rounded-2xl shadow-lg"><FaInbox /></span>
              Lead Management Panel
            </h1>
            <p className="text-slate-500 font-medium mt-2">Manage all customer inquiries securely from your website.</p>
          </div>
          <div className="bg-white border border-slate-200 px-6 py-3 rounded-2xl flex items-center gap-3 shadow-sm">
            <FaChartLine className="text-blue-600 text-xl" />
            <span className="font-bold text-slate-700">Total Leads: <span className="text-blue-600">{inquiries.length}</span></span>
          </div>
        </div>

        {/* Inquiries Table */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl shadow-[#0a1930]/5">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-5 text-sm font-bold text-slate-500 uppercase tracking-wider">Date</th>
                  <th className="p-5 text-sm font-bold text-slate-500 uppercase tracking-wider">Customer Details</th>
                  <th className="p-5 text-sm font-bold text-slate-500 uppercase tracking-wider">Message/Requirement</th>
                  <th className="p-5 text-sm font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="p-5 text-sm font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {inquiries.map(inq => (
                  <tr key={inq.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 text-slate-500 font-medium whitespace-nowrap">{inq.date}</td>
                    <td className="p-5">
                      <div className="font-bold text-[#0a1930] text-base">{inq.name}</div>
                      <div className="font-semibold text-blue-600 text-sm mt-1">{inq.phone}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{inq.email || 'No email provided'}</div>
                    </td>
                    <td className="p-5 text-slate-600 font-medium max-w-xs">{inq.message || 'No description provided.'}</td>
                    <td className="p-5">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${inq.status === 'Pending' ? 'bg-orange-50 text-orange-600 border-orange-200' : 'bg-green-50 text-green-600 border-green-200'}`}>
                        {inq.status}
                      </span>
                    </td>
                    <td className="p-5 text-right">
                      {inq.status === 'Pending' ? (
                        <button onClick={() => markAsReviewed(inq.id)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-md">
                          Mark Reviewed
                        </button>
                      ) : (
                        <span className="text-slate-400 font-bold text-sm">Action Complete</span>
                      )}
                    </td>
                  </tr>
                ))}
                {inquiries.length === 0 && (
                  <tr>
                    <td colSpan="5" className="p-10 text-center text-slate-500 font-medium">No inquiries found yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}