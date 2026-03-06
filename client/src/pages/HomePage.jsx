import { Link } from 'react-router-dom'
import ContactPage from './ContactPage'
import CoursesPage from './CoursesPage'

const focusAreas = [
  'State Exams: Police, Daroga, GD',
  'Special Subjects: Ganit, Reasoning, Polity',
  'School Segment: Class 6 to 12 (Maths)',
  'Core Subjects: Hindi, Bhugol, Itihas',
  'Exam Support: NMMS, TET, CTET',
  'Academic Track: BCA / MCA, BTC',
]

function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-canvas">
      <div className="ambient-shape ambient-shape-one" />
      <div className="ambient-shape ambient-shape-two" />
      <div className="ambient-shape ambient-shape-three" />

      <section id="hero" className="section-anchor mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-10">
        <div className="hero-shell grid w-full gap-6 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-10">
        <div className="hero-copy reveal-up">
          <p className="eyebrow">RCK Educational Wala</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Ravi Kumar Chaudhari
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
            State exam preparation, school level maths coaching, aur career-focused guidance ke saath structured
            learning support.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="info-chip">
              <span className="info-label">DOB</span>
              <span className="info-value">04-05-1993</span>
            </div>
            <div className="info-chip">
              <span className="info-label">Mobile</span>
              <span className="info-value">7307056527</span>
            </div>
            <div className="info-chip sm:col-span-2">
              <span className="info-label">Email</span>
              <span className="info-value break-all">rckeducationalwala@gmail.com</span>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link className="btn-primary" to="/#courses">
              Courses Dekhein
            </Link>
            <Link className="btn-ghost" to="/#contact">
              Contact Karein
            </Link>
          </div>
        </div>

        <aside className="profile-card reveal-up-delay">
          <h2 className="text-xl font-semibold text-slate-900">Focus Areas</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base">
            {focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
        </div>
      </section>

      <section id="courses" className="section-anchor">
        <CoursesPage />
      </section>

      <section id="contact" className="section-anchor pb-10">
        <ContactPage />
      </section>
    </main>
  )
}

export default HomePage
