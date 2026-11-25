const WHATSAPP_NUMBER = "97470120012";

// Reliable page loading: never leave an overlay covering the site if a remote
// font, image, or browser load event is delayed.
(() => {
  const loader = document.querySelector('.loader');
  if (!loader) return;
  const isHomePage = loader.classList.contains('home-loader');
  const percent = loader.querySelector('.loader-percent');
  const started = performance.now();
  let dismissed = false;
  const dismiss = () => {
    if (dismissed) return;
    dismissed = true;
    loader.classList.add('hide');
    window.setTimeout(() => loader.remove(), 500);
  };
  if (percent) {
    const animate = now => {
      const p = Math.min((now - started) / 1050, 1);
      percent.textContent = `${Math.round((1 - Math.pow(1 - p, 2)) * 100)}%`;
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }
  // Home: branded 0–100 intro. Inner pages: short blue circular transition.
  const delay = isHomePage ? 1250 : 420;
  window.setTimeout(dismiss, delay);
  window.addEventListener('load', () => window.setTimeout(dismiss, 100), { once: true });
  if (document.readyState === 'complete') window.setTimeout(dismiss, 100);
})();

// Mobile navigation.
document.querySelector('.menu')?.addEventListener('click', () => {
  document.querySelector('.navlinks')?.classList.toggle('show');
});

// FAQ accordion.
document.querySelectorAll('.faq button').forEach(button => {
  button.addEventListener('click', () => button.parentElement.classList.toggle('open'));
});

// Smooth count-up animation starts as soon as the homepage is ready.
(() => {
  const nodes = document.querySelectorAll('.count-up');
  if (!nodes.length) return;
  const run = node => {
    const target = Number(node.dataset.target || 0);
    const duration = 1850;
    const start = performance.now();
    node.textContent = '0';
    const tick = now => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      node.textContent = Math.floor(target * eased).toLocaleString('en-US');
      if (p < 1) requestAnimationFrame(tick);
      else node.textContent = target.toLocaleString('en-US');
    };
    requestAnimationFrame(tick);
  };
  const startCounters = () => nodes.forEach(run);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', startCounters, { once: true });
  else startCounters();
})();

// Enquiry forms open a pre-filled WhatsApp message.
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

// Blue cursor spotlight: subtle and restricted to desktop pointer devices.
(() => {
  const glow = document.querySelector('.cursor-glow');
  if (!glow || !window.matchMedia('(hover: hover) and (pointer: fine)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let tx = innerWidth / 2, ty = innerHeight / 2, x = tx, y = ty, active = false;
  window.addEventListener('mousemove', event => {
    tx = event.clientX; ty = event.clientY;
    if (!active) { x = tx; y = ty; active = true; glow.style.opacity = '1'; }
  }, { passive: true });
  window.addEventListener('mouseleave', () => { active = false; glow.style.opacity = '0'; });
  const move = () => {
    x += (tx - x) * .18; y += (ty - y) * .18;
    glow.style.transform = `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;
    requestAnimationFrame(move);
  };
  requestAnimationFrame(move);
})();

// Back-to-top appears as a normal floating action on every page.
document.querySelectorAll('.float-top').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
