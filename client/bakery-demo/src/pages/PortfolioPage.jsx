import { useState, useEffect } from 'react'
import PortfolioShowcase from '../components/PortfolioShowcase'

function PortfolioPage() {
  useEffect(() => {
    document.title = 'Portfolio - Demo Websites by Yuvraj Singh | Sidemint'
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.content = 'Explore complete demo websites by Yuvraj Singh including bakery e-commerce, educational platforms, job portals, and shopping websites. Professional web development portfolio.'
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-yellow-300">Demo Websites</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Professional website demos showcasing expertise in e-commerce, education, 
            and business web development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918601300910"
              className="px-8 py-3 bg-white text-red-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              📞 Get Your Website
            </a>
            <a
              href="mailto:singhyuvraj8420@gmail.com"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-red-600 transition-colors"
            >
              ✉️ Email Me
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <PortfolioShowcase />

      {/* Additional Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Development</h3>
              <p className="text-gray-600">Quick turnaround time with professional quality</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Affordable Rates</h3>
              <p className="text-gray-600">Best prices for professional website development</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Work</h3>
              <p className="text-gray-600">Modern, responsive, and user-friendly designs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage
