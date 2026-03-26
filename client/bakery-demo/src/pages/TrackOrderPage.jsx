import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

/* ─── Status config ────────────────────────────────────────── */
const STATUS_STEPS = [
  {
    key: 'Confirmed',
    label: 'Order Confirmed',
    sub: 'We received your order',
    emoji: '✅',
    color: '#3b82f6',
    bg: '#eff6ff',
  },
  {
    key: 'Preparing',
    label: 'Baking Your Cake',
    sub: 'Our chefs are at work',
    emoji: '👨‍🍳',
    color: '#f59e0b',
    bg: '#fffbeb',
  },
  {
    key: 'Out for Delivery',
    label: 'Out for Delivery',
    sub: 'On the way to you',
    emoji: '🛵',
    color: '#8b5cf6',
    bg: '#f5f3ff',
  },
  {
    key: 'Delivered',
    label: 'Delivered',
    sub: 'Enjoy your cake! 🎂',
    emoji: '🎉',
    color: '#10b981',
    bg: '#ecfdf5',
  },
]

const STATUS_ORDER = ['Confirmed', 'Preparing', 'Out for Delivery', 'Delivered']

function getStepIndex(status) {
  return STATUS_ORDER.indexOf(status)
}

function updateStatus(order) {
  const timeDiff = (Date.now() - new Date(order.orderDate)) / 60000
  if (timeDiff > 25) return { ...order, status: 'Delivered' }
  if (timeDiff > 10) return { ...order, status: 'Out for Delivery' }
  if (timeDiff > 2)  return { ...order, status: 'Preparing' }
  return order
}

function formatDate(ds) {
  return new Date(ds).toLocaleString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
}

function timeRemaining(est) {
  const diff = new Date(est) - Date.now()
  if (diff <= 0) return 'Arrived!'
  const h = Math.floor(diff / 3600000)
  const m = Math.floor((diff % 3600000) / 60000)
  return h > 0 ? `${h}h ${m}m away` : `${m} min away`
}

