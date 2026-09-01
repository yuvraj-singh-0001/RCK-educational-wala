'use client';

import { useState } from 'react';
import { 
  Calculator, 
  Check, 
  MessageCircle, 
  Sparkles, 
  Store, 
  GraduationCap, 
  ShoppingBag, 
  Globe, 
  Cpu, 
  PhoneCall,
  Smartphone,
  Video,
  Share2,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function CostCalculator() {
  const projectTypes = [
    { 
      id: 'starter', 
      name: 'Starter Website (5 Pages)', 
      price: 3999, 
      desc: '5 custom pages, responsive UI, WhatsApp chat, contact form with email notifications & basic SEO.', 
      icon: Globe,
      badge: '₹3,999'
    },
    { 
      id: 'business', 
      name: 'Business Website & Management', 
      price: 7999, 
      desc: '10 dynamic pages, product/course management, user portal, Razorpay UPI gateway & admin dashboard.', 
      icon: ShoppingBag,
      badge: '₹7,999 (POPULAR)'
    },
    { 
      id: 'professional', 
      name: 'Professional Business System', 
      price: 15999, 
      desc: 'Complete solution: 1 Yr Domain & Hosting included, full user system, multi-entity admin & 1 Yr support.', 
      icon: Cpu,
      badge: '₹15,999 (ALL-IN-ONE)'
    },
    { 
      id: 'android_app', 
      name: 'Android Mobile App (.APK)', 
      price: 12999, 
      desc: 'Play Store ready Android app, Firebase push alerts, OTP login & cloud database backend.', 
      icon: Smartphone,
      badge: '₹12,999'
    },
    { 
      id: 'cross_app', 
      name: 'Cross-Platform App (Android + iOS)', 
      price: 24999, 
      desc: 'Flutter native build for Android & Apple iOS, 15 screens, live tracking & web admin dashboard.', 
      icon: Smartphone,
      badge: '₹24,999'
    },
    { 
      id: 'video_smm', 
      name: 'Video Editing & Social Media Suite', 
      price: 5999, 
      desc: 'Monthly retainer: 15 viral Reels, daily graphics, 7-8 platforms management & Meta ads setup.', 
      icon: Video,
      badge: '₹5,999/mo'
    },
  ];

  const pageOptions = [
    { id: 'small', label: '1–5 Pages', price: 0, desc: 'Included in Starter' },
    { id: 'medium', label: '6–10 Pages', price: 1500, desc: 'Included in Business' },
    { id: 'large', label: '11–20 Pages', price: 3000, desc: 'Large Multi-Category' },
    { id: 'unlimited', label: 'Unlimited / Dynamic Pages', price: 5500, desc: 'Included in Professional' },
  ];

  const addonOptions = [
    { id: 'payment', label: 'Razorpay UPI / Card Payment Gateway Setup', price: 1999, includedIn: ['business', 'professional', 'cross_app'] },
    { id: 'user_system', label: 'User Registration, Login & Customer Dashboard', price: 1999, includedIn: ['business', 'professional', 'cross_app'] },
    { id: 'domain_hosting', label: '1 Year High-Speed Cloud Hosting + Domain (.IN/.COM)', price: 1999, includedIn: ['professional'] },
    { id: 'whatsapp_api', label: 'WhatsApp Automated Order & Notification API Alerts', price: 999, includedIn: [] },
    { id: 'customizer', label: 'Custom Cake / Food Menu Ordering Engine', price: 1499, includedIn: [] },
    { id: 'seo_suite', label: 'Advanced Technical SEO & Google Search Console Setup', price: 1499, includedIn: ['business', 'professional'] },
    { id: 'maintenance_1yr', label: '1 Year Extended Technical Maintenance & Updates SLA', price: 2499, includedIn: ['professional'] },
    { id: 'meta_ads', label: 'Meta & Google Ads Campaign Funnel Setup', price: 1999, includedIn: [] },
  ];

  const [selectedType, setSelectedType] = useState('starter');
  const [selectedPages, setSelectedPages] = useState('small');
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Calculations
  const currentTypeObj = projectTypes.find((p) => p.id === selectedType) || projectTypes[0];
  const basePrice = currentTypeObj.price;

  // Page pricing (Free if already covered in tier)
  let pagesPrice = 0;
  if (selectedType === 'professional') {
    pagesPrice = 0; // Unlimited included
  } else if (selectedType === 'business' && (selectedPages === 'small' || selectedPages === 'medium')) {
    pagesPrice = 0; // Up to 10 pages included
  } else {
    pagesPrice = pageOptions.find((p) => p.id === selectedPages)?.price || 0;
  }

  // Add-ons pricing (Free if included in the selected package)
  const addonsPrice = selectedAddons.reduce((acc, addonId) => {
    const addon = addonOptions.find((a) => a.id === addonId);
    if (!addon) return acc;
    if (addon.includedIn && addon.includedIn.includes(selectedType)) {
      return acc; // Already included in base package
    }
    return acc + addon.price;
  }, 0);

  const totalPrice = basePrice + pagesPrice + addonsPrice;
  const currentPagesObj = pageOptions.find((p) => p.id === selectedPages);

  const selectedAddonDetails = selectedAddons.map((id) => {
    const addon = addonOptions.find((a) => a.id === id);
    if (!addon) return null;
    const isFree = addon.includedIn && addon.includedIn.includes(selectedType);
    return {
      label: addon.label,
      price: isFree ? 0 : addon.price,
      isFree,
    };
  }).filter(Boolean);

  const getWhatsAppMessage = () => {
    const text = `*New Website/App Quotation - SiteMint Estimator*
---------------------------------------
👤 *Client Name:* ${clientName || 'Not specified'}
📞 *Phone Number:* ${clientPhone || 'Not specified'}
🚀 *Package Selected:* ${currentTypeObj.name} (Base: ₹${basePrice.toLocaleString('en-IN')})
📄 *Pages Scope:* ${currentPagesObj?.label} ${pagesPrice === 0 ? '(Included)' : `(+₹${pagesPrice.toLocaleString('en-IN')})`}
✨ *Add-ons Selected:*
${selectedAddonDetails.length > 0 
  ? selectedAddonDetails.map((item) => `  • ${item.label} ${item.isFree ? '(Included Free)' : `(+₹${item.price.toLocaleString('en-IN')})`}`).join('\n')
  : '  • Standard Package Deliverables'}
---------------------------------------
💰 *Calculated Estimate:* ₹${totalPrice.toLocaleString('en-IN')} (Zero Hidden Charges)
---------------------------------------
Please share the project onboarding roadmap and start date.`;
    return encodeURIComponent(text);
  };

  return (
    <section id="calculator" className="pt-6 pb-12 sm:pt-10 sm:pb-16 md:pt-12 md:pb-20 relative bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 shadow-2xs">
            <Calculator className="w-3.5 h-3.5 text-teal-600" /> Instant Cost Estimator
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-2 sm:mb-4">
            Calculate Your <span className="gradient-text-purple">Website / App Cost</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base">
            No hidden charges. Select your business requirements below to see an instant transparent price breakdown.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Options Configurator */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            {/* Step 1: Select Type */}
            <div className="glass-card p-4 sm:p-7 bg-white border border-slate-200 shadow-sm rounded-2xl">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-violet-100 text-violet-700 text-[10px] sm:text-xs flex items-center justify-center font-bold">1</span>
                  Select Project Package
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {projectTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type.id)}
                      className={`p-3 sm:p-3.5 rounded-2xl border text-left transition-all relative flex flex-col justify-between cursor-pointer active:scale-[0.99] min-h-[95px] ${
                        isSelected
                          ? 'bg-violet-50/90 border-violet-500 shadow-sm ring-1 ring-violet-500'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-2.5 right-2.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-violet-600 text-white flex items-center justify-center shadow-xs">
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        </div>
                      )}
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className={`p-1 sm:p-1.5 rounded-lg shrink-0 ${isSelected ? 'bg-violet-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-slate-900">{type.name}</span>
                        </div>
                        <p className="text-[10px] sm:text-[11px] text-slate-500 leading-snug mb-1.5">{type.desc}</p>
                      </div>
                      <div className="text-xs font-bold text-violet-700 mt-1">
                        Starting ₹{type.price.toLocaleString('en-IN')}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Pages */}
            <div className="glass-card p-4 sm:p-7 bg-white border border-slate-200 shadow-sm rounded-2xl">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 mb-3 sm:mb-4">
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-violet-100 text-violet-700 text-[10px] sm:text-xs flex items-center justify-center font-bold">2</span>
                Choose Page Scope
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                {pageOptions.map((opt) => {
                  const isSelected = selectedPages === opt.id;
                  let isIncluded = false;
                  if (selectedType === 'professional') isIncluded = true;
                  if (selectedType === 'business' && (opt.id === 'small' || opt.id === 'medium')) isIncluded = true;
                  if (opt.id === 'small') isIncluded = true;

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedPages(opt.id)}
                      className={`p-2.5 sm:p-3.5 rounded-2xl border text-center transition-all cursor-pointer active:scale-[0.99] ${
                        isSelected
                          ? 'bg-violet-50/90 border-violet-500 shadow-xs ring-1 ring-violet-500'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-xs font-bold text-slate-900 mb-0.5 sm:mb-1">{opt.label}</div>
                      <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">
                        {isIncluded ? (
                          <span className="text-emerald-700 font-bold">Included</span>
                        ) : (
                          `+₹${opt.price.toLocaleString('en-IN')}`
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Add-on Features */}
            <div className="glass-card p-4 sm:p-7 bg-white border border-slate-200 shadow-sm rounded-2xl">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 mb-3 sm:mb-4">
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-violet-100 text-violet-700 text-[10px] sm:text-xs flex items-center justify-center font-bold">3</span>
                Select Additional Features & Add-ons
              </h3>

              <div className="space-y-2 sm:space-y-2.5">
                {addonOptions.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  const isIncludedInPlan = addon.includedIn && addon.includedIn.includes(selectedType);

                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleAddon(addon.id); }}
                      role="button"
                      tabIndex={0}
                      className={`flex items-center justify-between p-2.5 sm:p-3.5 rounded-2xl border cursor-pointer transition-all select-none active:scale-[0.99] min-h-[44px] ${
                        isChecked || isIncludedInPlan
                          ? 'bg-violet-50/80 border-violet-400 text-slate-900 shadow-2xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-md border flex items-center justify-center transition-colors shrink-0 ${
                          isChecked || isIncludedInPlan ? 'bg-violet-600 border-violet-600 text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {(isChecked || isIncludedInPlan) && <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                        </div>
                        <span className="text-[11px] sm:text-xs font-semibold leading-snug">{addon.label}</span>
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold shrink-0 ml-2">
                        {isIncludedInPlan ? (
                          <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            Included in {currentTypeObj.name.split(' ')[0]}
                          </span>
                        ) : (
                          <span className="text-violet-700">+₹{addon.price.toLocaleString('en-IN')}</span>
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-time Summary Card (High-Contrast Slate Panel) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="p-5 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl shadow-slate-900/20 border border-slate-800">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 sm:pb-4 mb-4 sm:mb-5">
                <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-slate-400">Total Estimation</span>
                <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Zero Hidden Charges
                </span>
              </div>

              {/* Price Display */}
              <div className="mb-5 sm:mb-6">
                <div className="text-xs text-slate-400 font-medium">Estimated Project Cost:</div>
                <div className="text-3xl sm:text-5xl font-extrabold text-white mt-1 flex items-baseline gap-1">
                  ₹{totalPrice.toLocaleString('en-IN')}
                  <span className="text-[10px] sm:text-xs text-slate-400 font-normal">(all included)</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 mt-1 sm:mt-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Estimated Delivery: <strong className="text-slate-200">7 to 14 Days</strong></span>
                </div>
              </div>

              {/* Breakdown List */}
              <div className="space-y-1.5 sm:space-y-2 text-xs text-slate-300 border-t border-b border-slate-800 py-3 sm:py-4 mb-5 sm:mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-400">Selected Package:</span>
                  <span className="font-semibold text-white truncate max-w-[160px]">{currentTypeObj.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Page Count:</span>
                  <span className="font-semibold text-white">{currentPagesObj?.label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Add-ons Selected:</span>
                  <span className="font-semibold text-teal-400">{selectedAddons.length} Custom Features</span>
                </div>
              </div>

              {/* Optional Quick Name & Phone */}
              <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                <input
                  type="text"
                  placeholder="Your Name (Optional)"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3.5 py-2 sm:py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-400"
                />
                <input
                  type="tel"
                  placeholder="Your WhatsApp Number (Optional)"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full px-3.5 py-2 sm:py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-400"
                />
              </div>

              {/* Action Buttons - Full width */}
              <div className="space-y-2.5 sm:space-y-3">
                <a
                  href={`https://wa.me/918601300910?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center text-xs sm:text-sm py-3 shadow-lg shadow-green-950/40"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Estimate to WhatsApp</span>
                </a>

                <a
                  href="tel:+918601300910"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-violet-400" />
                  <span>Discuss Requirements on Call</span>
                </a>
              </div>

              <div className="mt-3.5 sm:mt-4 text-[10px] sm:text-[11px] text-slate-400 text-center">
                <span>🔒 100% Free Consultation · Zero Advance Needed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
