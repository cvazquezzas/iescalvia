/* =============================================================
   IES CALVIÀ — JavaScript principal
   ============================================================= */

/* --- Navegació mòbil --- */
(function () {
  const hamburguesa = document.querySelector('.nav-hamburguesa');
  const menu = document.querySelector('.nav-menu');

  if (!hamburguesa || !menu) return;

  hamburguesa.addEventListener('click', () => {
    const obert = menu.classList.toggle('obert');
    hamburguesa.setAttribute('aria-expanded', obert);
    document.body.style.overflow = obert ? 'hidden' : '';
  });

  // Submenús en mòbil (clic en lloc de hover)
  document.querySelectorAll('.nav-item').forEach(item => {
    const link = item.querySelector('.nav-link');
    const sub  = item.querySelector('.submenu');
    if (!sub || !link) return;

    link.addEventListener('click', e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        sub.classList.toggle('obert');
      }
    });
  });

  // Tancar menú en redimensionar
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      menu.classList.remove('obert');
      document.body.style.overflow = '';
      document.querySelectorAll('.submenu').forEach(s => s.classList.remove('obert'));
    }
  });

  // Tancar menú en prémer Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      menu.classList.remove('obert');
      document.body.style.overflow = '';
    }
  });
})();

/* --- Marcar l'enllaç actiu de la nav --- */
(function () {
  const paginaActual = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href === paginaActual) {
      a.classList.add('actiu');
    }
  });
})();

/* --- Renderitzar notícies --- */
function renderitzarNoticies(contenidorId, maxItems, nomesDestacades) {
  const contenidor = document.getElementById(contenidorId);
  if (!contenidor || typeof NOTICIES === 'undefined') return;

  let noticies = [...NOTICIES].sort((a, b) => {
    const [da, ma, ya] = a.data.split('/').map(Number);
    const [db, mb, yb] = b.data.split('/').map(Number);
    return new Date(yb, mb - 1, db) - new Date(ya, ma - 1, da);
  });

  if (nomesDestacades) noticies = noticies.filter(n => n.destacada);
  if (maxItems) noticies = noticies.slice(0, maxItems);

  if (noticies.length === 0) {
    contenidor.innerHTML = '<p class="text-center" style="color:var(--color-text-suau)">No hi ha notícies disponibles.</p>';
    return;
  }

  contenidor.innerHTML = noticies.map(n => `
    <article class="noticia-card">
      <div class="noticia-cap-color"></div>
      <div class="noticia-cos">
        <div class="noticia-meta">
          <span class="noticia-categoria">${n.categoria}</span>
          <span class="noticia-data">📅 ${n.data}</span>
        </div>
        <h3>${n.titol}</h3>
        <p>${n.resum}</p>
        ${n.url ? `<a href="${n.url}" class="noticia-link" target="_blank" rel="noopener">Llegir més →</a>` : ''}
      </div>
    </article>
  `).join('');
}

/* --- Sistema de pestanyes (tabs) --- */
function inicialitzarTabs() {
  const botons = document.querySelectorAll('.tab-btn');
  const continguts = document.querySelectorAll('.tab-contingut');
  if (!botons.length) return;

  botons.forEach(btn => {
    btn.addEventListener('click', () => {
      botons.forEach(b => b.classList.remove('actiu'));
      continguts.forEach(c => c.classList.remove('actiu'));
      btn.classList.add('actiu');
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.add('actiu');
    });
  });
}

/* --- Renderitzar info de contacte des de contingut.js --- */
function renderitzarContacte(contenidorId) {
  const contenidor = document.getElementById(contenidorId);
  if (!contenidor || typeof CENTRE === 'undefined') return;

  const { adreca, telefon, email, horari_secretaria } = CENTRE;

  const horariHTML = horari_secretaria.map(h =>
    `<tr><td>${h.dia}</td><td><strong>${h.hores}</strong></td></tr>`
  ).join('');

  contenidor.innerHTML = `
    <div class="graella-2 graella-cards">
      <div class="card">
        <div class="card-cos">
          <div class="card-icona">📍</div>
          <h3>Adreça i telèfon</h3>
          <p>${adreca}</p>
          <p>📞 <a href="tel:${telefon.replace(/\s/g,'')}">${telefon}</a></p>
          <p>✉️ <a href="mailto:${email}">${email}</a></p>
        </div>
      </div>
      <div class="card">
        <div class="card-cos">
          <div class="card-icona">🕐</div>
          <h3>Horari de secretaria</h3>
          <div class="taula-responsive">
            <table><tbody>${horariHTML}</tbody></table>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* --- Renderitzar xifres des de contingut.js --- */
function renderitzarXifres(contenidorId) {
  const contenidor = document.getElementById(contenidorId);
  if (!contenidor || typeof CENTRE === 'undefined') return;

  contenidor.innerHTML = CENTRE.xifres.map(x => `
    <div class="xifra-item">
      <div class="numero">${x.numero}</div>
      <div class="descripcio">${x.descripcio}</div>
    </div>
  `).join('');
}

/* --- Inicialitzar en carregar --- */
document.addEventListener('DOMContentLoaded', () => {
  // Notícies pàgina d'inici (màx. 6, ordenades)
  renderitzarNoticies('noticies-inici', 6, false);

  // Notícies pàgina de notícies (totes)
  renderitzarNoticies('noticies-totes', null, false);

  // Xifres
  renderitzarXifres('xifres-contenidor');

  // Contacte
  renderitzarContacte('contacte-contenidor');

  // Tabs
  inicialitzarTabs();
});
