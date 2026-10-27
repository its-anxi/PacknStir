// Animation utilities using GSAP (GreenSock)

export function animateNumbers(elements) {
  if (!window.gsap) return;
  elements.forEach(el => {
    const endVal = parseFloat(el.getAttribute('data-value')) || 0;
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';

    window.gsap.fromTo(el, 
      { textContent: 0 },
      {
        textContent: endVal,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        stagger: 0.2,
        onUpdate: function() {
          el.textContent = prefix + Math.floor(this.targets()[0].textContent).toLocaleString() + suffix;
        }
      }
    );
  });
}

export function pulseHighlight(element) {
  if (!window.gsap || !element) return;
  window.gsap.fromTo(element, 
    { scale: 0.95, boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.7)' },
    { scale: 1, boxShadow: '0 0 0 15px rgba(16, 185, 129, 0)', duration: 0.6, ease: 'power2.out' }
  );
}
