/* Carrega parcials HTML (header, footer) de forma asíncrona.
   Exposa window.__includesReady (Promise) perquè main.js esperi. */
window.__includesReady = (async function () {
  if (document.readyState === 'loading') {
    await new Promise(r => document.addEventListener('DOMContentLoaded', r, { once: true }));
  }
  const els = [...document.querySelectorAll('[data-include]')];
  await Promise.all(els.map(async el => {
    try {
      const res = await fetch(el.dataset.include);
      if (res.ok) el.outerHTML = await res.text();
    } catch (_) {}
  }));
})();
