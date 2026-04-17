/**
 * ================================================================
 * NOTÍCIES — IES CALVIÀ
 * ================================================================
 * Per afegir una notícia nova, copia el bloc d'exemple i omple'l.
 * Les notícies es mostren de la més recent a la més antiga.
 *
 * CAMPS:
 *   id         → número únic (incrementa sempre)
 *   titol      → títol de la notícia
 *   data       → "DD/MM/AAAA"
 *   categoria  → "ESO" | "Batxillerat" | "FP" | "Centre" | "Projectes" | "Erasmus+"
 *   resum      → text curt (1-2 frases)
 *   imatge     → ruta de la imatge de capçalera (ex: "img/noticies/olimpiada.jpg")
 *                o "" per mostrar el color de la categoria
 *   url        → enllaç extern o "" si no n'hi ha
 *   destacada  → true (apareix primer i més gran) o false
 * ================================================================
 */

const NOTICIES = [
  {
    id: 10,
    titol: "Alumnes finalistes a l'Olimpíada de Llengua Catalana",
    data: "10/04/2025",
    categoria: "Centre",
    resum: "Dos alumnes del nostre institut han passat a la fase final de l'Olimpíada de Llengua Catalana. Enhorabona a ells i als seus professors!",
    imatge: "img/noticies/olimpiada-llengua.svg",
    url: "",
    destacada: true
  },
  {
    id: 9,
    titol: "Llistes d'admesos a FP de Grau Superior 2025-26",
    data: "04/04/2025",
    categoria: "FP",
    resum: "Ja estan publicades les llistes provisionals d'alumnes admesos als cicles formatius de grau superior per al curs 2025-26.",
    imatge: "img/noticies/fp-admesos.svg",
    url: "",
    destacada: true
  },
  {
    id: 8,
    titol: "Presentació de la revista escolar 'Son Pillo Exprés'",
    data: "28/03/2025",
    categoria: "Projectes",
    resum: "L'alumnat del centre ha presentat el primer número de la revista escolar 'Son Pillo Exprés'. Un projecte impulsat des del departament de llengua.",
    imatge: "img/noticies/revista-son-pillo.svg",
    url: "",
    destacada: false
  },
  {
    id: 7,
    titol: "Celebració del Dia de la Poesia al centre",
    data: "21/03/2025",
    categoria: "Centre",
    resum: "Amb motiu del Dia Mundial de la Poesia, els alumnes de ESO i Batxillerat han participat en diverses activitats culturals a les aules i als patis.",
    imatge: "",
    url: "",
    destacada: false
  },
  {
    id: 6,
    titol: "Nova oportunitat per obtenir certificats de FP sense escolarització",
    data: "15/03/2025",
    categoria: "FP",
    resum: "La Conselleria d'Educació obre una nova convocatòria d'exàmens lliures per a l'obtenció de certificats de professionalitat en cuina i restauració.",
    imatge: "",
    url: "",
    destacada: false
  },
  {
    id: 5,
    titol: "Activitats per al Dia de la Llengua Materna",
    data: "28/02/2025",
    categoria: "Projectes",
    resum: "La Comissió Lingüística del centre ha organitzat una setmana d'activitats per celebrar el Dia Internacional de la Llengua Materna.",
    imatge: "",
    url: "",
    destacada: false
  },
  {
    id: 4,
    titol: "El restaurant pedagògic obre les seves portes al públic",
    data: "10/02/2025",
    categoria: "FP",
    resum: "L'alumnat de cuina i restauració ha inaugurat la nova temporada del restaurant pedagògic. Podeu fer reserves trucant al centre.",
    imatge: "img/noticies/restaurant-pedagogic.svg",
    url: "",
    destacada: false
  },
  {
    id: 3,
    titol: "Viatge Erasmus+ a Portugal: crònica de l'intercanvi",
    data: "20/01/2025",
    categoria: "Erasmus+",
    resum: "Un grup d'alumnes ha participat en un intercanvi Erasmus+ a Lisboa. Compartim la seva experiència i les activitats realitzades durant la visita.",
    imatge: "img/noticies/erasmus-portugal.svg",
    url: "",
    destacada: false
  }
];
