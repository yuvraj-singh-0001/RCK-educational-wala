import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import BakeryDemoApp from '../bakery-demo/src/App'
import EducationDemoApp from '../education-demo/src/App'

const demoOptions = [
  { key: 'education', label: 'Education Demo', slug: 'education-demo', status: 'live' },
  { key: 'ecommerce', label: 'E-commerce Demo', slug: 'ecommerce-demo', status: 'coming-soon' },
  { key: 'recruitment', label: 'Recruitment Demo', slug: 'recruitment-demo', status: 'coming-soon' },
  { key: 'bakery', label: 'Bakery Demo', slug: 'bakery-demo', status: 'live' }
]

// Scroll Animation Hook
const useScrollAnimation = () => {
  const [visibleElements, setVisibleElements] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return visibleElements
}

function getPathname() {
  if (typeof window === 'undefined') {
    return '/'
  }
  return window.location.pathname || '/'
}

function normalizePath(pathname) {
  if (!pathname) {
    return '/'
  }
  const withoutTrailingSlash = pathname.replace(/\/+$/, '')
  return withoutTrailingSlash || '/'
}

function getSelectedOptionFromPath(pathname) {
  const normalized = normalizePath(pathname)

  if (normalized === '/') {
    return null
  }

  const segments = normalized.split('/').filter(Boolean)
  const topSegment = segments[0] || ''

  return demoOptions.find((option) => option.slug === topSegment) || null
}

function navigateTo(pathname) {
  const normalized = normalizePath(pathname)
  if (window.location.pathname === normalized) {
    return
  }
  window.history.pushState({}, '', normalized)
  window.dispatchEvent(new Event('popstate'))
}

