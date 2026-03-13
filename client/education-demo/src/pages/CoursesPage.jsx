import { useMemo, useState } from 'react'

const tabs = ['All', 'State Exams', 'School', 'Teacher Exams', 'Academic']

const courses = [
  {
    name: 'State Exam Batch',
    category: 'State Exams',
    icon: 'target',
    description: 'Complete syllabus coverage and test strategy for Police, Daroga, and GD exams.',
    duration: '5 Months',
    timing: 'Morning + Evening',
    fee: 'INR 8,500',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Special Subjects Pro',
    category: 'State Exams',
    icon: 'grid',
    description: 'A compact concept-to-practice module for Mathematics, Reasoning, and Polity.',
    duration: '3 Months',
    timing: 'Evening',
    fee: 'INR 6,500',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'School Maths Program (Class 6-12)',
    category: 'School',
    icon: 'school',
    description: 'Class-wise maths roadmap with board pattern and fundamentals.',
    duration: 'Ongoing',
    timing: 'After School Hours',
    fee: 'INR 5,000',
    image:
      'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Teacher Eligibility Prep (TET/CTET)',
    category: 'Teacher Exams',
    icon: 'teaching',
    description: 'Pedagogy + aptitude with revision drills and practice papers.',
    duration: '4 Months',
    timing: 'Weekend + Evening',
    fee: 'INR 7,000',
    image:
      'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'BCA/MCA/BTC Academic Track',
    category: 'Academic',
    icon: 'graduation',
    description: 'Academic support, semester prep, and exam-oriented subject mentoring.',
    duration: 'Semester Mode',
    timing: 'Flexible',
    fee: 'INR 9,000',
    image:
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=80',
  },
]

function CoursesPage() {
  const [activeTab, setActiveTab] = useState('All')

  const filteredCourses = useMemo(() => {
    if (activeTab === 'All') {
      return courses
    }
    return courses.filter((item) => item.category === activeTab)
  }, [activeTab])

  return (
    <section className="page-wrap courses-page">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="page-title">Our Courses</h1>
        <p className="page-subtitle">Complete course listing with category-wise filters.</p>

        <div className="courses-tabs mt-5 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              className={`filter-tab ${activeTab === tab ? 'filter-tab-active' : ''}`}
              key={tab}
              onClick={() => setActiveTab(tab)}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="course-grid mt-6 grid gap-5 md:grid-cols-2">
          {filteredCourses.map((course) => (
            <article className="course-card" key={course.name}>
              <img alt={course.name} className="card-image" src={course.image} />
              <div className="mt-3 flex items-center justify-between gap-3">
                <h2 className="course-name text-xl font-bold text-slate-900">{course.name}</h2>
                <span className="focus-icon">{course.icon}</span>
              </div>
              <p className="course-description mt-2 text-sm leading-relaxed text-slate-600">{course.description}</p>
              <div className="course-meta mt-3 grid gap-1 text-sm text-slate-700">
                <p>
                  <strong>Duration:</strong> {course.duration}
                </p>
                <p>
                  <strong>Batch Timing:</strong> {course.timing}
                </p>
                <p>
                  <strong>Fee:</strong> {course.fee}
                </p>
              </div>
              <button className="btn-primary courses-enquire-btn mt-4" type="button">
                Enquire Now
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoursesPage
