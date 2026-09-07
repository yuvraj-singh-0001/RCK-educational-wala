'use client';

import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Sparkles, 
  ArrowRight,
  ChevronDown,
  ShieldCheck
} from 'lucide-react';
import { InstagramIcon, LinkedInIcon, FacebookIcon, WhatsAppIcon } from '../../components/SocialIcons';
import FaqSection from '../../components/FaqSection';

export default function ContactClientPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Website Development (₹3,999)',
    budget: 'Starter (₹3,999 - ₹5,999)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const text = `*New Direct Project Inquiry from SiteMint Contact Page*
---------------------------------------
👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
🚀 *Service Required:* ${formData.service}
💰 *Expected Budget:* ${formData.budget}
📝 *Project Notes:* ${formData.message || 'None'}
---------------------------------------
Please provide quotation and project timeline.`;

    window.open(`https://wa.me/918920683588?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="w-full pt-6 pb-12 sm:pt-10 sm:pb-20 bg-white text-slate-800 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Eye-Soothing Soft Colors) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50/90 border border-violet-200/80 text-violet-700 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-2xs">
            <Phone className="w-3.5 h-3.5 text-violet-600" /> — DIRECT CONTACT CHANNELS —
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-3">
            Let&apos;s Build Your Digital Vision & <span className="gradient-text-hero">Grow Your Business</span>
          </h1>
          <p className="text-slate-600 text-xs sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
            100% free consultation with zero upfront risk. Connect directly with our core engineering & media team.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-teal-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 mb-16 sm:mb-20 items-stretch">
          
          {/* Left Column: Direct Contact Info (Harmonious & Eye-Soothing Colors) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 py-1">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200/80 text-violet-700 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-violet-600" /> Verified Contact Channels
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Connect Directly With <span className="gradient-text-hero">Our Team</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-1.5">
                  Reach out across any official verified channel for fast project estimates & technical support.
                </p>
              </div>

              {/* Clean Direct Channels List (Vibrant Circular Logo Badges) */}
              <div className="space-y-4 pt-2 w-full max-w-full">
                
                {/* Instant WhatsApp */}
                <a
                  href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20discuss%20a%20new%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 py-1.5 group cursor-pointer w-full max-w-full"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/25 group-hover:scale-110 transition-transform">
                    <WhatsAppIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] text-slate-500 font-extrabold uppercase tracking-wider block">Instant WhatsApp Chat</span>
                    <span className="text-slate-900 font-black text-sm sm:text-base group-hover:text-emerald-600 transition-colors block truncate">+91 89206 83588</span>
                  </div>
                </a>

                {/* Direct Phone Call */}
                <a
                  href="tel:+918920683588"
                  className="flex items-center gap-3.5 py-1.5 group cursor-pointer w-full max-w-full"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#7C3AED] text-white flex items-center justify-center shrink-0 shadow-md shadow-violet-500/25 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] text-slate-500 font-extrabold uppercase tracking-wider block">Direct Phone (Mon-Sat 9AM-9PM IST)</span>
                    <span className="text-slate-900 font-black text-sm sm:text-base group-hover:text-violet-600 transition-colors block truncate">+91 89206 83588</span>
                  </div>
                </a>

                {/* Official Email */}
                <a
                  href="mailto:contactsitemint@gmail.com"
                  className="flex items-center gap-3.5 py-1.5 group cursor-pointer w-full max-w-full"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0284C7] text-white flex items-center justify-center shrink-0 shadow-md shadow-sky-500/25 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] text-slate-500 font-extrabold uppercase tracking-wider block">Official Email</span>
                    <span className="text-slate-900 font-black text-sm sm:text-base group-hover:text-sky-600 transition-colors truncate block">contactsitemint@gmail.com</span>
                  </div>
                </a>

                {/* Service Area / Map Box */}
                <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-slate-50/80 border border-slate-200/90 shadow-2xs flex items-start gap-3.5 mt-3 w-full max-w-full">
                  <div className="w-10 h-10 rounded-full bg-[#4F46E5] text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-500/25 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-black text-slate-900 uppercase tracking-wider block">Pan-India & Global Remote Delivery</span>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed mt-1">
                      Serving clients across Delhi NCR, Mumbai, Bangalore, Jaipur, Lucknow, Kanpur & international remote projects.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Official Social Media Channels (Matching Footer "Connect With SiteMint" Style) */}
            <div className="pt-4 border-t border-slate-200/80 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-violet-600" />
                Connect With SiteMint
              </div>
              <div className="flex items-center gap-3 pt-1">
                {/* Instagram Circular Gradient Badge */}
                <a
                  href="https://www.instagram.com/sitemint.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow SiteMint on Instagram (@sitemint.in)"
                  className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-md shadow-pink-500/20 hover:scale-110 hover:shadow-lg transition-all duration-300 ring-2 ring-slate-100"
                >
                  <InstagramIcon className="w-4.5 h-4.5" />
                </a>

                {/* LinkedIn Circular Badge */}
                <a
                  href="https://www.linkedin.com/company/sitemint002sep02/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with SiteMint on LinkedIn"
                  className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center shadow-md shadow-sky-600/20 hover:scale-110 hover:shadow-lg transition-all duration-300 ring-2 ring-slate-100"
                >
                  <LinkedInIcon className="w-4.5 h-4.5" />
                </a>

                {/* Facebook Circular Badge */}
                <a
                  href="https://www.facebook.com/profile.php?id=61593961025592"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow SiteMint on Facebook"
                  className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-md shadow-blue-600/20 hover:scale-110 hover:shadow-lg transition-all duration-300 ring-2 ring-slate-100"
                >
                  <FacebookIcon className="w-4.5 h-4.5" />
                </a>

                {/* WhatsApp Circular Badge */}
                <a
                  href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with SiteMint on WhatsApp"
                  className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md shadow-emerald-500/20 hover:scale-110 hover:shadow-lg transition-all duration-300 ring-2 ring-slate-100"
                >
                  <MessageCircle className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: 5-Field Project Inquiry Form (Soft Clean UI/UX) */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center h-full">
            <div className="bg-white rounded-[28px] p-6 sm:p-8 shadow-lg border border-slate-200/90 text-slate-800 w-full relative overflow-hidden flex flex-col justify-between h-full">
              
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  Send a <span className="gradient-text-hero">Direct Project Inquiry</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 font-normal leading-relaxed">
                  Fill in the details below to receive a customized quotation and delivery schedule.
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-teal-500 rounded-full mt-2.5" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-center">
                
                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 pl-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200 text-slate-800 rounded-2xl text-xs sm:text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-500/15 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.04)] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 pl-1">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200 text-slate-800 rounded-2xl text-xs sm:text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-500/15 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.04)] transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Service Required & Expected Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 pl-1">
                      Service Required
                    </label>
                    <div className="relative">
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200 text-slate-800 rounded-2xl text-xs sm:text-sm font-medium focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-500/15 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.04)] transition-all appearance-none cursor-pointer pr-10"
                      >
                        <option value="Website Development (₹3,999)">Website Development (₹3,999)</option>
                        <option value="Bakery / Restaurant Software (₹5,999)">Bakery / Restaurant Software (₹5,999)</option>
                        <option value="School / Coaching Portal (₹7,999)">School / Coaching Portal (₹7,999)</option>
                        <option value="E-Commerce Online Store (₹8,999)">E-Commerce Online Store (₹8,999)</option>
                        <option value="Mobile App Development (Android & iOS)">Mobile App Development (Android & iOS)</option>
                        <option value="Video Editing & Instagram Reels">Video Editing & Instagram Reels</option>
                        <option value="Social Media Management">Social Media Management</option>
                        <option value="Custom Software / CRM">Custom Software / CRM</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 pl-1">
                      Expected Budget
                    </label>
                    <div className="relative">
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200 text-slate-800 rounded-2xl text-xs sm:text-sm font-medium focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-500/15 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.04)] transition-all appearance-none cursor-pointer pr-10"
                      >
                        <option value="Starter (₹3,999 - ₹5,999)">Starter (₹3,999 - ₹5,999)</option>
                        <option value="Standard (₹7,999 - ₹12,999)">Standard (₹7,999 - ₹12,999)</option>
                        <option value="Custom Enterprise (₹14,999+)">Custom Enterprise (₹14,999+)</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Row 3: Brief Description */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 pl-1">
                    Brief Description of Your Project
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your business, any reference website you like, or special features needed..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200 text-slate-800 rounded-2xl text-xs sm:text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-500/15 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.04)] transition-all min-h-[90px] resize-y"
                  />
                </div>

                {/* Submit Button (Eye-Soothing Gradient Button) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-teal-600 hover:from-violet-700 hover:to-teal-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-violet-500/20 hover:shadow-lg transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer border-none"
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>Send Inquiry to WhatsApp (Instant Response)</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center font-normal">
                  🔒 We respect your privacy. No spam guaranteed.
                </p>
              </form>

            </div>
          </div>

        </div>
      </div>

      <FaqSection />
    </div>
  );
}
