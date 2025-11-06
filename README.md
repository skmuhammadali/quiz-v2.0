# Tara Adornments - Modern E-commerce Website

A modern, responsive e-commerce website for jewelry built with HTML5, Tailwind CSS, and vanilla JavaScript ES modules.

## 🎨 Design Features

- **Modern Maroon & Black Theme**: Professional color scheme with gold accents
- **Poppins Typography**: Clean, modern font pairing with display serif for headlines
- **Glassmorphism Effects**: Subtle backdrop blur and transparency
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Micro-interactions**: Hover effects, transitions, and cart animations

## 🛠️ Tech Stack

- **HTML5**: Semantic markup with ARIA accessibility
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **JavaScript ES Modules**: Modern, modular JavaScript architecture
- **LocalStorage**: Client-side cart persistence
- **Pexels Images**: High-quality placeholder images

## 📁 Project Structure

```
/
├── index.html              # Homepage
├── products.html           # Product catalog
├── product.html            # Product detail page
├── cart.html              # Shopping cart
├── about.html             # About page
├── contact.html           # Contact page
├── css/
│   ├── tailwind.css       # Source CSS
│   └── styles.css         # Built CSS
├── js/
│   ├── data.js            # Product data
│   ├── store.js           # Cart store
│   └── ui/                # UI components
│       ├── header.js      # Header functionality
│       ├── product-card.js # Product cards
│       ├── toast.js       # Toast notifications
│       ├── quantity.js    # Quantity selector
│       └── accordion.js   # Accordion components
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tara-adornments
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build Tailwind CSS**
   ```bash
   npm run build-css
   ```
   
   For development with watch mode:
   ```bash
   npm run build-css
   ```

4. **Start local server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## 🎯 Features

### E-commerce Functionality
- **Product Catalog**: Filterable and searchable product grid
- **Product Details**: Comprehensive product pages with image gallery
- **Shopping Cart**: Add/remove items with quantity management
- **Responsive Design**: Optimized for all screen sizes

### User Experience
- **Mega Menu**: Category navigation with hover effects
- **Mobile Menu**: Slide-over navigation with focus trapping
- **Toast Notifications**: User feedback for actions
- **Accordion Components**: Collapsible content sections

### Technical Features
- **ES Modules**: Modern JavaScript architecture
- **LocalStorage**: Persistent cart across sessions
- **SEO Optimized**: Meta tags, JSON-LD schema, sitemap ready
- **Accessibility**: ARIA labels, keyboard navigation, focus management

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:

```javascript
colors: {
  maroon: {
    900: '#3a0707',
    800: '#4a0a0a',
    700: '#6b0e0e',
    600: '#8b1717',
    500: '#a91f1f',
  },
  gold: {
    400: '#d4af37',
  },
  background: '#0f0b0b',
  text: '#ffffff',
  muted: '#e9e2df',
}
```

### Typography
- **Sans Serif**: Inter for body text
- **Display**: Playfair Display for headings

### Components
Reusable CSS components are defined in `css/tailwind.css`:
- `.btn-primary` - Primary buttons
- `.btn-secondary` - Secondary buttons
- `.card` - Card containers
- `.input` - Form inputs
- `.badge` - Product badges

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Build Commands

```bash
# Build CSS for production
npm run build

# Build CSS with watch mode for development
npm run build-css

# Start local development server
npm run dev
```

## 🌟 Key Pages

### Homepage (`index.html`)
- Hero section with featured product
- Featured products grid
- Newsletter signup

### Products (`products.html`)
- Filterable product catalog
- Search functionality
- Category filters

### Product Detail (`product.html`)
- Image gallery with thumbnails
- Product information and pricing
- Quantity selector and cart actions
- Collapsible product details

### Shopping Cart (`cart.html`)
- Cart item management
- Quantity updates
- Order summary
- Persistent storage

### About (`about.html`)
- Brand story and values
- Material information
- Care instructions

### Contact (`contact.html`)
- Contact form with validation
- Business information
- FAQ section with accordions

## 🎯 Performance

- **Optimized Images**: WebP format with lazy loading
- **Minimal JavaScript**: Vanilla JS with ES modules
- **CSS Optimization**: Tailwind CSS with purging
- **Local Storage**: Client-side cart persistence

## 📧 Contact

For questions or support, please contact:
- Email: hello@taraadornments.com
- Phone: +91 98765 43210

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.