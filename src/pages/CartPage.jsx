import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Tag, 
  Check, 
  ArrowLeft,
  Lock,
  Sparkles,
  X,
  CreditCard,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { LotusJaaliPatternBackground } from '../components/common/BackgroundIllustrations';
import { placeOrder, getImageSrc, applyCouponAPI } from '../services/api';

export default function CartPage({ 
  cartItems = [], 
  onUpdateQuantity, 
  onRemoveItem, 
  onNavigate,
  onClearCart,
  appliedCoupon = null,
  onApplyCoupon,
  onRemoveCoupon,
  currentUser = null,
  onOpenAuthModal
}) {
  const [couponCode, setCouponCode] = useState(appliedCoupon?.code || '');
  const [couponError, setCouponError] = useState('');
  const [applyingCoupon, setApplyingCoupon] = useState(false);

  const appliedCouponInfo = appliedCoupon;
  const couponApplied = !!appliedCoupon;

  // Checkout Modal State
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutData, setCheckoutData] = useState({
    customer_name: '',
    email: '',
    phone: '',
    shipping_address: '',
    city: '',
    pincode: '',
    payment_method: 'COD'
  });
  const [placingOrder, setPlacingOrder] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(null);
  const [orderError, setOrderError] = useState('');

  // Calculate totals
  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const totalSavings = cartItems.reduce((acc, item) => {
    const orig = item.product.originalPrice || item.product.price;
    return acc + ((orig - item.product.price) * item.quantity);
  }, 0);
  
  let discountAmount = 0;
  if (couponApplied && appliedCouponInfo) {
    if (subtotal < appliedCouponInfo.min_order_amount) {
      // Automatic invalidation if subtotal dropped below min order
      discountAmount = 0;
    } else if (appliedCouponInfo.discount_type === 'percentage') {
      discountAmount = Math.round((subtotal * appliedCouponInfo.discount_value) / 100);
    } else {
      discountAmount = Math.min(appliedCouponInfo.discount_value, subtotal);
    }
  }

  const shippingFee = subtotal > 999 || cartItems.length === 0 ? 0 : 99;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleApplyCoupon = async (e) => {
    e.preventDefault();
    setCouponError('');
    const code = couponCode.trim();
    if (!code) {
      setCouponError('Please enter a coupon code');
      return;
    }

    setApplyingCoupon(true);
    const res = await applyCouponAPI(code, subtotal);
    setApplyingCoupon(false);

    if (res && res.status === 'success') {
      if (onApplyCoupon) onApplyCoupon(res.data);
      setCouponError('');
    } else {
      if (onRemoveCoupon) onRemoveCoupon();
      setCouponError(res?.message || 'Invalid promo code');
    }
  };

  const handleRemoveCoupon = () => {
    if (onRemoveCoupon) onRemoveCoupon();
    setCouponCode('');
    setCouponError('');
  };

  const handleInputChange = (e) => {
    setCheckoutData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setOrderError('');
  };

  const handlePlaceOrderSubmit = async (e) => {
    e.preventDefault();
    setPlacingOrder(true);
    setOrderError('');

    const fullAddress = `${checkoutData.shipping_address}, ${checkoutData.city} - ${checkoutData.pincode}`;

    const payload = {
      customer_name: checkoutData.customer_name,
      email: checkoutData.email,
      phone: checkoutData.phone,
      shipping_address: fullAddress,
      subtotal: subtotal,
      discount_amount: discountAmount,
      shipping_fee: shippingFee,
      total_amount: finalTotal,
      payment_method: checkoutData.payment_method,
      items: cartItems.map(item => ({
        product_id: item.product.id,
        product_name: item.product.name,
        quantity: item.quantity,
        price: item.product.price
      }))
    };

    const res = await placeOrder(payload);
    setPlacingOrder(false);

    if (res.status === 'success') {
      setOrderSuccess(res);
      if (onClearCart) onClearCart();
    } else {
      setOrderError(res.message || 'Failed to place order. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg pb-24">
      
      {/* Header Banner */}
      <div className="relative bg-[#FAF6F0] py-12 sm:py-16 border-b border-[#EADBCA] overflow-hidden">
        <LotusJaaliPatternBackground className="text-amber-900/10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/10 text-amber-900 text-[11px] font-bold uppercase tracking-widest border border-amber-900/20">
            <ShoppingBag className="w-3.5 h-3.5 text-amber-700" />
            <span>Devotional Checkout Bag</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Your Shopping Cart
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto font-serif italic">
            Review your chosen divine artifacts before proceeding to express insured delivery across India.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 shadow-sm max-w-2xl mx-auto space-y-6">
            <div className="w-20 h-20 bg-amber-900/10 rounded-full flex items-center justify-center mx-auto text-amber-900 text-3xl">
              🪔
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-serif font-bold text-stone-900">Your Cart is Currently Empty</h2>
              <p className="text-sm text-stone-500 max-w-md mx-auto">
                Explore our hand-crafted oil paintings, brass idols, and copper puja sets to add sacred charm to your home.
              </p>
            </div>
            <button
              onClick={() => onNavigate && onNavigate('shop')}
              className="px-8 py-3.5 bg-amber-900 hover:bg-stone-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Devotional Artifacts</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Cart Items List */}
            <div className="lg:col-span-8 space-y-4">
              
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <span className="text-sm font-bold text-stone-900 uppercase tracking-wider">
                  Items in Cart ({cartItems.length})
                </span>
                <button
                  onClick={() => onNavigate && onNavigate('shop')}
                  className="text-xs font-bold text-amber-900 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Continue Shopping</span>
                </button>
              </div>

              {/* Items Card List */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div 
                    key={item.product.id}
                    className="bg-white p-4 sm:p-6 rounded-2xl border border-stone-200/90 shadow-xs flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center"
                  >
                    <img 
                      src={getImageSrc(item.product.image)} 
                      alt={item.product.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover bg-stone-100 shrink-0 border border-stone-200"
                    />

                    <div className="flex-1 space-y-1.5 w-full">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm sm:text-base font-serif font-bold text-stone-900 line-clamp-1">
                          {item.product.name}
                        </h3>
                      </div>

                      <p className="text-xs text-stone-500 font-medium">
                        Material: <span className="text-stone-800">{item.product.material || 'Devotional Artifact'}</span>
                      </p>

                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="font-bold text-stone-900">₹{item.product.price.toLocaleString('en-IN')}</span>
                        {item.product.originalPrice && (
                          <span className="text-stone-400 line-through">₹{item.product.originalPrice.toLocaleString('en-IN')}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 border-stone-100 pt-3 sm:pt-0">
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center bg-stone-100 border border-stone-200 rounded-xl">
                        <button
                          onClick={() => onUpdateQuantity && onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="p-2 text-stone-600 hover:text-stone-900 cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-bold font-mono text-stone-900">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity && onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="p-2 text-stone-600 hover:text-stone-900 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Item Subtotal & Delete */}
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-stone-900 font-mono">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                        <button
                          onClick={() => onRemoveItem && onRemoveItem(item.product.id)}
                          className="p-2 text-stone-400 hover:text-rose-600 rounded-xl hover:bg-rose-50 transition-colors cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                    </div>
                  </div>
                ))}
              </div>

              {/* Guarantees Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white rounded-2xl border border-stone-200/80 flex items-center gap-3">
                  <Truck className="w-6 h-6 text-amber-700 shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-stone-900 block">Complimentary Express Shipping</span>
                    <span className="text-stone-500">Free delivery on orders above ₹999</span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-stone-200/80 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-amber-700 shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-stone-900 block">Zero Damage Transit Guarantee</span>
                    <span className="text-stone-500">Multi-layer protective foam & crating</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Order Summary Sidebar */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
                
                <h2 className="text-lg font-serif font-bold text-stone-900 border-b border-stone-100 pb-3">
                  Order Summary
                </h2>

                {/* Promo Code Form */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                    Have a Promo Code?
                  </label>

                  {couponApplied && appliedCouponInfo ? (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                          <Check className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-mono font-bold text-emerald-950 block text-xs tracking-wider uppercase">
                            {appliedCouponInfo.code}
                          </span>
                          <span className="text-[10px] font-medium text-emerald-700 block">
                            {appliedCouponInfo.discount_type === 'percentage' 
                              ? `${appliedCouponInfo.discount_value}% OFF applied` 
                              : `₹${appliedCouponInfo.discount_value} OFF applied`}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={handleRemoveCoupon}
                        className="text-stone-400 hover:text-rose-600 p-1 rounded-lg hover:bg-stone-200/50 transition-colors cursor-pointer"
                        title="Remove coupon"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyCoupon} className="space-y-2">
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <Tag className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                          <input
                            type="text"
                            placeholder="e.g. DIVINE10 or FESTIVE15"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                            className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl pl-9 pr-3 py-2.5 border border-stone-200 focus:outline-none focus:border-amber-800 uppercase"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={applyingCoupon}
                          className="px-4 py-2.5 bg-stone-900 hover:bg-stone-950 disabled:bg-stone-400 text-white text-xs font-bold uppercase rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
                        >
                          {applyingCoupon ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <span>Apply</span>
                          )}
                        </button>
                      </div>

                      {couponError && (
                        <span className="text-[11px] text-rose-600 font-medium block">
                          {couponError}
                        </span>
                      )}
                    </form>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 text-xs sm:text-sm border-t border-stone-100 pt-4">
                  <div className="flex justify-between text-stone-600">
                    <span>Subtotal</span>
                    <span className="font-bold text-stone-900 font-mono">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>

                  {totalSavings > 0 && (
                    <div className="flex justify-between text-emerald-700 font-semibold">
                      <span>Total Savings</span>
                      <span>- ₹{totalSavings.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  {couponApplied && discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-700 font-semibold">
                      <span>Promo Discount ({appliedCouponInfo?.code})</span>
                      <span className="font-mono">- ₹{discountAmount.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-stone-600">
                    <span>Express Pan-India Shipping</span>
                    {shippingFee === 0 ? (
                      <span className="font-bold text-emerald-700 uppercase">FREE</span>
                    ) : (
                      <span className="font-bold text-stone-900 font-mono">₹{shippingFee}</span>
                    )}
                  </div>
                </div>

                {/* Total */}
                <div className="border-t border-stone-200 pt-4 space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="text-base font-serif font-bold text-stone-900">Total Payable</span>
                    <span className="text-2xl font-serif font-bold text-amber-900 font-mono">
                      ₹{finalTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="text-[11px] text-stone-400 block text-right font-medium">
                    Inclusive of all taxes & insurance
                  </span>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={() => {
                    if (!currentUser) {
                      if (onOpenAuthModal) onOpenAuthModal();
                    } else {
                      if (onNavigate) onNavigate('checkout');
                    }
                  }}
                  className="w-full py-4 bg-amber-900 hover:bg-stone-950 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Lock className="w-4 h-4" />
                  <span>Proceed to Secure Checkout</span>
                </button>

                {/* Payment Badges */}
                <div className="text-center pt-2 space-y-2">
                  <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest block">
                    Supported Payment Methods
                  </span>
                  <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-stone-600 bg-stone-50 p-2 rounded-xl border border-stone-100">
                    <span>UPI</span> • <span>PayTM</span> • <span>Cards</span> • <span>NetBanking</span> • <span>COD</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>

      {/* CHECKOUT MODAL */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div className="bg-white w-full max-w-xl rounded-3xl border border-stone-200 shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 relative my-8">
            
            <button 
              onClick={() => { setIsCheckoutOpen(false); setOrderSuccess(null); }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 text-stone-500 hover:text-stone-900 hover:bg-stone-200 flex items-center justify-center transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {orderSuccess ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900">Order Placed Successfully!</h3>
                <p className="text-xs text-stone-600">
                  Thank you for your order with God Gift Arts. Your order reference number is:
                </p>
                <div className="inline-block bg-amber-900/10 border border-amber-900/20 px-4 py-2 rounded-xl text-lg font-mono font-bold text-amber-900">
                  {orderSuccess.order_number}
                </div>
                <p className="text-xs text-stone-500 italic max-w-md mx-auto">
                  We have dispatched your divine artifacts order details to our packaging unit. You will receive an SMS and email update shortly.
                </p>
                <button
                  onClick={() => {
                    setIsCheckoutOpen(false);
                    setOrderSuccess(null);
                    if (onNavigate) onNavigate('shop');
                  }}
                  className="px-8 py-3 bg-amber-900 hover:bg-stone-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-1 border-b border-stone-100 pb-4">
                  <h2 className="text-xl font-serif font-bold text-stone-900">Delivery & Shipping Address</h2>
                  <p className="text-xs text-stone-500">Provide shipping details for express transit across India</p>
                </div>

                {orderError && (
                  <div className="p-3 bg-rose-50 text-rose-700 border border-rose-200 rounded-xl text-xs font-bold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{orderError}</span>
                  </div>
                )}

                <form onSubmit={handlePlaceOrderSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-stone-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="customer_name"
                        required
                        value={checkoutData.customer_name}
                        onChange={handleInputChange}
                        placeholder="Shashwat Mishra"
                        className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl px-3.5 py-2.5 border border-stone-200 outline-none focus:border-amber-800"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-stone-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={checkoutData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl px-3.5 py-2.5 border border-stone-200 outline-none focus:border-amber-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-stone-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={checkoutData.email}
                      onChange={handleInputChange}
                      placeholder="shashwat@example.com"
                      className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl px-3.5 py-2.5 border border-stone-200 outline-none focus:border-amber-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-stone-700 mb-1">Shipping Street Address *</label>
                    <textarea
                      name="shipping_address"
                      required
                      rows="2"
                      value={checkoutData.shipping_address}
                      onChange={handleInputChange}
                      placeholder="House No, Building Name, Street / Colony Name"
                      className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl px-3.5 py-2.5 border border-stone-200 outline-none focus:border-amber-800"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-stone-700 mb-1">City / District *</label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={checkoutData.city}
                        onChange={handleInputChange}
                        placeholder="Jaipur / New Delhi"
                        className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl px-3.5 py-2.5 border border-stone-200 outline-none focus:border-amber-800"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-stone-700 mb-1">Pincode *</label>
                      <input
                        type="text"
                        name="pincode"
                        required
                        value={checkoutData.pincode}
                        onChange={handleInputChange}
                        placeholder="302001"
                        className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl px-3.5 py-2.5 border border-stone-200 outline-none focus:border-amber-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-stone-700 mb-2">Payment Method</label>
                    <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                      <label className={`p-3 rounded-xl border cursor-pointer flex items-center gap-2 ${checkoutData.payment_method === 'COD' ? 'border-amber-900 bg-amber-900/5 text-amber-950' : 'border-stone-200 text-stone-600'}`}>
                        <input type="radio" name="payment_method" value="COD" checked={checkoutData.payment_method === 'COD'} onChange={handleInputChange} />
                        <span>Cash on Delivery</span>
                      </label>
                      <label className={`p-3 rounded-xl border cursor-pointer flex items-center gap-2 ${checkoutData.payment_method === 'UPI' ? 'border-amber-900 bg-amber-900/5 text-amber-950' : 'border-stone-200 text-stone-600'}`}>
                        <input type="radio" name="payment_method" value="UPI" checked={checkoutData.payment_method === 'UPI'} onChange={handleInputChange} />
                        <span>UPI / PayTM / QR</span>
                      </label>
                    </div>
                  </div>

                  <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/80 flex items-center justify-between text-xs font-bold">
                    <span>Total Amount to Pay:</span>
                    <span className="text-lg font-mono font-extrabold text-amber-900">₹{finalTotal.toLocaleString('en-IN')}</span>
                  </div>

                  <button
                    type="submit"
                    disabled={placingOrder}
                    className="w-full py-4 bg-amber-900 hover:bg-stone-950 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <span>{placingOrder ? 'Processing Order...' : 'Confirm & Place Live Order'}</span>
                    {!placingOrder && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
              </>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
