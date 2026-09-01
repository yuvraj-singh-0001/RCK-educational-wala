'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowLeft, MessageCircle } from 'lucide-react';

const BakeryDemoApp = dynamic(() => import('../../../bakery-demo/src/App'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-[#06060c] text-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
        <span className="text-xs text-zinc-400 font-medium">Loading Live Bakery Demo...</span>
      </div>
    </div>
  ),
});

export default function BakeryDemoPage() {
  return (
    <div className="w-full min-h-screen bg-[#06060c]">
      {/* Top Demo Bar */}
      <div className="bg-[#0e0e1b] border-b border-white/10 px-4 py-2 flex items-center justify-between text-xs sticky top-0 z-50">
        <Link href="/" className="text-zinc-300 hover:text-white flex items-center gap-1.5 font-medium">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to SiteMint
        </Link>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-zinc-400">Like this bakery template?</span>
          <a
            href="https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20like%20the%20Bakery%20Demo%20and%20want%20to%20order%20it%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp !py-1 !px-3 !text-xs !rounded-md"
          >
            <MessageCircle className="w-3.5 h-3.5" /> Order Website (₹5,999)
          </a>
        </div>
      </div>

      <BakeryDemoApp />
    </div>
  );
}
