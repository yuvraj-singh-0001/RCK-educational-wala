function ContactPage() {
  return (
    <section className="page-wrap">
      <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2">
        <div className="page-panel">
          <h1 className="page-title">Contact</h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Phone, email, map location, and batch timings are available here.
          </p>

          <div className="mt-5 space-y-3 text-sm text-slate-700 sm:text-base">
            <p>
              <strong>Phone:</strong>{' '}
              <a className="text-teal-700 underline" href="tel:+917307056527">
                +91 7307056527
              </a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a className="text-teal-700 underline" href="mailto:rckeducationalwala@gmail.com">
                rckeducationalwala@gmail.com
              </a>
            </p>
            <p>
              <strong>Address:</strong> RCK Educational Wala, Main Road, Uttar Pradesh
            </p>
            <p>
              <strong>Timing:</strong> Morning 7:00 AM - 10:00 AM | Evening 4:00 PM - 8:00 PM
            </p>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
            <iframe
              allowFullScreen
              height="250"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Lucknow&output=embed"
              title="Coaching Location"
              width="100%"
            />
          </div>
        </div>

        <div className="space-y-5">
          <form className="page-panel space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Enquiry Form</h2>
            <input className="form-input" placeholder="Name" type="text" />
            <input className="form-input" placeholder="Phone" type="tel" />
            <input className="form-input" placeholder="Email" type="email" />
            <select className="form-input" defaultValue="">
              <option disabled value="">
                Course Interest
              </option>
              <option>State Exam Batch</option>
              <option>School Maths Program</option>
              <option>TET/CTET Prep</option>
              <option>Academic Track</option>
            </select>
            <textarea className="form-input" placeholder="Message" rows={4} />
            <button className="btn-primary w-full" type="button">
              Submit Enquiry
            </button>
          </form>

          <article className="page-panel">
            <h3 className="text-xl font-bold text-slate-900">Coaching Building</h3>
            <img
              alt="Coaching Building Entrance"
              className="card-image mt-3"
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80"
            />
          </article>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
