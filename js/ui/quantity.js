export function createQuantitySelector(initialValue = 1, onChange = () => {}) {
  let quantity = initialValue;

  const updateQuantity = (newQuantity) => {
    if (newQuantity < 1) return;
    quantity = newQuantity;
    onChange(quantity);
    
    // Update display
    const display = document.querySelector('.quantity-display');
    if (display) display.textContent = quantity;
  };

  return {
    render: () => `
      <div class="flex items-center border border-subtle rounded-xl">
        <button 
          class="quantity-decrease px-4 py-2 hover:bg-maroon-900/30 transition-colors rounded-l-xl focus:outline-none focus:ring-2 focus:ring-maroon-500"
          ${quantity <= 1 ? 'disabled' : ''}
        >
          −
        </button>
        <span class="quantity-display px-4 py-2 min-w-[3rem] text-center">${quantity}</span>
        <button class="quantity-increase px-4 py-2 hover:bg-maroon-900/30 transition-colors rounded-r-xl focus:outline-none focus:ring-2 focus:ring-maroon-500">
          +
        </button>
      </div>
    `,
    
    bindEvents: () => {
      document.addEventListener('click', (e) => {
        if (e.target.classList.contains('quantity-decrease')) {
          updateQuantity(quantity - 1);
        } else if (e.target.classList.contains('quantity-increase')) {
          updateQuantity(quantity + 1);
        }
      });
    },
    
    getValue: () => quantity,
    setValue: (value) => updateQuantity(value)
  };
}