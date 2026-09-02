'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const BakeryDemoApp = dynamic(() => import('../../../../bakery-demo/src/App'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-[#fdfdfd] text-slate-800 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-red-500 border-t-transparent animate-spin" />
        <span className="text-xs text-slate-600 font-medium">Loading Live Bakery Website...</span>
      </div>
    </div>
  ),
});

export default function DemosBakeryCatchAllPage() {
  return (
    <div className="w-full min-h-screen bg-[#fdfdfd] text-[#222222] relative">
      {/* Standalone Pure Bakery Website */}
      <BakeryDemoApp basename="/demos/bakery" />

      {/* Discreet Exit Demo Floating Pill */}
      <Link
        href="/demos"
        className="fixed bottom-4 left-4 z-50 px-3.5 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white text-xs font-bold shadow-2xl border border-white/20 backdrop-blur flex items-center gap-1.5 transition hover:scale-105"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Exit Demo</span>
      </Link>
    </div>
  );
}
