const WHATSAPP_NUMBER = "97470120012"; // Serve Ease Academy Qatar contact number.

window.addEventListener('load', () => {
  setTimeout(() => document.querySelector('.loader')?.classList.add('hide'), 700);
});

document.querySelector('.menu')?.addEventListener('click', () => {
  document.querySelector('.navlinks')?.classList.toggle('show');
});

document.querySelectorAll('.faq button').forEach(button => {
  button.addEventListener('click', () => button.parentElement.classList.toggle('open'));
});

// Animate homepage statistics from zero when they enter the viewport.
const countNodes = document.querySelectorAll('.count-up');
const runCounter = node => {
  if (node.dataset.started === 'true') return;
  node.dataset.started = 'true';
  const target = Number(node.dataset.target || 0);
  const duration = 1500;
  const start = performance.now();
  const tick = now => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    node.textContent = Math.floor(target * eased).toLocaleString();
    if (progress < 1) requestAnimationFrame(tick);
    else node.textContent = target.toLocaleString();
  };
  requestAnimationFrame(tick);
};
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });
  countNodes.forEach(node => observer.observe(node));
} else {
  countNodes.forEach(runCounter);
}

document.querySelectorAll('form[data-enquiry]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const message = [
      'Serve Ease Academy enquiry',
      `Name: ${data.get('name') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `WhatsApp: ${data.get('phone') || ''}`,
      `Country: ${data.get('country') || ''}`,
      `Course: ${data.get('course') || ''}`,
      `Preferred date: ${data.get('date') || ''}`,
      `Message: ${data.get('message') || ''}`
    ].join('\n');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
});
