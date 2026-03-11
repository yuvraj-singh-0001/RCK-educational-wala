const steps = [
  'Choose a course',
  'Fill out the form or call us',
  'Pay the fee',
  'Join your batch',
]

const feeRows = [
  { course: 'State Exam Batch', fee: 'INR 8,500' },
  { course: 'Special Subjects Pro', fee: 'INR 6,500' },
  { course: 'School Maths Program', fee: 'INR 5,000' },
  { course: 'Teacher Eligibility Prep', fee: 'INR 7,000' },
  { course: 'BCA/MCA/BTC Track', fee: 'INR 9,000' },
]

function AdmissionPage() {
  return (
    <section className="page-wrap">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <div>
          <h1 className="page-title">Admission Page</h1>
          <p className="page-subtitle">Follow these simple steps to join your batch.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <article className="focus-card" key={item}>
              <p className="text-xs font-bold uppercase tracking-wide text-teal-700">Step {index + 1}</p>
              <p className="mt-2 text-base font-semibold text-slate-900">{item}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <form className="page-panel space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Admission Form</h2>
            <input className="form-input" placeholder="Name" type="text" />
            <input className="form-input" placeholder="Phone" type="tel" />
            <input className="form-input" placeholder="Class / Exam" type="text" />
            <select className="form-input" defaultValue="">
              <option disabled value="">
                Preferred Timing
              </option>
              <option>Morning Batch</option>
              <option>Evening Batch</option>
            </select>
            <button className="btn-primary w-full" type="button">
              Submit Admission Request
            </button>
          </form>

          <div className="page-panel">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Important Dates</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 sm:text-base">
              <li>Next Batch Start: 20 March 2026</li>
              <li>Early Registration Last Date: 15 March 2026</li>
              <li>Orientation Session: 18 March 2026</li>
            </ul>
          </div>
        </div>

        <div className="page-panel overflow-x-auto">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Fee Structure</h2>
          <table className="mt-4 w-full min-w-[460px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2">Course</th>
                <th className="py-2">Approx Fee</th>
              </tr>
            </thead>
            <tbody>
              {feeRows.map((row) => (
                <tr className="border-b border-slate-100" key={row.course}>
                  <td className="py-2 font-medium text-slate-800">{row.course}</td>
                  <td className="py-2 text-slate-700">{row.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default AdmissionPage
