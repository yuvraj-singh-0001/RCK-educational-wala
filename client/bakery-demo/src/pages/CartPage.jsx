import { useEffect, useMemo, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  productCatalog,
  isCakeBasePriceItem as isWeightSelectableProduct,
  getBaseCakePrice,
  getDisplayPriceByWeight
} from "../data/storefrontData";

const cartStorageKey = "bakery-cart";
const deliveryLocationStorageKey = "bakery-delivery-location";
const fallbackCakeImage = "/bakery-demo/images/Classic-Menu-cake.png";
const weightOptions = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

function getFallbackSourcePath(item) {
  if (item.type) return `/menu?type=${encodeURIComponent(item.type)}#product-${item.id}`;
  if (item.occasion && item.occasion !== "Occasions") return `/menu?occasion=${encodeURIComponent(item.occasion)}#product-${item.id}`;
  if (item.category) return `/menu?category=${encodeURIComponent(item.category)}#product-${item.id}`;
  return "/menu";
}

function getDeliverySchedule(deliveryMode) {
  const now = new Date();
  const deliveryDate = new Date(now);
  let timeLabel = "10:00 AM - 1:00 PM";

  if (deliveryMode === "Same Day") {
    if (now.getHours() >= 18) {
      deliveryDate.setDate(deliveryDate.getDate() + 1);
      timeLabel = "10:00 AM - 1:00 PM";
    } else {
      timeLabel = "By 7:00 PM Today";
    }
  } else if (deliveryMode === "Midnight") {
    deliveryDate.setDate(deliveryDate.getDate() + 1);
    timeLabel = "11:00 PM - 11:59 PM";
  } else {
    deliveryDate.setDate(deliveryDate.getDate() + 1);
    timeLabel = "10:00 AM - 1:00 PM";
  }

  return {
    dateLabel: deliveryDate.toLocaleDateString("en-IN", {
      weekday: "short", month: "short", day: "numeric",
    }),
    timeLabel,
  };
}

