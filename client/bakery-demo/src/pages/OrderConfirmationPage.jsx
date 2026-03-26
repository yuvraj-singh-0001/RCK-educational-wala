import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function OrderConfirmationPage() {
  const [orderNumber, setOrderNumber] = useState('')
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    // Generate random order number
    const orderNum = 'ORD' + Math.random().toString(36).substr(2, 9).toUpperCase()
    setOrderNumber(orderNum)

    // Countdown for redirect
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-bounce">
            <svg className="w-16 h-16 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Order Confirmed!
          </h1>
          
          <p className="text-xl text-gray-600 mb-2">
            Thank you for your order
          </p>
          
          <p className="text-lg text-gray-500 mb-6">
            Order Number: <span className="font-bold text-green-600">{orderNumber}</span>
          </p>

          {/* Order Details */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 text-left">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Order Details</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Order Status</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                  Confirmed
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Delivery</span>
                <span className="font-semibold">Today, 6:00 PM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Method</span>
                <span className="font-semibold">Cash on Delivery</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link
              to="/menu"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-8 rounded-lg hover:from-blue-600 hover:to-purple-600 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Continue Shopping
            </Link>
            
            <div className="text-sm text-gray-500">
              Redirecting to homepage in {countdown} seconds...
            </div>
          </div>
        </div>

        {/* Confetti Animation */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default OrderConfirmationPage
