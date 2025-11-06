import { cartStore } from '../store.js';

class Header {
  constructor() {
    this.init();
  }

  init() {
    this.setupPromoBar();
    this.setupMobileMenu();
    this.setupCartCount();
    this.setupMegaMenu();
  }

  setupPromoBar() {
    const promoBar = document.getElementById('promo-bar');
    const closeBtn = document.getElementById('close-promo');
    
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        promoBar.style.display = 'none';
        localStorage.setItem('promo-dismissed', 'true');
      });
    }

    // Check if promo was previously dismissed
    if (localStorage.getItem('promo-dismissed') === 'true') {
      if (promoBar) promoBar.style.display = 'none';
    }
  }

  setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMobileMenu = document.getElementById('close-mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');

    const openMenu = () => {
      mobileMenu.classList.remove('translate-x-full');
      overlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      
      // Focus trap
      const firstFocusable = mobileMenu.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (firstFocusable) firstFocusable.focus();
    };

    const closeMenu = () => {
      mobileMenu.classList.add('translate-x-full');
      overlay.classList.add('hidden');
      document.body.style.overflow = '';
    };

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', openMenu);
    }

    if (closeMobileMenu) {
      closeMobileMenu.addEventListener('click', closeMenu);
    }

    if (overlay) {
      overlay.addEventListener('click', closeMenu);
    }

    // ESC key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.classList.contains('translate-x-full')) {
        closeMenu();
      }
    });
  }

  setupCartCount() {
    const updateCartCount = () => {
      const cartCounts = document.querySelectorAll('.cart-count');
      const count = cartStore.getItemCount();
      
      cartCounts.forEach(element => {
        element.textContent = count;
        element.style.display = count > 0 ? 'flex' : 'none';
        
        // Add bump animation
        if (count > 0) {
          element.classList.add('cart-bump');
          setTimeout(() => element.classList.remove('cart-bump'), 300);
        }
      });
    };

    // Initial update
    updateCartCount();

    // Subscribe to cart changes
    cartStore.subscribe(updateCartCount);
  }

  setupMegaMenu() {
    const megaMenuTrigger = document.getElementById('categories-menu');
    const megaMenu = document.getElementById('mega-menu');
    let timeout;

    if (megaMenuTrigger && megaMenu) {
      const showMenu = () => {
        clearTimeout(timeout);
        megaMenu.classList.remove('hidden');
        megaMenu.classList.add('fade-in');
      };

      const hideMenu = () => {
        timeout = setTimeout(() => {
          megaMenu.classList.add('hidden');
          megaMenu.classList.remove('fade-in');
        }, 150);
      };

      megaMenuTrigger.addEventListener('mouseenter', showMenu);
      megaMenuTrigger.addEventListener('mouseleave', hideMenu);
      megaMenu.addEventListener('mouseenter', showMenu);
      megaMenu.addEventListener('mouseleave', hideMenu);

      // Keyboard navigation
      megaMenuTrigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          showMenu();
        }
      });
    }
  }
}

export default Header;