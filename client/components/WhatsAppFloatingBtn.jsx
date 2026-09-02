'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppFloatingBtn() {
  const pathname = usePathname();
  const [showTooltip, setShowTooltip] = useState(true);

  // Check if current route is a standalone demo
  const isDemoRoute = pathname?.startsWith('/demos/bakery') || 
                      pathname?.startsWith('/demos/education') || 
                      pathname?.startsWith('/bakery-demo') || 
                      pathname?.startsWith('/education-demo') ||
                      pathname?.startsWith('/ecommerce-demo') ||
                      pathname?.startsWith('/recruitment-demo');

  if (isDemoRoute) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Interactive Tooltip Card in Light Theme */}
      {showTooltip && (
        <div className="bg-white border border-slate-200 text-slate-800 p-3 rounded-2xl shadow-xl shadow-slate-900/10 max-w-[min(260px,calc(100vw-32px))] text-xs animate-in fade-in slide-in-from-bottom-2 duration-300 relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-700 cursor-pointer"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1.5 text-emerald-700 font-bold text-[11px] mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            ONLINE NOW
          </div>
          <p className="text-slate-600 text-[11px] leading-snug">
            Need a website or app for your business? Chat with our team now!
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20visited%20your%20website%20and%20want%20to%20know%20more%20about%20your%20website%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-green-600 to-emerald-500 text-white shadow-xl shadow-green-700/30 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
        <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
}
