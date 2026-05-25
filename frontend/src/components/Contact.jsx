// import { useState } from 'react';
// import { siteConfig } from '../config/siteData';
// import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });
//   const [status, setStatus] = useState(''); // 'idle', 'loading', 'success', 'error'

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('loading');

//     try {
//       // Sending data to our Node.js backend
//       const response = await fetch('http://localhost:5000/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         setStatus('success');
//         setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
//       } else {
//         setStatus('error');
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       setStatus('error');
//     }
//   };

//   return (
//     <section id="contact" className="py-20 px-6 bg-black text-white relative">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">Get In <span className="text-yellow-500">Touch</span></h2>
//           <p className="text-zinc-400">Have a question or want to discuss a custom design? We'd love to hear from you.</p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-12">
          
//           {/* Left Side: Contact Info Cards */}
//           <div className="lg:col-span-1 space-y-6">
//             <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-yellow-500/50 transition flex items-start gap-4">
//               <div className="bg-yellow-500/10 p-4 rounded-full text-yellow-500 text-2xl">
//                 <FaMapMarkerAlt />
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold mb-2">Our Location</h4>
//                 <p className="text-zinc-400 text-sm leading-relaxed">{siteConfig.address}</p>
//               </div>
//             </div>

//             <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-yellow-500/50 transition flex items-start gap-4">
//               <div className="bg-yellow-500/10 p-4 rounded-full text-yellow-500 text-2xl">
//                 <FaPhoneAlt />
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold mb-2">Call Us</h4>
//                 <p className="text-zinc-400 text-sm">{siteConfig.phone}</p>
//               </div>
//             </div>

//             <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-yellow-500/50 transition flex items-start gap-4">
//               <div className="bg-yellow-500/10 p-4 rounded-full text-yellow-500 text-2xl">
//                 <FaEnvelope />
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold mb-2">Email Us</h4>
//                 <p className="text-zinc-400 text-sm">{siteConfig.email}</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Side: The Form */}
//           <div className="lg:col-span-2 bg-zinc-900 p-8 md:p-12 rounded-3xl border border-zinc-800 shadow-2xl">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Your Name</label>
//                   <input 
//                     type="text" id="name" name="name" required
//                     autoComplete="name"
//                     value={formData.name} onChange={handleChange}
//                     className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition"
//                     placeholder="Your Name"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Your Email</label>
//                   <input 
//                     type="email" id="email" name="email" required
//                     autoComplete="email"
//                     value={formData.email} onChange={handleChange}
//                     className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-2">Phone Number</label>
//                 <input 
//                   type="tel" id="phone" name="phone" required
//                   autoComplete="tel"
//                   value={formData.phone} onChange={handleChange}
//                   className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition"
//                   placeholder="+91 00000 00000"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Your Message (Optional)</label>
//                 <textarea 
//                   id="message" name="message" rows="4"
//                   value={formData.message} onChange={handleChange}
//                   className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition resize-none"
//                   placeholder="How can we help you?"
//                 ></textarea>
//               </div>

//               <button 
//                 type="submit" 
//                 disabled={status === 'loading'}
//                 className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg py-4 rounded-xl transition shadow-lg shadow-yellow-500/20 disabled:opacity-50"
//               >
//                 {status === 'loading' ? 'Sending...' : 'Send Message'}
//               </button>

//               {status === 'success' && <p className="text-green-500 text-center font-medium mt-4">Message sent successfully! We will contact you soon.</p>}
//               {status === 'error' && <p className="text-red-500 text-center font-medium mt-4">Something went wrong. Please try again.</p>}
//             </form>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// import { useState } from 'react';
// import { siteConfig } from '../config/siteData';
// import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });
//   const [status, setStatus] = useState(''); // 'idle', 'loading', 'success', 'error'

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('loading');

//     try {
//       const response = await fetch('http://localhost:5000/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         setStatus('success');
//         setFormData({ name: '', email: '', phone: '', message: '' }); 
//       } else {
//         setStatus('error');
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       setStatus('error');
//     }
//   };

//   return (
//     // Changed bg-black to bg-white, and text to Navy Blue
//     <section id="contact" className="py-20 px-6 bg-white text-[#0a1930] relative">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           {/* Changed yellow text to bright blue */}
//           <h2 className="text-4xl font-bold mb-4">Get In <span className="text-blue-600">Touch</span></h2>
//           <p className="text-slate-600">Have a question or want to discuss a custom design? We'd love to hear from you.</p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-12">
          
//           {/* Left Side: Contact Info Cards */}
//           <div className="lg:col-span-1 space-y-6">
//             <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-600/50 transition flex items-start gap-4 shadow-sm">
//               <div className="bg-blue-600/10 p-4 rounded-full text-blue-600 text-2xl">
//                 <FaMapMarkerAlt />
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold mb-2">Our Location</h4>
//                 <p className="text-slate-600 text-sm leading-relaxed">{siteConfig.address}</p>
//               </div>
//             </div>

//             <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-600/50 transition flex items-start gap-4 shadow-sm">
//               <div className="bg-blue-600/10 p-4 rounded-full text-blue-600 text-2xl">
//                 <FaPhoneAlt />
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold mb-2">Call Us</h4>
//                 <p className="text-slate-600 text-sm">{siteConfig.phone}</p>
//               </div>
//             </div>

//             <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-600/50 transition flex items-start gap-4 shadow-sm">
//               <div className="bg-blue-600/10 p-4 rounded-full text-blue-600 text-2xl">
//                 <FaEnvelope />
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold mb-2">Email Us</h4>
//                 <p className="text-slate-600 text-sm">{siteConfig.email}</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Side: The Form */}
//           <div className="lg:col-span-2 bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-lg">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-bold text-[#0a1930] mb-2">Your Name</label>
//                   <input 
//                     type="text" id="name" name="name" required
//                     autoComplete="name"
//                     value={formData.name} onChange={handleChange}
//                     className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-[#0a1930] placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
//                     placeholder="Your Name"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-bold text-[#0a1930] mb-2">Your Email</label>
//                   <input 
//                     type="email" id="email" name="email" required
//                     autoComplete="email"
//                     value={formData.email} onChange={handleChange}
//                     className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-[#0a1930] placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="phone" className="block text-sm font-bold text-[#0a1930] mb-2">Phone Number</label>
//                 <input 
//                   type="tel" id="phone" name="phone" required
//                   autoComplete="tel"
//                   value={formData.phone} onChange={handleChange}
//                   className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-[#0a1930] placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
//                   placeholder="+91 00000 00000"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-bold text-[#0a1930] mb-2">Your Message (Optional)</label>
//                 <textarea 
//                   id="message" name="message" rows="4"
//                   value={formData.message} onChange={handleChange}
//                   className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-[#0a1930] placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition resize-none"
//                   placeholder="How can we help you?"
//                 ></textarea>
//               </div>

//               {/* Submit button is now your signature Navy Blue */}
//               <button 
//                 type="submit" 
//                 disabled={status === 'loading'}
//                 className="w-full bg-[#0a1930] hover:bg-blue-900 text-white font-bold text-lg py-4 rounded-xl transition shadow-lg shadow-[#0a1930]/20 disabled:opacity-50"
//               >
//                 {status === 'loading' ? 'Sending...' : 'Send Message'}
//               </button>

//               {status === 'success' && <p className="text-blue-600 text-center font-bold mt-4">Message sent successfully! We will contact you soon.</p>}
//               {status === 'error' && <p className="text-red-600 text-center font-bold mt-4">Something went wrong. Please try again.</p>}
//             </form>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


import { useState } from 'react';
import { siteConfig } from '../config/siteData';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' }); 
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  return (
    // MAIN BACKGROUND: Matches the Deep Navy Blue of your app bar
    <section id="contact" className="py-20 px-6 bg-[#0a1930] text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In <span className="text-white">Touch</span></h2>
          <p className="text-blue-100/80">Have a question or want to discuss a custom design? We'd love to hear from you.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* LEFT SIDE: Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/40 transition flex items-start gap-4 shadow-sm backdrop-blur-sm">
              {/* ICON: White background with Navy icon (Matches the "Home" button in your image exactly!) */}
              <div className="bg-white p-4 rounded-full text-[#0a1930] text-2xl shadow-lg">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-white">Our Location</h4>
                <p className="text-white/80 text-sm leading-relaxed">{siteConfig.address}</p>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/40 transition flex items-start gap-4 shadow-sm backdrop-blur-sm">
              <div className="bg-white p-4 rounded-full text-[#0a1930] text-2xl shadow-lg">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-white">Call Us</h4>
                <p className="text-white/80 text-sm">{siteConfig.phone}</p>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/40 transition flex items-start gap-4 shadow-sm backdrop-blur-sm">
              <div className="bg-white p-4 rounded-full text-[#0a1930] text-2xl shadow-lg">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-white">Email Us</h4>
                <p className="text-white/80 text-sm">{siteConfig.email}</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: The Form (Matches the white curved "Active" shape in your app bar) */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#0a1930] mb-2">Your Name</label>
                  <input 
                    type="text" id="name" name="name" required
                    autoComplete="name"
                    value={formData.name} onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0a1930] placeholder-slate-400 focus:outline-none focus:border-[#0a1930] focus:ring-1 focus:ring-[#0a1930] transition"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#0a1930] mb-2">Your Email</label>
                  <input 
                    type="email" id="email" name="email" required
                    autoComplete="email"
                    value={formData.email} onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0a1930] placeholder-slate-400 focus:outline-none focus:border-[#0a1930] focus:ring-1 focus:ring-[#0a1930] transition"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-[#0a1930] mb-2">Phone Number</label>
                <input 
                  type="tel" id="phone" name="phone" required
                  autoComplete="tel"
                  value={formData.phone} onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0a1930] placeholder-slate-400 focus:outline-none focus:border-[#0a1930] focus:ring-1 focus:ring-[#0a1930] transition"
                  placeholder="+91 00000 00000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-[#0a1930] mb-2">Your Message (Optional)</label>
                <textarea 
                  id="message" name="message" rows="4"
                  value={formData.message} onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0a1930] placeholder-slate-400 focus:outline-none focus:border-[#0a1930] focus:ring-1 focus:ring-[#0a1930] transition resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {/* Submit button uses Navy Blue */}
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-[#0a1930] hover:bg-[#112a52] text-white font-bold text-lg py-4 rounded-xl transition shadow-lg shadow-[#0a1930]/20 disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && <p className="text-[#25D366] text-center font-bold mt-4">Message sent successfully! We will contact you soon.</p>}
              {status === 'error' && <p className="text-red-600 text-center font-bold mt-4">Something went wrong. Please try again.</p>}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}