export function setupAccordions() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('accordion-trigger')) {
      const trigger = e.target;
      const content = trigger.nextElementSibling;
      const icon = trigger.querySelector('.accordion-icon');
      
      const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
      
      if (isOpen) {
        content.style.maxHeight = '0px';
        content.style.opacity = '0';
        icon.style.transform = 'rotate(0deg)';
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = '1';
        icon.style.transform = 'rotate(180deg)';
        trigger.setAttribute('aria-expanded', 'true');
      }
    }
  });
}