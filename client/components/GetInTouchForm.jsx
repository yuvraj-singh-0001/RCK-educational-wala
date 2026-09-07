'use client';

import { useState } from 'react';
import { CheckCircle2, ChevronDown } from 'lucide-react';

export default function GetInTouchForm({ className = "" }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'This field is required.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);

    const text = `*New Inquiry from SiteMint Get In Touch Form*
---------------------------------------
👤 *Name:* ${formData.name}
✉️ *Email:* ${formData.email || 'N/A'}
📞 *Phone:* ${formData.phone || 'N/A'}
🎯 *Purpose:* ${formData.inquiryType || 'General Inquiry'}
📝 *Message:* ${formData.message || 'No additional message'}
---------------------------------------
Please get back to me with project details.`;

    window.open(`https://wa.me/918920683588?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className={`bg-white rounded-[32px] p-6 sm:p-8 shadow-xl border border-slate-200/90 text-slate-900 w-full max-w-lg mx-auto relative overflow-hidden flex flex-col justify-between h-full ${className}`}>
      
      {/* Title & Accent Underline with Website Brand Gradient */}
      <div className="text-center mb-6">
        <h3 className="text-2xl sm:text-3xl font-black tracking-tight font-sans gradient-text-hero">
          Get In Touch
        </h3>
        <div className="w-12 h-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-teal-500 rounded-full mx-auto mt-2.5" />
      </div>

      {submitted ? (
        <div className="py-8 text-center space-y-4 my-auto">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-black text-slate-900">Thank You!</h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium max-w-xs mx-auto">
            Your inquiry has been formatted and redirected to WhatsApp for instant 15-minute response.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-extrabold transition cursor-pointer border-none shadow-xs"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-center">
          {/* Name Field */}
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name *"
              className={`w-full px-5 py-3 sm:py-3.5 bg-slate-50/90 border ${
                errors.name ? 'border-red-500 ring-1 ring-red-400' : 'border-slate-200/90'
              } text-slate-900 rounded-full text-xs sm:text-sm font-semibold placeholder:text-violet-600/70 focus:outline-none focus:border-violet-600 focus:bg-white focus:ring-2 focus:ring-violet-500/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] transition-all`}
            />
            {errors.name && (
              <span className="text-[11px] text-red-500 font-semibold pl-4 pt-1 block">
                {errors.name}
              </span>
            )}
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-5 py-3 sm:py-3.5 bg-slate-50/90 border border-slate-200/90 text-slate-900 rounded-full text-xs sm:text-sm font-semibold placeholder:text-violet-600/70 focus:outline-none focus:border-violet-600 focus:bg-white focus:ring-2 focus:ring-violet-500/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] transition-all"
            />
          </div>

          {/* Phone Field */}
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone / WhatsApp Number"
              className="w-full px-5 py-3 sm:py-3.5 bg-slate-50/90 border border-slate-200/90 text-slate-900 rounded-full text-xs sm:text-sm font-semibold placeholder:text-violet-600/70 focus:outline-none focus:border-violet-600 focus:bg-white focus:ring-2 focus:ring-violet-500/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] transition-all"
            />
          </div>

          {/* Inquiry Dropdown Field */}
          <div className="relative">
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full px-5 py-3 sm:py-3.5 bg-slate-50/90 border border-slate-200/90 text-slate-900 rounded-full text-xs sm:text-sm font-semibold focus:outline-none focus:border-violet-600 focus:bg-white focus:ring-2 focus:ring-violet-500/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] transition-all appearance-none cursor-pointer pr-10 text-slate-700"
            >
              <option value="" disabled className="text-slate-400">
                What are you contacting us for? (Select Purpose)
              </option>
              <option value="New Web Development Project">Web Development Project</option>
              <option value="Mobile App Development">Mobile App Development (Android/iOS)</option>
              <option value="Video Editing & Reels">Video Editing & Instagram Reels</option>
              <option value="Social Media Management">Social Media Management</option>
              <option value="Custom Project Scope & Quote">Price Quote / Project Scope</option>
              <option value="General Inquiry / Other">General Inquiry / Other</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Message Field */}
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Tell us about your project requirements..."
              className="w-full px-5 py-3.5 bg-slate-50/90 border border-slate-200/90 text-slate-900 rounded-3xl text-xs sm:text-sm font-semibold placeholder:text-violet-600/70 focus:outline-none focus:border-violet-600 focus:bg-white focus:ring-2 focus:ring-violet-500/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] transition-all min-h-[90px] resize-y"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2 text-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-teal-500 hover:from-violet-700 hover:to-teal-600 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-indigo-500/25 hover:shadow-lg transition-all transform hover:scale-[1.02] mx-auto flex items-center justify-center cursor-pointer border-none"
            >
              Submit Inquiry
            </button>
          </div>
        </form>
      )}

    </div>
  );
}
