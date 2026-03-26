import { useState } from 'react'
import { Link } from 'react-router-dom'

const portfolioProjects = [
  {
    id: 'bakery-demo',
    title: 'Bakery E-Commerce',
    description: 'Complete online cake ordering system with custom designs, delivery tracking, cart functionality, and payment integration. Professional bakery website demo.',
    image: '/bakery-demo/images/bakery-hero.jpg',
    tags: ['E-Commerce', 'React', 'Tailwind CSS', 'Payment Gateway', 'Cart System'],
    demoUrl: '/',
    githubUrl: '#',
    featured: true,
    category: 'e-commerce'
  },
  {
    id: 'education-demo',
    title: 'Educational Platform',
    description: 'Student management system with course enrollment, progress tracking, online assessments, and interactive learning modules. Complete education website.',
    image: '/education-demo/images/education-hero.jpg',
    tags: ['Education', 'React', 'Node.js', 'Database', 'Student Portal'],
    demoUrl: '/education-demo',
    githubUrl: '#',
    featured: true,
    category: 'education'
  },
  {
    id: 'ecommerce-demo',
    title: 'Shopping Platform',
    description: 'Multi-vendor e-commerce platform with product catalog, shopping cart, order management, and secure payment processing. Professional online store.',
    image: '/ecommerce-demo/images/ecommerce-hero.jpg',
    tags: ['E-Commerce', 'Multi-Vendor', 'React', 'Stripe', 'Product Catalog'],
    demoUrl: '/ecommerce-demo',
    githubUrl: '#',
    featured: true,
    category: 'e-commerce'
  },
  {
    id: 'recruitment-demo',
    title: 'Job Portal',
    description: 'Recruitment platform with job postings, applicant tracking, company profiles, and resume management. Complete HR solution.',
    image: '/recruitment-demo/images/recruitment-hero.jpg',
    tags: ['Recruitment', 'Job Portal', 'React', 'MongoDB', 'HR System'],
    demoUrl: '/recruitment-demo',
    githubUrl: '#',
    featured: false,
    category: 'business'
  }
]

const PortfolioShowcase = () => {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProjects = portfolioProjects.filter(project => {
    const matchesFilter = filter === 'all' || filter === project.category || (filter === 'featured' && project.featured)
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white" id="portfolio">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Demo Websites by <span className="text-red-600">Yuvraj Singh</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore my portfolio of professional website demos. Each project showcases different 
            aspects of web development expertise - from e-commerce to educational platforms.
          </p>
          
          {/* Search Bar - Google Style */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search demos: e-commerce, education, bakery..."
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'all' 
                  ? 'bg-red-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'featured' 
                  ? 'bg-red-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              ⭐ Featured
            </button>
            <button
              onClick={() => setFilter('e-commerce')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'e-commerce' 
                  ? 'bg-red-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              🛒 E-Commerce
            </button>
            <button
              onClick={() => setFilter('education')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'education' 
                  ? 'bg-red-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              🎓 Education
            </button>
          </div>
        </div>

        {/* Search Results Count */}
        <div className="mb-6 text-gray-600">
          {searchTerm && (
            <p>Found {filteredProjects.length} results for "{searchTerm}"</p>
          )}
        </div>

        {/* Projects Grid - Google Search Results Style */}
        <div className="space-y-6 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Project Image */}
                <div className="md:w-64 h-48 md:h-auto bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center relative">
                  <div className="text-6xl">
                    {project.category === 'e-commerce' && '🛒'}
                    {project.category === 'education' && '🎓'}
                    {project.category === 'business' && '💼'}
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="flex-1 p-6">
                  {/* Title and URL */}
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-blue-800 hover:text-blue-600 cursor-pointer mb-1">
                      {project.title}
                    </h3>
                    <div className="text-green-700 text-sm mb-2">
                      🌐 sidemint.in{project.demoUrl}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      to={project.demoUrl}
                      className="inline-flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
                    >
                      🚀 View Live Demo
                    </Link>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                      💻 View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No demos found</h3>
            <p className="text-gray-600">Try searching for "e-commerce", "education", or "bakery"</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Want a Website Like This?</h2>
          <p className="text-xl mb-6 opacity-90">
            Get your own professional website at affordable rates!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918601300910"
              className="px-8 py-3 bg-white text-red-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              📞 Call Now: +91 86013 00910
            </a>
            <a
              href="mailto:singhyuvraj8420@gmail.com"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-red-600 transition-colors"
            >
              ✉️ Email: singhyuvraj8420@gmail.com
            </a>
          </div>
        </div>

        {/* SEO Content - Hidden */}
        <div className="sr-only">
          <h1>Demo Websites Portfolio - Yuvraj Singh</h1>
          <h2>Complete Website Development Projects</h2>
          <p>
            Explore complete demo websites by Yuvraj Singh including bakery e-commerce, educational platforms, 
            job portals, and shopping websites. Each demo showcases professional web development skills 
            with React, Node.js, and modern technologies.
          </p>
          <div>
            <h3>Available Demo Websites:</h3>
            <ul>
              <li>Bakery E-Commerce Demo - Complete online cake ordering system</li>
              <li>Education Platform Demo - Student management and course system</li>
              <li>E-Commerce Shopping Demo - Multi-vendor online marketplace</li>
              <li>Recruitment Portal Demo - Job posting and applicant tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioShowcase
