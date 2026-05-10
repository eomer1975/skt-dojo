import { pagine } from "./data/pagine.js";
import { caricaPaginaDaCodice, leggiCodicePaginaDaUrl } from "./engine/pagina-engine.js";
import { Pagina } from "./models/pagina.model.js";
import { html, nothing, render, TemplateResult } from "lit";
import { renderTemplateHome } from "./templates/home.js";
import { renderTemplateNinjaKids } from "./templates/ninja-kids.js";

type HistoryMode = "push" | "replace" | "none";
type TransitionName = "transition-fade" | "transition-zoom" | "transition-swipe";

const sfondiDisponibili = [
  "assets/sfondi/samurai01.png",
  "assets/sfondi/samurai02.png",
  "assets/sfondi/yamabushi01.png",
  "assets/sfondi/maestri.png"
];

let ultimoSfondoIndex = -1;
let sfondoRenderId = 0;
let ultimoTransitionIndex = -1;
let activeBgLayerIndex = 0;
let navLinks: HTMLAnchorElement[] = [];
const cacheSfondoPerCodice = new Map<string, string | null>();
const paginePerCodice = new Map(pagine.map((pagina) => [pagina.codice, pagina]));
const figliPerParent = new Map<number, Pagina[]>();

for (const pagina of pagine) {
  if (pagina.parent === null) {
    continue;
  }

  const figli = figliPerParent.get(pagina.parent) || [];
  figli.push(pagina);
  figliPerParent.set(pagina.parent, figli);
}

const pageRenderer = document.querySelector<HTMLElement>("#page-renderer");
const menuToggle = document.querySelector<HTMLInputElement>("#menu-toggle");
const navContainer = document.querySelector<HTMLElement>(".nav-links");
const bgLayers = Array.from(document.querySelectorAll<HTMLDivElement>(".bg-layer"));

function normalizzaSegmentiDuplicati(path: string): string {
  const segmenti = path.split("/").filter(Boolean);
  const compressi: string[] = [];

  for (const segmento of segmenti) {
    if (compressi[compressi.length - 1] !== segmento) {
      compressi.push(segmento);
    }
  }

  return compressi.length > 0 ? `/${compressi.join("/")}` : "/";
}

function normalizzaUrlIniziale(): void {
  const pathnameNormalizzato = normalizzaSegmentiDuplicati(window.location.pathname);

  if (pathnameNormalizzato === window.location.pathname) {
    return;
  }

  const prossimoUrl = `${pathnameNormalizzato}${window.location.search}${window.location.hash}`;
  window.history.replaceState(window.history.state, "", prossimoUrl);
}

normalizzaUrlIniziale();

const appRootUrl = new URL("../", import.meta.url);
const basePath = appRootUrl.pathname.replace(/\/$/, "");
const origin = window.location.origin;

const transizioni: TransitionName[] = [
  "transition-fade",
  "transition-zoom",
  "transition-swipe"
];

function normalizzaPathname(pathname: string): string {
  if (!basePath) {
    return pathname;
  }

  if (pathname === basePath || pathname === `${basePath}/`) {
    return "/";
  }

  if (pathname.startsWith(`${basePath}/`)) {
    return pathname.slice(basePath.length);
  }

  return pathname;
}

function creaPathPagina(codice: string): string {
  return new URL(codice, appRootUrl).pathname;
}

function creaPathAsset(path: string): string {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  if (path.startsWith("//")) {
    return `${window.location.protocol}${path}`;
  }

  if (path.startsWith("/")) {
    return new URL(path, origin).pathname;
  }

  const pathRelativo = path.replace(/^\//, "");
  return new URL(pathRelativo, appRootUrl).pathname;
}

function aggiornaRiferimentiMenu(): void {
  navLinks = navContainer
    ? Array.from(navContainer.querySelectorAll<HTMLAnchorElement>("a[href]"))
    : [];
}

function creaLinkMenu(pagina: Pagina): HTMLAnchorElement {
  const link = document.createElement("a");
  link.href = creaPathPagina(pagina.codice);
  link.textContent = pagina.titolo;
  link.classList.add("nav-link");
  return link;
}

function impostaStatoSottomenu(item: HTMLElement, isOpen: boolean): void {
  item.classList.toggle("is-open", isOpen);
  const link = item.querySelector<HTMLAnchorElement>(".nav-link--parent");
  if (link) {
    link.setAttribute("aria-expanded", String(isOpen));
  }
}

function preparaMenuConSottomenu(): void {
  if (!(navContainer instanceof HTMLElement)) {
    return;
  }

  for (const child of Array.from(navContainer.children)) {
    if (!(child instanceof HTMLAnchorElement)) {
      continue;
    }

    const href = child.getAttribute("href");
    if (!href) {
      continue;
    }

    const codice = leggiCodicePaginaDaUrl(href);
    const pagina = paginePerCodice.get(codice);
    if (!pagina) {
      child.classList.add("nav-link");
      continue;
    }

    child.href = creaPathPagina(pagina.codice);
    child.classList.add("nav-link");

    const figli = figliPerParent.get(pagina.id) || [];
    if (figli.length === 0) {
      continue;
    }

    const item = document.createElement("div");
    item.className = "nav-item nav-item--has-children";
    item.dataset.pageCode = pagina.codice;

    const parent = document.createElement("div");
    parent.className = "nav-parent";

    child.classList.add("nav-link--parent");
  child.setAttribute("aria-expanded", "false");

  const submenu = document.createElement("div");
    submenu.className = "nav-submenu";

    for (const figlio of figli) {
      const linkFiglio = creaLinkMenu(figlio);
      linkFiglio.classList.add("nav-sublink");
      submenu.append(linkFiglio);
    }

    navContainer.replaceChild(item, child);
    parent.append(child);
    item.append(parent, submenu);
  }

  aggiornaRiferimentiMenu();
}

function scegliSfondoRandom(): string {
  if (sfondiDisponibili.length === 0) {
    return "";
  }

  if (sfondiDisponibili.length === 1) {
    return sfondiDisponibili[0];
  }

  let prossimoIndex = Math.floor(Math.random() * sfondiDisponibili.length);
  while (prossimoIndex === ultimoSfondoIndex) {
    prossimoIndex = Math.floor(Math.random() * sfondiDisponibili.length);
  }

  ultimoSfondoIndex = prossimoIndex;
  return creaPathAsset(sfondiDisponibili[prossimoIndex]);
}

function scegliTransizioneRandom(): TransitionName {
  if (transizioni.length === 1) {
    return transizioni[0];
  }

  let prossimoIndex = Math.floor(Math.random() * transizioni.length);
  while (prossimoIndex === ultimoTransitionIndex) {
    prossimoIndex = Math.floor(Math.random() * transizioni.length);
  }

  ultimoTransitionIndex = prossimoIndex;
  return transizioni[prossimoIndex];
}

function applicaTransizioneSfondo(url: string): void {
  if (bgLayers.length < 2) {
    document.body.style.backgroundImage = `url('${url}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    return;
  }

  const outgoingLayer = bgLayers[activeBgLayerIndex];
  const incomingIndex = activeBgLayerIndex === 0 ? 1 : 0;
  const incomingLayer = bgLayers[incomingIndex];
  const classeTransizione = scegliTransizioneRandom();

  incomingLayer.style.backgroundImage = `url('${url}')`;
  incomingLayer.classList.remove("transition-fade", "transition-zoom", "transition-swipe", "is-entering");
  void incomingLayer.offsetWidth;
  incomingLayer.classList.add("is-active", "is-entering", classeTransizione);

  outgoingLayer.classList.remove("is-active");

  window.setTimeout(() => {
    incomingLayer.classList.remove("is-entering", classeTransizione);
  }, 1000);

  activeBgLayerIndex = incomingIndex;
}

function verificaEsistenzaImmagine(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

async function impostaSfondoPagina(codicePagina: string, fallback: string): Promise<void> {
  const renderIdCorrente = ++sfondoRenderId;
  const sfondiCodice = [
    creaPathAsset(`assets/sfondi/${codicePagina}.jpg`),
    creaPathAsset(`assets/sfondi/${codicePagina}.png`)
  ];

  let sfondoCodice = cacheSfondoPerCodice.get(codicePagina);
  if (sfondoCodice === undefined) {
    sfondoCodice = null;

    for (const candidato of sfondiCodice) {
      const esiste = await verificaEsistenzaImmagine(candidato);
      if (esiste) {
        sfondoCodice = candidato;
        break;
      }
    }

    cacheSfondoPerCodice.set(codicePagina, sfondoCodice);
  }

  if (renderIdCorrente !== sfondoRenderId) {
    return;
  }

  const sfondoFinale = sfondoCodice || creaPathAsset(fallback);
  applicaTransizioneSfondo(sfondoFinale);
}

function aggiornaLinkAttivo(codicePagina: string): void {
  const paginaAttiva = caricaPaginaDaCodice(codicePagina);
  const parentAttivo = paginaAttiva?.parent ?? null;

  for (const link of navLinks) {
    const href = link.getAttribute("href") || "";
    const linkCodice = leggiCodicePaginaDaUrl(normalizzaPathname(new URL(href, window.location.origin).pathname));
    const paginaLink = paginePerCodice.get(linkCodice);
    const isAttivo = linkCodice === codicePagina || paginaLink?.id === parentAttivo;
    const isCorrente = linkCodice === codicePagina;

    link.classList.toggle("is-active", isAttivo);
    if (isCorrente) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  }

  if (!(navContainer instanceof HTMLElement)) {
    return;
  }

  const gruppi = Array.from(navContainer.querySelectorAll<HTMLElement>(".nav-item--has-children"));
  for (const gruppo of gruppi) {
    const codiceGruppo = gruppo.dataset.pageCode || "";
    const paginaGruppo = paginePerCodice.get(codiceGruppo);
    const isRamoAttivo = codiceGruppo === codicePagina || paginaGruppo?.id === parentAttivo;

    gruppo.classList.toggle("is-active", isRamoAttivo);
    impostaStatoSottomenu(gruppo, false);
  }
}

function normalizzaParagrafi(testo: Pagina["testo"]): string[] {
  const paragrafi = Array.isArray(testo) ? testo : [testo];

  return paragrafi
    .map((paragrafo) => paragrafo.trim())
    .filter((paragrafo) => paragrafo.length > 0);
}

function renderElementiTemplate(elementi: Pagina["elementi"]): TemplateResult | typeof nothing {
  if (elementi.length === 0) {
    return nothing;
  }

  return html`
    <div class="hero-cards">
      ${elementi.map((elemento) => html`
        <article class="hero-card">
          <img src="${creaPathAsset(elemento.immagine)}" alt="${elemento.titolo}">
          <h2>${elemento.titolo}</h2>
          ${renderTestoElemento(elemento.testo)}
        </article>
      `)}
    </div>
  `;
}

function renderTestoElemento(testo: string | string[]): TemplateResult {
  if (Array.isArray(testo)) {
    return html`${testo.map((paragrafo) => html`<p>${paragrafo}</p>`)}`;
  }
  return html`<p>${testo}</p>`;
}

function renderTestoTemplate(testo: Pagina["testo"]): TemplateResult {
  const paragrafi = normalizzaParagrafi(testo);
  if (paragrafi.length === 0) {
    return html``;
  }

  return html`
    <div class="text-cards">
      ${paragrafi.map((paragrafo) => html`
        <article class="text-card">
          <p>${paragrafo}</p>
        </article>
      `)}
    </div>
  `;
}

function renderTemplateStandard(pagina: Pagina): TemplateResult {
  return html`
    <h1>${pagina.titolo}</h1>
    ${renderTestoTemplate(pagina.testo)}
    ${renderElementiTemplate(pagina.elementi)}
  `;
}

function renderTemplatePagina(pagina: Pagina): TemplateResult {
  if (pagina.template === "home") {
    return renderTemplateHome(pagina, creaPathAsset);
  }
  if (pagina.template === "ninja-kids") {
    return renderTemplateNinjaKids(pagina, creaPathAsset);
  }

  return renderTemplateStandard(pagina);
}

function renderTemplateNotFound(): TemplateResult {
  return html`
    <h1>Pagina non trovata</h1>
    <div class="text-cards">
      <article class="text-card">
        <p>Il codice pagina non esiste. Controlla l'URL.</p>
      </article>
    </div>
  `;
}

function renderPagina(pathname: string): { codice: string; trovata: boolean } {
  const codicePagina = leggiCodicePaginaDaUrl(normalizzaPathname(pathname));
  const pagina = caricaPaginaDaCodice(codicePagina);

  if (pageRenderer instanceof HTMLElement) {
    if (pagina) {
      render(renderTemplatePagina(pagina), pageRenderer);
    } else {
      render(renderTemplateNotFound(), pageRenderer);
    }
  }

  if (pagina) {
    const sfondoRandom = scegliSfondoRandom();
    const fallbackSfondo = sfondoRandom || pagina.immagineSfondo;
    void impostaSfondoPagina(codicePagina, fallbackSfondo);
    document.title = `${pagina.titolo} | SKT Dojo`;
  } else {
    sfondoRenderId++;
    if (bgLayers.length > 0) {
      bgLayers[0].style.backgroundImage = "none";
      bgLayers[1].style.backgroundImage = "none";
    } else {
      document.body.style.backgroundImage = "none";
    }
    document.title = "Pagina non trovata | SKT Dojo";
  }

  aggiornaLinkAttivo(codicePagina);
  return { codice: codicePagina, trovata: Boolean(pagina) };
}

function naviga(pathname: string, historyMode: HistoryMode = "push"): void {
  const { codice, trovata } = renderPagina(pathname);
  const prossimoPath = trovata ? creaPathPagina(codice) : pathname;

  if (historyMode === "push" && prossimoPath !== window.location.pathname) {
    window.history.pushState({ codice }, "", prossimoPath);
  }

  if (historyMode === "replace" && prossimoPath !== window.location.pathname) {
    window.history.replaceState({ codice }, "", prossimoPath);
  }

  if (menuToggle) {
    menuToggle.checked = false;
  }
}

preparaMenuConSottomenu();

if (navContainer) {
  navContainer.addEventListener("click", (event) => {
    const target = event.target instanceof HTMLElement ? event.target : null;
    if (!target) {
      return;
    }

    const link = target.closest<HTMLAnchorElement>("a[href]");
    if (!link || !navContainer.contains(link)) {
      return;
    }

    if (event.defaultPrevented || event.button !== 0) {
      return;
    }

    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    const href = link.getAttribute("href");
    if (!href) {
      return;
    }

    const url = new URL(href, origin);
    if (url.origin !== origin) {
      return;
    }

    event.preventDefault();
    naviga(url.pathname, "push");
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Node) || navContainer.contains(target)) {
      return;
    }

    for (const gruppo of Array.from(navContainer.querySelectorAll<HTMLElement>(".nav-item--has-children"))) {
      impostaStatoSottomenu(gruppo, false);
    }
  });
}

window.addEventListener("popstate", () => {
  naviga(window.location.pathname, "none");
});

if (window.location.pathname === "/") {
  naviga(creaPathPagina("home"), "replace");
} else {
  const pathCorrente = normalizzaPathname(window.location.pathname) === "/"
    ? creaPathPagina("home")
    : window.location.pathname;
  naviga(pathCorrente, "none");
}
