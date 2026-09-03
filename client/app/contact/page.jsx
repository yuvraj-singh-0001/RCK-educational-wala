'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Calculator,
  ArrowRight
} from 'lucide-react';
import FaqSection from '../../components/FaqSection';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'website',
    budget: 'starter',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // WhatsApp direct message payload
    const text = `*New Website Inquiry from SiteMint Contact Page*
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
    <div className="w-full pt-6 pb-12 sm:pt-10 sm:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Phone className="w-3.5 h-3.5 text-violet-600" /> Get in Touch
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">
            Let&apos;s Build Your Website & <span className="gradient-text-hero">Grow Your Business</span>
          </h1>
          <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto">
            100% free consultation with zero upfront risk. We respond within 15 minutes during business hours.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 mb-16 sm:mb-20">
          {/* Left: Contact Methods */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20get%20a%20website/app%20made."
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 sm:p-6 border border-emerald-200 bg-emerald-50/30 hover:bg-emerald-50/70 transition flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-700 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] text-emerald-800 font-bold uppercase tracking-wider">Instant Chat</div>
                  <div className="text-base font-bold text-slate-900">WhatsApp Support 24/7</div>
                  <div className="text-xs text-slate-500 font-medium">Click to chat with our team</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Direct Phone Call */}
            <a
              href="tel:+918920683588"
              className="glass-card p-5 sm:p-6 border border-slate-200 hover:border-violet-300 transition flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-violet-100 text-violet-700 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] text-violet-800 font-bold uppercase tracking-wider">Direct Call</div>
                  <div className="text-base font-bold text-slate-900">+91 89206 83588</div>
                  <div className="text-xs text-slate-500 font-medium">Mon - Sat: 9 AM - 9 PM IST</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Email Support */}
            <a
              href="mailto:contactsitemint@gmail.com"
              className="glass-card p-5 sm:p-6 border border-slate-200 hover:border-sky-300 transition flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-sky-100 text-sky-700 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] text-sky-800 font-bold uppercase tracking-wider">Official Email</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 truncate max-w-[200px] sm:max-w-none">contactsitemint@gmail.com</div>
                  <div className="text-xs text-slate-500 font-medium">Response within 2 hours</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Location Info */}
            <div className="glass-card p-5 border border-slate-200 bg-slate-50/50 flex items-start gap-3">
              <div className="p-2 rounded-xl bg-pink-100 text-pink-700 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Headquarters & Remote Delivery</div>
                <div className="text-xs text-slate-500 leading-relaxed mt-0.5">
                  Serving clients across India (Delhi NCR, Mumbai, Bangalore, Lucknow, Kanpur, Jaipur & Pan-India).
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 border border-slate-200 shadow-md bg-white">
              <h2 className="text-xl font-bold text-slate-900 mb-1">
                Send a Direct Project Inquiry
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Fill in the details below to receive a customized quotation and delivery schedule.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp / Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Service Required</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-white focus:outline-none focus:border-violet-500"
                    >
                      <option value="Low Budget Website (₹3,999)">Website Development (₹3,999)</option>
                      <option value="Bakery / Restaurant Software (₹5,999)">Bakery & Restaurant Software (₹5,999)</option>
                      <option value="School / Coaching Portal (₹7,999)">School & Coaching Portal (₹7,999)</option>
                      <option value="E-Commerce Store (₹8,999)">E-Commerce Online Store (₹8,999)</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Custom Software / CRM">Custom Software / CRM</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Expected Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-white focus:outline-none focus:border-violet-500"
                    >
                      <option value="Starter (₹3,999 - ₹5,999)">Starter (₹3,999 - ₹5,999)</option>
                      <option value="Standard (₹7,999 - ₹12,999)">Standard (₹7,999 - ₹12,999)</option>
                      <option value="Custom Enterprise (₹14,999+)">Custom Enterprise (₹14,999+)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Brief Description of Your Project</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your business, any reference website you like, or special features needed..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-violet-500"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-whatsapp w-full justify-center text-sm py-3 shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Inquiry to WhatsApp (Instant Response)</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center">
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
