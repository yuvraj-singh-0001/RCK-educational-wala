import { Link } from 'react-router-dom'

const successStories = [
  {
    name: 'Saurabh Yadav',
    exam: 'UP Police',
    rank: 'Rank 128',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Neha Verma',
    exam: 'CTET',
    rank: 'Score 126/150',
    image:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Arjun Mishra',
    exam: 'Daroga',
    rank: 'Final Merit',
    image:
      'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=700&q=80',
  },
]

const screenshotCards = [
  'Written Exam Result Snapshot',
  'Merit List Verification',
  'Student Selection Notice',
]

function ResultsPage() {
  return (
    <section className="page-wrap">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="page-title">Results & Success Stories</h1>
        <p className="page-subtitle">Real student outcomes and proof sections to build trust.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {successStories.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <img alt={item.name} className="card-image" src={item.image} />
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.name}</h3>
              <p className="text-sm text-slate-600">{item.exam}</p>
              <p className="mt-1 text-sm font-semibold text-teal-700">{item.rank}</p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Result Screenshots</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {screenshotCards.map((item) => (
              <div className="result-shot" key={item}>
                <p className="text-sm font-semibold text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-sm md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Video Testimonials (Optional)</h3>
            <p className="mt-2 text-sm text-slate-600">You can add short video testimonials from selected students here in the future.</p>
          </div>
          <div className="flex items-center justify-start md:justify-end">
            <Link className="btn-primary" to="/admission">
              You Can Succeed Too
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResultsPage
