const courses = [
  {
    title: 'State Exam Batch',
    detail: 'Police, Daroga, GD ke liye full preparation plan with test support.',
  },
  {
    title: 'Special Subjects Pro',
    detail: 'Ganit, Reasoning, aur Polity par concept + practice based classes.',
  },
  {
    title: 'School Maths Program',
    detail: 'Class 6 to 12 ke students ke liye maths foundation to advanced track.',
  },
  {
    title: 'Teacher Eligibility Prep',
    detail: 'TET aur CTET targeted preparation strategy and revision schedule.',
  },
]

function CoursesPage() {
  return (
    <section className="page-wrap">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="page-title">Courses</h1>
        <p className="page-subtitle">Public learners ke liye available training tracks.</p>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {courses.map((course) => (
            <article className="course-card" key={course.title}>
              <h2 className="text-xl font-semibold text-slate-900">{course.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{course.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoursesPage
