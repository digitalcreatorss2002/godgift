import React, { useState, useEffect } from 'react';
import { 
  User, 
  Package, 
  MapPin, 
  LogOut, 
  Check, 
  AlertCircle, 
  ArrowRight, 
  Clock, 
  ShoppingBag, 
  Truck, 
  ShieldCheck,
  Edit2
} from 'lucide-react';
import { LotusJaaliPatternBackground } from '../components/common/BackgroundIllustrations';
import { fetchUserOrders, updateUserProfile } from '../services/api';

export default function ProfilePage({ currentUser, onLogout, onNavigate, onUpdateUser }) {
  const [activeTab, setActiveTab] = useState('orders'); // 'orders' | 'profile' | 'address'
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(false);

  // Profile Form State
  const [formData, setFormData] = useState({
    id: currentUser?.id || 0,
    name: currentUser?.name || '',
    email: currentUser?.email || '',
    phone: currentUser?.phone || '',
    address: currentUser?.address || '',
    city: currentUser?.city || '',
    pincode: currentUser?.pincode || ''
  });

  const [savingProfile, setSavingProfile] = useState(false);
  const [profileSuccess, setProfileSuccess] = useState('');
  const [profileError, setProfileError] = useState('');

  useEffect(() => {
    if (currentUser) {
      setFormData({
        id: currentUser.id || 0,
        name: currentUser.name || '',
        email: currentUser.email || '',
        phone: currentUser.phone || '',
        address: currentUser.address || '',
        city: currentUser.city || '',
        pincode: currentUser.pincode || ''
      });
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser?.email || currentUser?.phone) {
      setLoadingOrders(true);
      fetchUserOrders(currentUser.email, currentUser.phone).then(res => {
        setLoadingOrders(false);
        if (res && res.status === 'success' && Array.isArray(res.data)) {
          setOrders(res.data);
        }
      });
    }
  }, [currentUser]);

  const handleProfileChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setProfileSuccess('');
    setProfileError('');
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setSavingProfile(true);
    setProfileSuccess('');
    setProfileError('');

    const res = await updateUserProfile(formData);
    setSavingProfile(false);

    if (res.status === 'success') {
      setProfileSuccess('Profile updated successfully!');
      if (res.user) {
        localStorage.setItem('gga_user', JSON.stringify(res.user));
        if (onUpdateUser) onUpdateUser(res.user);
      }
    } else {
      setProfileError(res.message || 'Failed to update profile.');
    }
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-brand-bg py-20 px-4 text-center">
        <div className="max-w-md mx-auto bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
          <div className="w-16 h-16 bg-amber-900/10 text-amber-900 rounded-full flex items-center justify-center mx-auto text-2xl">👤</div>
          <h2 className="text-2xl font-serif font-bold text-stone-900">Customer Login Required</h2>
          <p className="text-xs text-stone-500">Sign in to view your orders, track shipments & manage account details.</p>
          <button
            onClick={() => onNavigate && onNavigate('home')}
            className="px-6 py-3 bg-amber-900 text-white font-bold text-xs uppercase rounded-xl shadow-md transition-all cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg pb-24">
      
      {/* Editorial Header Banner */}
      <div className="relative bg-[#FAF6F0] py-12 sm:py-16 border-b border-[#EADBCA] overflow-hidden">
        <LotusJaaliPatternBackground className="text-amber-900/10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-900/10 text-amber-900 text-xs font-bold uppercase tracking-widest border border-amber-900/20">
            <User className="w-3.5 h-3.5 text-amber-700" />
            <span>Devotee Customer Dashboard</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Welcome, {currentUser.name}
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto font-serif italic">
            Manage your personal profile, track recent devotional artifact orders & saved shipping preferences.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Sidebar */}
          <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-6">
            
            <div className="flex items-center gap-4 border-b border-stone-100 pb-6">
              <div className="w-14 h-14 rounded-2xl bg-amber-900 text-white font-serif font-bold text-2xl flex items-center justify-center shadow-md">
                {currentUser.name.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-serif font-bold text-stone-900 truncate">{currentUser.name}</h3>
                <p className="text-xs text-stone-500 truncate">{currentUser.email}</p>
                <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  Verified Customer
                </span>
              </div>
            </div>

            {/* Sidebar Tabs */}
            <nav className="space-y-1 text-xs font-bold">
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center justify-between p-3.5 rounded-2xl transition-all cursor-pointer ${
                  activeTab === 'orders' ? 'bg-amber-900 text-white shadow-sm' : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Package className="w-4 h-4" />
                  <span>My Orders History</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px]">{orders.length}</span>
              </button>

              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center justify-between p-3.5 rounded-2xl transition-all cursor-pointer ${
                  activeTab === 'profile' ? 'bg-amber-900 text-white shadow-sm' : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <User className="w-4 h-4" />
                  <span>Personal Profile</span>
                </div>
                <Edit2 className="w-3.5 h-3.5 opacity-60" />
              </button>

              <button
                onClick={() => setActiveTab('address')}
                className={`w-full flex items-center justify-between p-3.5 rounded-2xl transition-all cursor-pointer ${
                  activeTab === 'address' ? 'bg-amber-900 text-white shadow-sm' : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4" />
                  <span>Saved Delivery Address</span>
                </div>
              </button>
            </nav>

            <div className="pt-4 border-t border-stone-100">
              <button
                onClick={onLogout}
                className="w-full flex items-center justify-center gap-2 p-3 text-rose-700 hover:bg-rose-50 rounded-2xl text-xs font-bold transition-all cursor-pointer border border-rose-200"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out of Account</span>
              </button>
            </div>

          </div>

          {/* Right Tab Content */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* TAB 1: MY ORDERS */}
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                    <div>
                      <h2 className="text-xl font-serif font-bold text-stone-900">Your Orders History</h2>
                      <p className="text-xs text-stone-500">Track and review past divine artifact purchases</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-900 bg-amber-900/10 px-3 py-1 rounded-full border border-amber-900/20">
                      {orders.length} Total Orders
                    </span>
                  </div>

                  {loadingOrders ? (
                    <div className="text-center py-12 text-stone-500 text-xs font-bold">
                      Loading your order history from server...
                    </div>
                  ) : orders.length === 0 ? (
                    <div className="text-center py-12 space-y-4">
                      <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto text-2xl">📦</div>
                      <h4 className="text-lg font-serif font-bold text-stone-900">No Orders Found Yet</h4>
                      <p className="text-xs text-stone-500 max-w-sm mx-auto">
                        You haven't placed any devotional orders yet. Explore our handcrafted collection to place your first order.
                      </p>
                      <button
                        onClick={() => onNavigate && onNavigate('shop')}
                        className="px-6 py-3 bg-amber-900 text-white font-bold text-xs uppercase rounded-xl shadow-md cursor-pointer"
                      >
                        Start Shopping
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {orders.map((ord) => (
                        <div key={ord.id} className="bg-stone-50/80 p-6 rounded-2xl border border-stone-200/90 space-y-4">
                          
                          {/* Order Card Header */}
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-stone-200 pb-4">
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Order Reference</span>
                              <span className="text-base font-mono font-extrabold text-amber-900">{ord.order_number}</span>
                            </div>

                            <div className="flex items-center gap-3">
                              <span className="text-xs text-stone-500 font-medium">
                                {new Date(ord.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                              </span>
                              <span className={`text-[10px] font-extrabold uppercase px-3 py-1 rounded-full border ${
                                ord.order_status === 'delivered' ? 'bg-emerald-100 text-emerald-800 border-emerald-200' : 'bg-amber-100 text-amber-900 border-amber-200'
                              }`}>
                                {ord.order_status || 'Processing'}
                              </span>
                            </div>
                          </div>

                          {/* Order Items List */}
                          <div className="space-y-3">
                            {ord.items && ord.items.map((item) => (
                              <div key={item.id} className="flex items-center justify-between gap-4 text-xs">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 bg-amber-900/10 text-amber-900 rounded-lg flex items-center justify-center font-serif text-base shrink-0">🪔</div>
                                  <div>
                                    <span className="font-bold text-stone-900 block line-clamp-1">{item.product_name}</span>
                                    <span className="text-[11px] text-stone-500 font-mono">Qty: {item.quantity} &times; ₹{Number(item.price).toLocaleString('en-IN')}</span>
                                  </div>
                                </div>
                                <span className="font-bold font-mono text-stone-900">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                              </div>
                            ))}
                          </div>

                          {/* Order Summary Footer */}
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-stone-200 pt-3 gap-2 text-xs">
                            <div className="text-stone-600">
                              Payment: <span className="font-bold uppercase text-stone-900">{ord.payment_method || 'COD'}</span>
                            </div>
                            <div className="text-right">
                              Total Amount: <span className="text-sm font-bold font-mono text-amber-900">₹{Number(ord.total_amount).toLocaleString('en-IN')}</span>
                            </div>
                          </div>

                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            )}

            {/* TAB 2: PERSONAL PROFILE EDIT */}
            {(activeTab === 'profile' || activeTab === 'address') && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
                <div className="border-b border-stone-100 pb-4">
                  <h2 className="text-xl font-serif font-bold text-stone-900">Edit Personal Profile</h2>
                  <p className="text-xs text-stone-500">Update your name, contact phone & default shipping address</p>
                </div>

                {profileSuccess && (
                  <div className="p-3.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold flex items-center gap-2">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>{profileSuccess}</span>
                  </div>
                )}

                {profileError && (
                  <div className="p-3.5 bg-rose-50 text-rose-700 border border-rose-200 rounded-xl text-xs font-bold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{profileError}</span>
                  </div>
                )}

                <form onSubmit={handleSaveProfile} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleProfileChange}
                        className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl px-4 py-3 border border-stone-200 outline-none focus:border-amber-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleProfileChange}
                        className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl px-4 py-3 border border-stone-200 outline-none focus:border-amber-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">Email Address (Read Only)</label>
                    <input
                      type="email"
                      value={formData.email}
                      disabled
                      className="w-full bg-stone-100 text-stone-500 text-xs font-bold rounded-xl px-4 py-3 border border-stone-200 outline-none cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">Default Delivery Address</label>
                    <textarea
                      name="address"
                      rows="2"
                      value={formData.address}
                      onChange={handleProfileChange}
                      placeholder="House No, Street Name, Area"
                      className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl px-4 py-3 border border-stone-200 outline-none focus:border-amber-800"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleProfileChange}
                        placeholder="Jaipur"
                        className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl px-4 py-3 border border-stone-200 outline-none focus:border-amber-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">Pincode</label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleProfileChange}
                        placeholder="302001"
                        className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl px-4 py-3 border border-stone-200 outline-none focus:border-amber-800"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={savingProfile}
                    className="w-full sm:w-auto px-8 py-3.5 bg-amber-900 hover:bg-stone-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer disabled:opacity-50"
                  >
                    {savingProfile ? 'Saving Profile...' : 'Save Profile Changes'}
                  </button>
                </form>
              </div>
            )}

          </div>

        </div>
      </div>

    </div>
  );
}
