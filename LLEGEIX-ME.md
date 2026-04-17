# IES Calvià — Guia de manteniment del lloc web

## Estructura de fitxers

```
ies/
├── index.html              ← Pàgina d'inici
├── estudis.html            ← ESO, Batxillerat i FP
├── alumnes-families.html   ← Info per a famílies
├── centre.html             ← Qui som, contacte, departaments
├── secretaria.html         ← Tràmits administratius
├── projectes.html          ← Projectes del centre
├── calendari.html          ← Calendari escolar
├── erasmus.html            ← Programa Erasmus+
├── noticies.html           ← Totes les notícies
│
├── css/
│   └── style.css           ← TOTS els estils (colors, fonts, layout)
│
├── js/
│   └── main.js             ← JavaScript (menú, notícies, etc.)
│
└── data/
    ├── noticias.js         ← ⭐ EDITA AQUÍ les notícies
    └── contingut.js        ← ⭐ EDITA AQUÍ dades del centre
```

---

## Com afegir una notícia nova

1. Obre el fitxer `data/noticias.js`
2. Afegeix un nou objecte al principi de l'array `NOTICIES`:

```javascript
{
  id: 11,              // Número únic, incrementa sempre
  titol: "Títol de la notícia",
  data: "15/04/2025",  // Format DD/MM/AAAA
  categoria: "Centre", // ESO | Batxillerat | FP | Centre | Projectes | Erasmus+
  resum: "Text curt de 1-2 frases que resumeix la notícia.",
  url: "",             // Deixa buit "" si no hi ha enllaç extern
  destacada: false     // true = apareix primer a la pàgina d'inici
},
```

3. Guarda el fitxer. La notícia apareixerà automàticament a la web.

---

## Com canviar dades de contacte o del centre

Obre `data/contingut.js` i edita els camps corresponents:

- **Telèfon, email, adreça** → apartat `CENTRE`
- **Horari de secretaria** → apartat `horari_secretaria`
- **Equip directiu** → apartat `equip_directiu`
- **Xifres del centre** (alumnes, professors…) → apartat `xifres`

---

## Com canviar els colors de la web

Obre `css/style.css` i modifica les variables al bloc `:root` (primeres línies):

```css
:root {
  --color-primari:   #1a3a5c;  /* Color principal (capçalera, títols) */
  --color-secundari: #2980b9;  /* Blau de botons i accents */
  --color-accent:    #e8a838;  /* Daurat (botons destacats) */
  ...
}
```

---

## Com afegir un document PDF (secretaria, centre, etc.)

1. Col·loca el fitxer PDF a la carpeta `img/` (o crea una carpeta `docs/`)
2. Al fitxer HTML corresponent, canvia `href="#"` per la ruta del fitxer:

```html
<!-- Abans -->
<a href="#" class="btn btn-secundari">Descarregar PDF</a>

<!-- Després -->
<a href="docs/pec-2025.pdf" class="btn btn-secundari">Descarregar PDF</a>
```

---

## Com afegir el mapa de Google Maps

1. Ves a Google Maps i cerca l'adreça del centre
2. Fes clic a "Compartir" → "Inserir un mapa"
3. Copia el codi `<iframe ...>`
4. A `centre.html`, substitueix el bloc `<div class="mapa-contenidor">` per l'iframe

---

## Com publicar la web a internet

### Opció 1: Allotjament gratuït (GitHub Pages)
1. Crea un compte a [github.com](https://github.com)
2. Crea un repositori nou (per exemple: `ies-calvia-web`)
3. Puja tots els fitxers
4. Ves a Settings → Pages → Branch: main
5. La web estarà disponible a `https://[usuari].github.io/ies-calvia-web`

### Opció 2: Servidor propi / Hosting
Puja tots els fitxers via FTP al servidor del centre.
No cal cap configuració especial: és HTML estàtic pur.

---

## Preguntes freqüents

**P: He de saber programar per mantenir la web?**
R: No. Les tasques habituals (notícies, contacte, documents) s'fan editant els fitxers de `data/` que estan escrits com a llistes senzilles.

**P: Com provo els canvis localment?**
R: Obre el fitxer `index.html` directament al navegador (Chrome, Firefox…). No cal cap servidor.

**P: La web funciona sense internet?**
R: Sí, excepte la font de lletra (Inter de Google Fonts). Si vols que funcioni totalment sense internet, descarrega la font i allotja-la localment.

**P: Com afegeixo una pàgina nova?**
R: Copia qualsevol pàgina existent (p.ex. `secretaria.html`), canvia-li el nom, i modifica el contingut. Recorda afegir l'enllaç a la navegació en **TOTES** les pàgines existents.
