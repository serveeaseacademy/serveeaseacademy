const WHATSAPP_NUMBER = "97470120012"; // Serve Ease Academy Qatar contact number.

const loader = document.querySelector('.loader');
const isHomePage = document.body?.querySelector('.count-up') !== null;

const loaderPercent = document.querySelector('.loader-percent');
if (loaderPercent) {
  const progressStart = performance.now();
  const animateLoaderPercent = now => {
    const progress = Math.min((now - progressStart) / 1250, 1);
    const eased = 1 - Math.pow(1 - progress, 2);
    loaderPercent.textContent = `${Math.round(eased * 100)}%`;
    if (progress < 1) requestAnimationFrame(animateLoaderPercent);
  };
  requestAnimationFrame(animateLoaderPercent);
}

// Keep the branded homepage intro visible long enough for the progress animation.
// Inner pages use the same short delay with a compact circular blue spinner.
window.addEventListener('load', () => {
  const minimumDisplay = isHomePage ? 1400 : 650;
  setTimeout(() => loader?.classList.add('hide'), minimumDisplay);
});

document.querySelector('.menu')?.addEventListener('click', () => {
  document.querySelector('.navlinks')?.classList.toggle('show');
});

document.querySelectorAll('.faq button').forEach(button => {
  button.addEventListener('click', () => button.parentElement.classList.toggle('open'));
});

// Homepage statistics count up automatically on page opening (not on scrolling).
const countNodes = document.querySelectorAll('.count-up');
const runCounter = node => {
  if (node.dataset.started === 'true') return;
  node.dataset.started = 'true';
  const target = Number(node.dataset.target || 0);
  const duration = 1900;
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
if (countNodes.length) {
  // Start on page load so visitors see 0 increasing to the final figure.
  window.addEventListener('DOMContentLoaded', () => {
    countNodes.forEach(node => {
      node.textContent = '0';
      runCounter(node);
    });
  }, { once: true });
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
