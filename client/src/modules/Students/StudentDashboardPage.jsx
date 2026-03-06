import { Link } from 'react-router-dom'

function StudentDashboardPage() {
  return (
    <section className="page-wrap">
      <div className="mx-auto w-full max-w-5xl page-panel">
        <h1 className="page-title">Student Dashboard</h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          Ye area students ke liye hai. Yahan se batch progress, subject roadmap aur practice plan dikhaya ja sakta hai.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="btn-primary" to="/student/courses">
            Student Courses
          </Link>
          <Link className="btn-ghost" to="/">
            Public Home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default StudentDashboardPage
