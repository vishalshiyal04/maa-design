import { siteConfig } from '../config/siteData';
import { FaArrowLeft, FaFileDownload, FaSyncAlt, FaTimesCircle } from 'react-icons/fa';

export default function ReturnRefund() {
  return (
    <section className="pt-32 pb-24 px-6 bg-slate-50 min-h-screen text-[#0a1930] relative z-10">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-2xl shadow-[#0a1930]/5 border border-slate-100">
        
        <a href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-[#0a1930] font-bold mb-10 transition-colors bg-blue-50 hover:bg-slate-100 px-4 py-2 rounded-full">
          <FaArrowLeft /> Back to Home
        </a>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0a1930]">Return & Refund Policy</h1>
        <p className="text-slate-500 font-medium mb-12 border-b border-slate-200 pb-8">
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>

        <p className="text-slate-600 leading-relaxed text-lg mb-12">
          Thank you for choosing Maa Embroidery Design. Because our products are digital design files, we have specific guidelines regarding returns and refunds to protect the integrity of our intellectual property.
        </p>

        <div className="space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-4">
              <span className="bg-red-100 text-red-600 p-3 rounded-full"><FaTimesCircle /></span>
              1. Digital Downloads (No Returns)
            </h2>
            <p className="text-slate-600 leading-relaxed ml-14">
              Due to the nature of digital products, all sales of individual embroidery design files are final. Once a design has been purchased and the download link has been generated or accessed, we cannot accept returns, exchanges, or issue refunds. Please ensure you verify the design dimensions and file formats before completing your purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-4">
              <span className="bg-green-100 text-green-600 p-3 rounded-full"><FaFileDownload /></span>
              2. Exceptions (Corrupted or Incorrect Files)
            </h2>
            <p className="text-slate-600 leading-relaxed ml-14">
              We stand by the quality of our designs. We will issue a replacement or a full refund if:
            </p>
            <ul className="list-disc ml-20 mt-4 space-y-2 text-slate-600">
              <li>The downloaded file is corrupted or fails to open in standard embroidery software.</li>
              <li>You accidentally purchased the exact same design twice within a 24-hour period.</li>
              <li>The file delivered does not match the description or image shown on the application.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-4">
              <span className="bg-blue-100 text-blue-600 p-3 rounded-full"><FaSyncAlt /></span>
              3. Subscription Cancellations
            </h2>
            <p className="text-slate-600 leading-relaxed ml-14">
              If you are subscribed to our premium design access plans, you may cancel your subscription at any time through the mobile application settings. Cancellation will stop future billing, but we do not offer partial refunds for the remainder of the current billing cycle. You will retain access to the designs until your cycle ends.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. How to Request a Refund</h2>
            <p className="text-slate-600 leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-200">
              If you meet the exception criteria, please contact our support team within <strong>7 days</strong> of your purchase. Include your order number and a brief explanation of the issue. <br/><br/>
              <strong className="text-[#0a1930]">Email us at:</strong> <a href={`mailto:${siteConfig.email}`} className="text-blue-600 hover:underline font-bold">{siteConfig.email}</a>
            </p>
          </section>

        </div>
      </div>
    </section>
  );
}