import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const pageContent = {
  'our-story': {
    title: 'Our Story',
    subtitle: 'From Home Kitchen to Premium Bakery',
    content: [
      {
        type: 'text',
        content: 'Crumb & Crown began in 2018 as a small home kitchen with a big dream - to create exceptional cakes that bring joy to every celebration. What started as a passion project has grown into one of the most trusted bakeries in the region.'
      },
      {
        type: 'highlight',
        content: 'Our journey has been fueled by love for baking and commitment to quality.'
      },
      {
        type: 'text',
        content: 'Today, we operate from a state-of-the-art facility with a team of 25+ skilled pastry chefs, bakers, and decorators. Each cake that leaves our kitchen is crafted with the same care and attention to detail that made our first cakes special.'
      }
    ],
    stats: [
      { label: 'Years of Excellence', value: '7+' },
      { label: 'Happy Customers', value: '50K+' },
      { label: 'Cakes Delivered', value: '100K+' },
      { label: 'Team Members', value: '25+' }
    ]
  },
  'contact-us': {
    title: 'Contact Us',
    subtitle: 'Let\'s Build Your Digital Success Together',
    content: [
      {
        type: 'text',
        content: 'Transform your business with a stunning, fully-responsive website that drives growth and impresses customers. I specialize in creating custom websites that help businesses like yours establish a strong online presence and increase revenue.'
      },
      {
        type: 'highlight',
        content: 'Your success is my priority - I\'ll create a website that not only looks amazing but also delivers results for your business.'
      },
      {
        type: 'text',
        content: 'Whether you need an e-commerce platform, business website, or custom web application, I provide end-to-end solutions tailored to your specific requirements. Let\'s discuss how we can take your business to the next level!'
      }
    ]
  },
  'locate-us': {
    title: 'Locate Us',
    subtitle: 'Find Our Bakery Near You',
    content: [
      {
        type: 'locations',
        branches: [
          {
            name: 'Main Kitchen - Connaught Place',
            address: '123 Bakery Lane, Delhi 110001',
            phone: '+91 86013 00910',
            timing: '9AM-9PM (Mon-Sat)',
            specialties: ['Custom Cakes', 'Wedding Cakes', 'Corporate Orders']
          },
          {
            name: 'South Delhi Branch',
            address: '456 Saket District Centre, Delhi 110017',
            phone: '+91 86013 00910',
            timing: '10AM-8PM (Mon-Sat)',
            specialties: ['Birthday Cakes', 'Pastries', 'Quick Delivery']
          },
          {
            name: 'Gurgaon Outlet',
            address: '789 Sector 29, Gurgaon 122001',
            phone: '+91 86013 00910',
            timing: '11AM-9PM (All Days)',
            specialties: ['Party Orders', 'Cupcakes', 'Same Day Delivery']
          }
        ]
      }
    ]
  },
  'blog': {
    title: 'Blog',
    subtitle: 'Baking Tips & Celebration Ideas',
    content: [
      {
        type: 'blog',
        posts: [
          {
            title: 'Choosing the Perfect Wedding Cake',
            excerpt: 'Expert tips on selecting the ideal cake for your special day, from flavor combinations to design trends.',
            date: 'March 15, 2026',
            readTime: '5 min read'
          },
          {
            title: 'Birthday Cake Trends 2026',
            excerpt: 'Discover the hottest cake trends this year, from minimalist designs to elaborate themed creations.',
            date: 'March 10, 2026',
            readTime: '3 min read'
          },
          {
            title: 'How to Store Cakes Properly',
            excerpt: 'Professional tips on keeping your cakes fresh and delicious for longer periods.',
            date: 'March 5, 2026',
            readTime: '4 min read'
          }
        ]
      }
    ]
  },
  'media': {
    title: 'Media',
    subtitle: 'Press & Features',
    content: [
      {
        type: 'media',
        features: [
          {
            outlet: 'Times of India',
            title: 'Crumb & Crown: Redefining Bakery Experience',
            date: 'February 2026',
            link: '#'
          },
          {
            outlet: 'Food & Wine Magazine',
            title: 'Best Custom Cakes in Delhi',
            date: 'January 2026',
            link: '#'
          },
          {
            outlet: 'India Today',
            title: 'Local Bakery Goes Digital',
            date: 'December 2025',
            link: '#'
          }
        ]
      }
    ]
  },
  'careers': {
    title: 'Careers',
    subtitle: 'Join Our Team',
    content: [
      {
        type: 'text',
        content: 'At Crumb & Crown, we\'re always looking for passionate individuals who share our love for baking and customer service. Join our growing team and be part of something special.'
      },
      {
        type: 'jobs',
        positions: [
          {
            title: 'Senior Pastry Chef',
            department: 'Kitchen',
            experience: '5+ years',
            type: 'Full-time',
            contact: '+91 86013 00910'
          },
          {
            title: 'Customer Service Executive',
            department: 'Operations',
            experience: '2+ years',
            type: 'Full-time',
            contact: '+91 86013 00910'
          },
          {
            title: 'Cake Decorator',
            department: 'Kitchen',
            experience: '3+ years',
            type: 'Full-time',
            contact: '+91 86013 00910'
          }
        ]
      }
    ]
  },
  'faq': {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything You Need to Know',
    content: [
      {
        type: 'faq',
        questions: [
          {
            question: 'How far in advance should I order my cake?',
            answer: 'We recommend ordering at least 2-3 days in advance for regular cakes and 1-2 weeks for custom wedding cakes.'
          },
          {
            question: 'Do you offer same-day delivery?',
            answer: 'Yes, we offer same-day delivery for selected cake designs. Please check our menu for same-day delivery options.'
          },
          {
            question: 'Can I customize my cake design?',
            answer: 'Absolutely! We specialize in custom cakes. Share your ideas with us and our team will bring them to life.'
          },
          {
            question: 'What are your delivery charges?',
            answer: 'Delivery charges vary based on location. We offer free delivery for orders above ₹1000 within Delhi.'
          }
        ]
      }
    ]
  },
  'cancellation-and-refund': {
    title: 'Cancellation & Refund Policy',
    subtitle: 'Fair & Transparent Policies',
    content: [
      {
        type: 'policy',
        sections: [
          {
            heading: 'Order Cancellation',
            points: [
              'Orders can be cancelled within 24 hours of placing the order',
              '50% refund for cancellations made 48-24 hours before delivery',
              'No refund for cancellations made less than 24 hours before delivery'
            ]
          },
          {
            heading: 'Refund Process',
            points: [
              'Refunds are processed within 5-7 working days',
              'Amount will be credited to the original payment method',
              'Refund confirmation will be sent via email and SMS'
            ]
          }
        ]
      }
    ]
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    subtitle: 'Your Data Protection Matters',
    content: [
      {
        type: 'policy',
        sections: [
          {
            heading: 'Information We Collect',
            points: [
              'Personal information (name, email, phone number)',
              'Order history and preferences',
              'Payment information (encrypted and secure)',
              'Location data for delivery purposes'
            ]
          },
          {
            heading: 'How We Use Your Information',
            points: [
              'To process and deliver your orders',
              'To improve our services and user experience',
              'To send promotional offers (with your consent)',
              'To comply with legal requirements'
            ]
          }
        ]
      }
    ]
  },
  'terms-and-conditions': {
    title: 'Terms & Conditions',
    subtitle: 'Terms of Service',
    content: [
      {
        type: 'policy',
        sections: [
          {
            heading: 'Order Terms',
            points: [
              'All orders are subject to availability',
              'Prices are inclusive of taxes',
              'Delivery time estimates are approximate',
              'We reserve the right to modify designs based on feasibility'
            ]
          },
          {
            heading: 'Payment Terms',
            points: [
              'Full payment required at the time of ordering',
              'We accept all major credit/debit cards and UPI',
              'Cash on delivery available for orders below ₹2000',
              'All transactions are secure and encrypted'
            ]
          }
        ]
      }
    ]
  },
  'customer-grievance': {
    title: 'Customer Grievance Redressal',
    subtitle: 'We Value Your Feedback',
    content: [
      {
        type: 'grievance',
        info: [
          {
            heading: 'Grievance Officer',
            name: 'Customer Support',
            email: 'singhyuvraj8420@gmail.com',
            phone: '+91 86013 00910'
          },
          {
            heading: 'Response Time',
            points: [
              'Acknowledgment within 24 hours',
              'Resolution within 7 working days',
              'Escalation to management if needed'
            ]
          }
        ]
      }
    ]
  },
  'sitemap': {
    title: 'Sitemap',
    subtitle: 'Navigate Our Website',
    content: [
      {
        type: 'sitemap',
        sections: [
          {
            heading: 'Products & Services',
            links: ['Birthday Cakes', 'Wedding Cakes', 'Custom Cakes', 'Pastries', 'Corporate Orders']
          },
          {
            heading: 'Company',
            links: ['About Us', 'Our Story', 'Careers', 'Media', 'Blog']
          },
          {
            heading: 'Support',
            links: ['Contact Us', 'FAQ', 'Track Order', 'Cancellation Policy', 'Customer Support']
          }
        ]
      }
    ]
  },
  'corporate-cakes': {
    title: 'Corporate Cakes',
    subtitle: 'Business & Corporate Solutions',
    content: [
      {
        type: 'text',
        content: 'Elevate your corporate events with our premium business cakes. From company milestones to team celebrations, we create impressive cakes that reflect your brand and make your events memorable.'
      },
      {
        type: 'corporate',
        services: [
          {
            title: 'Company Logo Cakes',
            description: 'Custom cakes featuring your company logo and branding',
            contact: '+91 86013 00910'
          },
          {
            title: 'Office Celebration Cakes',
            description: 'Perfect for birthdays, anniversaries, and team achievements',
            contact: '+91 86013 00910'
          },
          {
            title: 'Product Launch Cakes',
            description: 'Themed cakes to celebrate new products and milestones',
            contact: '+91 86013 00910'
          },
          {
            title: 'Bulk Orders',
            description: 'Special pricing for large corporate orders and regular clients',
            contact: '+91 86013 00910'
          }
        ]
      }
    ]
  },
  'coupons-and-offers': {
    title: 'Coupons & Offers',
    subtitle: 'Exciting Deals & Discounts',
    content: [
      {
        type: 'offers',
        deals: [
          {
            code: 'WELCOME20',
            title: 'New User Special',
            description: 'Get 20% off on your first order',
            valid: 'Valid for new customers only',
            contact: '+91 86013 00910'
          },
          {
            code: 'WEEKEND15',
            title: 'Weekend Treat',
            description: '15% off on all weekend orders',
            valid: 'Valid Sat-Sun only',
            contact: '+91 86013 00910'
          },
          {
            code: 'BULK10',
            title: 'Bulk Order Discount',
            description: '10% off on orders above ₹3000',
            valid: 'No minimum quantity required',
            contact: '+91 86013 00910'
          }
        ]
      }
    ]
  },
  'download-app': {
    title: 'Download Our App',
    subtitle: 'Order On The Go',
    content: [
      {
        type: 'app',
        features: [
          'Exclusive app-only deals and discounts',
          'Faster checkout with saved addresses',
          'Real-time order tracking',
          'Personalized recommendations',
          'Loyalty rewards program',
          'Push notifications for order updates'
        ],
        contact: '+91 86013 00910',
        email: 'singhyuvraj8420@gmail.com',
        instagram: 'https://www.instagram.com/sitemint.in/'
      }
    ]
  }
}

function InfoPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState('our-story')

  useEffect(() => {
    const path = location.pathname.replace('/info/', '')
    if (pageContent[path]) {
      setCurrentPage(path)
    } else {
      setCurrentPage('our-story')
    }
  }, [location])

  const content = pageContent[currentPage] || pageContent['our-story']

  const renderContent = () => {
    switch (content.content[0]?.type) {
      case 'contact':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {content.content[0].items.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-2xl sm:text-3xl flex-shrink-0">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{item.label}</h3>
                    <p className="text-base sm:text-lg font-medium text-red-600 mb-1 break-all">{item.value}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )

      case 'locations':
        return (
          <div className="space-y-4 sm:space-y-6">
            {content.content[0].branches.map((branch, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{branch.name}</h3>
                <div className="space-y-2 sm:space-y-3 text-gray-600">
                  <p className="flex items-start gap-2 text-sm sm:text-base">
                    <span className="flex-shrink-0">📍</span>
                    <span>{branch.address}</span>
                  </p>
                  <p className="flex items-center gap-2 text-sm sm:text-base">
                    <span className="flex-shrink-0">📞</span>
                    <a href={`tel:${branch.phone}`} className="text-red-600 hover:text-red-700 font-medium">{branch.phone}</a>
                  </p>
                  <p className="flex items-center gap-2 text-sm sm:text-base">
                    <span className="flex-shrink-0">⏰</span>
                    <span>{branch.timing}</span>
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {branch.specialties.map((specialty, i) => (
                    <span key={i} className="px-2 sm:px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs sm:text-sm">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )

      case 'blog':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {content.content[0].posts.map((post, index) => (
              <article key={index} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <div className="h-32 sm:h-48 bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center">
                  <span className="text-4xl sm:text-6xl">📝</span>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 sm:mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )

      case 'faq':
        return (
          <div className="space-y-3 sm:space-y-4">
            {content.content[0].questions.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">{item.question}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        )

      case 'policy':
        return (
          <div className="space-y-6 sm:space-y-8">
            {content.content[0].sections.map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">{section.heading}</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600 text-sm sm:text-base leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )

      case 'offers':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {content.content[0].deals.map((deal, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 sm:p-6 border border-red-100">
                <div className="text-center mb-3 sm:mb-4">
                  <span className="inline-block px-3 sm:px-4 py-2 bg-red-600 text-white font-bold rounded-lg text-sm sm:text-base">
                    {deal.code}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{deal.title}</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{deal.description}</p>
                <p className="text-xs sm:text-sm text-red-600 font-medium mb-3">{deal.valid}</p>
                <a href={`tel:${deal.contact}`} className="block text-center text-sm sm:text-base text-red-600 hover:text-red-700 font-medium">
                  📞 {deal.contact}
                </a>
              </div>
            ))}
          </div>
        )

      case 'corporate':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {content.content[0].services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{service.description}</p>
                <a href={`tel:${service.contact}`} className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm sm:text-base">
                  <span>📞</span> {service.contact}
                </a>
              </div>
            ))}
          </div>
        )

      case 'jobs':
        return (
          <div className="space-y-4 sm:space-y-6">
            {content.content[1].positions.map((position, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{position.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div>
                    <span className="text-xs sm:text-sm text-gray-500">Department</span>
                    <p className="font-medium text-sm sm:text-base">{position.department}</p>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm text-gray-500">Experience</span>
                    <p className="font-medium text-sm sm:text-base">{position.experience}</p>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm text-gray-500">Type</span>
                    <p className="font-medium text-sm sm:text-base">{position.type}</p>
                  </div>
                </div>
                <a href={`tel:${position.contact}`} className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm sm:text-base">
                  <span>📞</span> Apply: {position.contact}
                </a>
              </div>
            ))}
          </div>
        )

      case 'grievance':
        return (
          <div className="space-y-4 sm:space-y-6">
            {content.content[0].info.map((info, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{info.heading}</h3>
                {info.name && (
                  <p className="text-gray-600 mb-2 text-sm sm:text-base">
                    <span className="font-medium">Contact Person:</span> {info.name}
                  </p>
                )}
                {info.email && (
                  <a href={`mailto:${info.email}`} className="block text-red-600 hover:text-red-700 mb-2 text-sm sm:text-base">
                    <span className="font-medium">Email:</span> {info.email}
                  </a>
                )}
                {info.phone && (
                  <a href={`tel:${info.phone}`} className="block text-red-600 hover:text-red-700 mb-3 text-sm sm:text-base">
                    <span className="font-medium">Phone:</span> {info.phone}
                  </a>
                )}
                {info.points && (
                  <ul className="space-y-1 sm:space-y-2">
                    {info.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm sm:text-base">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )

      case 'app':
        return (
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200">
            <div className="text-center mb-6 sm:mb-8">
              <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">📱</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Download Crumb & Crown App</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Get exclusive features and order faster on mobile</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="bg-white rounded-lg p-3 sm:p-4 text-center border border-gray-200">
                <span className="text-xl sm:text-2xl mb-2 block">🍎</span>
                <p className="font-semibold text-sm sm:text-base">App Store</p>
                <p className="text-xs sm:text-sm text-gray-600">iOS 12.0 or later</p>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-4 text-center border border-gray-200">
                <span className="text-xl sm:text-2xl mb-2 block">🤖</span>
                <p className="font-semibold text-sm sm:text-base">Google Play</p>
                <p className="text-xs sm:text-sm text-gray-600">Android 6.0 or later</p>
              </div>
            </div>
            
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {content.content[0].features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="border-t pt-4 sm:pt-6 space-y-3 sm:space-y-4">
              <a href={`tel:${content.content[0].contact}`} className="flex items-center justify-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm sm:text-base">
                <span>📞</span> {content.content[0].contact}
              </a>
              <a href={`mailto:${content.content[0].email}`} className="flex items-center justify-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm sm:text-base">
                <span>✉️</span> {content.content[0].email}
              </a>
              <a href={content.content[0].instagram} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm sm:text-base">
                <span>📷</span> Instagram: @sitemint.in
              </a>
            </div>
          </div>
        )

      default:
        return (
          <div className="prose max-w-none">
            {content.content.map((section, index) => {
              if (section.type === 'text') {
                return <p key={index} className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">{section.content}</p>
              }
              if (section.type === 'highlight') {
                return <div key={index} className="bg-red-50 border-l-4 border-red-500 p-4 my-6 rounded-r-lg">
                  <p className="text-gray-800 font-medium italic text-sm sm:text-base">{section.content}</p>
                </div>
              }
              return null
            })}
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{content.title}</h1>
          <p className="text-lg text-gray-600 mb-8">{content.subtitle}</p>
          {renderContent()}
          
          {/* Special Contact Section for Contact Us Page */}
          {currentPage === 'contact-us' && (
            <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-gray-200">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
                <p className="text-gray-600 mb-6">Get in touch today and let's create something amazing together!</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">📱</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Call Me Directly</h3>
                    <a href="tel:+918601300910" className="block">
                      <p className="text-green-600 font-bold text-xl mb-2">+91 86013 00910</p>
                      <p className="text-sm text-gray-600">Click to call instantly</p>
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">✉️</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Email Me</h3>
                    <a href="mailto:singhyuvraj8420@gmail.com" className="block">
                      <p className="text-blue-600 font-bold text-lg mb-2 break-all">singhyuvraj8420@gmail.com</p>
                      <p className="text-sm text-gray-600">Click to send email</p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Why Choose Me?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <span className="text-2xl mb-2 block">🚀</span>
                    <p className="font-semibold text-sm">Fast Delivery</p>
                    <p className="text-xs opacity-90">Quick turnaround time</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <span className="text-2xl mb-2 block">💰</span>
                    <p className="font-semibold text-sm">Affordable Rates</p>
                    <p className="text-xs opacity-90">Best prices guaranteed</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <span className="text-2xl mb-2 block">🎯</span>
                    <p className="font-semibold text-sm">Quality Work</p>
                    <p className="text-xs opacity-90">Professional results</p>
                  </div>
                </div>
                <p className="text-sm opacity-90">Don't wait! Contact me now and get your dream website at the best price!</p>
              </div>
            </div>
          )}
        </div>

        {/* Stats for Our Story */}
        {currentPage === 'our-story' && content.stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {content.stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-red-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-100 py-12 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need More Information?</h2>
          <p className="text-gray-600 mb-6">I'm here to help bring your vision to life</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918601300910" className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium">
              📞 Call Now
            </a>
            <a href="mailto:singhyuvraj8420@gmail.com" className="px-8 py-3 bg-white text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors font-medium">
              ✉️ Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoPage
