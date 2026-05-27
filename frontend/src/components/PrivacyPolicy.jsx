import { siteConfig } from '../config/siteData';
import { FaArrowLeft } from 'react-icons/fa';

export default function PrivacyPolicy() {
  return (
    <section className="pt-32 pb-24 px-6 bg-slate-50 min-h-screen text-[#0a1930] relative z-10">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-2xl shadow-[#0a1930]/5 border border-slate-100">
        
        {/* Back Button */}
        <a href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-[#0a1930] font-bold mb-10 transition-colors bg-blue-50 hover:bg-slate-100 px-4 py-2 rounded-full">
          <FaArrowLeft /> Back to Home
        </a>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0a1930]">Privacy Policy</h1>
        <p className="text-slate-500 font-medium mb-12 border-b border-slate-200 pb-8">
          Effective Date: August 27, 2025
        </p>

        {/* Intro */}
        <p className="text-slate-600 leading-relaxed text-lg mb-12">
          This Privacy Policy applies to the Maa Embroidery Designs mobile application and website (the "Application") operated by Maa Embroidery Designs ("Service Provider"). By using the Application, you agree to the terms described below.
        </p>

        {/* Content Sections */}
        <div className="space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-4">
              <span className="bg-[#0a1930] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md">1</span>
              About the Application
            </h2>
            <p className="text-slate-600 leading-relaxed ml-12">
              Maa Embroidery Designs provides access to digital embroidery design files through e-commerce purchases and subscription plans. All design files offered within the Application are original works owned by the Service Provider and protected by applicable copyright laws. Users are granted a license for personal or commercial use as specified at the time of purchase. Redistribution or resale of files outside the Application without permission is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-4">
              <span className="bg-[#0a1930] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md">2</span>
              Information We Collect
            </h2>
            <p className="text-slate-600 leading-relaxed ml-12 mb-4">When you use the Application, we may collect the following types of information:</p>
            <ul className="list-disc ml-16 space-y-2 text-slate-600">
              <li><strong className="text-[#0a1930]">Personal Information:</strong> such as your email address, mobile number, or payment details when you register, subscribe, or make a purchase.</li>
              <li><strong className="text-[#0a1930]">Usage Data:</strong> such as IP address, device type, operating system, app version, and activity within the Application (e.g., pages visited, time spent).</li>
              <li><strong className="text-[#0a1930]">Transaction Data:</strong> related to your digital file purchases or subscription activity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-4">
              <span className="bg-[#0a1930] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md">3</span>
              How We Use Your Information
            </h2>
            <ul className="list-disc ml-16 space-y-2 text-slate-600">
              <li>Provide access to purchased or subscribed embroidery files.</li>
              <li>Process payments securely.</li>
              <li>Improve application performance and user experience.</li>
              <li>Send important service updates, subscription reminders, or promotional offers (only if you opt in).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-4">
              <span className="bg-[#0a1930] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md">4</span>
              Data Sharing
            </h2>
            <p className="text-slate-600 leading-relaxed ml-12 mb-4">Your personal information is not sold or shared with third parties except in the following circumstances:</p>
            <ul className="list-disc ml-16 space-y-2 text-slate-600">
              <li>To comply with legal obligations (court orders or government requests).</li>
              <li>With trusted service providers such as payment processors, analytics providers, or cloud hosting services, strictly for operating the Application.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-4">
              <span className="bg-[#0a1930] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md">5</span>
              Data Retention
            </h2>
            <p className="text-slate-600 leading-relaxed ml-12">
              We retain personal data only for as long as necessary to provide our services or comply with legal obligations. You may request deletion of your account and associated data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-4">
              <span className="bg-[#0a1930] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md">6</span>
              User Data Rights & Deletion
            </h2>
            <p className="text-slate-600 leading-relaxed ml-12">
              You have the right to access, update, or request deletion of your personal data. To exercise these rights, please contact us using the email address below. We will process data requests within a reasonable timeframe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-4">
              <span className="bg-[#0a1930] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md">7</span>
              Children’s Privacy
            </h2>
            <p className="text-slate-600 leading-relaxed ml-12">
              The Application is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe that a child has provided us with personal data, please contact us and we will promptly delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-4">
              <span className="bg-[#0a1930] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md">8</span>
              Data Security
            </h2>
            <p className="text-slate-600 leading-relaxed ml-12">
              We implement reasonable administrative, technical, and physical safeguards to protect your information. However, no method of transmission or storage is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-4">
              <span className="bg-[#0a1930] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md">9</span>
              Changes to This Privacy Policy
            </h2>
            <p className="text-slate-600 leading-relaxed ml-12">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and continued use of the Application indicates acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-4">
              <span className="bg-[#0a1930] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md">10</span>
              Contact Us
            </h2>
            <p className="text-slate-600 leading-relaxed ml-12">
              If you have any questions about this Privacy Policy or our data practices, please contact us at: <br/><br/>
              <strong className="text-[#0a1930]">Email:</strong> <a href={`mailto:${siteConfig.email}`} className="text-blue-600 hover:underline">{siteConfig.email}</a>
            </p>
          </section>

        </div>
      </div>
    </section>
  );
}