function CartPage() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState({});
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [showCheckoutPopup, setShowCheckoutPopup] = useState(false);
  const [orderData, setOrderData] = useState({
    customerName: '', email: '', phone: '',
    deliveryLocation: '', paymentMethod: 'cod',
    isProcessing: false, orderPlaced: false
  });
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [locationError, setLocationError] = useState('');

  // ── NEW: inline address editing state ──
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [editAddressValue, setEditAddressValue] = useState('');
  const addressInputRef = useRef(null);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(cartStorageKey) || "{}");
      if (stored && typeof stored === "object") setCartItems(stored);
    } catch { setCartItems({}); }
  }, []);

  useEffect(() => {
    const readLocation = () => {
      try {
        const storedLocation = JSON.parse(localStorage.getItem(deliveryLocationStorageKey) || "null");
        if (storedLocation?.label) {
          setDeliveryLocation(storedLocation);
          setOrderData(prev => ({ ...prev, deliveryLocation: storedLocation.label }));
          return;
        }
      } catch {}
      setDeliveryLocation({ label: "Select delivery location", details: "Delivery address will appear here" });
    };
    readLocation();
    window.addEventListener("storage", readLocation);
    window.addEventListener("bakery-location-updated", readLocation);
    return () => {
      window.removeEventListener("storage", readLocation);
      window.removeEventListener("bakery-location-updated", readLocation);
    };
  }, []);

  useEffect(() => { getCurrentLocation(); }, []);

  // Focus input when editing starts
  useEffect(() => {
    if (isEditingAddress && addressInputRef.current) {
      addressInputRef.current.focus();
      addressInputRef.current.select();
    }
  }, [isEditingAddress]);

  const getCurrentLocation = () => {
    if (!navigator.geolocation) { setLocationError('Geolocation not supported'); return; }
    setIsGettingLocation(true);
    setLocationError('');
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`);
          const data = await response.json();
          if (data?.display_name) {
            const address = data.display_name;
            const locationData = { label: address, details: `Lat: ${latitude.toFixed(6)}, Lng: ${longitude.toFixed(6)}`, coordinates: { latitude, longitude } };
            localStorage.setItem(deliveryLocationStorageKey, JSON.stringify(locationData));
            setDeliveryLocation(locationData);
            setOrderData(prev => ({ ...prev, deliveryLocation: address }));
            window.dispatchEvent(new CustomEvent("bakery-location-updated"));
          }
        } catch {
          setLocationError('Could not fetch address. Please enter manually.');
          const fallbackAddress = `Location: ${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
          setOrderData(prev => ({ ...prev, deliveryLocation: fallbackAddress }));
        }
        setIsGettingLocation(false);
      },
      (error) => {
        setLocationError('Could not get location. Please enable location services or enter manually.');
        setIsGettingLocation(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
    );
  };

  // ── NEW: Save inline edited address ──
  const handleSaveAddress = () => {
    const trimmed = editAddressValue.trim();
    if (trimmed) {
      const locationData = { label: trimmed, details: 'Manually entered address' };
      localStorage.setItem(deliveryLocationStorageKey, JSON.stringify(locationData));
      setDeliveryLocation(locationData);
      setOrderData(prev => ({ ...prev, deliveryLocation: trimmed }));
      window.dispatchEvent(new CustomEvent("bakery-location-updated"));
    }
    setIsEditingAddress(false);
  };

  const handleStartEditing = () => {
    setEditAddressValue(orderData.deliveryLocation || deliveryLocation?.label || '');
    setIsEditingAddress(true);
  };

  const syncCart = (nextCart) => {
    setCartItems(nextCart);
    localStorage.setItem(cartStorageKey, JSON.stringify(nextCart));
    window.dispatchEvent(new CustomEvent("bakery-cart-updated"));
  };

  const cartProducts = useMemo(() => {
    return Object.entries(cartItems).map(([id, rawEntry]) => {
      const item = productCatalog.find((p) => p.id === id);
      if (!item) return null;
      const entry = typeof rawEntry === "number" ? { quantity: Number(rawEntry) }
        : rawEntry && typeof rawEntry === "object" ? rawEntry : { quantity: 0 };
      const quantity = Number(entry.quantity || 0);
      if (quantity <= 0) return null;
      const weight = isWeightSelectableProduct(item) ? Number(entry.weight || 1) : null;
      const basePrice = getBaseCakePrice(item);
      const unitPrice = isWeightSelectableProduct(item) ? Math.round((basePrice * weight) / 0.5) : basePrice;
      const deliverySchedule = getDeliverySchedule(item.delivery);
      return { ...item, quantity, weight, sourcePath: entry.sourcePath || getFallbackSourcePath(item), unitPrice, lineTotal: unitPrice * quantity, deliveryDate: deliverySchedule.dateLabel, deliveryTime: deliverySchedule.timeLabel };
    }).filter(Boolean);
  }, [cartItems]);

  const subtotal = useMemo(() => cartProducts.reduce((sum, item) => sum + item.lineTotal, 0), [cartProducts]);
  const totalItems = useMemo(() => cartProducts.reduce((sum, item) => sum + item.quantity, 0), [cartProducts]);
  const deliveryFee = 0;
  const grandTotal = subtotal + deliveryFee;

  const updateEntry = (itemId, updates) => {
    const currentRawEntry = cartItems[itemId];
    const currentEntry = typeof currentRawEntry === "number" ? { quantity: Number(currentRawEntry) }
      : currentRawEntry && typeof currentRawEntry === "object" ? currentRawEntry : { quantity: 0 };
    const nextEntry = { ...currentEntry, ...updates };
    if (Number(nextEntry.quantity || 0) <= 0) {
      const nextCart = { ...cartItems };
      delete nextCart[itemId];
      syncCart(nextCart);
      return;
    }
    syncCart({ ...cartItems, [itemId]: nextEntry });
  };

  const clearCart = () => syncCart({});

  const playSuccessSound = () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator1 = audioContext.createOscillator();
    const oscillator2 = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator1.connect(gainNode); oscillator2.connect(gainNode); gainNode.connect(audioContext.destination);
    oscillator1.frequency.setValueAtTime(523.25, audioContext.currentTime);
    oscillator1.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1);
    oscillator1.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2);
    oscillator2.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.05);
    oscillator2.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.15);
    oscillator2.frequency.setValueAtTime(1046.50, audioContext.currentTime + 0.25);
    oscillator1.type = 'sine'; oscillator2.type = 'sine';
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.6);
    oscillator1.start(audioContext.currentTime); oscillator2.start(audioContext.currentTime);
    oscillator1.stop(audioContext.currentTime + 0.6); oscillator2.stop(audioContext.currentTime + 0.6);
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setOrderData(prev => ({ ...prev, isProcessing: true }));
    const now = new Date();
    const deliveryTime = new Date(now.getTime() + (30 + Math.floor(Math.random() * 16)) * 60000);
    const orderDetails = {
      orderId: 'ORD' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      orderDate: new Date().toISOString(),
      customerName: orderData.customerName, email: orderData.email, phone: orderData.phone,
      deliveryLocation: orderData.deliveryLocation, paymentMethod: orderData.paymentMethod,
      items: cartProducts, subtotal, deliveryFee, grandTotal, status: 'Confirmed',
      deliveryTime: deliveryTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false }),
      deliveryDate: deliveryTime.toISOString(), estimatedDelivery: deliveryTime.toISOString()
    };
    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    existingOrders.push(orderDetails);
    localStorage.setItem('orders', JSON.stringify(existingOrders));
    localStorage.setItem('lastOrder', JSON.stringify(orderDetails));
    playSuccessSound();
    setTimeout(() => {
      setOrderData(prev => ({ ...prev, isProcessing: false, orderPlaced: true }));
      clearCart();
      setTimeout(() => {
        setShowCheckoutPopup(false);
        setOrderData(prev => ({ ...prev, orderPlaced: false }));
        navigate('/track-order');
      }, 2000);
    }, 1500);
  };

  return (
    <>
      <style>{`
        .checkout-scroll::-webkit-scrollbar { width: 4px; }
        .checkout-scroll::-webkit-scrollbar-track { background: #fef2f2; }
        .checkout-scroll::-webkit-scrollbar-thumb { background: #ef4444; border-radius: 99px; }

        /* Address edit field animation */
        .address-edit-enter {
          animation: slideDown 0.2s ease-out;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="min-h-screen bg-gray-50 py-4 px-3 sm:px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Your Cart</h1>
              <p className="text-sm text-gray-600">{totalItems} item{totalItems === 1 ? "" : "s"} in your order</p>
            </div>
          </div>

          {cartProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-600 mb-6">Add cakes from menu to see them here.</p>
              <Link to="/menu" className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                Browse Menu
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-4">

              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  {cartProducts.map((item) => (
                    <div key={item.id} className="p-3 sm:p-4 border-b border-gray-200 last:border-b-0">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <Link to={item.sourcePath}>
                            <img src={item.imageUrl || fallbackCakeImage} alt={item.name}
                              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg" loading="eager"
                              onError={(e) => { e.currentTarget.src = fallbackCakeImage; }} />
                          </Link>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between mb-2">
                            <div className="flex-1">
                              <Link to={item.sourcePath} className="text-sm sm:text-base font-semibold text-gray-900 hover:text-red-600 transition-colors block">{item.name}</Link>
                              <p className="text-base sm:text-lg font-bold text-gray-900 mt-1">₹{item.unitPrice}</p>
                            </div>
                            <button onClick={() => updateEntry(item.id, { quantity: 0 })} className="text-red-600 hover:text-red-700 font-medium text-xs sm:text-sm ml-2">Remove</button>
                          </div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-gray-700 text-sm">Qty:</span>
                              <div className="flex items-center border border-gray-300 rounded-lg">
                                <button onClick={() => updateEntry(item.id, { quantity: item.quantity - 1 })} className="px-2 py-1 text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors">−</button>
                                <span className="px-2 py-1 font-medium text-sm">{item.quantity}</span>
                                <button onClick={() => updateEntry(item.id, { quantity: item.quantity + 1 })} className="px-2 py-1 text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors">+</button>
                              </div>
                            </div>
                            {isWeightSelectableProduct(item) && (
                              <div className="flex items-center gap-2">
                                <select value={item.weight} onChange={(e) => updateEntry(item.id, { weight: Number(e.target.value) })} className="px-2 py-1 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                                  {weightOptions.map((w) => (<option key={w} value={w}>{w} Kg</option>))}
                                </select>
                              </div>
                            )}
                          </div>
                          <div className="text-right">
                            <span className="text-sm text-gray-600">Total: </span>
                            <span className="font-medium text-gray-900 text-base">₹{item.lineTotal}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-sm p-4 sticky top-4">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="text-xs font-medium text-gray-700 mb-1">Delivery Location</div>
                    <div className="font-medium text-gray-900 text-sm">{deliveryLocation.label || 'Select location'}</div>
                    <div className="text-xs text-gray-600">{deliveryLocation.details || ''}</div>
                  </div>
                  {cartProducts.length > 0 && (
                    <div className="bg-blue-50 rounded-lg p-3 mb-4">
                      <div className="text-xs font-medium text-gray-700 mb-1">Delivery Details</div>
                      <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
                        <span>Delivery:</span>
                        <span className="font-medium text-gray-900">{cartProducts[0].deliveryDate}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Time:</span>
                        <span className="font-medium text-gray-900">{cartProducts[0].deliveryTime}</span>
                      </div>
                    </div>
                  )}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm"><span className="text-gray-600">Sub Total</span><span className="font-medium">₹{subtotal}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-gray-600">Delivery Charges</span><span className="font-medium text-green-600">Free</span></div>
                    <div className="border-t pt-2"><div className="flex justify-between font-bold text-base"><span>Grand Total</span><span>₹{grandTotal}</span></div></div>
                  </div>
                  <div className="space-y-2">
                    <button onClick={() => setShowCheckoutPopup(true)} className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-red-700 transition-colors text-sm sm:text-base">Place Order</button>
                    <Link to="/menu" className="block w-full text-center text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm">Continue Shopping</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ─── CHECKOUT POPUP ─────────────────────────────────── */}
        {showCheckoutPopup && (
          <>
            <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => { if (!isEditingAddress) setShowCheckoutPopup(false); }} />

            <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[94vw] sm:w-[480px] max-h-[90vh] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden">

              {/* Red Header */}
              <div className="flex-shrink-0 bg-gradient-to-br from-red-700 to-red-500 px-6 py-5 relative">
                <button onClick={() => setShowCheckoutPopup(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/35 transition-colors flex items-center justify-center text-white text-xl font-light">×</button>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-red-200 mb-1">Secure Checkout</p>
                <h3 className="text-2xl font-extrabold text-white">Quick Checkout</h3>
              </div>

              {/* Scrollable Body */}
              <div className="flex-1 overflow-y-auto checkout-scroll">

                {/* Order Summary Strip */}
                <div className="bg-red-50 border-b border-red-100 px-6 py-4">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">Order Summary</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-500"><span>Sub Total</span><span className="font-semibold text-gray-800">₹{subtotal}</span></div>
                    <div className="flex justify-between text-sm text-gray-500"><span>Delivery Charges</span><span className="font-bold text-green-600">Free 🎉</span></div>
                    <div className="flex justify-between pt-3 border-t border-dashed border-gray-200 text-base font-extrabold text-gray-900"><span>Grand Total</span><span className="text-red-600">₹{grandTotal}</span></div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleCheckoutSubmit} className="px-6 py-5 space-y-5">

                  {/* Customer Details */}
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">Your Details</p>
                    <div className="space-y-3">
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base pointer-events-none">👤</span>
                        <input type="text" placeholder="Full Name" required
                          className="w-full pl-10 pr-4 py-3 text-sm border-2 border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100 transition-all placeholder:text-gray-400"
                          onChange={e => setOrderData(prev => ({ ...prev, customerName: e.target.value }))} />
                      </div>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base pointer-events-none">✉️</span>
                        <input type="email" placeholder="Email Address" required
                          className="w-full pl-10 pr-4 py-3 text-sm border-2 border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100 transition-all placeholder:text-gray-400"
                          onChange={e => setOrderData(prev => ({ ...prev, email: e.target.value }))} />
                      </div>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base pointer-events-none">📱</span>
                        <input type="tel" placeholder="Phone Number" required
                          className="w-full pl-10 pr-4 py-3 text-sm border-2 border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100 transition-all placeholder:text-gray-400"
                          onChange={e => setOrderData(prev => ({ ...prev, phone: e.target.value }))} />
                      </div>
                    </div>
                  </div>

                  {/* ── DELIVERY LOCATION (fully inline, no prompt) ── */}
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">Delivery Location</p>

                    <div className={`rounded-xl border-2 transition-all duration-200 overflow-hidden ${isEditingAddress ? 'border-blue-500 bg-white shadow-md shadow-blue-100' : 'border-blue-200 bg-blue-50'}`}>

                      {/* Location display / edit area */}
                      <div className="flex items-start gap-2.5 px-3 pt-3 pb-2">
                        <span className="text-lg mt-0.5 flex-shrink-0">📍</span>
                        <div className="flex-1 min-w-0">
                          {isEditingAddress ? (
                            /* ── INLINE TEXTAREA for editing ── */
                            <div className="address-edit-enter">
                              <textarea
                                ref={addressInputRef}
                                value={editAddressValue}
                                onChange={e => setEditAddressValue(e.target.value)}
                                onKeyDown={e => {
                                  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSaveAddress(); }
                                  if (e.key === 'Escape') setIsEditingAddress(false);
                                }}
                                rows={3}
                                placeholder="Enter your full delivery address..."
                                className="w-full text-sm text-gray-800 font-medium bg-transparent border-none outline-none resize-none placeholder:text-gray-400 leading-snug"
                              />
                              <p className="text-[10px] text-gray-400 mt-1">Press Enter to save • Esc to cancel</p>
                            </div>
                          ) : (
                            /* ── Display mode ── */
                            <div>
                              {isGettingLocation ? (
                                <div className="flex items-center gap-2">
                                  <svg className="animate-spin w-3.5 h-3.5 text-blue-600" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="10" stroke="rgba(59,130,246,0.3)" strokeWidth="4"/>
                                    <path d="M4 12a8 8 0 018-8" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round"/>
                                  </svg>
                                  <span className="text-xs text-blue-600 font-medium">Getting your location…</span>
                                </div>
                              ) : (
                                <p className="text-xs font-bold text-blue-700 leading-snug line-clamp-2">
                                  {orderData.deliveryLocation || 'Tap "Use My Location" to auto-detect'}
                                </p>
                              )}
                              {locationError && <p className="text-[10px] text-red-600 mt-1">{locationError}</p>}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Action buttons row */}
                      <div className="flex gap-2 px-3 pb-3">
                        {isEditingAddress ? (
                          <>
                            {/* Save button */}
                            <button type="button" onClick={handleSaveAddress}
                              className="flex-1 bg-green-600 hover:bg-green-700 active:scale-95 text-white text-xs font-bold py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1">
                              ✅ Save Address
                            </button>
                            {/* Cancel button */}
                            <button type="button" onClick={() => setIsEditingAddress(false)}
                              className="flex-shrink-0 bg-gray-200 hover:bg-gray-300 active:scale-95 text-gray-700 text-xs font-bold py-2 px-3 rounded-lg transition-all">
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            {/* Use My Location */}
                            <button type="button" onClick={getCurrentLocation} disabled={isGettingLocation}
                              className="flex-1 bg-blue-600 hover:bg-blue-700 active:scale-95 disabled:bg-blue-400 disabled:cursor-not-allowed text-white text-xs font-bold py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1">
                              {isGettingLocation ? (
                                <><svg className="animate-spin w-3 h-3" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="4"/><path d="M4 12a8 8 0 018-8" stroke="white" strokeWidth="4" strokeLinecap="round"/></svg> Locating…</>
                              ) : (
                                <>🎯 Use My Location</>
                              )}
                            </button>
                            {/* Change / Type manually */}
                            <button type="button" onClick={handleStartEditing}
                              className="flex-1 bg-white hover:bg-gray-50 active:scale-95 border-2 border-gray-200 hover:border-gray-300 text-gray-700 text-xs font-bold py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1">
                              ✏️ Change Address
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">Payment Method</p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: 'cod', icon: '💵', label: 'Cash', sub: 'On Delivery' },
                        { value: 'online', icon: '💳', label: 'Online', sub: 'UPI / Card' }
                      ].map(opt => (
                        <label key={opt.value} className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${orderData.paymentMethod === opt.value ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300'}`}>
                          <input type="radio" name="payment" value={opt.value} checked={orderData.paymentMethod === opt.value} onChange={e => setOrderData(prev => ({ ...prev, paymentMethod: e.target.value }))} className="accent-red-600" />
                          <div>
                            <p className="text-xs font-bold text-gray-800">{opt.icon} {opt.label}</p>
                            <p className="text-[10px] text-gray-500">{opt.sub}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit */}
                  <button type="submit" disabled={orderData.isProcessing}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-700 to-red-500 hover:from-red-800 hover:to-red-600 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-extrabold text-base shadow-lg shadow-red-200 transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98]">
                    {orderData.isProcessing ? (
                      <><svg className="animate-spin w-5 h-5 text-white" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="4"/><path d="M4 12a8 8 0 018-8" stroke="white" strokeWidth="4" strokeLinecap="round"/></svg> Processing…</>
                    ) : (
                      <>🔒 Pay ₹{grandTotal} Securely</>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-gray-400">🔐 100% Secure & Encrypted Payment</p>
                </form>
              </div>
            </div>
          </>
        )}

        {/* ─── ORDER SUCCESS MODAL ─────────────────────────────── */}
        {orderData.orderPlaced && (
          <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-5">
            <div className="bg-white rounded-3xl p-10 text-center max-w-xs w-full shadow-2xl animate-bounce">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-green-200">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-extrabold text-green-600 mb-2">Order Confirmed! 🎉</h2>
              <p className="text-gray-500 text-sm mb-5">Your cake is on its way!</p>
              <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-2.5 text-xs font-semibold text-green-700">
                Redirecting to Track Order...
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CartPage;