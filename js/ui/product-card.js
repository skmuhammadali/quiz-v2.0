import { cartStore } from '../store.js';
import Toast from './toast.js';

export function createProductCard(product) {
  const discountPercent = product.originalPrice ? 
    Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return `
    <div class="card p-6 group hover:-translate-y-1 transition-all duration-300">
      <div class="relative mb-4">
        <img 
          src="${product.images[0]}" 
          alt="${product.title}"
          class="w-full h-64 object-cover rounded-xl"
          loading="lazy"
        />
        ${product.badge ? `<span class="badge absolute top-3 left-3">${product.badge}</span>` : ''}
        ${discountPercent > 0 ? `<span class="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">${discountPercent}% OFF</span>` : ''}
      </div>
      
      <div class="space-y-3">
        <h3 class="font-display font-semibold text-lg text-text group-hover:text-maroon-400 transition-colors">
          ${product.title}
        </h3>
        
        <div class="flex items-center gap-2">
          <span class="text-gold-400 font-bold text-xl">₹${product.price.toLocaleString()}</span>
          ${product.originalPrice ? `<span class="text-muted line-through text-sm">₹${product.originalPrice.toLocaleString()}</span>` : ''}
        </div>
        
        <div class="flex gap-2">
          <a 
            href="/product.html?id=${product.id}" 
            class="flex-1 btn-secondary text-center"
          >
            View Details
          </a>
          <button 
            class="btn-primary add-to-cart-btn" 
            data-product-id="${product.id}"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
}

export function setupProductCardEvents() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
      const productId = e.target.dataset.productId;
      const product = window.PRODUCTS?.find(p => p.id === productId);
      
      if (product) {
        cartStore.addItem(product, 1);
        Toast.show(`${product.title} added to cart!`);
      }
    }
  });
}