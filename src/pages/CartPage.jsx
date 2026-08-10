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
  Sparkles
} from 'lucide-react';
import { LotusJaaliPatternBackground } from '../components/common/BackgroundIllustrations';

export default function CartPage({ 
  cartItems = [], 
  onUpdateQuantity, 
  onRemoveItem, 
  onNavigate 
}) {
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');

  // Calculate totals
  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const totalSavings = cartItems.reduce((acc, item) => {
    const orig = item.product.originalPrice || item.product.price;
    return acc + ((orig - item.product.price) * item.quantity);
  }, 0);
  
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const shippingFee = subtotal > 999 || cartItems.length === 0 ? 0 : 99;
  const finalTotal = subtotal - discountAmount + shippingFee;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError('');
    const code = couponCode.trim().toUpperCase();

    if (code === 'DIVINE10' || code === 'GODGIFT10') {
      setDiscountPercent(10);
      setCouponApplied(true);
    } else if (code === 'FESTIVE15' || code === 'FIRST15') {
      setDiscountPercent(15);
      setCouponApplied(true);
    } else {
      setCouponError('Invalid promo code. Try DIVINE10 or FESTIVE15');
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

          <p className="text-stone-550 text-xs sm:text-sm font-serif italic max-w-lg mx-auto">
            Review your sacred artifacts before secure pan-India dispatch.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        
        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="bg-white rounded-3xl border border-stone-200 p-12 text-center max-w-2xl mx-auto space-y-5 shadow-xs">
            <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-amber-800">
              <ShoppingBag className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-serif font-bold text-stone-900">Your Cart is Currently Empty</h2>
              <p className="text-xs sm:text-sm text-stone-500 font-serif italic max-w-md mx-auto">
                You haven't added any handcrafted brass idols, oil paintings, or puja essentials to your cart yet.
              </p>
            </div>

            <button
              onClick={() => onNavigate && onNavigate('shop')}
              className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider rounded-2xl shadow-lg transition-all inline-flex items-center gap-2"
            >
              <span>Explore Devotional Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Cart Items & Summary Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Cart Items List */}
            <div className="lg:col-span-8 space-y-4">
              
              <div className="flex items-center justify-between border-b border-[#EADBCA] pb-3">
                <span className="text-sm font-serif font-bold text-stone-900">
                  Cart Items ({cartItems.reduce((s, i) => s + i.quantity, 0)})
                </span>
                <button
                  onClick={() => onNavigate && onNavigate('shop')}
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Continue Shopping</span>
                </button>
              </div>

              {/* Items Loop */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="bg-white rounded-3xl border border-stone-200/90 p-4 sm:p-6 shadow-2xs flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-between group hover:border-amber-800/30 transition-all"
                  >
                    {/* Item Image */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 space-y-1.5 text-center sm:text-left w-full">
                      <span className="text-[10px] font-bold text-amber-800 uppercase tracking-widest block">
                        {item.product.badge || 'Jaipur Artisan Artifact'}
                      </span>
                      <h3 className="text-base font-serif font-bold text-stone-900 leading-snug">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-stone-500 font-medium">
                        Material: {item.product.material || 'Solid Brass & Hardwood'}
                      </p>
                      
                      <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
                        <span className="text-base font-bold text-stone-900">
                          ₹{item.product.price.toLocaleString('en-IN')}
                        </span>
                        {item.product.originalPrice && (
                          <span className="text-xs text-stone-400 line-through">
                            ₹{item.product.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity Controls & Remove */}
                    <div className="flex sm:flex-col items-center justify-between sm:justify-center gap-4 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                      
                      {/* Quantity Controller */}
                      <div className="flex items-center bg-stone-100 rounded-xl p-1 border border-stone-200">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="p-1.5 hover:bg-white rounded-lg text-stone-700 transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-stone-900">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-white rounded-lg text-stone-700 transition-colors"
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
                          onClick={() => onRemoveItem(item.product.id)}
                          className="p-2 text-stone-400 hover:text-rose-600 rounded-xl hover:bg-rose-50 transition-colors"
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
                <form onSubmit={handleApplyCoupon} className="space-y-2">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                    Have a Promo Code?
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                      <input
                        type="text"
                        placeholder="DIVINE10 or FESTIVE15"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl pl-9 pr-3 py-2.5 border border-stone-200 focus:outline-none focus:border-primary uppercase"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2.5 bg-stone-900 hover:bg-stone-950 text-white text-xs font-bold uppercase rounded-xl transition-colors"
                    >
                      Apply
                    </button>
                  </div>

                  {couponApplied && (
                    <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      Promo code applied! ({discountPercent}% Off)
                    </span>
                  )}
                  {couponError && (
                    <span className="text-xs text-rose-600 font-medium block">
                      {couponError}
                    </span>
                  )}
                </form>

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

                  {couponApplied && (
                    <div className="flex justify-between text-emerald-700 font-semibold">
                      <span>Promo Discount ({discountPercent}%)</span>
                      <span>- ₹{discountAmount.toLocaleString('en-IN')}</span>
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
                    <span className="text-2xl font-serif font-bold text-primary">
                      ₹{finalTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="text-[11px] text-stone-400 block text-right font-medium">
                    Inclusive of all taxes & insurance
                  </span>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={() => alert("Connecting to checkout gateway... High-speed payment backend integrated soon!")}
                  className="w-full py-4 bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
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

    </div>
  );
}
