const studentCourses = [
  'Daily Maths Drill (Class 6-12)',
  'Reasoning Weekly Challenge',
  'Polity Quick Revision',
  'TET-CTET Practice Set',
]

function StudentCoursesPage() {
  return (
    <section className="page-wrap">
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-10 xl:px-14 page-panel">
        <h1 className="page-title">Student Courses</h1>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {studentCourses.map((course) => (
            <li className="course-card" key={course}>
              {course}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default StudentCoursesPage
