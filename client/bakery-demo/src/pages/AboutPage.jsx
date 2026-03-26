import { highlightStats } from '../data/storefrontData'

function AboutPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Content Section */}
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <p className="text-sm font-bold text-red-600 uppercase tracking-wider animate-fade-in">
                About Us
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight animate-fade-in-delay-1">
                Bakery studio with a gifting-first storefront experience.
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed animate-fade-in-delay-2">
              Crumb & Crown combines custom cakes, celebration add-ons, premium wrapping and fast team
              support. The demo now behaves more like a modern gifting marketplace while staying inside
              your bakery brand context.
            </p>

            {/* Features List */}
            <ul className="space-y-3 animate-fade-in-delay-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                </span>
                <span className="text-gray-700">Category-first browsing inspired by large gifting storefronts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                </span>
                <span className="text-gray-700">Product cards with image, pricing, delivery speed and badges</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                </span>
                <span className="text-gray-700">Filter-driven menu page for birthday, anniversary and gift bundles</span>
              </li>
            </ul>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {highlightStats.map((item, index) => (
                <article 
                  key={item.label} 
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-fade-in-delay-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <strong className="block text-2xl sm:text-3xl font-bold text-red-600 mb-1">
                    {item.value}
                  </strong>
                  <span className="text-sm sm:text-base text-gray-600 font-medium">
                    {item.label}
                  </span>
                </article>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:order-last order-first">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-red-200 to-pink-200 rounded-3xl overflow-hidden shadow-2xl aspect-square sm:aspect-[4/3] lg:aspect-square">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-pink-500/20"></div>
                <div className="absolute top-4 left-4 w-20 h-20 bg-white/30 rounded-full backdrop-blur-sm"></div>
                <div className="absolute bottom-6 right-6 w-32 h-32 bg-white/20 rounded-full backdrop-blur-sm"></div>
                
                {/* Placeholder for Bakery Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-6xl mb-4">🎂</div>
                    <p className="text-xl font-bold">Crumb & Crown</p>
                    <p className="text-sm opacity-90 mt-2">Premium Bakery Experience</p>
                  </div>
                </div>
              </div>

              {/* Floating Decorations */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-60 animate-bounce-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-300 rounded-full opacity-60 animate-bounce-slow-delay"></div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To create unforgettable celebrations through artisanal cakes and exceptional service, 
              making every moment special with our premium bakery offerings.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
            <p className="text-gray-600 leading-relaxed">
              We combine traditional baking techniques with modern innovation, ensuring each cake 
              is not just delicious but a centerpiece of your celebration.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-fade-in-delay-1 {
          animation: fade-in 0.6s ease-out 0.1s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-3 {
          animation: fade-in 0.6s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-4 {
          animation: fade-in 0.6s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes bounce-slow-delay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-bounce-slow-delay {
          animation: bounce-slow-delay 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  )
}

export default AboutPage
