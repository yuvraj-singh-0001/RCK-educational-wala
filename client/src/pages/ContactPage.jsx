function ContactPage() {
  return (
    <section className="page-wrap">
      <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2">
        <div className="page-panel">
          <h1 className="page-title">Contact</h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Admission, batch timing, ya guidance ke liye direct connect karein.
          </p>
          <div className="mt-5 space-y-2 text-sm text-slate-700 sm:text-base">
            <p><strong>Phone:</strong> 7307056527</p>
            <p><strong>Email:</strong> rckeducationalwala@gmail.com</p>
            <p><strong>Coaching:</strong> RCK Educational Wala</p>
          </div>
        </div>

        <div className="page-panel">
          <h2 className="text-2xl font-semibold text-slate-900">Exam Segments</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700 sm:text-base">
            <li>State Exams: Police, Daroga, GD</li>
            <li>Special: Ganit, Reasoning, Polity</li>
            <li>Academic: BCA, MCA, BTC</li>
            <li>Teacher Exams: TET, CTET</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
