import { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteData';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaCheckCircle, FaSpinner } from 'react-icons/fa';

const BACKEND_URL = 'http://localhost:5000';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const embedUrl = "https://maps.google.com/maps?q=Maa+Computer+Embroidery+Design,+Sardar+Patel+Mall,+Ahmedabad&t=&z=17&ie=UTF8&iwloc=&output=embed";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
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
    <section id="contact" className="pt-12 pb-20 px-4 md:px-6 bg-[#0a1930] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* MAP SECTION - responsive height to avoid overflow on mobile */}
        <div className="w-full h-[250px] md:h-[450px] bg-white/5 rounded-3xl overflow-hidden shadow-2xl border-[4px] border-white/10 mb-12 md:mb-20 relative z-20 transition-transform duration-700 hover:scale-[1.01]">
          <iframe
            title="Maa Embroidery Location"
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

        {/* TEXT HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-white">Touch</span></h2>
          <p className="text-blue-100/80">Have a question or want to discuss a custom design? We'd love to hear from you.</p>
        </div>

        {/* CONTACT INFO & FORM GRID - lg:grid-cols-3 collapses to single column on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">

          {/* LEFT SIDE: Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {[
              { icon: <FaMapMarkerAlt />, title: "Our Location", text: siteConfig.address },
              { icon: <FaPhoneAlt />, title: "Call Us", text: siteConfig.phone },
              { icon: <FaEnvelope />, title: "Email Us", text: siteConfig.email }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/40 transition-all duration-300 flex items-start gap-4 shadow-sm backdrop-blur-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="bg-white p-4 rounded-full text-[#0a1930] text-2xl shadow-lg shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                  <p className="text-white/80 text-sm leading-relaxed break-words">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: The Form */}
          <div className="lg:col-span-2 bg-white p-6 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden w-full">

            {status === 'success' ? (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center z-30 transition-all duration-500 animate-in fade-in zoom-in-95 p-6 text-center">
                <div className="bg-green-100 p-6 rounded-full mb-6 shadow-inner animate-bounce">
                  <FaCheckCircle className="text-green-500 text-6xl" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0a1930] mb-2">Message Sent!</h3>
                <p className="text-slate-500 text-base md:text-lg font-medium text-center max-w-sm">
                  Thank you for reaching out. Our team will get back to you shortly.
                </p>
                <div className="w-48 h-1 bg-gray-200 rounded-full mt-8 overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full animate-[progress_5s_ease-in-out_forwards]"></div>
                </div>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#0a1930] mb-2">Your Name</label>
                  <input
                    type="text" id="name" name="name" required
                    autoComplete="name" disabled={status === 'loading'}
                    value={formData.name} onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0a1930] placeholder-slate-400 focus:outline-none focus:border-[#0a1930] focus:ring-2 focus:ring-[#0a1930]/20 transition disabled:opacity-50"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#0a1930] mb-2">Your Email</label>
                  <input
                    type="email" id="email" name="email" required
                    autoComplete="email" disabled={status === 'loading'}
                    value={formData.email} onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0a1930] placeholder-slate-400 focus:outline-none focus:border-[#0a1930] focus:ring-2 focus:ring-[#0a1930]/20 transition disabled:opacity-50"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-[#0a1930] mb-2">Phone Number</label>
                <input
                  type="tel" id="phone" name="phone" required
                  autoComplete="tel" disabled={status === 'loading'}
                  value={formData.phone} onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0a1930] placeholder-slate-400 focus:outline-none focus:border-[#0a1930] focus:ring-2 focus:ring-[#0a1930]/20 transition disabled:opacity-50"
                  placeholder="+91 00000 00000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-[#0a1930] mb-2">Your Message (Optional)</label>
                <textarea
                  id="message" name="message" rows="4" disabled={status === 'loading'}
                  value={formData.message} onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0a1930] placeholder-slate-400 focus:outline-none focus:border-[#0a1930] focus:ring-2 focus:ring-[#0a1930]/20 transition resize-none disabled:opacity-50"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full relative overflow-hidden bg-[#0a1930] hover:bg-[#112a52] text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-[#0a1930]/20 disabled:cursor-not-allowed group flex items-center justify-center gap-3"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>

                <span className="relative z-10 flex items-center gap-2">
                  {status === 'loading' ? (
                    <>
                      <FaSpinner className="animate-spin text-xl" />
                      Sending...
                    </>
                  ) : 'Send Message'}
                </span>
              </button>

              {status === 'error' && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl mt-4">
                  <p className="text-red-700 font-medium">Something went wrong. Please try again.</p>
                </div>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}