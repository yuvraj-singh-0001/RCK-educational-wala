import { Link } from 'react-router-dom'

function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          
          {/* Contact Section */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">📞</span>
                Book / Contact / Order
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                Talk to the order desk for cakes, combos and corporate gifting. 
                Reach us instantly and finalize delivery slot, personalization notes and bulk packaging.
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {/* Call Card */}
                <a 
                  href="tel:+918601300910" 
                  className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-4 border border-green-200 hover:from-green-100 hover:to-emerald-200 transition-all duration-300 block"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl text-white">📱</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm">Call Us</h3>
                    <p className="text-green-600 font-semibold text-sm">+91 86013 00910</p>
                    <p className="text-xs text-gray-600 mt-1">Mon-Sat: 9AM-9PM</p>
                  </div>
                </a>

                {/* Email Card */}
                <a 
                  href="mailto:singhyuvraj8420@gmail.com" 
                  className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-4 border border-blue-200 hover:from-blue-100 hover:to-indigo-200 transition-all duration-300 block"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl text-white">✉️</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm">Email Us</h3>
                    <p className="text-blue-600 font-semibold text-xs break-all">singhyuvraj8420@gmail.com</p>
                    <p className="text-xs text-gray-600 mt-1">24/7 Support</p>
                  </div>
                </a>

                {/* WhatsApp Card */}
                <a 
                  href="https://wa.me/918601300910" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-4 border border-green-200 hover:from-green-100 hover:to-emerald-200 transition-all duration-300 block sm:col-span-2 lg:col-span-1"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl text-white">💬</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm">WhatsApp</h3>
                    <p className="text-green-600 font-semibold text-sm">Instant Response</p>
                    <p className="text-xs text-gray-600 mt-1">Quick order confirmation</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Website Development Offer */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💻</span>
                <h2 className="text-xl sm:text-2xl font-bold">Want a Website Like This?</h2>
              </div>
              <p className="text-sm sm:text-base mb-4 text-white/90 leading-relaxed">
                If you liked this demo website, contact us to build a fully responsive, 
                professional website for your business at affordable rates!
              </p>
              
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                  <span className="text-lg mb-1 block">📱</span>
                  <p className="text-xs font-semibold">Mobile First</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                  <span className="text-lg mb-1 block">⚡</span>
                  <p className="text-xs font-semibold">Fast Loading</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                  <span className="text-lg mb-1 block">🎨</span>
                  <p className="text-xs font-semibold">Modern Design</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <a 
                  href="tel:+918601300910" 
                  className="flex-1 bg-white text-purple-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors text-center text-sm"
                >
                  📞 Call Now
                </a>
                <a 
                  href="https://wa.me/918601300910" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-4 rounded-lg hover:bg-white/30 transition-colors text-center text-sm border border-white/30"
                >
                  💬 WhatsApp
                </a>
                <a 
                  href="mailto:singhyuvraj8420@gmail.com" 
                  className="flex-1 bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-4 rounded-lg hover:bg-white/30 transition-colors text-center text-sm border border-white/30"
                >
                  ✉️ Email
                </a>
              </div>
            </div>
          </div>

          {/* Help Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🎂</span>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">Need Help With:</h2>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-lg mt-0.5">🎉</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Birthday Cakes</h3>
                    <p className="text-xs text-gray-600">Custom designs & flavors</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <span className="text-lg mt-0.5">💕</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Anniversary Combos</h3>
                    <p className="text-xs text-gray-600">Romantic packages</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <span className="text-lg mt-0.5">🎈</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Balloon Decor Bundles</h3>
                    <p className="text-xs text-gray-600">Complete party setup</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <span className="text-lg mt-0.5">🏢</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Office Hampers</h3>
                    <p className="text-xs text-gray-600">Corporate gifting</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <span className="text-lg mt-0.5">⚡</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Same Day Gifting</h3>
                    <p className="text-xs text-gray-600">Urgent delivery available</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/menu?delivery=Same%20Day" 
                className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold py-3 px-4 rounded-xl hover:from-red-700 hover:to-pink-700 transition-all duration-300 text-center flex items-center justify-center gap-2 text-sm"
              >
                <span>🛍️</span>
                Browse Same Day Products
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-2xl p-6 border border-red-200">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Ready to Order?</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is standing by to help you create the perfect cake for your special occasion. 
              Contact us now for personalized assistance!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="tel:+918601300910" 
                className="px-6 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                <span>📞</span>
                Call +91 86013 00910
              </a>
              <a 
                href="mailto:singhyuvraj8420@gmail.com" 
                className="px-6 py-3 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 border-2 border-red-600 text-sm"
              >
                <span>✉️</span>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
