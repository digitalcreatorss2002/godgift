// API Service Layer for God Gift Arts PHP Backend & Production Vercel Deployment

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
    ? 'http://localhost/gga-backend/api' 
    : 'https://hrntechsolutions.com/gga-backend/api');

export const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL || 
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
    ? 'http://localhost/gga-backend' 
    : 'https://hrntechsolutions.com/gga-backend');

export function getImageSrc(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  if (path.startsWith('uploads/') || path.startsWith('/uploads/')) {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${BACKEND_BASE_URL}${cleanPath}`;
  }
  if (!path.startsWith('/')) return `/${path}`;
  return path;
}

export async function fetchProducts(params = {}) {
  try {
    const query = new URLSearchParams();
    if (params.category && params.category !== 'all') query.append('category', params.category);
    if (params.search) query.append('search', params.search);
    if (params.minPrice) query.append('min_price', params.minPrice);
    if (params.maxPrice) query.append('max_price', params.maxPrice);
    if (params.sort) query.append('sort', params.sort);
    if (params.id) query.append('id', params.id);
    if (params.slug) query.append('slug', params.slug);

    const res = await fetch(`${API_BASE_URL}/products.php?${query.toString()}`);
    if (!res.ok) throw new Error('Failed to fetch products');
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.warn('Backend API offline or unreachable. Falling back to local catalog data.', error);
    return null;
  }
}

export async function fetchProductById(id) {
  try {
    const res = await fetch(`${API_BASE_URL}/products.php?id=${id}`);
    if (!res.ok) throw new Error('Product not found');
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.warn('Backend API error fetching product ID:', id, error);
    return null;
  }
}

export async function fetchCategories() {
  try {
    const res = await fetch(`${API_BASE_URL}/categories.php`);
    if (!res.ok) throw new Error('Failed to fetch categories');
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.warn('Backend API error fetching categories:', error);
    return null;
  }
}

export async function fetchBestsellers(category = 'all') {
  try {
    const res = await fetch(`${API_BASE_URL}/bestsellers.php?category=${category}`);
    if (!res.ok) throw new Error('Failed to fetch bestsellers');
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.warn('Backend API error fetching bestsellers:', error);
    return null;
  }
}

export async function placeOrder(orderPayload) {
  try {
    const res = await fetch(`${API_BASE_URL}/place_order.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderPayload)
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error placing order:', error);
    return { status: 'error', message: error.message };
  }
}

export async function submitCorporateQuote(quotePayload) {
  try {
    const res = await fetch(`${API_BASE_URL}/corporate_quote.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(quotePayload)
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error submitting corporate quote:', error);
    return { status: 'error', message: error.message };
  }
}

export async function applyCouponAPI(code, subtotal) {
  try {
    const res = await fetch(`${API_BASE_URL}/apply_coupon.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, subtotal })
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error applying coupon:', error);
    return { status: 'error', message: 'Unable to validate coupon code at this time.' };
  }
}

export async function userRegister(userData) {
  try {
    const res = await fetch(`${API_BASE_URL}/user_register.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error registering user:', error);
    return { status: 'error', message: error.message };
  }
}

export async function userLogin(credentials) {
  try {
    const res = await fetch(`${API_BASE_URL}/user_login.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error logging in user:', error);
    return { status: 'error', message: error.message };
  }
}

export async function fetchUserOrders(email, phone) {
  try {
    const query = new URLSearchParams();
    if (email) query.append('email', email);
    if (phone) query.append('phone', phone);
    const res = await fetch(`${API_BASE_URL}/user_orders.php?${query.toString()}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching user orders:', error);
    return { status: 'error', message: error.message, data: [] };
  }
}

export async function updateUserProfile(profileData) {
  try {
    const res = await fetch(`${API_BASE_URL}/update_profile.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profileData)
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    return { status: 'error', message: error.message };
  }
}

export async function fetchHeroBanners() {
  try {
    const res = await fetch(`${API_BASE_URL}/hero_banners.php?t=${Date.now()}`);
    if (!res.ok) throw new Error('Failed to fetch hero banners');
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.warn('Backend API error fetching hero banners:', error);
    return null;
  }
}
export async function fetchCatalogues() {
  try {
    const res = await fetch(`${API_BASE_URL}/catalogues.php?t=${Date.now()}`);
    if (!res.ok) throw new Error('Failed to fetch catalogues');
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.warn('Backend API error fetching catalogues:', error);
    return null;
  }
}
export async function fetchNewArrivals(category = 'all') {
  try {
    const res = await fetch(`${API_BASE_URL}/new_arrivals.php?category=${category}&t=${Date.now()}`);
    if (!res.ok) throw new Error('Failed to fetch new arrivals');
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.warn('Backend API error fetching new arrivals:', error);
    return null;
  }
}

export async function fetchCollections() {
  try {
    const res = await fetch(`${API_BASE_URL}/collections.php?t=${Date.now()}`);
    if (!res.ok) throw new Error('Failed to fetch collections');
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.warn('Backend API error fetching collections:', error);
    return null;
  }
}

export async function fetchCollectionBySlug(slug) {
  try {
    const res = await fetch(`${API_BASE_URL}/collections.php?slug=${encodeURIComponent(slug)}&t=${Date.now()}`);
    if (!res.ok) throw new Error('Failed to fetch collection details');
    const data = await res.json();
    return data;
  } catch (error) {
    console.warn('Backend API error fetching collection by slug:', error);
    return null;
  }
}