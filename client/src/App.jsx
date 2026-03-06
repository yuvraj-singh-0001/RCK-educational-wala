import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const isHot = count >= 5

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-cyan-50 to-sky-100 px-4 py-10 sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute -left-24 top-[-3rem] h-64 w-64 rounded-full bg-cyan-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-[-4rem] h-72 w-72 rounded-full bg-orange-300/40 blur-3xl" />

      <section className="relative mx-auto w-full max-w-5xl rounded-3xl border border-white/60 bg-white/80 p-5 shadow-2xl backdrop-blur md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            React + Vite
          </span>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-300">
            Tailwind Active
          </span>
        </div>

        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Tailwind is Working Perfectly
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Agar tumhe gradient background, rounded glass card, shadows, responsive grid aur hover animations
          dikh rahi hain, to Tailwind setup 100% sahi chal raha hai.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-slate-900 p-5 text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
            <p className="text-xs uppercase tracking-wider text-cyan-200">Live Counter</p>
            <p className="mt-2 text-3xl font-bold">{count}</p>
            <button
              onClick={() => setCount((value) => value + 1)}
              className="mt-4 rounded-xl bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-200"
            >
              Increase +1
            </button>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <p className="text-xs uppercase tracking-wider text-slate-500">Status</p>
            <p className="mt-2 text-lg font-bold text-slate-900">{isHot ? 'High Activity' : 'Normal Activity'}</p>
            <p className="mt-2 text-sm text-slate-600">Count 5 ke baad status automatically change ho raha hai.</p>
            <span
              className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                isHot ? 'bg-rose-100 text-rose-700 ring-1 ring-rose-300' : 'bg-blue-100 text-blue-700 ring-1 ring-blue-300'
              }`}
            >
              {isHot ? 'Hot Mode' : 'Cool Mode'}
            </span>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-orange-100 to-amber-200 p-5 shadow-md transition hover:rotate-1 hover:shadow-xl">
            <p className="text-xs uppercase tracking-wider text-amber-700">Visual Proof</p>
            <ul className="mt-3 space-y-2 text-sm font-medium text-amber-900">
              <li>Rounded corners</li>
              <li>Gradient surfaces</li>
              <li>Hover transforms</li>
              <li>Responsive spacing</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
