const highlights = [
  'Expert Faculty',
  'Structured Batches',
  'Result-Oriented System',
  'Personal Guidance',
]

const timeline = [
  { year: '2019', text: 'RCK Educational Wala started with small and focused batches.' },
  { year: '2021', text: 'State exam + school maths integrated classroom model launch.' },
  { year: '2023', text: '500+ learners guided with multi-track exam preparation.' },
  { year: '2026', text: 'Admission system, online support and dedicated student mentoring.' },
]

function AboutPage() {
  return (
    <section className="page-wrap">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-lg md:grid-cols-[0.95fr_1.05fr] md:p-8">
          <img
            alt="Ravi Kumar Chaudhari"
            className="about-photo"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=1200&q=80"
          />

          <div>
            <p className="eyebrow">About Ravi Sir</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">Ravi Kumar Chaudhari</h1>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">DOB: 04-05-1993 | Qualification: BCA / MCA | Teaching Domain: Maths, Reasoning, Polity</p>
            <p className="mt-3 text-sm text-slate-700 sm:text-base">
              7+ years of classroom guidance experience with a core focus on exam mindset, conceptual clarity, and
              disciplined practice.
            </p>
            <div className="mt-4 rounded-xl border border-teal-100 bg-teal-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-teal-700">My Mission</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
                To provide every student with the right plan, the right mentorship, and the confidence to complete
                their exam journey in a structured way.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="page-title">Why Choose Us</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <article className="focus-card" key={item}>
                <p className="text-lg font-semibold text-slate-900">{item}</p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="page-title">Our Journey</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {timeline.map((item) => (
              <article className="course-card" key={item.year}>
                <p className="text-sm font-bold uppercase tracking-wider text-teal-700">{item.year}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
