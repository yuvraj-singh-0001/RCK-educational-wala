import { Link } from 'react-router-dom'

const stats = [
  { label: 'Students', value: '500+' },
  { label: 'Batches', value: '10+' },
  { label: 'Exam Tracks', value: '5+' },
  { label: 'Satisfaction', value: '95%' },
]

const focusCards = [
  { icon: 'shield', title: 'Police / Daroga / GD', text: 'Targeted state exam strategy and mock-test plan.' },
  { icon: 'calculator', title: 'Mathematics + Reasoning', text: 'Concept clarity with daily practice rounds.' },
  { icon: 'school', title: 'School Maths 6-12', text: 'Foundation to board-level preparation.' },
  { icon: 'teacher', title: 'TET / CTET', text: 'Eligibility exam focused revision system.' },
  { icon: 'civic', title: 'Polity Track', text: 'Exam-oriented polity notes and PYQ drills.' },
  { icon: 'academic', title: 'BCA / MCA / BTC', text: 'Academic guidance and semester support.' },
]

const featuredCourses = [
  {
    title: 'State Exam Batch',
    text: 'Complete syllabus coverage for Police, Daroga, and GD with mock support.',
    image:
      'https://images.unsplash.com/photo-1523240798132-8757214e76bc?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Special Subjects Pro',
    text: 'Mathematics, Reasoning, and Polity with chapter-wise class flow.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'School Maths Program',
    text: 'Class 6-12 maths bridge model for strong basics.',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80',
  },
]

const testimonials = [
  {
    name: 'Aman Kumar',
    result: 'Police Written Qualified',
    quote: 'The daily test schedule and personal guidance improved my confidence significantly.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Pooja Singh',
    result: 'TET Cleared',
    quote: 'The reasoning and pedagogy sessions were very practical and focused.',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Ravi Patel',
    result: 'GD Final List',
    quote: 'The revision strategy and mentorship were extremely useful.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
  },
]

function HomePage() {
  return (
    <main className="home-stack">
      <section id="hero" className="section-anchor hero-wrap">
        <div className="ambient-shape ambient-shape-one" />
        <div className="ambient-shape ambient-shape-two" />

        <div className="hero-shell mx-auto grid w-full max-w-6xl gap-6 p-6 md:grid-cols-[1.08fr_0.92fr] md:p-10" data-reveal="up">
          <div className="hero-copy" data-reveal="left">
            <p className="eyebrow">RCK Educational Wala</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Government Job Preparation, the Right Way
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
              Learn under Ravi Kumar Chaudhari with exam-focused preparation, structured batches, and personal
              mentorship.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="btn-primary" to="/courses">
                View Courses
              </Link>
              <Link className="btn-ghost" to="/admission">
                Apply for Admission
              </Link>
            </div>
          </div>

          <aside className="hero-image-panel" data-reveal="right" style={{ '--reveal-delay': '120ms' }}>
            <img
              alt="Ravi Sir classroom guidance"
              className="hero-image"
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80"
            />
          </aside>
        </div>
      </section>

      <section className="section-anchor mx-auto mt-8 w-full max-w-6xl px-4 sm:px-6" data-reveal="up">
        <div className="stats-grid">
          {stats.map((item, index) => (
            <article
              className="stat-card"
              data-reveal="up"
              key={item.label}
              style={{ '--reveal-delay': `${index * 70}ms` }}
            >
              <p className="stat-value">{item.value}</p>
              <p className="stat-label">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-anchor page-wrap" id="focus">
        <div className="mx-auto w-full max-w-6xl" data-reveal="up">
          <h2 className="page-title">Focus Areas</h2>
          <p className="page-subtitle">Structured preparation with six high-impact tracks.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {focusCards.map((item, index) => (
              <article
                className="focus-card"
                data-reveal={index % 2 === 0 ? 'left' : 'right'}
                key={item.title}
                style={{ '--reveal-delay': `${index * 65}ms` }}
              >
                <span className="focus-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-anchor page-wrap" id="courses">
        <div className="mx-auto w-full max-w-6xl" data-reveal="up">
          <h2 className="page-title">Featured Courses</h2>
          <p className="page-subtitle">Top programs preview for quick selection.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {featuredCourses.map((course, index) => (
              <article
                className="course-card"
                data-reveal="up"
                key={course.title}
                style={{ '--reveal-delay': `${index * 90}ms` }}
              >
                <img alt={course.title} className="card-image" src={course.image} />
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{course.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{course.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link className="btn-primary" to="/courses">
              View More Courses
            </Link>
          </div>
        </div>
      </section>

      <section className="section-anchor page-wrap" id="testimonials">
        <div className="mx-auto w-full max-w-6xl" data-reveal="up">
          <h2 className="page-title">Testimonials</h2>
          <p className="page-subtitle">Student voices and verified result snapshots.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <article
                className="testimonial-card"
                data-reveal={index % 2 === 0 ? 'left' : 'right'}
                key={item.name}
                style={{ '--reveal-delay': `${index * 85}ms` }}
              >
                <img alt={item.name} className="testimonial-avatar" src={item.image} />
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.name}</h3>
                <p className="text-sm font-semibold text-teal-700">{item.result}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">"{item.quote}"</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-anchor page-wrap" id="contact">
        <div className="mx-auto w-full max-w-6xl cta-banner" data-reveal="up">
          <div>
            <p className="cta-kicker">Ready To Start?</p>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Apply for Admission Today</h2>
            <p className="mt-2 text-sm text-white/85 sm:text-base">Call now for counselling and seat enquiries.</p>
          </div>
          <div className="cta-actions">
            <a className="btn-light" href="tel:+917307056527">
              Call: 7307056527
            </a>
            <Link className="btn-outline-light" to="/admission">
              Admission Form
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
