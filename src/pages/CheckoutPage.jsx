import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Truck, 
  Lock, 
  CreditCard, 
  CheckCircle, 
  AlertCircle, 
  ArrowLeft, 
  ArrowRight,
  ShoppingBag,
  MapPin,
  Check
} from 'lucide-react';
import { LotusJaaliPatternBackground } from '../components/common/BackgroundIllustrations';
import { placeOrder, getImageSrc } from '../services/api';

export default function CheckoutPage({ 
  cartItems = [], 
  onNavigate, 
  onClearCart,
  currentUser 
}) {
  const [formData, setFormData] = useState({
    customer_name: currentUser?.name || '',
    email: currentUser?.email || '',
    phone: currentUser?.phone || '',
    shipping_address: '',
    city: '',
    state: 'Rajasthan',
    pincode: '',
    payment_method: 'COD'
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [completedOrder, setCompletedOrder] = useState(null);

  // Calculate totals
  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const shippingFee = subtotal > 999 || cartItems.length === 0 ? 0 : 99;
  const finalTotal = subtotal + shippingFee;

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      setError('Your cart is empty. Add artifacts before placing an order.');
      return;
    }

    setLoading(true);
    setError('');

    const fullAddress = `${formData.shipping_address}, ${formData.city}, ${formData.state} - ${formData.pincode}`;

    const payload = {
      customer_name: formData.customer_name,
      email: formData.email,
      phone: formData.phone,
      shipping_address: fullAddress,
      subtotal: subtotal,
      discount_amount: 0,
      shipping_fee: shippingFee,
      total_amount: finalTotal,
      payment_method: formData.payment_method,
      items: cartItems.map(item => ({
        product_id: item.product.id,
        product_name: item.product.name,
        quantity: item.quantity,
        price: item.product.price
      }))
    };

    try {
      const res = await placeOrder(payload);
      if (res.status === 'success') {
        setCompletedOrder(res);
        if (onClearCart) onClearCart();
      } else {
        setError(res.message || 'Failed to place order. Please try again.');
      }
    } catch (err) {
      setError(err.message || 'Error connecting to order server.');
    } finally {
      setLoading(false);
    }
  };

  if (completedOrder) {
    return (
      <div className="min-h-screen bg-brand-bg py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-stone-200 shadow-xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
          <LotusJaaliPatternBackground className="text-amber-900/10" />
          
          <div className="relative z-10 space-y-4">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle className="w-12 h-12" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-900 bg-amber-900/10 px-3 py-1 rounded-full border border-amber-900/20">
                Order Confirmed & Received
              </span>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
                Thank You for Your Order!
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                Your devotional artifacts order has been recorded in our master workshop catalog.
              </p>
            </div>

            <div className="bg-stone-50 border border-stone-200 p-6 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">Your Order Reference Number</span>
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-amber-900 block">{completedOrder.order_number}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-2">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 flex items-start gap-3">
                <Truck className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-stone-900 block">Insured Express Shipping</span>
                  <span className="text-stone-500">Estimated delivery in 4-6 business days with live tracking.</span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-stone-900 block">Transit Protection</span>
                  <span className="text-stone-500">Multi-layer wooden crating for safe delivery.</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onNavigate && onNavigate('shop')}
                className="px-8 py-4 bg-amber-900 hover:bg-stone-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Continue Browsing Collections</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg pb-24">
      {/* Header Banner */}
      <div className="relative bg-[#FAF6F0] py-12 sm:py-16 border-b border-[#EADBCA] overflow-hidden">
        <LotusJaaliPatternBackground className="text-amber-900/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <button
            onClick={() => onNavigate && onNavigate('cart')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 hover:underline mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Cart</span>
          </button>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Dedicated Order Checkout
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto font-serif italic">
            Complete your delivery address and payment choice to dispatch your divine handcrafted artifacts.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Steps */}
          <div className="lg:col-span-7 space-y-6">
            
            {error && (
              <div className="p-4 bg-rose-50 text-rose-700 border border-rose-200 rounded-2xl text-xs font-bold flex items-center gap-2">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Step 1: Customer Contact & Shipping Address */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
                <div className="w-8 h-8 rounded-full bg-amber-900 text-white flex items-center justify-center text-xs font-bold font-mono">1</div>
                <div>
                  <h2 className="text-lg font-serif font-bold text-stone-900">Shipping & Delivery Details</h2>
                  <p className="text-xs text-stone-500">Pan-India express delivery address</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="customer_name"
                    required
                    value={formData.customer_name}
                    onChange={handleChange}
                    placeholder="Shashwat Mishra"
                    className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl px-4 py-3 border border-stone-200 outline-none focus:border-amber-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl px-4 py-3 border border-stone-200 outline-none focus:border-amber-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="shashwat@example.com"
                  className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl px-4 py-3 border border-stone-200 outline-none focus:border-amber-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">Full Street Address *</label>
                <textarea
                  name="shipping_address"
                  required
                  rows="2"
                  value={formData.shipping_address}
                  onChange={handleChange}
                  placeholder="House No, Apartment / Building Name, Street, Landmark"
                  className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl px-4 py-3 border border-stone-200 outline-none focus:border-amber-800"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">City *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Jaipur"
                    className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl px-4 py-3 border border-stone-200 outline-none focus:border-amber-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">State *</label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Rajasthan"
                    className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl px-4 py-3 border border-stone-200 outline-none focus:border-amber-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">Pincode *</label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="302001"
                    className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl px-4 py-3 border border-stone-200 outline-none focus:border-amber-800"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Payment Option */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
                <div className="w-8 h-8 rounded-full bg-amber-900 text-white flex items-center justify-center text-xs font-bold font-mono">2</div>
                <div>
                  <h2 className="text-lg font-serif font-bold text-stone-900">Select Payment Method</h2>
                  <p className="text-xs text-stone-500">100% Secure & Encrypted Payment Options</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold">
                <label className={`p-4 rounded-2xl border cursor-pointer flex items-center gap-3 transition-all ${formData.payment_method === 'COD' ? 'border-amber-900 bg-amber-900/5 text-amber-950 shadow-xs' : 'border-stone-200 text-stone-700 hover:bg-stone-50'}`}>
                  <input type="radio" name="payment_method" value="COD" checked={formData.payment_method === 'COD'} onChange={handleChange} />
                  <div>
                    <span className="block font-bold">Cash on Delivery (COD)</span>
                    <span className="text-[10px] text-stone-500 font-normal">Pay cash upon safe doorstep arrival</span>
                  </div>
                </label>

                <label className={`p-4 rounded-2xl border cursor-pointer flex items-center gap-3 transition-all ${formData.payment_method === 'UPI' ? 'border-amber-900 bg-amber-900/5 text-amber-950 shadow-xs' : 'border-stone-200 text-stone-700 hover:bg-stone-50'}`}>
                  <input type="radio" name="payment_method" value="UPI" checked={formData.payment_method === 'UPI'} onChange={handleChange} />
                  <div>
                    <span className="block font-bold">UPI / PayTM / GPay</span>
                    <span className="text-[10px] text-stone-500 font-normal">Instant QR scanner payment</span>
                  </div>
                </label>

                <label className={`p-4 rounded-2xl border cursor-pointer flex items-center gap-3 transition-all ${formData.payment_method === 'CARD' ? 'border-amber-900 bg-amber-900/5 text-amber-950 shadow-xs' : 'border-stone-200 text-stone-700 hover:bg-stone-50'}`}>
                  <input type="radio" name="payment_method" value="CARD" checked={formData.payment_method === 'CARD'} onChange={handleChange} />
                  <div>
                    <span className="block font-bold">Credit / Debit Cards</span>
                    <span className="text-[10px] text-stone-500 font-normal">Visa, Mastercard, RuPay, Amex</span>
                  </div>
                </label>

                <label className={`p-4 rounded-2xl border cursor-pointer flex items-center gap-3 transition-all ${formData.payment_method === 'NETBANKING' ? 'border-amber-900 bg-amber-900/5 text-amber-950 shadow-xs' : 'border-stone-200 text-stone-700 hover:bg-stone-50'}`}>
                  <input type="radio" name="payment_method" value="NETBANKING" checked={formData.payment_method === 'NETBANKING'} onChange={handleChange} />
                  <div>
                    <span className="block font-bold">NetBanking</span>
                    <span className="text-[10px] text-stone-500 font-normal">All major Indian banks</span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Right Column: Order Summary & Place Order Button */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
              <h2 className="text-lg font-serif font-bold text-stone-900 border-b border-stone-100 pb-3">
                Order Items Summary ({cartItems.length})
              </h2>

              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-3 border-b border-stone-100 pb-3">
                    <img src={getImageSrc(item.product.image)} alt={item.product.name} className="w-12 h-12 rounded-xl object-cover bg-stone-100 border border-stone-200 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-serif font-bold text-stone-900 truncate">{item.product.name}</h4>
                      <span className="text-[11px] text-stone-500 font-mono">Qty: {item.quantity} &times; ₹{item.product.price.toLocaleString('en-IN')}</span>
                    </div>
                    <span className="text-xs font-bold font-mono text-stone-900 shrink-0">₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 text-xs border-t border-stone-100 pt-4">
                <div className="flex justify-between text-stone-600">
                  <span>Cart Items Subtotal</span>
                  <span className="font-bold text-stone-900 font-mono">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Pan-India Insured Express Shipping</span>
                  {shippingFee === 0 ? (
                    <span className="font-bold text-emerald-700 uppercase">FREE</span>
                  ) : (
                    <span className="font-bold text-stone-900 font-mono">₹{shippingFee}</span>
                  )}
                </div>
              </div>

              <div className="border-t border-stone-200 pt-4 space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-serif font-bold text-stone-900">Total Payable Amount</span>
                  <span className="text-2xl font-serif font-bold text-amber-900 font-mono">
                    ₹{finalTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || cartItems.length === 0}
                className="w-full py-4 bg-amber-900 hover:bg-stone-950 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-2xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Lock className="w-4 h-4" />
                <span>{loading ? 'Processing Order...' : 'Place Order Now'}</span>
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}
