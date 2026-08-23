import React, { useState } from 'react';
import { X, User, Mail, Lock, Phone, ArrowRight, Check, AlertCircle } from 'lucide-react';
import { userRegister, userLogin } from '../../services/api';

export default function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMsg('');

    try {
      if (mode === 'register') {
        const res = await userRegister(formData);
        if (res.status === 'success') {
          setSuccessMsg('Account created successfully! Logging you in...');
          if (res.user) {
            localStorage.setItem('gga_user', JSON.stringify(res.user));
            if (onLoginSuccess) onLoginSuccess(res.user);
          }
          setTimeout(() => {
            onClose();
            setSuccessMsg('');
          }, 1500);
        } else {
          setError(res.message || 'Registration failed.');
        }
      } else {
        const res = await userLogin({ email: formData.email, password: formData.password });
        if (res.status === 'success') {
          setSuccessMsg('Welcome back! Signed in successfully.');
          if (res.user) {
            localStorage.setItem('gga_user', JSON.stringify(res.user));
            if (onLoginSuccess) onLoginSuccess(res.user);
          }
          setTimeout(() => {
            onClose();
            setSuccessMsg('');
          }, 1200);
        } else {
          setError(res.message || 'Invalid email or password.');
        }
      }
    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-md rounded-3xl border border-stone-200 shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 text-stone-500 hover:text-stone-900 hover:bg-stone-200 flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-1">
          <div className="w-12 h-12 rounded-2xl bg-amber-900/10 text-amber-900 flex items-center justify-center mx-auto text-xl font-serif">
            🪔
          </div>
          <h2 className="text-2xl font-serif font-bold text-stone-900">
            {mode === 'login' ? 'Welcome Back' : 'Create Customer Account'}
          </h2>
          <p className="text-xs text-stone-500 font-serif italic">
            {mode === 'login' ? 'Sign in to track orders & seamless checkout' : 'Join God Gift Arts family for exclusive devotional offers'}
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex bg-stone-100 p-1 rounded-2xl border border-stone-200">
          <button
            type="button"
            onClick={() => { setMode('login'); setError(''); setSuccessMsg(''); }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              mode === 'login' ? 'bg-amber-900 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => { setMode('register'); setError(''); setSuccessMsg(''); }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              mode === 'register' ? 'bg-amber-900 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            New Registration
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-3.5 bg-rose-50 text-rose-700 border border-rose-200 rounded-2xl text-xs font-bold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Success Alert */}
        {successMsg && (
          <div className="p-3.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-2xl text-xs font-bold flex items-center gap-2">
            <Check className="w-4 h-4 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Auth Form */}
        <form onSubmit={handleSubmit} class="space-y-4">
          {mode === 'register' && (
            <div className="space-y-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700">Full Name *</label>
              <div className="relative">
                <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Shashwat Mishra"
                  className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl pl-10 pr-4 py-3 border border-stone-200 outline-none focus:border-amber-800"
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700">Email Address *</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl pl-10 pr-4 py-3 border border-stone-200 outline-none focus:border-amber-800"
              />
            </div>
          </div>

          {mode === 'register' && (
            <div className="space-y-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700">Phone Number</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl pl-10 pr-4 py-3 border border-stone-200 outline-none focus:border-amber-800"
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700">Password *</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-stone-50 text-stone-900 text-xs font-bold rounded-xl pl-10 pr-4 py-3 border border-stone-200 outline-none focus:border-amber-800"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-amber-900 hover:bg-stone-950 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 mt-4 disabled:opacity-50"
          >
            <span>{loading ? 'Processing...' : (mode === 'login' ? 'Sign In Now' : 'Create Account')}</span>
            {!loading && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>
      </div>
    </div>
  );
}