function DemoLanding({ onSelect }) {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Rajesh Malhotra',
      business: 'Malhotra Bakery',
      rating: 4,
      review: 'Excellent e-commerce solution! Our online orders increased by 300% after launching the website.',
      project: 'Bakery E-Commerce',
      avatar: 'R',
      status: 'approved'
    },
    {
      id: 2,
      name: 'Sunita Reddy',
      business: 'Bright Future Academy',
      rating: 5,
      review: 'Perfect education platform! Our students love the online learning system.',
      project: 'Education Portal',
      avatar: 'S',
      status: 'approved'
    },
    {
      id: 3,
      name: 'Amit Patel',
      business: 'TechStore India',
      rating: 3,
      review: 'Great team work! They delivered our project on time with amazing features.',
      project: 'E-Commerce Platform',
      avatar: 'A',
      status: 'approved'
    }
  ])

  const [showReviewForm, setShowReviewForm] = useState(false)
  const [newReview, setNewReview] = useState({
    name: '',
    business: '',
    review: '',
    rating: 5
  })

  const visibleElements = useScrollAnimation()

  // Load reviews from localStorage on mount
  useEffect(() => {
    const savedReviews = localStorage.getItem('rck-client-reviews')
    if (savedReviews) {
      try {
        const parsedReviews = JSON.parse(savedReviews)
        setReviews(parsedReviews)
      } catch (e) {
        console.error('Error loading reviews:', e)
      }
    }
  }, [])

  // Save reviews to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('rck-client-reviews', JSON.stringify(reviews))
  }, [reviews])

  const handleAddReview = () => {
    if (!newReview.name.trim() || !newReview.business.trim() || !newReview.review.trim()) {
      alert('Please fill all fields!')
      return
    }

    const reviewData = {
      id: Date.now(),
      name: newReview.name,
      business: newReview.business,
      rating: newReview.rating,
      review: newReview.review,
      project: 'Client Project',
      avatar: newReview.name.charAt(0).toUpperCase(),
      status: 'approved'
    }
    
    setReviews([...reviews, reviewData])
    setNewReview({ name: '', business: '', review: '', rating: 5 })
    setShowReviewForm(false)
    alert('Thank you for your review! 🎉')
  }

  const handleRemoveReview = (id) => {
    if (confirm('Are you sure you want to remove this review?')) {
      setReviews(reviews.filter(review => review.id !== id))
      alert('Review removed successfully!')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-teal-50">
      {/* Animated Background Elements - Much Lighter */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className={`text-center mb-8 scroll-animate ${
          visibleElements.has('header') 
            ? 'opacity-100 translate-y-0 transition-all duration-700 ease-out' 
            : 'opacity-0 translate-y-8'
        }`} id="header">
          <h1 className="text-4xl font-bold text-gray-800 mb-3 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-teal-500">
              YS Demo Switcher
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-2">Choose Website Type</p>
          <p className="text-gray-500 max-w-2xl mx-auto">Click on any demo to preview the website and decide what you want to order.</p>
        </div>

        {/* Demo Options */}
        <div className="space-y-3 mb-12">
          {demoOptions.map((option, index) => (
            <div
              key={option.key}
              className={`group relative scroll-animate ${
                visibleElements.has(`demo-${option.key}`) 
                  ? 'opacity-100 translate-x-0 transition-all duration-700 ease-out' 
                  : 'opacity-0 -translate-x-12'
              }`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                transitionDelay: `${index * 150}ms`
              }}
              id={`demo-${option.key}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-teal-100 rounded-xl blur opacity-15 group-hover:opacity-30 transition duration-300"></div>
              <button
                className={`relative w-full flex justify-between items-center p-4 rounded-xl border font-semibold text-left transition-all duration-300 ${
                  option.status === 'live' 
                    ? 'bg-gradient-to-r from-red-400 to-red-500 border-red-200 text-white shadow-md shadow-red-200/25' 
                    : 'bg-gradient-to-r from-amber-300 to-orange-300 border-amber-200 text-white shadow-md shadow-amber-200/25'
                }`}
                onClick={() => option.status === 'live' ? onSelect(option.slug) : handleContactClick(option)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{option.label}</span>
                  {option.status === 'live' && (
                    <span className="px-2 py-1 bg-white/40 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/50">
                      LIVE
                    </span>
                  )}
                </div>
                <span className="text-white/95 font-medium text-sm">
                  {option.status === 'live' ? 'Live Preview' : 'Coming Soon'}
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className={`mb-12 scroll-animate ${
          visibleElements.has('team-section') 
            ? 'opacity-100 translate-y-0 transition-all duration-700 ease-out' 
            : 'opacity-0 translate-y-12'
        }`} id="team-section">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Expert Team</h2>
          <p className="text-gray-500 text-center mb-6 max-w-2xl mx-auto">We have a group of expert software developers and web developers</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Yuvraj Singh', role: 'Full Stack Developer', exp: '2+ Years', emoji: '👨‍💻', delay: '0ms' },
              { name: 'Rahul Kumar', role: 'Frontend Developer', exp: '1+ Years', emoji: '👨‍💻', delay: '100ms' },
              { name: 'Priya Sharma', role: 'Backend Developer', exp: '3+ Years', emoji: '👩‍💻', delay: '200ms' },
              { name: 'Amit Verma', role: 'Mobile Developer', exp: '3+ Years', emoji: '👨‍💻', delay: '300ms' }
            ].map((member, index) => (
              <div
                key={index}
                className={`group relative scroll-animate ${
                  visibleElements.has(`team-${index}`) 
                    ? 'opacity-100 scale-100 transition-all duration-700 ease-out' 
                    : 'opacity-0 scale-90'
                }`}
                style={{ 
                  animationDelay: member.delay,
                  transitionDelay: `${index * 100}ms`
                }}
                id={`team-${index}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-teal-100 rounded-xl blur opacity-15 group-hover:opacity-25 transition duration-300"></div>
                <div className="relative bg-white/98 backdrop-blur-md border border-gray-200 rounded-xl p-4 text-center hover:bg-white transition-all duration-300">
                  <div className="text-3xl mb-3 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">{member.emoji}</div>
                  <h3 className="font-bold text-gray-800 text-sm mb-2">{member.name}</h3>
                  <p className="text-teal-400 font-medium text-xs mb-2">{member.role}</p>
                  <span className="text-gray-400 text-xs">{member.exp} Experience</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className={`mb-12 scroll-animate ${
          visibleElements.has('testimonials-section') 
            ? 'opacity-100 translate-y-0 transition-all duration-700 ease-out' 
            : 'opacity-0 translate-y-12'
        }`} id="testimonials-section">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Happy Clients</h2>
          <p className="text-gray-500 text-center mb-6 max-w-2xl mx-auto">See what our clients say about our work</p>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`group relative scroll-animate ${
                  visibleElements.has(`review-${review.id}`) 
                    ? 'opacity-100 translate-x-0 transition-all duration-700 ease-out' 
                    : 'opacity-0 translate-x-12'
                }`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  transitionDelay: `${index * 100}ms`
                }}
                id={`review-${review.id}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-teal-100 rounded-xl blur opacity-15 group-hover:opacity-25 transition duration-300"></div>
                <div className="relative bg-white/98 backdrop-blur-md border border-gray-200 rounded-xl p-4 hover:bg-white transition-all duration-300">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-8 h-8 bg-gradient-to-r from-red-300 to-teal-400 text-white rounded-full flex items-center justify-center font-bold text-xs shadow-md">
                        {review.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-800 text-xs truncate">{review.name}</h4>
                        <p className="text-gray-500 text-xs">{review.business}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveReview(review.id)}
                      className="text-red-400 hover:text-red-600 transition-colors p-1 hover:bg-red-50 rounded-full"
                      title="Remove review"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="text-yellow-400 text-xs mb-2">{'⭐'.repeat(review.rating)}</div>
                  <p className="text-gray-600 text-xs italic mb-2">"{review.review}"</p>
                  <span className="inline-block text-xs text-teal-500 bg-teal-50 px-2 py-1 rounded-lg font-medium border border-teal-100">{review.project}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Add Review Section */}
          <div className="mt-6">
            {!showReviewForm ? (
              <div className="text-center">
                <button 
                  onClick={() => setShowReviewForm(true)}
                  className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-red-400 to-teal-400 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-md hover:shadow-red-300/25 transition-all duration-300 border border-red-200/50"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-red-400 to-teal-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></span>
                  <span className="relative flex items-center gap-2 text-sm">
                    ⭐ Add Your Review
                  </span>
                </button>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-teal-100 rounded-xl blur opacity-15"></div>
                  <div className="relative bg-white/98 backdrop-blur-md border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Share Your Experience</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">Your Name *</label>
                        <input
                          type="text"
                          value={newReview.name}
                          onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                          className="w-full px-4 py-2 bg-white/95 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-red-300 focus:border-red-300 backdrop-blur-sm"
                          placeholder="Enter your name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">Business Name *</label>
                        <input
                          type="text"
                          value={newReview.business}
                          onChange={(e) => setNewReview({...newReview, business: e.target.value})}
                          className="w-full px-4 py-2 bg-white/95 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-red-300 focus:border-red-300 backdrop-blur-sm"
                          placeholder="Enter your business name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">Rating *</label>
                        <div className="flex gap-3">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setNewReview({...newReview, rating: star})}
                              className="text-2xl focus:outline-none transition-all duration-300 hover:scale-125 transform hover:rotate-12"
                            >
                              {star <= newReview.rating ? '⭐' : '☆'}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">Your Review *</label>
                        <textarea
                          value={newReview.review}
                          onChange={(e) => setNewReview({...newReview, review: e.target.value})}
                          className="w-full px-4 py-2 bg-white/95 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-red-300 focus:border-red-300 resize-none backdrop-blur-sm"
                          rows={3}
                          placeholder="Share your experience with our service..."
                        />
                      </div>
                      
                      <div className="flex gap-3">
                        <button
                          onClick={handleAddReview}
                          className="flex-1 bg-gradient-to-r from-red-400 to-teal-400 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-md transition-all duration-300 border border-red-200/50"
                        >
                          Submit Review
                        </button>
                        <button
                          onClick={() => {
                            setShowReviewForm(false)
                            setNewReview({ name: '', business: '', review: '', rating: 5 })
                          }}
                          className="flex-1 bg-white/95 text-gray-600 py-2 px-4 rounded-lg font-semibold hover:bg-white transition-all duration-300 border border-gray-200 backdrop-blur-sm"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact CTA */}
        <div className={`relative scroll-animate ${
          visibleElements.has('contact-section') 
            ? 'opacity-100 translate-y-0 transition-all duration-700 ease-out' 
            : 'opacity-0 translate-y-12'
        }`} id="contact-section">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-orange-200 rounded-xl blur opacity-15"></div>
          <div className="relative bg-gradient-to-r from-amber-50 to-orange-50 backdrop-blur-md border border-amber-100 rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Ready to Start Your Project?</h2>
            <p className="text-gray-500 mb-6 max-w-2xl mx-auto">Get your own professional website developed by our expert team</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a 
                href="tel:+918601300910" 
                className="group relative bg-gradient-to-r from-red-400 to-red-500 text-white py-2 px-6 rounded-lg font-semibold hover:shadow-md hover:shadow-red-300/25 transition-all duration-300 border border-red-200/50"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></span>
                <span className="relative flex items-center gap-2">
                  📞 Call Now
                </span>
              </a>
              <a 
                href="mailto:singhyuvraj8420@gmail.com" 
                className="group relative bg-white/95 text-gray-600 py-2 px-6 rounded-lg font-semibold hover:bg-white transition-all duration-300 border border-gray-200 backdrop-blur-sm hover:shadow-md hover:shadow-gray-300/20"
              >
                <span className="relative flex items-center gap-2">
                  ✉️ Email Us
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function handleContactClick(option) {
  // For coming soon demos, directly contact
  window.location.href = 'tel:+918601300910'
}

function ComingSoonDemo({ option, onBack }) {
  return (
    <div className="min-h-screen grid place-items-center p-4 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600">
      <main className="w-full max-w-2xl border border-white/20 rounded-2xl bg-gray-900/80 backdrop-blur-md shadow-2xl p-8 text-white">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">{option.label}</p>
        <h2 className="text-3xl font-bold mb-3">Coming Soon</h2>
        <p className="text-gray-300 mb-8">
          This demo will be available shortly. You can still contact us to book your project.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          <a 
            href="tel:+918601300910" 
            className="border border-amber-500/70 text-amber-300 no-underline font-bold text-sm px-3 py-2 rounded-full hover:bg-amber-500 hover:text-gray-900 transition-colors"
          >
            📞 Call to Book
          </a>
          <a 
            href="mailto:singhyuvraj8420@gmail.com" 
            className="border border-amber-500/70 text-amber-300 no-underline font-bold text-sm px-3 py-2 rounded-full hover:bg-amber-500 hover:text-gray-900 transition-colors"
          >
            ✉️ Contact by Email
          </a>
          <a 
            href="https://wa.me/918601300910" 
            target="_blank" 
            rel="noreferrer"
            className="border border-amber-500/70 text-amber-300 no-underline font-bold text-sm px-3 py-2 rounded-full hover:bg-amber-500 hover:text-gray-900 transition-colors"
          >
            💬 Order on WhatsApp
          </a>
        </div>

        <button 
          onClick={onBack}
          className="w-full bg-amber-500 text-gray-900 font-bold py-3 px-4 rounded-lg hover:bg-amber-600 transition-colors cursor-pointer"
        >
          Back to Demo Switcher
        </button>
      </main>
    </div>
  )
}

function App() {
  const [pathname, setPathname] = useState(getPathname)

  useEffect(() => {
    const syncPathname = () => setPathname(getPathname())
    window.addEventListener('popstate', syncPathname)
    return () => window.removeEventListener('popstate', syncPathname)
  }, [])

  const selectedOption = useMemo(
    () => getSelectedOptionFromPath(pathname),
    [pathname],
  )

  if (!selectedOption) {
    return <DemoLanding onSelect={(slug) => navigateTo(`/${slug}`)} />
  }

  if (selectedOption.key === 'education') {
    return <EducationDemoApp />
  }

  if (selectedOption.key === 'bakery') {
    return <BakeryDemoApp />
  }

  return <ComingSoonDemo option={selectedOption} onBack={() => navigateTo('/')} />
}

export default App