/* ─── Animated Step Tracker ────────────────────────────────── */
function StatusTimeline({ status }) {
  const current = getStepIndex(status)
  const [animated, setAnimated] = useState(-1)

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      setAnimated(i)
      i++
      if (i > current) clearInterval(id)
    }, 300)
    return () => clearInterval(id)
  }, [current])

  return (
    <div className="relative py-2">
      {/* Connecting line */}
      <div className="absolute left-[22px] top-8 bottom-8 w-0.5 bg-gray-200 z-0" />
      <div
        className="absolute left-[22px] top-8 w-0.5 bg-gradient-to-b from-blue-500 via-amber-400 to-purple-500 z-0 transition-all duration-700"
        style={{ height: `${Math.min((animated / 3) * 100, 100)}%` }}
      />

      <div className="space-y-0">
        {STATUS_STEPS.map((step, i) => {
          const done = i <= current
          const active = i === current
          const reached = i <= animated

          return (
            <div
              key={step.key}
              className="relative flex items-start gap-4 py-3 pl-1 pr-2"
              style={{
                opacity: reached ? 1 : 0.35,
                transform: reached ? 'translateX(0)' : 'translateX(-8px)',
                transition: `opacity 0.4s ease ${i * 0.15}s, transform 0.4s ease ${i * 0.15}s`,
              }}
            >
              {/* Circle */}
              <div
                className="relative z-10 flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-xl shadow-sm border-2 transition-all duration-500"
                style={{
                  background: done ? step.bg : '#f9fafb',
                  borderColor: done ? step.color : '#e5e7eb',
                  boxShadow: active ? `0 0 0 4px ${step.color}22` : 'none',
                }}
              >
                {active ? (
                  <span style={{ animation: 'bounce 1s infinite' }}>{step.emoji}</span>
                ) : done ? (
                  <span>{step.emoji}</span>
                ) : (
                  <span className="text-gray-300 text-sm">○</span>
                )}
                {active && (
                  <span
                    className="absolute inset-0 rounded-full animate-ping"
                    style={{ background: `${step.color}33` }}
                  />
                )}
              </div>

              {/* Text */}
              <div className="flex-1 pt-1">
                <p
                  className="font-bold text-sm leading-tight"
                  style={{ color: done ? step.color : '#9ca3af' }}
                >
                  {step.label}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{step.sub}</p>
                {active && (
                  <span
                    className="inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: step.bg, color: step.color }}
                  >
                    IN PROGRESS
                  </span>
                )}
              </div>

              {/* Checkmark */}
              {done && !active && (
                <div
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-1"
                  style={{ background: step.color }}
                >
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ─── Delivery Rider Animation ─────────────────────────────── */
function RiderProgress({ status }) {
  const pct = { Confirmed: 5, Preparing: 30, 'Out for Delivery': 75, Delivered: 100 }[status] || 5

  return (
    <div className="px-4 py-3 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border border-red-100">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Live Delivery</span>
        <span className="text-xs font-medium text-gray-500">{pct}% complete</span>
      </div>
      <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-gradient-to-r from-red-500 to-orange-400 rounded-full transition-all duration-1000"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="relative h-8">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-sm">🏪</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-sm">🏠</div>
        <div
          className="absolute top-1/2 -translate-y-1/2 transition-all duration-1000 text-xl"
          style={{ left: `calc(${pct}% - 14px)` }}
        >
          🛵
        </div>
      </div>
    </div>
  )
}

/* ─── Single Order Card ────────────────────────────────────── */
function OrderCard({ order, isLatest = false }) {
  const [open, setOpen] = useState(isLatest)
  const stepIdx = getStepIndex(order.status)
  const stepInfo = STATUS_STEPS[stepIdx] || STATUS_STEPS[0]
  const fallbackImg = '/bakery-demo/images/Classic-Menu-cake.png'

  return (
    <div
      className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-300"
      style={{ animation: isLatest ? 'fadeSlideUp 0.5s ease both' : 'none' }}
    >
      {/* Card header — always visible */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left px-3 py-3 flex items-center gap-3"
      >
        {/* Status dot */}
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0"
          style={{ background: stepInfo.bg }}
        >
          {stepInfo.emoji}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-gray-900 text-xs">{order.orderId}</span>
            <span
              className="text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide"
              style={{ background: stepInfo.bg, color: stepInfo.color }}
            >
              {order.status}
            </span>
          </div>
          <p className="text-[10px] text-gray-500 mt-0.5 truncate">{formatDate(order.orderDate)}</p>
          <p className="text-[10px] font-semibold text-gray-700 mt-0.5">
            {order.items?.length} item{order.items?.length !== 1 ? 's' : ''} · ₹{order.grandTotal}
          </p>
        </div>

        <svg
          className="w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)' }}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expandable body */}
      <div
        className="overflow-hidden transition-all duration-500"
        style={{ maxHeight: open ? '2000px' : '0px' }}
      >
        <div className="border-t border-gray-100">
          {/* Rider progress (only if not delivered) */}
          {order.status !== 'Delivered' && (
            <div className="px-3 pt-3">
              <RiderProgress status={order.status} />
            </div>
          )}

          {/* Timeline */}
          <div className="px-3 pt-3 pb-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Order Journey</p>
            <StatusTimeline status={order.status} />
          </div>

          {/* Info grid */}
          <div className="px-3 pb-3 grid grid-cols-2 gap-2">
            {/* Address */}
            <div className="col-span-2 bg-blue-50 rounded-lg p-2 border border-blue-100">
              <div className="flex items-start gap-2">
                <span className="text-sm mt-0.5">📍</span>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-blue-600 mb-0.5">Delivering To</p>
                  <p className="text-[10px] font-medium text-gray-800 leading-snug line-clamp-2">{order.deliveryLocation}</p>
                </div>
              </div>
            </div>

            {/* ETA */}
            <div className="bg-green-50 rounded-lg p-2 border border-green-100">
              <p className="text-[9px] font-bold uppercase tracking-wider text-green-600 mb-1">⏱ ETA</p>
              <p className="text-xs font-bold text-gray-900">{timeRemaining(order.estimatedDelivery)}</p>
              <p className="text-[9px] text-gray-500 mt-0.5">{order.deliveryTime}</p>
            </div>

            {/* Payment */}
            <div className="bg-purple-50 rounded-lg p-2 border border-purple-100">
              <p className="text-[9px] font-bold uppercase tracking-wider text-purple-600 mb-1">💳 Payment</p>
              <p className="text-xs font-bold text-gray-900 capitalize">{order.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online'}</p>
              <p className="text-[9px] text-gray-500 mt-0.5">₹{order.grandTotal}</p>
            </div>
          </div>

          {/* Items */}
          <div className="px-3 pb-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Your Order</p>
            <div className="space-y-1.5">
              {order.items?.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg"
                  style={{ animation: open ? `fadeSlideUp 0.4s ease ${i * 0.07}s both` : 'none' }}
                >
                  <img
                    src={item.imageUrl || fallbackImg}
                    alt={item.name}
                    className="w-10 h-10 object-cover rounded-lg flex-shrink-0"
                    onError={e => { e.currentTarget.src = fallbackImg }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-gray-900 truncate">{item.name}</p>
                    <p className="text-[10px] text-gray-500">
                      {item.quantity} × ₹{item.unitPrice}
                      {item.weight ? ` · ${item.weight}kg` : ''}
                    </p>
                  </div>
                  <p className="text-xs font-bold text-gray-900">₹{item.lineTotal}</p>
                </div>
              ))}
            </div>

            {/* Total row */}
            <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-200">
              <span className="text-xs font-bold text-gray-700">Grand Total</span>
              <span className="text-sm font-extrabold text-red-600">₹{order.grandTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Main Page ────────────────────────────────────────────── */
function TrackOrderPage() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const raw = JSON.parse(localStorage.getItem('orders') || '[]')
    const updated = raw.map(updateStatus).reverse()
    setOrders(updated)
  }, [])

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
        <style>{pageStyles}</style>
        <div
          className="text-center"
          style={{ animation: 'fadeSlideUp 0.5s ease both' }}
        >
          <div className="text-6xl mb-4">🎂</div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">No Orders Yet</h2>
          <p className="text-gray-500 mb-6">Place your first order and track it live here!</p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-red-100"
          >
            Browse Menu →
          </Link>
        </div>
      </div>
    )
  }

  const latest = orders[0]
  const history = orders.slice(1)

  return (
    <>
      <style>{pageStyles}</style>
      <div className="min-h-screen bg-gray-50 py-4 px-3 sm:px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Page Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mb-3">
              <span className="text-2xl">📦</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">Track Your Order</h1>
            <p className="text-gray-600">{orders.length} order{orders.length !== 1 ? 's' : ''} found</p>
          </div>

          {/* Order Cards */}
          <div className="space-y-4">
            {latest && (
              <div 
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                style={{ animation: 'fadeSlideUp 0.4s ease both' }}
              >
                {/* Order Header */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 px-4 py-3 border-b border-red-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-red-600 uppercase tracking-wider">Latest Order</p>
                      <p className="text-sm font-semibold text-gray-900">{latest.orderId}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Total Amount</p>
                      <p className="text-lg font-extrabold text-red-600">₹{latest.grandTotal}</p>
                    </div>
                  </div>
                </div>

                {/* Progress Tracker */}
                <div className="p-4">
                  <RiderProgress status={latest.status} />
                </div>

                {/* Order Details */}
                <div className="px-4 pb-4">
                  <OrderCard order={latest} isLatest={true} />
                </div>
              </div>
            )}

            {/* Order History */}
            {history.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Previous Orders</h3>
                <div className="space-y-3">
                  {history.map((order, index) => (
                    <div 
                      key={order.orderId}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200"
                      style={{ animation: 'fadeSlideUp 0.5s ease both', animationDelay: `${0.1 + index * 0.1}s` }}
                    >
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{order.orderId}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(order.orderDate).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-red-600">₹{order.grandTotal}</p>
                        <p className="text-xs text-gray-500">{order.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Order Again Button */}
            <div 
              className="text-center pt-2"
              style={{ animation: 'fadeSlideUp 0.5s ease 0.4s both' }}
            >
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-extrabold rounded-xl transition-all shadow-lg shadow-red-100"
              >
                🎂 Order Again
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const pageStyles = `
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-4px); }
  }
`

export default TrackOrderPage