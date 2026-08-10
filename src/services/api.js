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
  if (path.startsWith('/uploads/')) return `${BACKEND_BASE_URL}${path}`;
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
